// GET //

export const getProducts = (token) => {
    return fetch('http://localhost:3000/products', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        }
    })
    .then(response => (response.json()))
}

// POST -> ADD //

export const addProduct = (token, data) => {
  return fetch('http://localhost:3000/product', {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
  })
  .then((response) => {
    switch (response.status) {
      case 200:
        return response.json();
      case 400:
        return Error('No ingresó `name` o `price`');
      case 401:
        return Error('No hay cabecera de autenticación');
      case 403:
        return Error('El usuario loggeado no es admin');
      case 404:
        return Error('El producto no tiene ID');
      default:
        break;
    }
  })
}