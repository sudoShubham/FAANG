fetch("https://jsonplaceholder.typicode.com/Todos/1")
  .then((res) => {
    console.log(res);
    const data = res.json();
    return data;
  })
  .then((data) => {
    console.log(data);
    return fetch("https://jsonplaceholder.typicode.com/Todos/2");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
