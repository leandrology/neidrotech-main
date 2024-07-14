import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Neidrotech",
  description: "This is the About page for Neidrotech",
  // other metadata
};

const AboutPage = async () => {
  return (
    <div>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <About />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
