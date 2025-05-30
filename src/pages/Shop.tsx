
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Heart, Cart as CartIcon } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const allProducts = [
  {
    id: '1',
    name: 'Sunset Midi Dress',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop&crop=center',
    category: 'dresses',
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
    category: 'tops',
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
    category: 'accessories',
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
    category: 'loungewear',
    isNew: false,
    isTrending: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  }
];

const Shop = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [searchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');

  const categoryParam = searchParams.get('category');

  const handleAddToCart = (product: typeof allProducts[0], size: string = 'M') => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size
    });
  };

  const filteredProducts = allProducts.filter(product => {
    if (categoryParam && product.category !== categoryParam) return false;
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-velvette-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg p-6 soft-shadow">
              <h3 className="text-lg font-playfair font-semibold mb-6">Filters</h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {['dresses', 'tops', 'accessories', 'loungewear'].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories([...selectedCategories, category]);
                          } else {
                            setSelectedCategories(selectedCategories.filter(c => c !== category));
                          }
                        }}
                      />
                      <label htmlFor={category} className="text-sm capitalize cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price1" />
                    <label htmlFor="price1" className="cursor-pointer">Under $50</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price2" />
                    <label htmlFor="price2" className="cursor-pointer">$50 - $100</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price3" />
                    <label htmlFor="price3" className="cursor-pointer">$100 - $200</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="price4" />
                    <label htmlFor="price4" className="cursor-pointer">Over $200</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-playfair font-bold">
                {categoryParam ? `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)}` : 'All Products'}
              </h1>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
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
                          <CartIcon className="h-4 w-4 mr-2" />
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
