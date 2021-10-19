$(document).on("submit",".callback_form",function () {
   var data = {};
   data['name'] = $("input[name='name']").val();
   data['email'] = $("input[name='email']").val();
   data['tel'] = $("input[name='tel']").val();
   $.post("/build/sendmail.php",data,function(){
       $(".form-result").show();
       $("#hidden").hide();
   });
   return false;
});