var cognitoUser;

function forgotpasswordbutton() {
    event.preventDefault();
    var validemail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/; /*Mail REGX Validation*/
    if (!validemail.test($("#forgot_mail").val())) {
        document.getElementById("forgot_message").innerHTML = "Please Enter Email-Id";
        return;
    }
    var poolData = {
        UserPoolId: _config.cognito.userPoolId,
        ClientId: _config.cognito.clientId, 
    };

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    
    /*Send User Data to Cognito for OTP*/
    var userData = {
        Username: document.getElementById("forgot_mail").value,
        Pool: userPool,
    };

    cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    
    cognitoUser.forgotPassword({
        onSuccess: function (result) {
            document.getElementById("forgot_success").innerHTML = "Check Your Email For OTP";
        },
        onFailure: function (err) {
            document.getElementById("forgot_message").innerHTML = JSON.stringify(err.message);
        }
    });

}

function inputVerificationCode(){
    event.preventDefault();
    var validcode = /[0-9]{6}/;
    if (!validcode.test($("#code_input").val())) {
        document.getElementById("change_message").innerHTML = "Please Enter OTP";
        return;
    }
        /*Sending OTP And New Password To Cognito */
        var verificationCode = document.getElementById("code_input").value;
        var newPassword = document.getElementById("forgot_pass_input").value;
        cognitoUser.confirmPassword(verificationCode, newPassword, this);
        alert('Successfully Changed Password');
}