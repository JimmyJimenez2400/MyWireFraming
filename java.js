/*This will open the nav bar, giving it 250px width opener and main page*/
function openNav() {
    document.getElementById("SideNav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}
/* This will close the nav bar when clicked on*/
function closeNav() {
    document.getElementById("SideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}