function saveInput() {
    const input = document.getElementById("email").value;
    localStorage.setItem("savedInput",
    JSON.stringify([... JSON.parse(localStorage.getItem("savedInput") || "[]"),
    {input},])
    );   
    alert("you can view the input in local storage and profile page will be displayed If you entered details correctly,It will take some Time");
  }
 



  function login(){
   
    $(document).ready(function() {
        var data ={email:$("#email").val(),
                  password:$("#password").val()};
    console.log(data);
      $.ajax({
        url: 'http://localhost:80/web/php/login.php',
        type: 'POST',
        data: data,
        success:function(response){
          console.log('response',response);
          if(response == "Login Successful"){
            window.location.href='http://localhost/web/profile.html'
          }
        }
      })
    });
    saveInput()
    }

