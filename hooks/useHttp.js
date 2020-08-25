import React from 'react';

const useHttp = async (url, method, body) => {
  try {
    let response = await fetch(url, {
      method,
      headers: {
        'content-type': 'application/json',
      },
      body: body && JSON.stringify(body),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export default useHttp;
