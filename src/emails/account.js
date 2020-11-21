const sgMail = require('@sendgrid/mail');

//const sendgridAPIKey = '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';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'zhenwei.feng8@gmail.com',
        subject: 'thanks for joining',
        text: `welcome ${name}`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'zhenwei.feng8@gmail.com',
        subject: 'Bye',
        text: `See you. ${name}`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
};