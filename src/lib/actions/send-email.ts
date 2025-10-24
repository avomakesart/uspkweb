"use server";

import { Resend } from "resend";

export const sendForm = async (prevState: any, formData: FormData) => {
  const data = {
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    motivation: formData.get("motivation") as string,
    course: formData.get("course") as string,
  };
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || "";
  const response = await fetch(SLACK_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      text: `${data.fullName} envio un mensaje en uspk.com.mx a traves del formulario de contacto.`,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `${data.fullName} envio un mensaje en uspk.com.mx a traves del formulario de contacto:`,
          },
        },
        {
          type: "section",
          block_id: "section-course",
          fields: [
            {
              type: "mrkdwn",
              text: `Nombre completo: ${data.fullName}`,
            },
            {
              type: "mrkdwn",
              text: `Email: ${data.email}`,
            },
            {
              type: "mrkdwn",
              text: `Telefono: ${data.phone}`,
            },
            {
              type: "mrkdwn",
              text: `Motivacion: ${data.motivation}`,
            },
            {
              type: "mrkdwn",
              text: `Curso: ${data.course}`,
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send message to Slack");
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY || "");
    const { data: resendData } = await resend.emails.send({
      from: "Uspk Web '–' Contact Form <noreply@updates.uspk.com.mx>",
      to: ["product@uspk.com.mx"],
      subject: "Nuevo mensaje desde el formulario de contacto",
      html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre completo:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Teléfono:</strong> ${data.phone}</p>
          <p><strong>Motivación:</strong> ${data.motivation}</p>
          <p><strong>Curso:</strong> ${data.course}</p>
        `,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }

  return { success: true };
};

export const sendNewsletter = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get("email") as string,
  };

  const registerDate = new Intl.DateTimeFormat("es-MX", {
    dateStyle: "long",
  }).format(new Date());

  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || "";
  const response = await fetch(SLACK_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      text: `Se recibio un nuevo registro en el newsletter.`,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Nuevo registro en el newsletter 📰 ✨`,
          },
        },
        {
          type: "section",
          block_id: "section-course",
          fields: [
            {
              type: "mrkdwn",
              text: `Correo electronico: ${data.email}`,
            },
            {
              type: "mrkdwn",
              text: `Fecha de registro: ${registerDate}`,
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send message to Slack");
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY || "");
    const { data: resendData } = await resend.emails.send({
      from: "Uspk Web Newsletter <noreply@updates.uspk.com.mx>",
      to: ["product@uspk.com.mx"],
      subject: "Nuevo registro al newsletter de uspk.com.mx",
      html: `
          <h2>Registro al newsletter</h2>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Fecha:</strong> ${registerDate}</p>
        `,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }

  return { success: true };
};


export const sendRegisterForm = async (prevState: any, formData: FormData) => {
  const data = {
    name: formData.get("name") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
  };
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || "";
  const response = await fetch(SLACK_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      text: `${data.name} ${data.lastName} envio un mensaje en uspk.com.mx a traves del formulario de contacto.`,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `${data.name} ${data.lastName} envio un mensaje en uspk.com.mx a traves del formulario de contacto:`,
          },
        },
        {
          type: "section",
          block_id: "section-course",
          fields: [
            {
              type: "mrkdwn",
              text: `Nombre completo: ${data.name} ${data.lastName}`,
            },
            {
              type: "mrkdwn",
              text: `Email: ${data.email}`,
            },
            {
              type: "mrkdwn",
              text: `Telefono: ${data.phone}`,
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send message to Slack");
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY || "");
    const { data: resendData } = await resend.emails.send({
      from: "Uspk Web '–' Contact Form <noreply@updates.uspk.com.mx>",
      to: ["product@uspk.com.mx"],
      subject: "Nuevo mensaje desde el formulario de contacto",
      html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre completo:</strong> ${data.name} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Teléfono:</strong> ${data.phone}</p>
        `,
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }

  return { success: true };
};