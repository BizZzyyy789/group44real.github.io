document.querySelector(".but").style.visibility = "hidden";
document.querySelector("#K6").style.visibility = "hidden";
document.querySelector("#K7").onclick = function leang()
{
    let a = document.getElementById("K16");
    let AA = document.getElementById("K11");
    let AAA = document.getElementById("K111");
    let AAAA = document.getElementById("K1111");
    let day = document.getElementById("K3").value;
    let month = document.getElementById("K2").value;
    let year = document.getElementById("K4").value;
    Number(day);
    Number(month);
    Number(year);
    let less_day = 172;
    let dayy;
    if(day > 31)
    {
        alert(`PLeaese Check Your Day Again.....!`);
        document.querySelector(".but").style.visibility = "hidden";
        document.querySelector("#K6").style.visibility = "hidden";
        AA.style.visibility="hidden";
        AAA.style.visibility="hidden";
        AAAA.style.visibility="hidden";
    } 
    else if(month > 12)
    {
        
        alert(`PLeaese Check Your Month Again.....!`);
        document.querySelector(".but").style.visibility = "hidden";
        document.querySelector("#K6").style.visibility = "hidden";
        AA.style.visibility="hidden";
        AAA.style.visibility="hidden";
        AAAA.style.visibility="hidden";
    }
    else if(day < 1)
    {
        alert(`PLeaese Check Your Day Again.....!`);
        document.querySelector(".but").style.visibility = "hidden";
        document.querySelector("#K6").style.visibility = "hidden";
        AA.style.visibility="hidden";
        AAA.style.visibility="hidden";
        AAAA.style.visibility="hidden";
    }
    else if(month < 1)
    {
        
        alert(`PLeaese Check Your Month Again.....!`);
        document.querySelector(".but").style.visibility = "hidden";
        document.querySelector("#K6").style.visibility = "hidden";
        AA.style.visibility="hidden";
        AAA.style.visibility="hidden";
        AAAA.style.visibility="hidden";
    }
   else if(year < 1)
    {
       
        alert(`PLeaese Check Your year Again.....!`);
        document.querySelector(".but").style.visibility = "hidden";
        document.querySelector("#K6").style.visibility = "hidden";
        AA.style.visibility="hidden";
        AAA.style.visibility="hidden";
        AAAA.style.visibility="hidden";
    }
    else if(month == 2 && day > 28 && year%4 == 0)
    {
       
        alert(`PLeaese Check Your Datee Again.....!`);
        document.querySelector(".but").style.visibility = "hidden";
        document.querySelector("#K6").style.visibility = "hidden";
        AA.style.visibility="hidden";
        AAA.style.visibility="hidden";
        AAAA.style.visibility="hidden";
    }
    else if(month == 0 && day == 0 && year == 0)
    {
        alert(`PLeaese Check Your Dateee Again.....!`);
        document.querySelector(".but").style.visibility = "hidden";
        document.querySelector("#K6").style.visibility = "hidden";
        AA.style.visibility="hidden";
        AAA.style.visibility="hidden";
        AAAA.style.visibility="hidden";
    }
    else if(month == 2 && day > 29)
    {
        alert(`PLeaese Check Your Month And year Again.....!`);
        document.querySelector(".but").style.visibility = "hidden";
        document.querySelector("#K6").style.visibility = "hidden";
        AA.style.visibility="hidden";
        AAA.style.visibility="hidden";
        AAAA.style.visibility="hidden";
    }
else {
    a.style.visibility = "hidden";
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
    {
        dayy = 31;
    }
    else if(month == 2 || month == 4 || month == 6 || month == 9 || month == 11)
    {
        dayy = 30;
    }
    else if(year%4 && month == 2)
    {
        less_day = 173;
    }
    let full_day = (month*dayy) - (dayy - day);
    Number(full_day);
    let pi = 3.14;
    let long_day = 48600;
    let short_day = 36480;
    let z;
    z = (long_day + short_day)/2;
    Number(z);
    let x;
    x = long_day - z;
    Number(x);
    let o;
     o = Math.floor(x*(Math.cos((2*pi/365)*(full_day-less_day))) + z);
     Number(o);
     document.querySelector(".but").style.visibility = "visible";
     document.querySelector("#K6").style.visibility = "visible";
     document.querySelector("#h").onclick = function L()
     {
        let h,m,s;
        Number(h);
        Number(m);
        Number(s);
        h = Math.floor(o/3600);
        s = Math.floor((o-h*3600)%60);
        m = Math.floor((o-h*3600)/60);
        AA.innerText = `TIME⏳ : ${h}h : ${m}m : ${s}s`;
        AAA.style.visibility = "hidden";
        AAAA.style.visibility = "hidden";
        AA.style.visibility = "visible";
     }
     document.querySelector("#m").onclick = function LL()
     {
        let mm;
        mm = o/60;
        Number(mm);
        AAA.innerText = `TIME⏳ : ${mm}m`;
        AAA.style.visibility = "visible";
        AA.style.visibility = "hidden";
        AAAA.style.visibility = "hidden";
        
     }
     document.querySelector("#s").onclick = function LLL()
     {
        AAAA.innerText = `TIME⏳ : ${o}s`;
        AA.style.visibility = "hidden";
        AAA.style.visibility = "hidden";
        AAAA.style.visibility = "visible";
     }
 } 
}