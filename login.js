function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="user")
    {
        alert("LOGIN SUCCESSFULY");
        return false;
        window.location.assign("http://www.google.com/")
    }
    else{
        alert("LOGIN FAILED");

    }}

    function validate2()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="user")
    {
        window.location.assign("index.html");
    }

}

