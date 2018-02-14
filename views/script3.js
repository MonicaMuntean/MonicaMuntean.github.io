$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    
    var formContent = document.getElementById("contactForm");
    formContent.addEventListener("submit", function(e){
         e.preventDefault();
          var name = document.getElementById("name").value;
             
		 if(name == ""){
			$("#name").addClass("redInputs");
		 }
		 else if($("#name").className = "redInputs" && name !== ""){
                $("#name").addClass("blackInputs");
				var validation1 = true;
		 }
		 else {
			validation1 = true; 
                       }
         
         var email = document.getElementById("email").value;
         if(email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1){
            $("#email").addClass("redInputs");
         }
         else if( $("#email").className = "redInputs" && subject !== ""){
            $("#email").addClass("blackInputs");
            var validation2 = true;
               }
             else{
              validation2 = true;
              }
		 
		 var subject = document.getElementById("subject").value;
		 if(subject == ""){
            $("#subject").addClass("redInputs");
		 }
		 else if( $("#subject").className = "redInputs" && subject !== ""){
                $("#subject").addClass("blackInputs");
				var validation3 = true;
		 }
		 else{
			 validation3 = true;
         }
		 
		 var messageText = document.getElementById("messageText").value;
		 if(messageText == ""){
            $("#messageText").addClass("redInputs");
		 }
		 else if($("#messageText").className = "redInputs" && messageText !== ""){
               $("#messageText").addClass("blackInputs");
				var validation4 = true;
		 }
		 else{
			 validation4 = true;
		 }
		 
		 
		 if(validation1== true && validation2 == true && validation3 == true && validation4 == true){
			let contacterId = $("#name").val();
                 $("#contacterID").html(contacterId); 
             
                 $("#message").removeClass("hiddenObj");
    
                 setTimeout(() => {
                 $("#message").addClass("hiddenObj");
                 }, 5000);
		         this.reset();
		 }; 
    });
         
}
