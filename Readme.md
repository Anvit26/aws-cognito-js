**Code Walk Through**<br/>
*Client Side Code for Cognito SDK is in **'aws-cognito-js/FrontEnd/assets/js/'** where <br/>
    -Sign-up function in **aws-cognito-js/FrontEnd/assets/js/register.js**<br/>
    -Sign-in function in **aws-cognito-js/FrontEnd/assets/js/signin.js**<br/>
    -Forgot password function in **aws-cognito-js/FrontEnd/assets/js/forgot.js**<br/>
    -**signOut, getSession, getSession** in **aws-cognito-js/FrontEnd/assets/js/home.js**<br/>
    -change password in **aws-cognito-js/FrontEnd/assets/js/change-password.js**<br/>
    -admin user creation in **aws-cognito-js/FrontEnd/assets/js/adduser.js**<br/>

*Our code has two lambda function in **aws-cognito-js/Lambda/**<br/>
    -Here you have to also apply **IAM Policy**.<br/>
    -To sync user in local data base here we are using DynamoDB Table **aws-cognito-js/Lambda/sync/index.js**.<br/>
    -To add admin user function **aws-cognito-js/Lambda/adduser/index.js**.<br/>

 

**Amazon Cognito Identity**<br/>
Amazon Cognito is service for user management and user authentication, to add user sign-up and sign-in to your mobile and web apps. Your User Pool in Amazon Cognito is a fully managed user directory that can scale to hundreds of millions of users, so you don't have to worry about building, securing, and scaling a solution to handle user management and authentication.

**Introduction**<br/>
In following repository you will get various AWS Cognito features implimentd using SDK for JavaScript , 
1. Cognito User Pool Creation
2. User Signup
3. User Signin
4. Forget Password
5. Reset Password
6. Get User Data
7. User Pool Lambda Trigger
8. Admin User Create
9. Force Change Password
10. Custom Attribute   
<!--<br/>-->

1. Cognito User Pool Creation:-<br/>
    1.1. Go to cognito console, and click on create user pool button<br/>
    1.2 Enter Pool Name, and click on step through settings<br/>
    1.3 ![Step 2](image/User_Pools(1).png)<br/>
    1.4 ![Step 3](image/User_Pools(2).png)<br/>
    1.5 ![Step 4](image/User_Pools(3).png)<br/>
    1.6 ![Step 5](image/User_Pools(4).png)<br/>
    1.7 ![Step 6](image/User_Pools(5).png)<br/>
    1.8 ![Step 7](image/User_Pools(6).png)<br/>
    1.9 ![Step 8](image/User_Pools(7).png)<br/>
    1.10 ![Step 9](image/User_Pools(8).png)<br/>
    1.11 ![Step 10](image/User_Pools(9).png)<br/>
