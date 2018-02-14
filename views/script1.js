document.addEventListener("DOMContentLoaded", onHTMLLoaded);

function onHTMLLoaded() {

   $("#searchItem").keyup(function(e){
       document.getElementById("displayResults").innerHTML = "Sorry, this is not available yet!";
       
       $("#displayResults").removeClass("hiddenObj");
       setTimeout(() => {
          $("#displayResults").addClass("hiddenObj");
          }, 2000);
       })
    
}
