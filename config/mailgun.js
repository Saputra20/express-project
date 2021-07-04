require("dotenv").config();

module.exports = {
  local: {
    apikey: process.env.MAILGUN_SECRET,
    domain: process.env.MAILGUN_DOMAIN,
  },
  test: {
    apikey: process.env.MAILGUN_SECRET,
    domain: process.env.MAILGUN_DOMAIN,
  },
  development: {
    apikey: process.env.MAILGUN_SECRET,
    domain: process.env.MAILGUN_DOMAIN,
  },
};
