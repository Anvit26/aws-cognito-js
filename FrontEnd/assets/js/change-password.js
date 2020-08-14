function changePass(){
    var userdata

    var combPass = {
        oldPass:document.getElementById("inputOldPass").value,
        newPass:document.getElementById("inputNewPass").value
    }
    if (cognitoUser != null) {
        cognitoUser.getSession(function (err, session) {
            if (err) {
                alert(err);
                return;
            }
            console.log('session validity: ' + session.isValid());
            //Set the profile info
            cognitoUser.getUserAttributes(function (err, result) {
                if (err) {
                    console.log(err);
                    return;
                }
                userdata = {Username: result[10].Value, pool: data.UserPoolId}; //Getting User Data
            });
            cognitoUser.changePassword(combPass.oldPass, combPass.newPass, function(err, result) {
                if (err) {
                    console.log(err); 
                    return;
                    }
                });
            });
        }
    }