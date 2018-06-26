import axios from 'axios';

import { GH_API_URL } from 'commons/contants';

export default {
  getUser: user => axios.get(`${GH_API_URL}/users/${user}`)
}