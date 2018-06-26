import axios from 'axios';
import pageParser from 'github-pagination';

const responseInterceptor = () => {
  axios.interceptors.response.use(
    response => {
      const {headers: {link}} = response;
      const {data} = response;

      if(!!link) {
        const {last, prev} = pageParser.parser(link);

        const numberOfPages = +(!last ? +prev + 1 : last);
        
        return {
          ...response,
          data: {numberOfPages, items: data}
        };
      }
      return response;
    },
    error => Promise.reject(error)
  );
};

export default () => {
  responseInterceptor();
};