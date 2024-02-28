const nodemailer = require('nodemailer');

class MailSender {
    constructor() {
        this._transporter = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io',
            port: process.env.SMTP_PORT,
            auth: {
                user: '753e6940b3cfb8',
                pass: 'b4398d27deb00b',
            },
        });
    }



    sendEmail(targetEmail, content) {
        const message = {
            from: 'MusicApi Apps',
            to: targetEmail,
            subject: 'Ekspor Playlist',
            text: 'Terlampir hasil dari ekspor Playlist',
            attachments: [
                {
                    filename: 'Playlist.json',
                    content,
                },
            ],
        };
        return this._transporter.sendMail(message);
    }
}

module.exports = MailSender;