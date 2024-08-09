const express = require('express');
const soap = require('soap');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

const service = {
    MyService: {
        MyPort: {
            HelloWorld: function (args) {
                return { message: `Hello, ${args.name}!` };
            }
        }
    }
};

const xml = fs.readFileSync('myservice.wsdl', 'utf8');
const soapOptions = {
    path: '/myservice',
    services: service,
    xml: xml
};

// Create SOAP server
soap.listen(app, soapOptions, function () {
    console.log('SOAP server listening on http://localhost:' + PORT + '/myservice?wsdl');
});

// Serve the WSDL file
app.get('/myservice', function (req, res) {
    res.send(xml);
});

// Start server
app.listen(PORT, function () {
    console.log('Express server listening on http://localhost:' + PORT);
});
