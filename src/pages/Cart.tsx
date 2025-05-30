
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-velvette-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 bg-velvette-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🛍️</span>
            </div>
            <h1 className="text-3xl font-playfair font-bold mb-4">Your cart is empty</h1>
            <p className="text-velvette-neutral/80 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button
              size="lg"
              className="bg-velvette-primary hover:bg-velvette-primary/90 text-white px-8 py-6 text-lg font-medium rounded-full"
              onClick={() => navigate('/shop')}
            >
              Start Shopping
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
          Continue Shopping
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-playfair font-bold mb-8">
              Shopping Cart ({totalItems} items)
            </h1>
            
            <div className="space-y-6">
              {items.map((item) => (
                <Card key={`${item.id}-${item.size}`} className="soft-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-32 h-40 sm:h-32 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-lg font-playfair font-semibold">
                            {item.name}
                          </h3>
                          <p className="text-velvette-neutral/70">Size: {item.size}</p>
                          <p className="text-lg font-bold text-velvette-accent">
                            ${item.price}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              className="h-8 w-8"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="h-8 w-8"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => removeItem(item.id, item.size)}
                            className="text-velvette-warning hover:bg-velvette-warning/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="soft-shadow sticky top-24">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-playfair font-bold">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(totalPrice * 0.08).toFixed(2)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${(totalPrice * 1.08).toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Promo Code</label>
                  <div className="flex space-x-2">
                    <Input placeholder="Enter code" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-velvette-accent hover:bg-velvette-accent/90 text-white py-6 text-lg font-medium rounded-full"
                >
                  Proceed to Checkout
                </Button>

                <div className="text-center text-sm text-velvette-neutral/70">
                  <p>Secure checkout with SSL encryption</p>
                  <p className="mt-1">Free returns within 30 days</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
