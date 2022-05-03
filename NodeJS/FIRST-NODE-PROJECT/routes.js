const fs = require("fs");

function requestHandler(req, res) {
  //   console.log(req.url, req.method, req.headers);
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write(
      "<body><form action='/message' method='POST' ><input type = 'text' name = 'message'> <button>Submit</button> </form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
}

module.exports = requestHandler;
