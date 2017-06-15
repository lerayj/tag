import Cookies from 'js-cookie';
import * as log from 'loglevel';

//Return cookie user id and the current session cookie id
function getCookieSession(){
    var user_cookie = setCookies('user_tag_id', {expires: 365}),
        session_cookie = setCookies('session_id');

    return {user_cookie, session_cookie};
}

function setCookies(cookieName, cookieSettings){
    var cookie = Cookies.get(cookieName);
    
    if(cookie){
        log.info("[DEBUG] Cookie ", cookieName, " already exists: ", cookie);
    } else {
        Cookies.set(cookieName, uuid());
        cookie = Cookies.get(cookieName);
        log.info("[DEBUG] Cookie ", cookieName, " set to: ", cookie);
    }
    return cookie;
}

export default {getCookieSession, setCookies};