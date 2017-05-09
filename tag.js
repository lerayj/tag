


var truc = Sizzle("#test");
console.log("TOTO: ", truc);
Cookies.set('name', 'toto');
var cookie = Cookies.get('name');

if(cookie)
    console.log("Cookie already set: ", cookie);
else{
    Cookies.set('name', 'tutu');
    console.log("Cookie is not set.");
    console.log("Cookie now set to : ", Cookies.get('name'));
}