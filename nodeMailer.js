const nodemailer = require('nodemailer');
let r = "NPL BLUESKY AUTOMOTIVE PVT LTD - DEPOT - PUNE"


var transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vikram.badesara@fretron.com',
        pass: 'sjdk nddh xtyx vnya'
    }
});

message = {
    from: "nodeMailer.testMail@gmail.com",
    to: [
        "0.8vikrambadesara@gmail.com",
        "pooja.bishu@fretron.com"
    ],
    cc: [
        "suyash.kumar@fretron.com",
    ],
    subject: "Subject",
    text: "Hello SMTP Email"
}

transport.sendMail(message, function (err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log(info);
    }
});
