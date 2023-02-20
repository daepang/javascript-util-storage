/** 
 * 모바일 구분 
 * */
const checkUserAgent = () => {
    let currentOS = '';
    let isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobi|mobi/i.test(navigator.userAgent.toLowerCase()));

    // 유저 에이전트를 불러와서 OS를 구분합니다.
    if (isMobile) {
        let userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.search('android') > -1) {
            // 안드로이드
            currentOS = 'A';
        } else if ((userAgent.search('iphone') > -1) || (userAgent.search('ipod') > -1)
            || (userAgent.search('ipad') > -1)) {
            // iPhone
            currentOS = 'I';
        } else {
            currentOS = 'E';
        }
    } else {
        // 모바일이 아닐 때
        currentOS = 'N';
    }
    return currentOS;
}