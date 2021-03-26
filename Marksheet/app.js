var Accounting=+prompt("Enter Your Accounting Marks out of 200");
var BusinessMathematics=+prompt("Enter Your Business Mathematics Mark out of 200");
var POC=+prompt("Enter Your P.O.C Mark out of 200");
var Banking=+prompt("Enter Your Banking Mark out of 200");
var Economics=+prompt("Enter Your Economics Mark out of 200");

document.write(" Your Accounting MArks is" +""+ Accounting + "<br>");
document.write(" Your BusinessMathematics Marks is" +""+ BusinessMathematics + "<br>");
document.write(" Your P.O.C Marks is" +""+ POC + "<br>");
document.write(" Your Banking Marks is" +""+ Banking + "<br>");
document.write(" Your Economics Marks is" +""+ Economics + "<br>")
var add=(Accounting+BusinessMathematics+POC+Banking+Economics)
document.write("Your Total Marks out of 1000 /" + add +"<br>")
var per=(add/1000*200);
document.write("your Percentage is " +""+ per +"<br>");
if ( per>=150 && per<=200){
    document.write( "Your Grade is A-1") 
}
else if (per>=150 && per<=180){
    document.write("Your Grade is A")
}
else if (per>= 120 && per<=150){
    document.write("Your Grade is B")
}
else if (per>= 110 && per<=160){
    document.write(" Your Grade is C")
}
else if (per>= 140 && per<=150){
    document.write(" Your Grade is D")
}
else {
    document.write ("your percentage is to much below")

}

