// Set value of user raf link
var userRafLink = 'http://prac.co/######';
// set timer value for redirect
var rafcount=10;

// Form Validation
// Using Jquery Validation plugin - https://github.com/jzaefferer/jquery-validation
// Reference for integrating with BS3 validation states http://stackoverflow.com/questions/18754020/bootstrap-3-with-jquery-validation-plugin

// Set Defaults for all forms
$.validator.setDefaults({
  debug: true,
  success: "valid",
  errorElement: "span",
  errorClass: "has-error",
  validClass: "has-success",
  highlight: function(element, errorClass, validClass) {
    $(element).closest('.form-group').addClass(errorClass).removeClass(validClass);
  },
  unhighlight: function(element, errorClass, validClass) {
    $(element).closest('.form-group').removeClass(errorClass).addClass(validClass);
  },
  errorPlacement: function(error, element) {
    if (element.parent('.input-group').length || element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
      error.insertAfter(element.parent());
    } else {
      error.insertAfter(element);
    }
  }
});

// On document ready, validate forms
$(document).ready(function(){

// Set #rafInputLink to userRafLink
$('#rafInputLink').val(userRafLink);
$('#rafInputLink').attr('placeholder', userRafLink);

// Rules for individual forms

// rules for RAF Modal Form
var rafValidator = $('#formRaf').validate({
  ignore: ".ignore",
  rules: {
    rafInputFrom: {
    required: true
    },
    rafInputEmail: {
      required: true,
      email: true
    }
  },
  messages: {
    rafInputFrom: "Please specify your name",
    rafInputEmail: {
      required: "At least one email address is required",
      email: "Your email address must be in the format of name@domain.com"
    }
  }
});
});

/*-- END Form Validation --*/

// fade raf alert sent
$('#rafButtonSubmit').on('click', function(){
  $('#modal-rafcomplete').modal({show: true, backdrop: 'static'});
  // set timer countdown text
  $("#timer").text(rafcount);
});

$('#modal-rafcomplete').on('shown.bs.modal', function () {
  var curcount = rafcount;
  var counter=setInterval(timer, 1000); //1 second
  function timer()
  {
    curcount--;
    if (curcount <= 0)
    {
      clearInterval(counter);
      //counter ended, do something here
      // redirect to practiceupdate homepage
      window.location.href = "http://www.practiceupdate.com";
      return;
    }

    //Do code for showing the number of seconds here
    var progcount = (curcount/rafcount)*100;
    $('#redirProgBar').css( "width", function() {
    return (100-progcount)+'%';
    });
    console.log(progcount);
    $("#timer").text(curcount); // watch for spelling
  }
})

// Select user link on field focus
$("#rafInputLink").focus(function() {
    $(this).select();
});
$("#rafInputLink").mouseup(function(e){
  e.preventDefault();
});
$("#rafInputLink").focusout(function(e){
  $(this).val(userRafLink);});
});