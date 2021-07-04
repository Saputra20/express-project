const { mailService } = require("../service/mail");

module.exports = {
  test: async (data) => {
    const mailTemplate = `
            <p> ${data.message} </p>
            <hr>
            <p> From: ${data.email} </p>
        `;

    await mailService.sendMail({
      to: data.email,
      subject: "Test",
      html: mailTemplate,
    });
  },
};
