// GET //

export const getOrders = (token) => {
    return fetch('http://localhost:3000/orders', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        }
    })
    .then(response => (response.json()))
}