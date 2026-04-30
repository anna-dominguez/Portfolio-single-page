import { mailOptions, transporter } from '@/config/nodemailer'

export async function POST(request) {
  try {
    const data = await request.json()
    const { name, email, message } = data

    if (!name || !email || !message) {
      return Response.json({ message: 'Missing required fields' }, { status: 400 })
    }

    await transporter.sendMail({
      ...mailOptions,
      subject: `[Portfolio] Message de ${name}`,
      text: message,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4EE1A0;">Nouveau message depuis le portfolio</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <hr style="border-color: #333;" />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json({ message: error.message }, { status: 500 })
  }
}
