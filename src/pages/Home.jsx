import React from "react";
import TopAnnouncement from "../components/common/TopAnnouncement";
import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import BeautyRealm from "../components/home/BeautyRealm";
import BrandSection from "../components/home/BrandSection";
import Categories from "../components/home/Categories";
import OurProducts from "../components/home/OurProducts";
import PromoBanner from "../components/home/PromoBanner";
import PromoGallery from "../components/home/PromoGallery";
import BestSellerShowcase from "../components/home/BestSellerShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Categories />
      <BrandSection />
      <OurProducts />
      <BeautyRealm />
      <BestSellerShowcase />
      <PromoBanner />
      <PromoGallery />
    </>
  );
}
