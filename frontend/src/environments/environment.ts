/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

// eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImgxQnh0TXJhYjYwVGM3bTQ2OWxuMyJ9.eyJpc3MiOiJodHRwczovL2tvcGhpLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMjcxMTI3NDU2NjcwMDcyNzAyNyIsImF1ZCI6IktvcGhpIiwiaWF0IjoxNjY0MDQ3MDE3LCJleHAiOjE2NjQwNTQyMTcsImF6cCI6IlBtUW05RWNwdnN4WnZUYjhjN2lqSEI1aXNvZk9jd1hlIiwic2NvcGUiOiIiLCJwZXJtaXNzaW9ucyI6W119.il0YnFNW5BtzMSLNpUt3HDj9LlJwzo1dTOBSH5D5RgjEEeeSBJwB-1EaiEdvxu75YZjDD3QPrS-OsU12MV6_ydbKO-h--VUkGOauOqsqpzl5HZ-_kc3uIldBMoXamhUxDo23ln7MlR-ehhmOtEbClPuASJYos-HlRN3xss2qVcNJhKAT0mcO0PZkEKHJ2C-n4rHbOQa02feO-4TWbBVF3TVw8lmPm74CF994eAw55JlET8bnzsYzsRNCphsmgp71hP3XYvkuT4UbVKxIXfsmyySE0scbkglOJzV3gKDtKFwR7y7HZJsVOVB_vV6pzLlw2SHzcuPY_I4EUEB-uIAHDA

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'kophi.us', // the auth0 domain prefix
    audience: 'Kophi', // the audience set for the auth0 app
    clientId: 'PmQm9EcpvsxZvTb8c7ijHB5isofOcwXe', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
