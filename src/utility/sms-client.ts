import * as dotenv from "dotenv";
import { SinchClient, SinchClientParameters } from "@sinch/sdk-core";

dotenv.config();

const US_COUNTRY_CODE = "+1";

const sinchClientParamsGlobal: SinchClientParameters = {
  projectId: process.env.SINCH_GLOBAL_PROJECT_ID,
  keyId: process.env.SINCH_GLOBAL_KEY_ID,
  keySecret: process.env.SINCH_GLOBAL_KEY_SECRET,
  applicationKey: process.env.SINCH_GLOBAL_APP_KEY,
  applicationSecret: process.env.SINCH_GLOBAL_APP_SECRET,
  smsRegion: process.env.SINCH_GLOBAL_SMS_REGION,
};

const sinchClientParamsUS: SinchClientParameters = {
  projectId: process.env.SINCH_US_PROJECT_ID,
  keyId: process.env.SINCH_US_KEY_ID,
  keySecret: process.env.SINCH_US_KEY_SECRET,
  applicationKey: process.env.SINCH_US_APP_KEY,
  applicationSecret: process.env.SINCH_US_APP_SECRET,
  smsRegion: process.env.SINCH_US_SMS_REGION,
};

const sinchClientGlobal = new SinchClient(sinchClientParamsGlobal);
const sinchClientUS = new SinchClient(sinchClientParamsUS);

export const getSinchClient = (phoneNumber: string) => {
  if (phoneNumber.startsWith(US_COUNTRY_CODE)) {
    return sinchClientUS;
  }
  return sinchClientGlobal;
};
