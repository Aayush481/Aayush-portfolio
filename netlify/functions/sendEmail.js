import fetch from "node-fetch";

export async function handler(event) {
  const body = JSON.parse(event.body);

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.VITE_SERVICE_ID,
        template_id: process.env.VITE_TEMPLATE_ID,
        user_id: process.env.VITE_PUBLIC_ID,
        template_params: {
          name: body.name,
          email: body.email,
          service: body.service,
          budget: body.budget,
          idea: body.idea,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`EmailJS error: ${response.statusText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}