function login()
{
    const pass = document.getElementById("L3").value;
    const cpass = document.getElementById("L6").value;
        if( pass == cpass)
        {
             location.href=" https://bizzzyyy789.github.io/group4.github.io/homepage.html";
        }
        else {
            alert("Please input again...!");
        }
}