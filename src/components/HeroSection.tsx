
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[80vh] overflow-hidden gradient-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-velvette-primary/10 via-transparent to-velvette-accent/10" />
      
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-velvette-accent font-medium tracking-wide uppercase text-sm">
                New Collection 2024
              </p>
              <h1 className="text-5xl lg:text-7xl font-playfair font-bold leading-tight">
                Express Your
                <span className="gradient-text block">
                  Unique Style
                </span>
              </h1>
              <p className="text-lg text-velvette-neutral/80 max-w-md leading-relaxed">
                Discover fashion that speaks to your soul. Curated pieces for the modern, confident woman who isn't afraid to stand out.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-velvette-primary hover:bg-velvette-primary/90 text-white px-8 py-6 text-lg font-medium rounded-full soft-shadow hover:shadow-lg transition-all duration-300"
                onClick={() => navigate('/shop')}
              >
                Shop Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-velvette-accent text-velvette-accent hover:bg-velvette-accent hover:text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300"
                onClick={() => navigate('/shop?category=trending')}
              >
                Trending Now
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-velvette-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-velvette-accent/20 rounded-full blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop&crop=center"
                alt="Fashion model showcasing Velvette collection"
                className="w-full h-[600px] object-cover rounded-3xl soft-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvette-primary/20 via-transparent to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-velvette-primary/10 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-8 h-8 bg-velvette-accent/20 rounded-full animate-pulse hidden lg:block" />
    </section>
  );
};

export default HeroSection;
