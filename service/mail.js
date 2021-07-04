"use strict";
const Mailgun = require("mailgun-js");
const MailComposer = require("nodemailer/lib/mail-composer");
const env = process.env.NODE_ENV || "development";
const config = require("../config/mailgun"); // Required import for mailgun credentials
const API_KEY = config[env].apikey;
const DOMAIN = config[env].domain;

class MailService {
  constructor() {
    this.mailgun = new Mailgun({
      apiKey: API_KEY,
      domain: DOMAIN,
    });
  }

  async sendMail(mailOptions) {
    const mail = new MailComposer(mailOptions);
    const data = await mail.compile().build();

    const message = {
      to: mailOptions.to,
      message: data.toString("ascii"),
    };

    const result = await this.mailgun
      .messages()
      .sendMime(message, (error, body) => {
        console.log("message email : ", body);
      });
    return result;
  }
}

module.exports = {
  mailService: new MailService(),
};
