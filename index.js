// Utilizando a biblioteca axios para fazer a requisição

const url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:o+alquimista';

get(url)
  .then(response => {
    const items = response.data.items;
    items.forEach(item => {
      console.log(item.volumeInfo.title);
      console.log(item.volumeInfo.authors);
      console.log(item.volumeInfo.description);
      console.log(item.volumeInfo.imageLinks.thumbnail);
    });
  })
  .catch(error => {
    console.error(error);
  });