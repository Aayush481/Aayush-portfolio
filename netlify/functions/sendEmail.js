import emailjs from "@emailjs/browser";

export async function handler(event) {
  const body = JSON.parse(event.body);

  try {
    await emailjs.send(
      process.env.VITE_SERVICE_ID,
      process.env.VITE_TEMPLATE_ID,
      {
        name: body.name,
        email: body.email,
        service: body.service,
        budget: body.budget,
        idea: body.idea,
      },
      process.env.VITE_PUBLIC_ID
    );

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