import React from "react";
import SageInput from "../UI/SageInput";
import MissionControlCard from "../UI/MissionControlCard";

const MissionControlSection = () => {

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Your Legal Mission Control
        </h1>
        <p className="mt-2 text-gray-600">
          This is your operating system for legal revenue: Find → Approve →
          Invoice → Collect — with proof.
        </p>

        <SageInput />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <MissionControlCard title="Smart To-Do List" buttonText="Add Task">
            <ul className="mt-4 w-full space-y-3 text-gray-600">
              <li className="text-sm">Review Johnson contract amend...</li>
              <li className="text-sm">Prepare discovery documents fo...</li>
              <li className="text-sm">Follow up with client regarding s...</li>
              <li className="text-sm">Draft response to opposing coun...</li>
            </ul>
          </MissionControlCard>
          <MissionControlCard title="Your Calendar" buttonText="Add Event">
            <ul className="mt-4 w-full space-y-3 text-gray-600">
              <li className="text-sm">Client meeting - Johnson Corp</li>
              <li className="text-sm">Court hearing - Smith v. Jones</li>
              <li className="text-sm">Team strategy session</li>
              <li className="text-sm">Deposition prep with witness</li>
            </ul>
          </MissionControlCard>

          <MissionControlCard title="State of Business" buttonText="Add Case  ">
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-left">
              <div className="mt-4 w-full grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-gray-800">$145.0k</p>
                  <p className="text-sm text-gray-500">Revenue</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">320.0h</p>
                  <p className="text-sm text-gray-500">Total Hours</p>
                </div>
              </div>
              <div className="mt-4 w-full h-32">
                <svg
                  viewBox="0 0 100 50"
                  preserveAspectRatio="none"
                  className="w-full h-full"
                >
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{
                          stopColor: "rgba(99, 91, 255, 0.4)",
                          stopOpacity: 1,
                        }}
                      />
                      <stop
                        offset="100%"
                        style={{
                          stopColor: "rgba(99, 91, 255, 0)",
                          stopOpacity: 1,
                        }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 40 Q25 20, 50 25 T100 10"
                    fill="none"
                    stroke="rgba(99, 91, 255, 1)"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 40 Q25 20, 50 25 T100 10 L100 50 L0 50 Z"
                    fill="url(#gradient)"
                  />
                </svg>
              </div>
            </div>
          </MissionControlCard>
        </div>
      </div>
    </div>
  );
};

export default MissionControlSection;
