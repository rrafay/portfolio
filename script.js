var button = document.querySelector(".fifth");
var icn = document.querySelector(".logo");

button.addEventListener("click", function(){
    //console.log("clicked")

    document.getElementById("scroll").scrollIntoView({behavior: "smooth"});



});

icn.addEventListener("click", function(){
    document.getElementById("first-section").scrollIntoView({behavior: "smooth"});
})