function Add(){
    Number1 = document.getElementById("number 1 basic cal").value;
    Number2 = document.getElementById("number 2 basic cal").value;
    Calculated = parseFloat(Number1) + parseFloat(Number2);
    document.getElementById("Basic cal ans").innerHTML = "Sum = " + Calculated;
}
function Subtract(){
    Number1 = document.getElementById("number 1 basic cal").value;
    Number2 = document.getElementById("number 2 basic cal").value;
    Calculated = parseFloat(Number1) - parseFloat(Number2);
    document.getElementById("Basic cal ans").innerHTML = "Difference = " + Calculated;
}
function Multiply(){
    Number1 = document.getElementById("number 1 basic cal").value;
    Number2 = document.getElementById("number 2 basic cal").value;
    Calculated = parseFloat(Number1) * parseFloat(Number2);
    document.getElementById("Basic cal ans").innerHTML = "Product = " + Calculated;
}
function Divide(){
    Number1 = document.getElementById("number 1 basic cal").value;
    Number2 = document.getElementById("number 2 basic cal").value;
    Calculated = parseFloat(Number1) / parseFloat(Number2);
    document.getElementById("Basic cal ans").innerHTML = "Quotient = " + Calculated;
}
function Percentage1(){
    Percentage = document.getElementById("percent1").value;
    NumberPerc = document.getElementById("num1").value;
    CalPerc = (NumberPerc / 100) * Percentage;
    document.getElementById("per 1 ans").innerHTML = Percentage + "% of " + NumberPerc + " is " + CalPerc;
}
function FracToDecim(){
    Numerator = document.getElementById("numerator").value;
    Denominator = document.getElementById("denominator").value;
    Decimals = Numerator/Denominator;
    document.getElementById("fractodecimcalcans").innerHTML = "Decimal number is " + Decimals;
}
//Need to do decimal to fraction in section "id = 'fraction & decimals'". not able to figure out right now.//
function CalcPower(){
    Power = document.getElementById("power").value;
    NumberForPower = document.getElementById("numberforpower").value;
    CalculatedPower = Math.pow(NumberForPower, Power);
    document.getElementById("pwernum").innerHTML = "Calculated Number = " + CalculatedPower;
}
function generaterandomnum(){
    EndingPOint = parseInt(document.getElementById("rannum2").value);
    StartingPoint = parseInt(document.getElementById("rannum1").value);
    random = Math.floor(Math.random() * (EndingPOint - StartingPoint + 1)) + StartingPoint;
    document.getElementById("rannumans").innerHTML = "Random Number = " + random;
}
function Mercury(){
    WeightOnEarth = document.getElementById("weightonearth").value;
    Calcweight = WeightOnEarth * 0.38;
    document.getElementById("clacweight").innerHTML = "Weight on Mercury is " + Calcweight + "kg"
}
function Venus(){
    WeightOnEarth = document.getElementById("weightonearth").value;
    Calcweight = WeightOnEarth * 0.91;
    document.getElementById("clacweight").innerHTML = "Weight on Venus is " + Calcweight + "kg"
}
function Mars(){
    WeightOnEarth = document.getElementById("weightonearth").value;
    Calcweight = WeightOnEarth * 0.38;
    document.getElementById("clacweight").innerHTML = "Weight on Mars is " + Calcweight + "kg"
}
function Jupiter(){
    WeightOnEarth = document.getElementById("weightonearth").value;
    Calcweight = WeightOnEarth * 2.34;
    document.getElementById("clacweight").innerHTML = "Weight on Jupiter is " + Calcweight + "kg"
}
function Saturn(){
    WeightOnEarth = document.getElementById("weightonearth").value;
    Calcweight = WeightOnEarth * 1.06;
    document.getElementById("clacweight").innerHTML = "Weight on Saturn is " + Calcweight + "kg"
}
function Uranus(){
    WeightOnEarth = document.getElementById("weightonearth").value;
    Calcweight = WeightOnEarth * 0.92;
    document.getElementById("clacweight").innerHTML = "Weight on Uranus is " + Calcweight + "kg"
}
function Neptune(){
    WeightOnEarth = document.getElementById("weightonearth").value;
    Calcweight = WeightOnEarth * 1.19;
    document.getElementById("clacweight").innerHTML = "Weight on Neptune is " + Calcweight + "kg"
}
function Pluto(){
    WeightOnEarth = document.getElementById("weightonearth").value;
    Calcweight = WeightOnEarth * 0.06;
    document.getElementById("clacweight").innerHTML = "Weight on Pluto is " + Calcweight + "kg"
}
function RATE(){
    SImple = document.getElementById("si").value;
    P = document.getElementById("p").value;
    T = document.getElementById('t').value;
    CalculatedRate = 100 * SImple / P * T;
    document.getElementById("calculatedsirtp").innerHTML = "Rate Of Interset = " + CalculatedRate + " p.a";
}
function TIME(){
    SImple = document.getElementById("si").value;
    P = document.getElementById("p").value;
    R = document.getElementById('r').value;
    CalculatedTimee = 100 * SImple / P * R;
    document.getElementById("calculatedsirtp").innerHTML = "Time = " + CalculatedTimee + " years";
}
function SI(){
    T = document.getElementById('t').value;
    P = document.getElementById("p").value;
    R = document.getElementById('r').value;
    CalculatedTimee = P * T * R / 100;
    document.getElementById("calculatedsirtp").innerHTML = "Simple Interest = " + CalculatedTimee;
}