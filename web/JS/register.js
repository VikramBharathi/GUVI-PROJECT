function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    if (password != confirmPassword) {
        document.getElementById("confirm-password").setCustomValidity("Passwords do not match");
    } else {
        document.getElementById("confirm-password").setCustomValidity("");
    }
}
document.getElementById("password").addEventListener("change", validatePassword);
document.getElementById("confirm-password").addEventListener("change", validatePassword);

function submit(){
    $(document).ready(function() {
        var data ={name:$("#username").val(),
                  email:$("#email").val(),
                  password:$("#password").val()
                }
      $.ajax({
        url: 'http://localhost:80/web/php/register.php',
        type: 'POST',
        data: data,
        success:function(response){
          alert(response);
          if(response == "Registration Successfully completed"){
            window.location.reload();
          }
        }
      })
    });
    }