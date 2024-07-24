import ServicesData from "@/components/Services/servicesData";
import ServiceItem from "@/components/Services/serviceItem";
import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";
import Services from "@/components/Services";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceHero from "@/components/Services/serviceHero";
export const metadata: Metadata = {
  title: "Services Page - Niedrotech",
  description: "This is Services page for Niedrotech",
  // other metadata
};

const ServicesPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-0 lg:py-0 xl:py-0">
        <ServiceHero />
        <div className="mx-auto mt-10 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <Services />
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default ServicesPage;
