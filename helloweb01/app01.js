var http = require('http'); // Node.js의 http 모듈 가져오기

// HTTP 서버를 만들기
// HTTP 요청(req) 및 HTTP 응답(res) 객체를 매개변수로 받는다.
var server = http.createServer(function(req, res) {
    // HTTP 응답 헤더 설정
    // 상태 코드 200 (성공)
    // 'text/html': HTML 형식의 데이터
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end('<h1>Hello World</h1>'); // HTTP 응답의 본문을 생성하고 응답을 종료
});

// 서버를 9090 포트에서 시작
server.listen(9090, function(){
    console.log('server starts...[9090]');
});