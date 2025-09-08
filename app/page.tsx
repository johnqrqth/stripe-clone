import FAQsSection from "@/components/PageSections/FAQsSection";
import FindWorkSection from "@/components/PageSections/FindWorkSection";
import HeroSection from "@/components/PageSections/HeroSection";
import LastSection from "@/components/PageSections/LastSection";
import MissionControlSection from "@/components/PageSections/MissionControlSection";
import SavingsSection from "@/components/PageSections/SavingsSection";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  try {
    return {
      title: "Sque, stripe - A clone for a challenge",
      description:
        "Sque-stripe is a clone of the stripe landing page UI built with Next.js and Tailwind CSS.",
      keywords: [
        "Sque",
        "Legal Revenue",
        "Operating System",
        "Legal Billing",
        "Time Tracking",
        "Law Firm Software",
        "Legal Tech",
        "Legal Automation",
        "E-billing",
        "Legal Invoicing",
        "Law Practice Management",
      ],
      authors: [{ name: "John Thiongo", url: "https://sque-stripeclone.com" }],
    };
  } catch (error) {
    return {};
  }
}
export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col">
        <HeroSection />
        <SavingsSection />
        <div className="relative z-0 h-24 xl:h-36 bg-[#0a2540] transform -skew-y-[4deg] origin-bottom-right" />
        <FindWorkSection />
        <MissionControlSection />
        <div className="relative z-0 h-24 xl:h-36 bg-[#0a2540] transform -skew-y-[4deg] origin-bottom-right" />
        <FAQsSection />
        <LastSection />
        <div className="relative z-0 h-24 xl:h-36 bg-[#f6f6f6] transform -skew-y-[4deg] origin-bottom-right" />
      </main>
    </div>
  );
}
