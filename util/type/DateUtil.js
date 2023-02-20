/**
 * 날짜 함수
 * */
const dateFunction = {
    /* DateTime을 원하는 형태의 Stirng로 변환 */
    getDateByTime: function (timeData, formatType, dateGbn) {
        let u = new Date();
        if (timeData !== null && timeData !== "") {
            if (typeof timeData == "string") {
                u = this.getDateTime(timeData);
            } else {
                u = new Date(timeData);
            }
        }
        let yyyy = u.getFullYear();
        let yy = u.getFullYear().toString().slice(-2);
        let MM = ('0' + (u.getMonth() + 1)).slice(-2);
        let dd = ('0' + u.getDate()).slice(-2);
        let hh = ('0' + u.getHours()).slice(-2);
        let mm = ('0' + u.getMinutes()).slice(-2);
        let ss = ('0' + u.getSeconds()).slice(-2);
        let val;
        if (dateGbn === null || dateGbn === "") {
            dateGbn = "-";
        }
        switch (formatType) {
            case "yyyy-MM-dd hh:mm:ss":
                val = yyyy + dateGbn + MM + dateGbn + dd + " " + hh + ":" + mm + ":" + ss;
                break;
            case "yy-MM-dd hh:mm:ss":
                val = yy + dateGbn + MM + dateGbn + dd + " " + hh + ":" + mm + ":" + ss;
                break;
            case "yyyy-MM-dd":
                val = yyyy + dateGbn + MM + dateGbn + dd;
                break;
            case "yy-MM-dd":
                val = yy + dateGbn + MM + dateGbn + dd;
                break;
            case "MM/dd":
                val = MM + "/" + dd;
                break;
            case "MM월 dd일":
                MM = MM.substring(0, 1) == '0' ? MM.substring(1,2) : MM;
                dd = dd.substring(0, 1) == '0' ? dd.substring(1,2) : dd;
                val = MM + "월 " + dd + "일";
                break;
            default:
                val = yyyy + "-" + MM + "-" + dd;
        }
        return val;
    },
    /* Date add */
    getDateAdd: function (timeData, addGbn, val) {
        let now = new Date();
        if (timeData !== null && timeData !== "") {
            now = new Date(timeData);
        }
        if (addGbn === "Y") {
            now.setYear(now.getFullYear() + val);
        } else if (addGbn === "M") {
            now.setMonth(now.getMonth() + val);
        } else if (addGbn === "D") {
            now.setDate(now.getDate() + val);
        }

        let year = now.getFullYear();
        let month = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
        let day = now.getDate() > 9 ? '' + now.getDate() : '0' + now.getDate();
        let returnDate = year + '-' + month + '-' + day;	// 오늘날짜
        return returnDate;
    },
    /* Date 타입으로 변환 */
    getDateTime: function (timeData) {
        let year = parseInt(timeData.substring(0, 4));
        let month = parseInt(timeData.substring(4, 6)) - 1; //서버와의 '월'데이터 불일치. -1로 보정
        let day = parseInt(timeData.substring(6, 8));
        let hour = parseInt(timeData.substring(8, 10));
        let minute = parseInt(timeData.substring(10, 12));
        let second = parseInt(timeData.substring(12, 14));
        let returnDate = new Date(year, month, day, hour, minute, second);
        return returnDate;
    },
    /* 날짜 차이 체크 */
    isDiffMax: function (timeData, difGbn, diff) {
        let returnVal = false;
        let regDate = this.getDateAdd(timeData, difGbn, diff);
        let todayDate = this.getDateByTime(null, "yyyy-MM-dd", "-");
        if (regDate >= todayDate) {
            returnVal = true;
        }
        return returnVal;
    },
};