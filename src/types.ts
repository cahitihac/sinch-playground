import { FastifyRequest } from "fastify";

type SmsVerification = {
  number: string;
};

type SmsReport = {
  id?: string;
  identity?: string;
  code: string;
};

type SmsSend = {
  to: string[];
  from: string;
  body: string;
};

type SmsVerificationRequest = {
  id: string;
  event: string;
  identity: {
    type: string;
    endpoint: string;
  };
  method: string;
};

type BatchMessage = {
  batchId: string;
  number: string;
};

export type SmsVerificationPostRequestFastify = FastifyRequest<{
  Body: SmsVerification;
}>;

export type SmsReportPutRequestFastify = FastifyRequest<{
  Body: SmsReport;
}>;

export type SendSmsPostRequestFastify = FastifyRequest<{
  Body: SmsSend;
}>;

export type SmsVerificationRequestPostRequestFastify = FastifyRequest<{
  Body: SmsVerificationRequest;
}>;

export type BatchMessageGetRequestFastify = FastifyRequest<{
  Body: BatchMessage;
}>;
