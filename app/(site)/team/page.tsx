import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";
import Image from "next/image";
import Team from "@/components/Team";
import TeamContact from "@/components/TeamContact";
export const metadata: Metadata = {
  title: "Our Team - Niedrotech",
  description: "This is the Team page for Niedrotech",
  // other metadata
};

const TeamPage = async () => {
  return (
    <>
      <section className="pt-20 lg:pt-25 xl:pt-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <Team />
        </div>
        <div className="pb-20 md:pb-0">
          <TeamContact />
        </div>
      </section>
    </>
  );
};

export default TeamPage;
