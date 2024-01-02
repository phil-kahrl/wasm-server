const axios = require('axios');
const { buildSchema } = require('graphql');

const API_TOKEN_ENV_KEY = "RAILWAY_API_TOKEN";

const schema = buildSchema(`
  type Query {
    me: User
  }

  type User {
    name: String
    email: String
  }
`);


const apiToken = process.env[API_TOKEN_ENV_KEY];

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiToken}`,
};

// The GraphQL API endpoint
const apiUrl = 'https://backboard.railway.app/graphql/v2';

const whoami = () => {
    const query = `query { me { name email } }`;
    axios.post(apiUrl, { query }, { headers }).then(response => {
        const userData = response.data
        console.log(userData);
    }).catch(error => {
        console.error('Error making GraphQL request:', error.message);
    });
}

whoami();


