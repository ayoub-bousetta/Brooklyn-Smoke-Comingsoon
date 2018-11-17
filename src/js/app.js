grecaptcha.ready(function() {
  grecaptcha.execute('6LeaU3gUAAAAANqdOxqm4lFW0hSASwy35fbWIN9r', {action: 'brsmoke'})
  .then(function(token) {
  
 //   console.log(token);
$(function () {

  $('#i-recaptcha').on('submit', function (e) {

  e.preventDefault();

    var email = $("#email").val();
    var nom = $("#fullname").val();
    var phone = $("#phone").val();
    var alert = $("#alert");
     var pattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     var phoneno = /^([0|\+[0-9]{1,5})?([0-9]{10})$/;


     if(nom == ""){
      
      alert.css({'background':'#ff1500','display':'block'}).empty().html('Le champ nom est obligatoire.')
      return ;

     }

     if (!phone.match(phoneno)) {
      alert.css({'background':'#ff1500','display':'block'}).empty().html('Numéro de téléphone non valide. ');

      return;
     }


     if (!email.match(pattern)) {
      alert.css({'background':'#ff1500','display':'block'}).empty().html('Email non valide. ');

      return;
     }


     let data= $('#i-recaptcha').serialize();

     data=data+"&g-recaptcha-response="+token;

     //console.log(data);





     var request = $.ajax({
      type: 'POST',
      url: 'post.php',
      data: data,
      datatype:   "json",

     
    });

    request.done(function(response) {

       if (response) {
         //console.log(response);
         alert.css({'background':'#00e700','display':'block'}).empty().html('Votre email a été bien envoyé');
     $('#i-recaptcha')[0].reset();
         
       }else if(response==false ){
         alert.css({'background':'#ff1500','display':'block'}).empty().html('reCaptcha  ou clé non valide');

       }



    })

   


  });

});


  });
  });


     
