function addUser(){
    
    var inputVal = /[A-Za-z]{1}[A-Za-z]/;
    if (!inputVal.test($("#admin__username").val())) {
        document.getElementById("form_error").innerHTML = ("");
        document.getElementById("form_error").innerHTML = "Please Enter Name";
        return;
    }
    if (!inputVal.test($("#admin__usertype").val())) {
        document.getElementById("form_error").innerHTML = ("");
        document.getElementById("form_error").innerHTML = "Please Enter Email";
        return;
    }
    var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!reeamil.test($("#admin__emailaddress").val())) {
        document.getElementById("form_error").innerHTML = ("");
        document.getElementById("form_error").innerHTML = ("Please Enter Valid Email");
        return;
    }
    var mobilere = /^\+?([0-9]{12})$/
    if (!mobilere.test($("#admin__mobilenumber").val())) {
        document.getElementById("form_error").innerHTML = ("");
        document.getElementById("form_error").innerHTML = ("Please Enter Valid Phone Number");
        return;
    }

    var name = $("#admin__username").val();
    var email = $("#admin__emailaddress").val();
    var phone = $("#admin__mobilenumber").val();
    var usertype = $("#admin__usertype").val();

    var data = {
        name:name,
        email:email,
        phone:phone,
        usertype:usertype
    }
    //console.log(data);
    $.ajax({
      type: "POST",
      url : "API GATEWAY URL", ##CHANGE THIS
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      
      success: function (response) {
        document.getElementById("form_error").innerHTML = (JSON.stringify(response));
      },
      error: function () {
        document.getElementById("form_error").innerHTML = ("Some Thing Went Wrong");
      }});
  }
