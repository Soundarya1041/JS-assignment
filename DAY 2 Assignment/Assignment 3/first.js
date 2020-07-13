var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1 // january starts from 0
var yy = today.getFullYear();
if (dd < 10) {
    dd = "0" + dd;
}
if (mm < 10) {
    mm = "0" + mm;
}
today = mm + '-' + dd + '-' + yy;
document.write(today + "<br>");
today = mm + '/' + dd + '/' + yy;
document.write(today + "<br>");
today = dd + '-' + mm + '-' + yy;
document.write(today + "<br>");
today = dd + '/' + mm + '/' + yy;
document.write(today);