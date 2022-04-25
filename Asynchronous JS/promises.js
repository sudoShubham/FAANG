/*
const getSomething = () => {
  return new Promise((resolve, reject) => {
    resolve("some data");
    // reject("Error 404");
  });
};

getSomething().then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

const getSomething = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("404 Error");
      }
    });
    request.open("GET", url);
    request.send();
  });
};

getSomething("https://jsonplaceholder.typicode.com/Todos/1")
  .then((data) => {
    console.log(data);
    return getSomething("https://jsonplaceholder.typicode.com/Todos/2");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
