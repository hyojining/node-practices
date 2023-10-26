module.exports = { // 현재 모듈에서 새로운 변수와 함수를 정의하여 내보내기
    PI: 3.14,
    min: function(){
        var min = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            if(e < min) {
                min = e;
            }
        });
        return min;
    },
    max: function(){
        var max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            if(e > max) {
                max = e;
            }
        });
        return max;
    }
}

// 에러 (exports 객체를 직접 사용할 때에는 module.exports와 충돌할 수 있음)
// exports.a = 10;