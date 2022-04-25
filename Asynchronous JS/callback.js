const request = new XMLHttpRequest();

const getTodos = (callback) => {
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("URL NOT FOUND", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/Todos/");
  request.send();
};

console.log(1);
console.log(2);
getTodos((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
