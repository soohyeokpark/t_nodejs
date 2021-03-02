var http = require('http');
var fs = require('fs');
var url = require('url');
var as = require('async');
const { Console } = require('console');

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathName = url.parse(_url, true).pathname;
    var title = queryData.id;    

    if(title === undefined) {
        title = 'welcome';
    }

    if (pathName === '/') {
        var fileName = title.toString().toLowerCase();
        var dynamicList = new String("");
        var dynamicContent = new String("");
        var template = new String("");

        fs.readdir('./data', function(err, fileList) {
            fileList.forEach(function(element) {
                if(element != 'welcome') {
                    dynamicList += `<li><a href="?id=${element}">${element}</a></li>`;
                }                
            });  
            
            fs.readFile(`./data/${fileName}`, 'utf8', function (err, content) {
                dynamicContent = content;
                template = `
                <!doctype html>
                <html>
                    <head>
                        <title>WEB1 - ${title}</title>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1><a href="/">WEB</a></h1>
                        <ol>${dynamicList}</ol>
                        <h2>${title}</h2>
                        <p>${dynamicContent}</p>
                    </body>
                </html>
                `;
                response.writeHead(200);
                response.end(template);
            });    
        });            
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
});
app.listen(3000);