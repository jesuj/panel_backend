import twilio from 'twilio'

export const sendPinWhatsApp = async (numberPhone, pin) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken = process.env.TWILIO_AUTH_TOKEN
  const phoneSender = process.env.PHONE_SENDER
  const client = twilio(accountSid, authToken)
  const message = await client.messages.create({
    body: `Su pin de validacion es: ${pin}`,
    from: `whatsapp:${phoneSender}`,
    to: `whatsapp:${numberPhone}`
  })
  console.log(message.sid)
}
