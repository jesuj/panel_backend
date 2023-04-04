import jsonwebtoken from 'jsonwebtoken'

const generateJWT = (uid = '', cid = '', rol_id = '') => { // eslint-disable-line
  const { sign } = jsonwebtoken
  return new Promise((resolve, reject) => {
    const payload = { uid, cid, rol_id } // eslint-disable-line
    sign(payload, process.env.SECRETKEY, {
      expiresIn: '365d'
      // expiresIn: 300
    }, (err, token) => {
      if (err) {
        console.log(err)
        reject('No se pudo generar el token') // eslint-disable-line
      } else {
        resolve(token)
      }
    })
  })
}

export default generateJWT
