// soap_client.js

const soap = require('soap');

const url = 'http://localhost:3000/myservice?wsdl';
const args = { name: 'John' };

soap.createClient(url, (err, client) => {
    if (err) {
        console.error(err);
    } else {
        client.HelloWorld(args, (err, response) => {
            if (err) {
                console.error(err);
            } else {
                console.log(response.message);
            }
        });
    }
});
