import ExpertiseData from "@/components/Expertise/expertiseData";
import ExpertiseItem from "@/components/Expertise/expertiseItem";
import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";
import Expertise from "@/components/Expertise";
export const metadata: Metadata = {
  title: "Expertise Page - Niedrotech",
  description: "This is Expertise page for Niedrotech",
  // other metadata
};

const ExpertisePage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="pb-10">
            <SectionHeader
              headerInfo={{
                title: "Expertise",
                subtitle: "Remote expertise across all job functions",
                subtitle2: "",
                description: `Build your ultimate remote staff and ignite your company's performance.`,
              }}
            />
          </div>
          <Expertise />
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default ExpertisePage;
