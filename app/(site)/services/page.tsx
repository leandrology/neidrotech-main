import ServicesData from "@/components/Services/servicesData";
import ServiceItem from "@/components/Services/serviceItem";
import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";
import Services from "@/components/Services";
export const metadata: Metadata = {
  title: "Services Page - Niedrotech",
  description: "This is Services page for Niedrotech",
  // other metadata
};

const ServicesPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          {/* <div className="pb-10"> */}
          {/* <SectionHeader
              headerInfo={{
                title: "Services",
                subtitle: "Empower Your Business",
                subtitle2: "",
                description: `We’ll match you with amazing staff, mobilize the team, and help you manage performance.`,
              }}
            />
          </div> */}
          <Services />
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default ServicesPage;
