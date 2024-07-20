import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";
export const metadata: Metadata = {
  title: "Blogs - Niedrotech",
  description: "This is Blog page for Niedrotech",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="pb-10">
            <SectionHeader
              headerInfo={{
                title: "Blog",
                subtitle: "Dive Deep into Tech Trends",
                subtitle2: "",
                description:
                  "Explore cutting-edge advancements, practical solutions, and expert analysis on the latest trends shaping the IT landscape.  Our blog is your one-stop shop for valuable insights and thought-provoking discussions.",
              }}
            />
          </div>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
