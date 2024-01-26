import jwt from 'jsonwebtoken';
const secretKey = process.env.SECRET_JWT as string;
/* const payload = { userId: '12345', username: 'usuarioEjemplo' };
const token = jwt.sign(payload, secretKey);

console.log('Token:', token,"secret:",secretKey);

// Ejemplo de verificación de un token
try {
  const decoded = jwt.verify(token, secretKey);
  console.log('Decoded:', decoded);
  Res.sendStatus(420);
} catch (error:any) {
  Res.sendStatus(401);
  console.error('Error al verificar el token:', error.message);
} */
