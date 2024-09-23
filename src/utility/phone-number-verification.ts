import { SinchClient, Verification } from "@sinch/sdk-core";

export const startVerification = async (
  phoneNumber: string,
  sinchClient: SinchClient
) => {
  const startRequestData =
    Verification.startVerificationHelper.buildSmsRequest(phoneNumber);

  try {
    const smsVerification =
      await sinchClient.verification.verifications.startSms(startRequestData);

    return smsVerification;
  } catch (error) {
    throw new Error(`Could not start verification for number ${phoneNumber}`);
  }
};

export const reportVerificationByIdentity = async (
  identity: string,
  code: string,
  sinchClient: SinchClient
) => {
  const reportByIdentityRequestData =
    Verification.reportVerificationByIdentityHelper.buildSmsRequest(
      identity,
      code
    );

  try {
    const reportVerificationByIdentityResponse =
      await sinchClient.verification.verifications.reportSmsByIdentity(
        reportByIdentityRequestData
      );

    return reportVerificationByIdentityResponse;
  } catch (error) {
    throw new Error(`Could not report verification for identity ${identity}`);
  }
};

export const reportVerificationById = async (
  id: string,
  code: string,
  sinchClient: SinchClient
) => {
  const reportByIdRequestData =
    Verification.reportVerificationByIdHelper.buildSmsRequest(id, code);

  try {
    const reportVerificationByIdResponse =
      await sinchClient.verification.verifications.reportSmsById(
        reportByIdRequestData
      );

    return reportVerificationByIdResponse;
  } catch (error) {
    throw new Error(`Could not report verification for id ${id}`);
  }
};
