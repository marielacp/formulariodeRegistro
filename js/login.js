
$(document).ready(function () {
      var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
      $("#register").click(function (){
          $(".error").remove();
          if( $("#name").val() == "" ){
              $("#name").focus().after("<span class='error'>Ingrese su nombre</span>");
              return false;
          }else if( $("#lastname").val() == ""){
              $("#lastname").focus().after("<span class='error'>Ingrese un asunto</span>");
              return false;
          }else if( $("#email").val() == "" || !emailreg.test($("#email").val()) ){
              $("#email").focus().after("<span class='error'>Ingrese un email correcto</span>");
              return false;
         
          }else if( $("#password").val() == "" ){
              $("#password").focus().after("<span class='error'>Ingrese un mensaje</span>");
              return false;
          }
      });
      $("#name, #lastname, #password").keyup(function(){
        if( $(this).val() != "" ){
            $(".error").fadeOut();
            return false;
        }
    });
    $("#email").keyup(function(){
        if( $(this).val() != "" && emailreg.test($(this).val())){
            $(".error").fadeOut();
            return false;
        }
    });
  });