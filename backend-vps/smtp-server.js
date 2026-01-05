const SMTPServer = require("smtp-server").SMTPServer;
const { simpleParser } = require("mailparser");
const Redis = require("ioredis");
const redis = new Redis(process.env.REDIS_URL);

const server = new SMTPServer({
  authOptional: true,
  onData(stream, session, callback) {
    simpleParser(stream, async (err, parsed) => {
      if (err) console.log("Error:", err);
      
      const emailData = {
        from: parsed.from.text,
        subject: parsed.subject,
        body: parsed.text,
        otp: parsed.text.match(/\b\d{4,6}\b/g)?.[0] || "No OTP", // অটো ওটিপি ডিটেকশন
        date: new Date()
      };

      // ইউজার আইডি অনুযায়ী রেডিসে সেভ করা (যেমন: user@networkninjas.com)
      const recipient = session.envelope.rcptTo[0].address;
      await redis.lpush(`inbox:${recipient}`, JSON.stringify(emailData));
      console.log(`New Mail for ${recipient}`);
      callback();
    });
  }
});

server.listen(2525, () => console.log("NetworkNinjas SMTP Running on Port 25"));
