'use strict';

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});    

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});
 
 var eventdata;
 var userType;
 
exports.handler = function(event, context, callback) {                              
    console.log(event);
    eventdata = event.bodyjson;
    userType = eventdata.usertype;
    var params = {
        UserPoolId: '############',
        Username: eventdata.email, 
        DesiredDeliveryMediums: ["EMAIL"],
        //TemporaryPassword: eventdata.temppass,
        UserAttributes: [
          {
            Name: 'email',
            Value: eventdata.email
          },
          {
            Name: 'name',
            Value: eventdata.name
          },
          {
            Name: 'phone_number',
            Value: eventdata.phone
          },
          {
            Name: 'custom:usertype',
            Value: userType
          },
        ],
      };
      /*Cognito Admin User Add Function*/
      cognitoidentityserviceprovider.adminCreateUser(params, function(err, data) {
        if (err){
                console.log(err, err.stack);
        }else{
                console.log(data);
                saveToDynamo(eventdata,data) 
        }           
      });
      /*Save data to DynamoDB*/
      function saveToDynamo(event,data){
        var ddbparams = {                                                               
          Item: {
            email: eventdata.email,
            phone : eventdata.phone, 
            uname : eventdata.name,
            uniqueNum: data.User.Username,
            userId: eventdata.email,
            usertype: userType,
            createdAt:new Date().getTime()
          },
          TableName: '####'                                              
      };
      docClient.put(ddbparams, function(err, ddbdata){                                  
          if(err){
              console.log(err);
              callback(err, null);
          }else{
            console.log(ddbdata)
              const responses = {
                  statusCode: 200,
                      headers: {
                                  'Access-Control-Allow-Origin': '*',
                                  'Access-Control-Allow-Credentials': true,
                              },
                                  body: `User Added`,
                              };
              callback(null, responses.body);
          }
      });
      }
};