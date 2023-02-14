// API 호출 진행 상태
var requestState = false;
function requestProgress(urlStr, reqType, formData, callback, option) {
    if(requestState){
        // API 호출 진행 중인 경우 대기
        setTimeout(function(){
            requestProgress(urlStr, reqType, formData, callback, option);
        }, 500);
        return;
    }
    // API 호출 시작 시 진행 상태 변경
    requestState = true;
    // 헤더 값 세팅
    var headers = {
        "Accept": "*/*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    };
    $.ajax({
        url: urlStr,
        data: formData,
        type: reqType,
        headers: headers,
        async: true,
        xhrFields: {
            withCredentials: true
        },
        success: function (res) {
            if (typeof callback === 'function') {
                callback(res, formData);
                return true;
            }
            return res;
        },
        error: function (request, status, error) {
            if (typeof callback === 'function') {
                callback("");
                return error;
            }
            return "";
        },
        complete: function () {
            // API 호출 종료 시 진행 상태 변경
            requestState = false;
        }
    });
}