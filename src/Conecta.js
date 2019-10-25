import axios from 'axios'

const Conecta = axios.create({baseURL: 'https://api.sheety.co/'})

export default Conecta
