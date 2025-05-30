
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedCategories from '@/components/FeaturedCategories';
import TrendingProducts from '@/components/TrendingProducts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <TrendingProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
