import axios from 'axios';

class RestServices {
  axiosInstance = null;

  constructor() {
    this.axiosInstance = axios.create({});

    this.axiosInstance.interceptors.request.use(
      (req) => {
        // Do something with request payload
        return req;
      },
      (error) => {
        // Do something with request error
        return Promise.reject(error);
      }
    );
  }

  /**
   * @param {string} url
   */
  getRequest(url) {
    return this.axiosInstance.get(url);
  }
}

let instance = null;

if (!instance) {
  instance = new RestServices();
}

export default instance;
