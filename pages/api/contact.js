import { mailOptions, transporter } from '@/config/nodemailer'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body

    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: 'Bad request' })
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.name,
        text: data.message,
        html: `<p>${data.message}</p><h3>Name: ${data.name}</h3><h3>Email: ${data.email}</h3>`,
      })
      return res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message })
    }
  }
}

export default handler
