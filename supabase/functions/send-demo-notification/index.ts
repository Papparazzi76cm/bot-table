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

const handler = async (req: Request): Promise<Response> => {
  console.log("send-demo-notification function called");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: DemoRequestPayload = await req.json();
    console.log("Received payload:", { name: payload.name, email: payload.email, restaurant: payload.restaurant_name });

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
              <p><strong>Nombre:</strong> ${payload.name}</p>
              <p><strong>Restaurante:</strong> ${payload.restaurant_name}</p>
              <p><strong>Email:</strong> <a href="mailto:${payload.email}">${payload.email}</a></p>
              ${payload.phone ? `<p><strong>Teléfono:</strong> <a href="tel:${payload.phone}">${payload.phone}</a></p>` : ""}
              ${payload.message ? `<p><strong>Mensaje:</strong> ${payload.message}</p>` : ""}
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
              <h1 style="color: white; margin: 0;">¡Gracias, ${payload.name}!</h1>
            </div>
            <div style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
              <p style="font-size: 16px; color: #334155;">
                Hemos recibido tu solicitud de demo para <strong>${payload.restaurant_name}</strong>.
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
    console.error("Error in send-demo-notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
