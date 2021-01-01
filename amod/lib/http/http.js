const http = require('https');
const options = {};

const setOptions = (serverName, authHeader, port) => {
  options = {
    hostname: serverName,
    port: port || null,
    headers: {
      authorization: authHeader
    }
  }
}

const get = (path) => {
  options.method = 'GET';
  options.path = path;
  let req = http.request(options, function (res) {
    let chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      let body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });
  req.end();
}


const post = (path, data) => {
  options.method = 'POST';
  options.path = path;
  let req = http.request(options, function (res) {
    let chunks = [];
  
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
  
    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });
  
  req.write(JSON.stringify(data));
  req.end();
}
