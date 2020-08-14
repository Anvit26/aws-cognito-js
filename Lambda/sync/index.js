var AWS = require('aws-sdk');
var ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

exports.handler = async (event, context) => {
    console.log(event);
    let date = new Date();
    var myObject =event.request.userAttributes;
    var firstKey = Object.keys(myObject)[0];
    console.log(Object.values(myObject));
    var valueof = myObject[firstKey];
    console.log(valueof);
    
    const tableName = '####' ;
    const region = 'us-east-1';
    
    AWS.config.update({region: region});
    if(event.triggerSource === 'PostConfirmation_ConfirmSignUp'){

        if (event.request.userAttributes.sub) {

            const ddbParams = {
                Item: {
                    'userId': {S: myObject.email},
                    'uname': {S: myObject.name},
                    'email': {S: myObject.email},
                    'usertype': {S: valueof},
                    'uniqueNum': {S: myObject.sub},
                    'phone' : {S: myObject.phone_number},
                    'createdAt': {S: date.toISOString()},
                },
                TableName: tableName
            };
            console.log(ddbParams);
            try {
                await ddb.putItem(ddbParams).promise();
                console.log("Synced");

            } catch (err) {
                console.log("Error", err);
            }
            
            console.log("Success: Synced User");
            context.done(null, event);
            
        } else {
            console.log("Error: The user's email ID is unknown");
            context.done(null, event);
        }
    }else{
        console.log("Password change event");
    }
};