import axios from 'axios';

const httpRequest = async (url, method, data) => {
  try {
    let response = await axios(url, {
      method,
      headers: {
        'content-type': 'application/json',
      },
      data: data && data,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const searchRequest = async (url, method, data, token) => {
  console.log('requesting...', url);
  try {
    let response = await axios(url, {
      method,
      headers: {
        'content-type': 'application/json',
      },
      data: data && data,
      cancelToken: token,
    });
    return response.data;
  } catch (err) {
    if (axios.isCancel(err)) {
      console.log('Request canceled...');
    }
    console.log(err);
  }
};

export {httpRequest, searchRequest};
