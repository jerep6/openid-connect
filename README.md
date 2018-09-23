# Demonstration

# Step 1:
Show the client application [into Auth0 console](https://manage.auth0.com/#/applications/sN0wrYcd3OZzvpvi8aP0uHYyZ4739yIs/settings)
* Domain
* Client ID
* Allowed Callback URLs


**app-api/index.ts**
```javascript
const secretResolver = jwks.koaJwtSecret({
  jwksUri: "https://xebia-xke.eu.auth0.com/.well-known/jwks.json",
  cache: true
});

app.use(jwt(<any> {
  key: 'jwt_token_decoded',
  debug: true,
  secret: secretResolver,
  audience: "myapi1",
  issuer: "https://xebia-xke.eu.auth0.com/"
}));

```

## RUN
# Client
```
npm start
```