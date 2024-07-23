import SidebarLink from "@/components/Docs/SidebarLink";
import How from "@/components/How";
import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";
export const metadata: Metadata = {
  title: "How Its Done - Niedrotech",
  description: "How Its Done for the partners of Niedrotech?",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pt-10 lg:pt-20 xl:pt-20">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <How />
        </div>
      </section>
    </>
  );
}
