
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, User, Heart, Cart as CartIcon } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-velvette-primary/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-velvette-primary to-velvette-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-2xl font-playfair font-bold gradient-text group-hover:scale-105 transition-transform">
              Velvette
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-velvette-neutral hover:text-velvette-primary transition-colors font-medium">
              Shop
            </Link>
            <Link to="/shop?category=new" className="text-velvette-neutral hover:text-velvette-primary transition-colors font-medium">
              New Arrivals
            </Link>
            <Link to="/shop?category=trending" className="text-velvette-neutral hover:text-velvette-primary transition-colors font-medium">
              Trending
            </Link>
            <Link to="/shop?category=sale" className="text-velvette-neutral hover:text-velvette-primary transition-colors font-medium">
              Sale
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:bg-velvette-primary/10"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/profile')}
              className="hover:bg-velvette-primary/10"
            >
              <User className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-velvette-primary/10"
            >
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/cart')}
              className="hover:bg-velvette-primary/10 relative"
            >
              <CartIcon className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-velvette-accent text-white text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-3 border border-velvette-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-velvette-primary/30 bg-white/50"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
