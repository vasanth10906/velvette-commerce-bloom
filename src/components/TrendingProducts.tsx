
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const trendingProducts = [
  {
    id: '1',
    name: 'Sunset Midi Dress',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop&crop=center',
    isNew: true,
    isTrending: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Cloud Comfort Sweater',
    price: 65.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=center',
    isNew: false,
    isTrending: true,
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '3',
    name: 'Vintage Leather Bag',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=500&fit=crop&crop=center',
    isNew: true,
    isTrending: true,
    sizes: ['One Size']
  },
  {
    id: '4',
    name: 'Cozy Lounge Set',
    price: 79.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=500&fit=crop&crop=center',
    isNew: false,
    isTrending: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  }
];

const TrendingProducts = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleAddToCart = (product: typeof trendingProducts[0], size: string = 'M') => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size
    });
  };

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">
            Trending <span className="gradient-text">Now</span>
          </h2>
          <p className="text-lg text-velvette-neutral/80 max-w-2xl mx-auto">
            The pieces everyone's talking about this season
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer overflow-hidden border-0 soft-shadow card-hover bg-white"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {product.isNew && (
                      <Badge className="bg-velvette-success text-white">
                        New
                      </Badge>
                    )}
                    {product.originalPrice && (
                      <Badge className="bg-velvette-warning text-white">
                        Sale
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white rounded-full"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Quick Add to Cart */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      className="w-full bg-velvette-accent hover:bg-velvette-accent/90 text-white rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Quick Add
                    </Button>
                  </div>
                </div>

                <div className="p-6" onClick={() => navigate(`/product/${product.id}`)}>
                  <h3 className="text-lg font-playfair font-semibold mb-2 group-hover:text-velvette-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-velvette-accent">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-velvette-accent text-velvette-accent hover:bg-velvette-accent hover:text-white px-8 py-6 text-lg font-medium rounded-full"
            onClick={() => navigate('/shop')}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
