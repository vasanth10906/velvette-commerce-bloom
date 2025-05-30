
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useProduct } from '@/hooks/useProducts';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { data: product, isLoading, error } = useProduct(id!);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleAddToCart = () => {
    if (!product) return;
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.discount_price || product.price,
      image: product.images?.[0] || 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop&crop=center',
      size: selectedSize || 'M'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-velvette-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-lg">Loading product...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-velvette-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => navigate('/shop')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const productImages = product.images?.length > 0 ? product.images : [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=700&fit=crop&crop=center'
  ];

  return (
    <div className="min-h-screen bg-velvette-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-velvette-neutral/70 mb-8">
          <button 
            onClick={() => navigate('/')}
            className="hover:text-velvette-primary transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button 
            onClick={() => navigate('/shop')}
            className="hover:text-velvette-primary transition-colors"
          >
            Shop
          </button>
          <span>/</span>
          <span className="text-velvette-primary">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={productImages[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-velvette-primary' 
                        : 'border-transparent hover:border-velvette-primary/50'
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
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {product.is_featured && (
                  <Badge className="bg-velvette-success text-white">New</Badge>
                )}
                {product.discount_price && (
                  <Badge className="bg-velvette-warning text-white">Sale</Badge>
                )}
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-velvette-accent">
                  ${product.discount_price || product.price}
                </span>
                {product.discount_price && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.price}
                  </span>
                )}
              </div>
            </div>

            <p className="text-velvette-neutral/80 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-3">
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
            )}

            {/* Stock Info */}
            <div className="text-sm text-velvette-neutral/70">
              {product.stock_quantity > 0 ? (
                <span className="text-velvette-success">✓ In Stock ({product.stock_quantity} available)</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-velvette-accent hover:bg-velvette-accent/90 text-white py-6 text-lg font-medium rounded-full"
                onClick={handleAddToCart}
                disabled={product.stock_quantity === 0}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
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

            {/* Product Tags */}
            {product.tags && product.tags.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-velvette-neutral">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <p className="text-velvette-neutral/80 leading-relaxed">
                    {product.description || "No detailed description available."}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="details" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-semibold">Price:</span> ${product.price}
                      </div>
                      {product.discount_price && (
                        <div>
                          <span className="font-semibold">Sale Price:</span> ${product.discount_price}
                        </div>
                      )}
                      <div>
                        <span className="font-semibold">Stock:</span> {product.stock_quantity} available
                      </div>
                      <div>
                        <span className="font-semibold">Sizes:</span> {product.sizes?.join(', ') || 'One Size'}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <p className="text-velvette-neutral/80">
                    Reviews feature coming soon! Be the first to review this product.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
