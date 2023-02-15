/**
 * 값이 null, 빈값 undefined 인경우 true를 반환한다.
 * */
const isEmptyCheck = (str) => {
    let returnVal = true;
    if (str !== null && str !== "" && typeof str !== 'undefined') {
        returnVal = false;
    }
    return returnVal;
}

/**
 * 값이 null, 빈값 undefined 인경우 ""를 반환한다.
 * */
const isEmptyValue = (str) => {
    let returnVal = "";
    if (str !== null && typeof str !== 'undefined') {
        returnVal = str;
    }
    return returnVal;
}

/**
 * 문자열을 3자리마다 콤마를 찍어서 반환한다.
 */
String.prototype.commaStr = () => {
    let num = this.replace(/,/g, "");
    while((/(-?[0-9]+)([0-9]{3})/).test(num)) {
        num = num.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
    }
    return num;
}

/**
 * 문자열 좌우 공백을 제거한다.
 */
String.prototype.trim = () => {
    return this.replace(/^\s+/g, '').replace(/\s+$/g, '');
}