import React, { Suspense } from "react";
import VideoBackgroundWrapper from "../UI/VideoBackgroundWrapper";

const FindWorkSection = () => {
  return (
    <div className="relative bg-[#0a2540] overflow-hidden p-4 md:p-8">
      <div className="mx-auto flex flex-col items-center justify-between max-w-4xl">
        <div className="">
          <p className="text-3xl font-bold leading-tight text-center">
            Find Work → Approve → Invoice → Paid
          </p>
          <p className="mt-4 text-gray-300 max-w-xl text-center">
            Sque is the Legal Revenue & Operating System — it captures work
            automatically, gives you downloadable proof, and runs billing as
            your system of record.
          </p>
        </div>
        <div className="">
          <Suspense>
            <VideoBackgroundWrapper
              videoPath="/videos/screen_rec_1.mp4"
              className="max-w-[620px] h-[620px] mt-8"
            >
              <div className="h-full w-full px-[40vw]">video</div>
            </VideoBackgroundWrapper>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default FindWorkSection;
