
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { User, MapPin, Package, Heart, Settings } from 'lucide-react';

const Profile = () => {
  const user = {
    name: 'Emma Johnson',
    email: 'emma@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face'
  };

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 156.98,
      items: ['Sunset Midi Dress', 'Cloud Comfort Sweater']
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 89.99,
      items: ['Vintage Leather Bag']
    }
  ];

  const wishlistItems = [
    {
      id: '1',
      name: 'Sunset Midi Dress',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=center'
    },
    {
      id: '2',
      name: 'Cloud Comfort Sweater',
      price: 65.99,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=center'
    }
  ];

  return (
    <div className="min-h-screen bg-velvette-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="soft-shadow">
              <CardContent className="p-6 text-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-xl font-playfair font-bold mb-2">{user.name}</h2>
                <p className="text-velvette-neutral/70 text-sm mb-4">{user.email}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-velvette-primary text-velvette-primary hover:bg-velvette-primary hover:text-white"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="orders" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Orders
                </TabsTrigger>
                <TabsTrigger value="wishlist" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Wishlist
                </TabsTrigger>
                <TabsTrigger value="addresses" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Addresses
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card className="soft-shadow">
                  <CardHeader>
                    <CardTitle className="font-playfair">Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Emma" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Johnson" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={user.email} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue={user.phone} />
                    </div>
                    
                    <Button className="bg-velvette-primary hover:bg-velvette-primary/90">
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders">
                <div className="space-y-6">
                  <h2 className="text-2xl font-playfair font-bold">Order History</h2>
                  
                  {orders.map((order) => (
                    <Card key={order.id} className="soft-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">Order {order.id}</h3>
                            <p className="text-velvette-neutral/70">Placed on {order.date}</p>
                          </div>
                          <div className="flex items-center gap-4 mt-2 md:mt-0">
                            <Badge
                              className={
                                order.status === 'Delivered'
                                  ? 'bg-velvette-success text-white'
                                  : 'bg-velvette-accent text-white'
                              }
                            >
                              {order.status}
                            </Badge>
                            <span className="font-bold text-lg">${order.total}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Items:</p>
                          <ul className="text-sm text-velvette-neutral/80">
                            {order.items.map((item, index) => (
                              <li key={index}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex gap-3 mt-4">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            Track Order
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Wishlist Tab */}
              <TabsContent value="wishlist">
                <div className="space-y-6">
                  <h2 className="text-2xl font-playfair font-bold">My Wishlist</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map((item) => (
                      <Card key={item.id} className="soft-shadow card-hover">
                        <CardContent className="p-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                          <h3 className="font-playfair font-semibold mb-2">{item.name}</h3>
                          <p className="text-lg font-bold text-velvette-accent mb-3">
                            ${item.price}
                          </p>
                          <Button
                            size="sm"
                            className="w-full bg-velvette-accent hover:bg-velvette-accent/90"
                          >
                            Add to Cart
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Addresses Tab */}
              <TabsContent value="addresses">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-playfair font-bold">Saved Addresses</h2>
                    <Button className="bg-velvette-primary hover:bg-velvette-primary/90">
                      Add New Address
                    </Button>
                  </div>
                  
                  <Card className="soft-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold">Home</h3>
                          <p className="text-velvette-neutral/70">Default Address</p>
                        </div>
                        <Badge className="bg-velvette-primary text-white">Default</Badge>
                      </div>
                      
                      <div className="text-velvette-neutral/80">
                        <p>Emma Johnson</p>
                        <p>123 Fashion Street</p>
                        <p>New York, NY 10001</p>
                        <p>United States</p>
                        <p>{user.phone}</p>
                      </div>
                      
                      <div className="flex gap-3 mt-4">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
