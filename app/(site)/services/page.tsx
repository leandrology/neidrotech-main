import ServicesData from "@/components/Services/servicesData";
import ServiceItem from "@/components/Services/serviceItem";
import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";

export const metadata: Metadata = {
  title: "Services Page - Niedrotech",
  description: "This is Services page for Niedrotech",
  // other metadata
};

const Services = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="pb-10">
          <SectionHeader
            headerInfo={{
              title: "Services",
              subtitle: "Empower your Business with Powerful IT Solutions",
              description: `Our comprehensive suite of services is designed to streamline your IT operations, enhance security, and empower your team to achieve their full potential. Let Niedrotech be your trusted partner on your journey to digital success.`,
            }}
            />
          </div>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {ServicesData.map((post, key) => (
              <ServiceItem key={key} services={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default Services;
