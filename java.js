function myJava(){
    document.getElementById("demo").style.color="red";
    document.getElementById("demo").style.backgroundColor="yellow";
   
    // document.write("Alage" );
};
var x = myFunction(4, 3);
document.getElementById("boy").innerHTML = x;

function myFunction(a, b) {
    return a * b;
}
function myData() {
    document.getElementById("bit").innerHTML = "Paragraph changed.";
}