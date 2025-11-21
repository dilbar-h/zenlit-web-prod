import type { Handler } from "@netlify/functions";

import {
  ANDROID_APP_URL,
  IOS_APP_URL,
} from "../../shared/links";

const isAndroidDevice = (userAgent: string) => /Android/i.test(userAgent);
const isIOSDevice = (userAgent: string) => /(iPhone|iPad|iPod)/i.test(userAgent);

export const handler: Handler = async (event) => {
  const userAgent = event.headers["user-agent"] ?? "";

  let destination = IOS_APP_URL;
  if (isAndroidDevice(userAgent)) {
    destination = ANDROID_APP_URL;
  } else if (isIOSDevice(userAgent)) {
    destination = IOS_APP_URL;
  }

  return {
    statusCode: 302,
    headers: {
      Location: destination,
      "Cache-Control": "public, max-age=60",
    },
  };
};

