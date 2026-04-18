import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DemoRequestPayload {
  name: string;
  email: string;
  phone?: string;
  restaurant_name: string;
  message?: string;
}

// Escape HTML to prevent XSS in email templates
function escapeHtml(unsafe: string): string {
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Basic input validation to prevent abuse of the public endpoint
function validatePayload(payload: any): { valid: true; data: DemoRequestPayload } | { valid: false; error: string } {
  if (!payload || typeof payload !== "object") {
    return { valid: false, error: "Invalid payload" };
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const restaurant_name = typeof payload.restaurant_name === "string" ? payload.restaurant_name.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : undefined;
  const message = typeof payload.message === "string" ? payload.message.trim() : undefined;

  if (!name || name.length > 100) return { valid: false, error: "Invalid name" };
  if (!email || email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: "Invalid email" };
  }
  if (!restaurant_name || restaurant_name.length > 100) return { valid: false, error: "Invalid restaurant_name" };
  if (phone && phone.length > 20) return { valid: false, error: "Invalid phone" };
  if (message && message.length > 1000) return { valid: false, error: "Invalid message" };

  return {
    valid: true,
    data: {
      name,
      email,
      restaurant_name,
      phone: phone || undefined,
      message: message || undefined,
    },
  };
}

const handler = async (req: Request): Promise<Response> => {
  console.log("send-demo-notification function called");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawPayload = await req.json();
    const validation = validatePayload(rawPayload);

    if (!validation.valid) {
      console.warn("Validation failed:", validation.error);
      return new Response(
        JSON.stringify({ error: "Invalid request" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const payload = validation.data;
    console.log("Payload validated:", { name: payload.name, email: payload.email });

    // Email to the admin/business owner
    const adminEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "ReservaBot <onboarding@resend.dev>",
        to: ["tu-email@ejemplo.com"], // Cambiar por email real del admin
        subject: `Nueva solicitud de demo: ${payload.restaurant_name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #1e3a8a;">Nueva solicitud de demo</h1>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>
              <p><strong>Restaurante:</strong> ${escapeHtml(payload.restaurant_name)}</p>
              <p><strong>Email:</strong> <a href="mailto:${encodeURIComponent(payload.email)}">${escapeHtml(payload.email)}</a></p>
              ${payload.phone ? `<p><strong>Teléfono:</strong> <a href="tel:${encodeURIComponent(payload.phone)}">${escapeHtml(payload.phone)}</a></p>` : ""}
              ${payload.message ? `<p><strong>Mensaje:</strong> ${escapeHtml(payload.message)}</p>` : ""}
            </div>
            <p style="color: #64748b; font-size: 14px;">Enviado desde el formulario de ReservaBot</p>
          </div>
        `,
      }),
    });

    if (!adminEmailRes.ok) {
      const errorData = await adminEmailRes.text();
      console.error("Admin email error:", errorData);
    } else {
      console.log("Admin email sent successfully");
    }

    // Confirmation email to the client
    const clientEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "ReservaBot <onboarding@resend.dev>",
        to: [payload.email],
        subject: "¡Hemos recibido tu solicitud de demo!",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0;">¡Gracias, ${escapeHtml(payload.name)}!</h1>
            </div>
            <div style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
              <p style="font-size: 16px; color: #334155;">
                Hemos recibido tu solicitud de demo para <strong>${escapeHtml(payload.restaurant_name)}</strong>.
              </p>
              <p style="font-size: 16px; color: #334155;">
                Nuestro equipo se pondrá en contacto contigo <strong>en menos de 24 horas</strong> para agendar una demostración personalizada.
              </p>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #1e3a8a; margin-top: 0;">¿Qué incluye la demo?</h3>
                <ul style="color: #64748b; padding-left: 20px;">
                  <li>Configuración personalizada para tu restaurante</li>
                  <li>Demostración del chatbot en tiempo real</li>
                  <li>Resolución de todas tus dudas</li>
                  <li>Propuesta adaptada a tus necesidades</li>
                </ul>
              </div>
              <p style="color: #64748b; font-size: 14px;">
                Si tienes alguna pregunta urgente, puedes escribirnos por WhatsApp.
              </p>
            </div>
            <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 20px;">
              © ReservaBot - Automatiza tus reservas por WhatsApp
            </p>
          </div>
        `,
      }),
    });

    if (!clientEmailRes.ok) {
      const errorData = await clientEmailRes.text();
      console.error("Client email error:", errorData);
    } else {
      console.log("Client email sent successfully");
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-demo-notification:", error?.message || error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
