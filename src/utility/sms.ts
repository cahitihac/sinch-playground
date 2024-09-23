import { SinchClient, Sms } from "@sinch/sdk-core";

export const sendTextSms = async (
  from: string,
  to: string[],
  body: string,
  sinchClient: SinchClient
) => {
  const sendTextSmsRequestData: Sms.SendTextSMSRequestData = {
    sendSMSRequestBody: {
      type: "mt_text",
      delivery_report: "full",
      from,
      to,
      body,
    },
  };

  try {
    const sendSmsResponse = await sinchClient.sms.batches.send(
      sendTextSmsRequestData
    );

    return sendSmsResponse;
  } catch (error) {
    throw new Error(`Could not send sms to numbers ${to}`);
  }
};

export const getBatchSms = async (
  batchId: string,
  sinchClient: SinchClient
) => {
  const getBatchSmsRequestData: Sms.GetBatchMessageRequestData = {
    batch_id: batchId,
  };

  try {
    const getBatchSmsResponse = await sinchClient.sms.batches.get(
      getBatchSmsRequestData
    );

    return getBatchSmsResponse;
  } catch (error) {
    throw new Error(`Could not get batch sms with the batch id: ${batchId}`);
  }
};
