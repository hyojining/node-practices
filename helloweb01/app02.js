var http = require('http');
var fs = require('fs'); // Node.js의 fs(파일 시스템) 모듈 가져오기

var server = http.createServer(function(req, res) {
    console.log(req.url);

    //요청 URL이 '/' (루트)인 경우, 요청 URL을 '/index.html'로 변경
    if(req.url === '/') {
        req.url = '/index.html';
    }

    // 파일을 읽기
    // __dirname: 현재 스크립트 파일이 있는 디렉토리의 경로
    // 따라서 파일은 '/public' 디렉토리 내에서 찾는다.
    // data에 파일 내용이 포함
    fs.readFile(__dirname + "/public" + req.url, function(error, data){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(data); // HTTP 응답의 본문을 파일의 내용(data)으로 설정하고 응답을 종료
    });
});

server.listen(9090, function(){
    console.log('server starts...[9090]');
});