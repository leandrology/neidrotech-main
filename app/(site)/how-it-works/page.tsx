import SidebarLink from "@/components/Docs/SidebarLink";
import How from "@/components/How";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - Niedrotech",
  description: "How it works for the partners of Niedrotech?",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <How />
          </div>
        </div>
      </section>
    </>
  );
}
