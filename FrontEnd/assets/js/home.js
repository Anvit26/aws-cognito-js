var data = {
    UserPoolId: _config.cognito.userPoolId,
    ClientId: _config.cognito.clientId
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
var cognitoUser = userPool.getCurrentUser();

function signOut() {
    if (cognitoUser != null) {              
            cognitoUser.signOut();
            window.location.href = './signin.html';
    }
}

var usermailId;

window.onload = function CognitoDetails() {
    
    if (cognitoUser != null) {
        cognitoUser.getSession(function (err, session) {
            if (err) {
                alert(err);
                return;
            }
            cognitoUser.getUserAttributes(function (err, result ) {
                if (err) {
                    console.log(err);
                    return;
                }
                usermailId = result[5].getValue();
                document.getElementById("email_value").innerHTML = result[2].getValue();
                document.getElementById("email").innerHTML = result[5].getValue();
            });
        });
    } else {
        window.location.href = './signin.html';
    }
};
