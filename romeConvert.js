/*
Program to Convert Integers to Roman numerals
Author : Prithvidhar Pudu
*/

//Selecting button
var button = document.getElementsByTagName("button");
if(button)
{
    console.log("there");
}
else{
    console.log("empty");
}

function doIt()
{
    var ans = "";
    var num = document.getElementById("inText").value;
    console.log("hi");

    // Checking 1000s
    while(num > 0)
    {
        if(num >= 1000)
        {
            num -= 1000;
            ans += "M";
        }
        else if(num>= 900 && num < 1000)
        {
            num -= 900;
            ans += "CM";
        }
        else if(num >= 500 && num < 900)
        {
            num -= 500;
            ans += "D";
        }
        else if(num >= 400 && num < 500)
        {
            num -= 400;
            ans += "CD";
        }
        else if(num >= 100 && num < 400)
        {
            num -= 100;
            ans += "C";
        }
        else if(num >= 90 && num < 100)
        {
            num -= 90;
            ans += "XC";
        }
        else if(num >= 50 && num < 90)
        {
            num -= 50;
            ans += "L";
        }
        else if(num >= 40 && num < 50)
        {
            num -= 40;
            ans += "XL";
        }
        else if(num >= 10 && num < 40)
        {
            num -= 10;
            ans += "X";
        }
        else if(num >= 9 && num < 10)
        {
            num -= 9;
            ans += "IX";
        }
        else if(num >= 5 && num < 9)
        {
            num -= 5;
            ans += "V";
        }
        else if(num >= 4 && num < 5)
        {
            num -= 4;
            ans += "IV";
        }
        else if(num >= 1 && num < 4)
        {
            num -= 1;
            ans += "I";
        }
    }
    document.getElementById("out").innerHTML = ans;
    console.log("leaving");
}
