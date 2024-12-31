function togglehidden()
{
    const hiddenclass = document.getElementById("hiddendata");
    if(hiddenclass.style.display==="block"){
        hiddenclass.style.display="none";
    }
    else{
        hiddenclass.style.display="block"
    }
    console.log("clicked");
}