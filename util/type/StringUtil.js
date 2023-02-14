/* 값이 null, 빈값 undefined 인경우 true를 반환한다. */
function fn_isEmptyCheck(str) {
    var returnVal = true;
    if (str !== null && str !== "" && typeof str !== "undefined") {
        returnVal = false;
    }
    return returnVal;
}

/* 값이 null, 빈값 undefined 인경우 ""를 반환한다. */
function fn_isEmptyValue(str) {
    var returnVal = "";
    if (str !== null && typeof str !== "undefined") {
        returnVal = str;
    }
    return returnVal;
}