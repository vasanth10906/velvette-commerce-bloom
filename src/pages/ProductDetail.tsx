
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Cart as CartIcon, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const productData = {
  '1': {
    id: '1',
    name: 'Sunset Midi Dress',
    price: 89.99,
    originalPrice: 129.99,
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop&crop=center'
    ],
    description: 'A stunning midi dress perfect for any occasion. Crafted from premium materials with attention to detail.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    features: ['Premium fabric blend', 'Adjustable straps', 'Side pockets', 'Machine washable']
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  const product = productData[id as keyof typeof productData];

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize
    });
  };

  return (
    <div className="min-h-screen bg-velvette-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-velvette-primary/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg soft-shadow">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[600px] object-cover"
              />
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-velvette-success text-white">
                  New
                </Badge>
              )}
              {product.originalPrice && (
                <Badge className="absolute top-4 right-4 bg-velvette-warning text-white">
                  Sale
                </Badge>
              )}
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index 
                      ? 'border-velvette-primary' 
                      : 'border-gray-200 hover:border-velvette-primary/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-velvette-accent">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-lg text-velvette-neutral/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Size</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      selectedSize === size
                        ? 'border-velvette-primary bg-velvette-primary text-white'
                        : 'border-gray-300 hover:border-velvette-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-velvette-accent hover:bg-velvette-accent/90 text-white py-6 text-lg font-medium rounded-full"
                onClick={handleAddToCart}
              >
                <CartIcon className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="w-full border-velvette-primary text-velvette-primary hover:bg-velvette-primary hover:text-white py-6 text-lg font-medium rounded-full"
              >
                <Heart className="h-5 w-5 mr-2" />
                Add to Wishlist
              </Button>
            </div>

            {/* Product Details Tabs */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="care">Care</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-3">
                <h4 className="font-semibold">Features:</h4>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm text-velvette-neutral/80">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="care" className="text-sm text-velvette-neutral/80 space-y-2">
                <p>• Machine wash cold with like colors</p>
                <p>• Do not bleach</p>
                <p>• Tumble dry low</p>
                <p>• Iron on low heat if needed</p>
              </TabsContent>
              
              <TabsContent value="shipping" className="text-sm text-velvette-neutral/80 space-y-2">
                <p>• Free shipping on orders over $75</p>
                <p>• Standard delivery: 3-5 business days</p>
                <p>• Express delivery: 1-2 business days</p>
                <p>• Easy returns within 30 days</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
