import axios from 'axios';

import { GH_API_URL, PAGE_SIZE } from 'commons/contants';

export default {
  getRepos: ({user, page=0}) => axios.get(
    `/${GH_API_URL}/${user}/repos`,
    {params: {page, per_page: PAGE_SIZE}}
  )
}