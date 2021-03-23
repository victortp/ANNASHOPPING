import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Anaid',
    email: 'anaidmdiazplaza@gmail.com',
    password: bcrypt.hashSync('anaid', 10),
    phone: 12,
    isAdmin: true,
  },
  {
    name: 'Carlitos',
    email: 'carlitosdiazplaza@gmail.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },

]

export default users
