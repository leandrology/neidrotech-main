import React from "react";
import SectionHeader from "../Common/SectionHeader";
import ServicesData from "./servicesData";
import Image from "next/image";
import ServiceItem from "./serviceItem";

const Services = async () => {
  return (
    <div>
    <section className="pt-0 pb-10 lg:py-2 xl:pt-0 xl:pb-15">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Discover thought-leading news & blogs shaping the Future of IT.`,
            }}
          />
          
        </div>
        {/* <!-- Section Title End --> */}
        
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {ServicesData.slice(0, 3).map((services, key) => (
            <ServiceItem services={services} key={key} />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Services;