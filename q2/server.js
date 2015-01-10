var http = require("http"), // easy use of Node's HTTP API
    url = require("url"), // utilities for URL resolution and parsing
    path = require("path"), // utilities for handling and transforming filepaths
    fs = require("fs") //File System utilities for I/O, ensures POSIX happiness
    port = process.argv[2] || 3000; //process.argv = array of command line arguments

http.createServer(function(req, res) {

  var uri = url.parse(req.url).pathname
    , filename = path.join(process.cwd(), uri);

  fs.exists(filename, function(exists) { //changed from path.exists per comment on the gist page... but why? it appears that node changed it itself
    if(!exists) {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("404 Not Found\n");
      res.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, "binary", function(err, file) {
      if(err) {
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.write(err + "\n");
        res.end();
        return;
      }

      res.writeHead(200);
      res.write(file, "binary");
      res.end();
    });
  });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
