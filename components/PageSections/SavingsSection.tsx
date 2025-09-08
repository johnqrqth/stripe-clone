import React from "react";
import VideoBackgroundWrapper from "../UI/VideoBackgroundWrapper";
import Button from "../UI/Button";
import RotatingForm from "../UI/RotatingForm";
import GhostTypedInput from "../UI/GhostTypedInput";

const SavingsSection = () => {
  return (
    <div className="bg-white mt-20 p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl">
        <VideoBackgroundWrapper
          videoPath="/videos/savings_converted.mp4"
          className="h-[500px] w-full rounded-t-xl"
        >
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 h-full w-full items-center justify-items-center md:justify-items-start px-4 md:px-16 ">
            <div>
              <p className="text-[32px] font-semibold text-[#635bff]">
                Estimate your savings in 10 secs
              </p>
              <p className="mt-4 text-base text-[#334155]">
                Sque is the Legal Revenue & Compliance OS. Turn it off and
                invoices stop, audit trails break, and revenue leaks return.
              </p>
              <div className="flex flex-row mt-4 space-x-1">
                <Button variant="primary">Start free trial</Button>
              </div>
            </div>
            <div className="hidden md:block">
              <RotatingForm />
            </div>
          </div>
        </VideoBackgroundWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 my-20 gap-4">
          <VideoBackgroundWrapper
            videoPath="/videos/red_blob.mp4"
            className="relative rounded-b-xl overflow-hidden md:min-h-[350px] min-h-[620px]"
          >
            <div className="flex flex-col justify-center items-start text-white p-3">
              <p className="text-[clamp(1.2rem,2.5vw,1.5rem)] font-bold text-white">
                Confidential. Compliant. In Your Control.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Sque replaces risky tools and manual chaos with a secure legal
                platform built for privilege, client trust, and auditability.
              </p>
              <div className="mt-8 space-y-4 w-full">
                <div className="bg-white/10 rounded-full px-4 py-2 text-sm">
                  Private by design
                </div>
                <div className="bg-white/10 rounded-full px-4 py-2 text-sm">
                  Defense-grade security
                </div>
                <div className="bg-white/10 rounded-full px-4 py-2 text-sm">
                  Full audit trail & access logs
                </div>
                <div className="bg-white/10 rounded-full px-4 py-2 text-sm">
                  Role-based permissions
                </div>
                <div className="bg-white/10 rounded-full px-4 py-2 text-sm">
                  SSO + MFA (Google & Microsoft)
                </div>
                <div className="bg-white/10 rounded-full px-4 py-2 text-sm">
                  SOC Ready, Data retention & export controls
                </div>
              </div>
            </div>
          </VideoBackgroundWrapper>

          <VideoBackgroundWrapper
            videoPath="/videos/green_blob.mp4"
            className="relative rounded-b-xl overflow-hidden md:min-h-[350px] min-h-[620px]"
          >
            <div className="flex flex-col justify-between items-center p-3 text-white h-full w-full">
              <p className="text-xl font-bold">Ask. It Gets Done.</p>
              <GhostTypedInput />
              <p className="mt-4 text-sm text-gray-600">
                One bar to draft, bill, and find anything.
              </p>
            </div>
          </VideoBackgroundWrapper>
        </div>
      </div>
    </div>
  );
};

export default SavingsSection;
