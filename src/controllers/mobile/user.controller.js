import { sendPinWhatsApp } from '#helpers/sendMessage.js'
import { getUserByCustomerId } from '#services/mobile/user.services.js'
import { request, response } from 'express'

const sendPin = async (req = request, res = response) => {
  const { customer_id } = req.body // eslint-disable-line
  console.log('first')
  try {
    const usuario = await getUserByCustomerId(customer_id) // eslint-disable-line
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario no encontrdo'
      })
    }
    const { pin, Customer: { cellphone } } = usuario
    await sendPinWhatsApp(cellphone, pin)
    res.status(200)
      .json({
        state: true,
        msg: 'successful'
      })
  } catch (error) {
    res.status(error?.status || 500)
      .json({
        state: false,
        data: {
          error: error?.message || error
        },
        msg: 'faild'
      })
  }
}

export default {
  sendPin
}
