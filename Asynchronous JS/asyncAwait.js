const getSomething = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/Todos/1");
  if (response.status !== 200) {
    throw new Error("wrong request url");
  }
  const data = await response.json();
  return data;
};

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error 404", err.message);
  });
