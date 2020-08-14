function signInButton() {
    event.preventDefault();

    var authenticationData = {
        Username: document.getElementById("login__username").value,
        Password: document.getElementById("login__password").value,
    };
    /*Sending User Authentication Details To Cognito*/
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    var poolData = {
        UserPoolId: _config.cognito.userPoolId, 
        ClientId: _config.cognito.clientId, 
    };

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var userData = {
        Username: document.getElementById("login__username").value,
        Pool: userPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            /*Access Token*/
            var accessToken = result.getAccessToken().getJwtToken(); 
            var url = './homepage.html' + '#access_token=' + accessToken;
            window.location.href = url;
        },
        newPasswordRequired: function(userAttributes, requiredAttributes) {
            var newPassword = prompt('Please Enter New Password ' ,'');
            /*User was signed up by an admin and must provide new
            password and required attributes, if any, to complete
            authentication.*/
        
            //delete userAttributes.email_verified;
            cognitoUser.completeNewPasswordChallenge(newPassword, userAttributes, this);
        },
        onFailure: function (err) {
            document.getElementById("signin_error").innerHTML = (err.message || JSON.stringify(err));
        },
    });
}
/*UI Enter Button Click JS*/
addEventListener("keyup", function(event) {
    if (event.keyCode === '13') {
     event.preventDefault();
     document.getElementById("signin_btn").click();
    }
  });
