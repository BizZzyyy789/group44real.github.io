function login()
{
    const email = document.getElementById("L2").value;
        if(email === "leang")
        {
            let a = Math.floor(Math.random()*1000000000000);
            Number(a);
            alert(`The New PassWord is : ${a}`);
             location.href=" https://bizzzyyy789.github.io/group4.github.io/homepage.html";
        }
        else {
            alert("Please input again...!");
        }
}

