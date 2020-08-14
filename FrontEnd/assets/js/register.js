var username;
var phonenumber;
var password;
var personalname;
var poolData;

function registerButton() {

    event.preventDefault();
    /*Input Validation Start*/
    if (document.getElementById("login__username").value == "") {
        document.getElementById("my_err").innerHTML = "Please Enter Name";
        return ;
    }

    if (document.getElementById("login__emailaddress").value == "") {
        document.getElementById("my_err").innerHTML = "Please Enter Email Address";
        return;
    }
    
    if (document.getElementById("login__mobilenumber").value == "") {
        document.getElementById("my_err").innerHTML = "Please Enter Email Address";
        return;
    } 

    if (document.getElementById("login__password").value == "") {
        document.getElementById("my_err").innerHTML = "Please Enter Password";
        return;
    } 

    if (document.getElementById("login__confirm__password").value == "") {
        document.getElementById("my_err").innerHTML = "Please Enter Confirm Password";
        return;
    } 
                
    if (document.getElementById("login__password").value == document.getElementById("login__confirm__password").value) {
        password = document.getElementById("login__password").value;
    } else { 
        document.getElementById("my_err").innerHTML = "Passwords Do Not Match";
    }
    /*Input Validation End*/

    personalname = document.getElementById("login__username").value;
    username = document.getElementById("login__emailaddress").value;
    phonenumber = document.getElementById("login__mobilenumber").value;

    poolData = {
        UserPoolId: _config.cognito.userPoolId, 
        ClientId: _config.cognito.clientId 
    };

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var attributeList = [];
    
    /* Defining Key Value Pair To Send Data To Cognito */
    var dataEmail = {
        Name: 'email',          /*Key Name*/
        Value: username,        /*Value Of Key*/
    };
    var dataPersonalName = {
        Name: 'name',           /*Key Name*/
        Value: personalname,    /*Value Of Key*/
    };
    var dataPhone = {
        Name: 'phone_number',   /*Key Name*/
        Value: phonenumber,     /*Value Of Key*/
    };
    /*Custom User Attribute*/
    var datausertype = {
        Name: 'custom:usertype',/*Key Name*/
        Value: usertype,        /*Value Of Key*/
    };

    /*Defining Attribute To Send To Cognito*/
    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    var attributePersonalName = new AmazonCognitoIdentity.CognitoUserAttribute(dataPersonalName);
    var attributePhone = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhone);
    var attributeUserType = new AmazonCognitoIdentity.CognitoUserAttribute(datausertype);

    /*Pushing Data To Attribute*/
    attributeList.push(attributeEmail);
    attributeList.push(attributePersonalName);
    attributeList.push(attributePhone);
    attributeList.push(attributeUserType);

    /*Sending Data To Cognito*/
    userPool.signUp(username, password, attributeList, null, function (err, result) {
        if (err) {
            document.getElementById("my_err").innerHTML=(err.message || JSON.stringify(err));
            return;
        }
        cognitoUser = result.user;
        document.getElementById("titleheader").innerHTML = "Check your email for a verification link";

    });
}
