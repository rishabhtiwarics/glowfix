import TopAnnouncement from "./components/TopAnnouncement";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import BeautyRealm from "./components/BeautyRealm";
import BrandSection from "./components/BrandSection";
import Categories from "./components/Categories";
import OurProducts from "./components/OurProducts";
import PromoBanner from "./components/PromoBanner";
import PromoGallery from "./components/PromoGallery";
import Footer from "./components/Footer";
import BestSellerShowcase from "./components/BestSellerShowcase";

function App() {
  return (
    <main>
      <TopAnnouncement />
      <Hero />
      <TrustBar />
      <Categories />
   <BrandSection />
      <OurProducts />
      <BeautyRealm />
      <BestSellerShowcase />
      <PromoBanner />
      <PromoGallery />
      <Footer />
    </main>
  );
}

export default App;
