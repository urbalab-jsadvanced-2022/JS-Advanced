const articulo = {
  userId: 20,
  title: 'Que bonita es la luna',
  body: 'La luna es un astro en el firmamento bla bla bla',
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(articulo),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
