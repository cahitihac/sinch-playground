import fastify from "fastify";
import {
  handleStartVerification,
  handleReportVerification,
  handleSendSms,
  handleVerificationRequest,
} from "./notification-sms";

const server = fastify();

server.post("/start-verification", handleStartVerification);
server.put("/report-verification", handleReportVerification);
server.post("/send-sms", handleSendSms);

// register the following endpoint as the Callback URL in the Sinch dashboard
//  at https://dashboard.sinch.com/verification/apps
// in order to receive verification requests
// and send the custom verification code for testing purposes
server.post("/", handleVerificationRequest);

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
