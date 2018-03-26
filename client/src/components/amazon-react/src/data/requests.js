const DOMAIN = 'localhost:3000';
const API_PREFIX = '/api/v1';
const BASE_URL = `http://${DOMAIN}${API_PREFIX}`;

function getJWT() {
  return localStorage.getItem('jwt');
}


// HTTP REQUESTS

const Product = {
  all() {
    return fetch(`${BASE_URL}/products`, {
      headers: {
        Authorization: getJWT()
      }
    }).then(res => res.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/products/${id}`, {
      headers: {
        Authorization: getJWT()
      }
    }).then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/products`, {
      headers: {
        Authorization: getJWT(),
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

const Token = {
  create(params) {
    return fetch(`${BASE_URL}/tokens`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        return { error: 'Username and Password do not match' };
      }
    });
  }
};

const User = {
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: params })
    }).then(res => {
      if (res.status ===200) {
        return res.json();
      } else {
        return { error: 'Could not create the user'};
      }
    });
  }
}

export { Product, Token, User };
