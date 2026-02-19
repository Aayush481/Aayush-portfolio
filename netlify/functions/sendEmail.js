// import nodemailer from "nodemailer";

// export async function handler(event) {
//   try {
//     const body = JSON.parse(event.body);

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: `"${body.name}" <${body.email}>`,
//       replyTo: body.email,
//       to: "aayush6b12@gmail.com",
//       subject: "New Contact Form Submission",
//       text: `
//         Name: ${body.name}
//         Email: ${body.email}
//         Service: ${body.service}
//         Budget: ${body.budget}
//         Idea: ${body.idea}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ success: true, message: "Email sent successfully" }),
//     };
//   } catch (err) {
//     console.error("Error sending email:", err);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: err.message }),
//     };
//   }
// }