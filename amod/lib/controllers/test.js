var http = require("https");

exports.apiTestFunction = () => {
    var options = {
        "method": "GET",
        "hostname": "sandbox-api-ca.metrc.com",
        "port": null,
        "path": "/transfers/v1/incoming?licenseNumber=M10-0000004-LIC&lastModifiedStart=2020-08-18T06%3A30%3A00Z&lastModifiedEnd=2020-08-18T17%3A30%3A00Z",
        "headers": {
            "authorization": "Basic eTUxZ1hZS1kyenFlaVdYRmg4akFKT2FEdE9EMVZmYWJDZFd2bEdwUTNFdEdxQkhkOkZ1c1ZiZTRZdjZXMURHTnV4S05oQnlYVTZSTzZqU1VQY2JSQ29SREQ5OFZOWGM0RA==",
            "cache-control": "no-cache",
            "postman-token": "c68b8603-b826-bb3c-2cb3-f33e80152479"
        }
    };

    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });

    req.end();
}