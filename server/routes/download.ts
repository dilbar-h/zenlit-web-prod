import { RequestHandler } from "express";
import { ANDROID_APP_URL, IOS_APP_URL } from "../../shared/links";

const isAndroidDevice = (userAgent: string) => /Android/i.test(userAgent);
const isIOSDevice = (userAgent: string) =>
  /(iPhone|iPad|iPod)/i.test(userAgent);

export const handleDownloadRedirect: RequestHandler = (req, res) => {
  const userAgent = req.get("user-agent") ?? "";

  let destination = IOS_APP_URL;
  if (isAndroidDevice(userAgent)) {
    destination = ANDROID_APP_URL;
  } else if (isIOSDevice(userAgent)) {
    destination = IOS_APP_URL;
  }

  res.redirect(302, destination);
};

