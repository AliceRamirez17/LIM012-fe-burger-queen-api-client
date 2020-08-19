// GET //

export const getEmployees = (token) => {
    return fetch('http://localhost:3000/users', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        }
    })
    .then((response) => {
      switch (response.status) {
        case 200:
          return response.json();
        case 401:
          return Error('No hay cabecera de autenticación');
        case 403:
          return Error('El usuario loggeado no es admin');
        default:
          break;
      }
    })
}

// POST -> ADD //

export const addEmployee = (token, data) => {
    return fetch('http://localhost:3000/users', {
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
          return Error('You have not provided a valid email and or password');
        case 401:
          return Error('No hay cabecera de autenticación');
        case 403:
          return Error('El email ya se usó anteriormente');
        default:
          break;
      }
    })
}

// PUT -> EDIT //

export const editEmployee = (token, data) => {
  return fetch('http://localhost:3000/users', {
    method: 'PUT',
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
        return Error('You have not provided a valid email and or password');
      case 401:
        return Error('No hay cabecera de autenticación');
      case 403:
        return Error('El usuario loggeado no es admin o no es la misma usuaria');
      case 404:
        return Error('El usuario no existe');
      default:
        break;
    }
  })
}

// DELETE //

export const deleteEmployee = (token, id) => {
  return fetch(`http://localhost:3000/users/${id}`, {
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
  })
  .then((response) => {
    switch (response.status) {
      case 200:
        return response.json();
      case 401:
        return Error('No hay cabecera de autenticación');
      case 403:
        return Error('El usuario loggeado no es admin o no es la misma usuaria');
      case 404:
        return Error('El usuario no existe');
      default:
        break;
    }
  })
}
