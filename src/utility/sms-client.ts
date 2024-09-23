import * as dotenv from "dotenv";
import { SinchClient, SinchClientParameters } from "@sinch/sdk-core";

dotenv.config();

const sinchClientParams: SinchClientParameters = {
  projectId: process.env.SINCH_PROJECT_ID,
  keyId: process.env.SINCH_KEY_ID,
  keySecret: process.env.SINCH_KEY_SECRET,
  applicationKey: process.env.SINCH_APP_KEY,
  applicationSecret: process.env.SINCH_APP_SECRET,
};

export const getSinchClient = () => new SinchClient(sinchClientParams);
