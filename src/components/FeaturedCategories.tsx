
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useCategories } from '@/hooks/useCategories';

const FeaturedCategories = () => {
  const navigate = useNavigate();
  const { data: categories, isLoading } = useCategories();

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
              Shop by <span className="gradient-text">Category</span>
            </h2>
            <p className="text-lg text-velvette-neutral/80">Loading categories...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
            Shop by <span className="gradient-text">Category</span>
          </h2>
          <p className="text-lg text-velvette-neutral/80 max-w-2xl mx-auto">
            Discover your perfect style across our carefully curated collections
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories?.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer overflow-hidden border-0 soft-shadow card-hover"
              onClick={() => navigate(`/shop?category=${category.id}`)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image_url || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=center'}
                    alt={category.name}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-playfair font-semibold mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm opacity-90">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 lg:hidden">
                  <h3 className="text-lg font-playfair font-semibold mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-velvette-neutral/70">
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
