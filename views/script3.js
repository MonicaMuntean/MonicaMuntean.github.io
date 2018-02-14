$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    
    var formContent = document.getElementById("contactForm");
    formContent.addEventListener("submit", function(e){
         e.preventDefault();
           if($('.inputs').val() !== "" ){
                 let contacterId = $("#name").val();
                 $("#contacterID").html(contacterId); 
             
                 $("#message").removeClass("hiddenObj");
    
                 setTimeout(() => {
                 $("#message").addClass("hiddenObj");
                 }, 5000);
            }
    });
         
}