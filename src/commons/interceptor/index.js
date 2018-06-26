import axios from 'axios';
import pageParser from 'github-pagination';

const responseInterceptor = () => {
  axios.interceptors.response.use(
    response => {
      const {headers: {link}} = response;
      const {data} = response;

      if(!!link) {
        const parsedPage = pageParser.parser(link);
        return {
          ...response,
          data: {numberOfPages: +parsedPage.last, items: data}
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