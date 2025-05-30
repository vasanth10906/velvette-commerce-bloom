
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-velvette-neutral text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-velvette-primary to-velvette-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-2xl font-playfair font-bold">Velvette</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Fashion that speaks to your soul. Curated pieces for the modern, confident woman.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-velvette-primary/20">
                <span className="sr-only">Instagram</span>
                📷
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-velvette-primary/20">
                <span className="sr-only">TikTok</span>
                🎵
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-velvette-primary/20">
                <span className="sr-only">Pinterest</span>
                📌
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-velvette-primary transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/shop?category=new" className="text-gray-300 hover:text-velvette-primary transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop?category=trending" className="text-gray-300 hover:text-velvette-primary transition-colors">
                  Trending
                </Link>
              </li>
              <li>
                <Link to="/shop?category=sale" className="text-gray-300 hover:text-velvette-primary transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-velvette-primary transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-velvette-primary transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-velvette-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-velvette-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold">Stay Connected</h3>
            <p className="text-gray-300 text-sm">
              Get the latest updates on new arrivals and exclusive offers.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-velvette-primary hover:bg-velvette-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Velvette. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
