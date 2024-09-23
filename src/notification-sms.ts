import { getSinchClient } from "./utility/sms-client";
import {
  reportVerificationByIdentity,
  startVerification,
} from "./utility/phone-number-verification";
import { getBatchSms, sendTextSms } from "./utility/sms";
import {
  BatchMessageGetRequestFastify,
  SendSmsPostRequestFastify,
  SmsReportPutRequestFastify,
  SmsVerificationPostRequestFastify,
  SmsVerificationRequestPostRequestFastify,
} from "./types";

export const handleStartVerification = async (
  req: SmsVerificationPostRequestFastify
) => {
  try {
    const { number } = req.body;
    const sinchClient = getSinchClient();
    const startVerificationResponse = await startVerification(
      number,
      sinchClient
    );
    return startVerificationResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const handleReportVerification = async (
  req: SmsReportPutRequestFastify
) => {
  try {
    const { code, identity } = req.body;

    if (!identity) {
      throw new Error("Either id or identity must be provided");
    }

    const sinchClient = getSinchClient();
    const reportVerificationResponse = await reportVerificationByIdentity(
      identity,
      code,
      sinchClient
    );
    return reportVerificationResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const handleSendSms = async (req: SendSmsPostRequestFastify) => {
  try {
    const { to, from, body } = req.body;
    const sinchClient = getSinchClient();
    const sendSmsResponse = await sendTextSms(from, to, body, sinchClient);
    return sendSmsResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const handleGetBatchSms = async (req: BatchMessageGetRequestFastify) => {
  try {
    const { batchId, number } = req.body;
    const sinchClient = getSinchClient();
    const getBatchSmsResponse = await getBatchSms(batchId, sinchClient);

    return getBatchSmsResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const handleVerificationRequest = async (
  req: SmsVerificationRequestPostRequestFastify,
  res: any
) => {
  try {
    const { event } = req.body;

    // https://developers.sinch.com/docs/verification/api-reference/verification/tag/Verification-callbacks/#tag/Verification-callbacks/operation/VerificationRequestEvent
    if (event === "VerificationRequestEvent") {
      console.log(`Verification Request Event: ${JSON.stringify(req.body)}`);

      return res.code(200).send({
        action: "allow",
        sms: {
          code: "1234",
        },
      });
    }

    // https://developers.sinch.com/docs/verification/api-reference/verification/tag/Verification-callbacks/#tag/Verification-callbacks/operation/VerificationResultEvent
    if (event === "VerificationResultEvent") {
      console.log(`Verification Result Event: ${JSON.stringify(req.body)}`);
    }

    return res.code(200).send({});
  } catch (error) {
    console.error(error);
    throw error;
  }
};
