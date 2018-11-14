# Demonstration

# Step 1
 - La démo utilise Auth0 comme OIDC Provider mais nous aurions très bien pu en utiliser un autre
 - Je vous propose de voir rapidement l'interface de Auth0
 - Clic sur le bouton "Create Application"
 - Show the client application [into Auth0 console](https://manage.auth0.com/#/applications/sN0wrYcd3OZzvpvi8aP0uHYyZ4739yIs/settings)  


# Step 2
 - Montrer le code app-client
 - npm start


# Step 3
 - Montrer l'API : KOA
 - Montrer la configuration https://xebia-xke.eu.auth0.com/.well-known/openid-configuration
 - npm start
 
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
