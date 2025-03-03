import { Metadata } from "next";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Landing from "@/components/Landing";
import dynamic from 'next/dynamic';

const PriorityLanding = dynamic(() => import('@/components/Landing'), { ssr: false });

export const metadata: Metadata = {
  title: "Niedrotech",
  description: "This is Home page of Niedrotech",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <PriorityLanding />
      <Hero />
      <Brands />
      <Feature />
      <Testimonial />
      <FAQ />
      <CTA />
    </main>
  );
}
