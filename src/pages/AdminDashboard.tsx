
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Plus, 
  Edit, 
  Trash2,
  Eye
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    {
      title: 'Total Sales',
      value: '$24,567',
      change: '+12%',
      icon: TrendingUp,
      color: 'text-velvette-success'
    },
    {
      title: 'Orders',
      value: '156',
      change: '+8%',
      icon: ShoppingCart,
      color: 'text-velvette-accent'
    },
    {
      title: 'Products',
      value: '89',
      change: '+3%',
      icon: Package,
      color: 'text-velvette-primary'
    },
    {
      title: 'Customers',
      value: '432',
      change: '+15%',
      icon: Users,
      color: 'text-velvette-neutral'
    }
  ];

  const orders = [
    {
      id: 'ORD-001',
      customer: 'Emma Johnson',
      total: 156.98,
      status: 'Delivered',
      date: '2024-01-15',
      items: 2
    },
    {
      id: 'ORD-002',
      customer: 'Sarah Wilson',
      total: 89.99,
      status: 'Shipped',
      date: '2024-01-14',
      items: 1
    },
    {
      id: 'ORD-003',
      customer: 'Mike Davis',
      total: 234.50,
      status: 'Pending',
      date: '2024-01-13',
      items: 3
    }
  ];

  const products = [
    {
      id: '1',
      name: 'Sunset Midi Dress',
      price: 89.99,
      stock: 25,
      status: 'Active',
      category: 'Dresses'
    },
    {
      id: '2',
      name: 'Cloud Comfort Sweater',
      price: 65.99,
      stock: 12,
      status: 'Active',
      category: 'Tops'
    },
    {
      id: '3',
      name: 'Vintage Leather Bag',
      price: 149.99,
      stock: 5,
      status: 'Low Stock',
      category: 'Accessories'
    }
  ];

  return (
    <div className="min-h-screen bg-velvette-background">
      <header className="bg-white border-b border-velvette-primary/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-velvette-primary to-velvette-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <div>
                <h1 className="text-2xl font-playfair font-bold gradient-text">
                  Velvette Admin
                </h1>
                <p className="text-sm text-velvette-neutral/70">Dashboard</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-velvette-accent text-velvette-accent hover:bg-velvette-accent hover:text-white"
            >
              View Store
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <Card key={stat.title} className="soft-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-velvette-neutral/70 mb-1">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className={`text-sm ${stat.color} font-medium`}>
                          {stat.change} from last month
                        </p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Orders */}
            <Card className="soft-shadow">
              <CardHeader>
                <CardTitle className="font-playfair">Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-velvette-background rounded-lg">
                      <div>
                        <p className="font-semibold">{order.id}</p>
                        <p className="text-sm text-velvette-neutral/70">{order.customer}</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">${order.total}</p>
                        <p className="text-sm text-velvette-neutral/70">{order.items} items</p>
                      </div>
                      <Badge
                        className={
                          order.status === 'Delivered'
                            ? 'bg-velvette-success text-white'
                            : order.status === 'Shipped'
                            ? 'bg-velvette-accent text-white'
                            : 'bg-velvette-warning text-white'
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-playfair font-bold">Products</h2>
              <Button className="bg-velvette-primary hover:bg-velvette-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>

            <Card className="soft-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 bg-velvette-background rounded-lg">
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-velvette-neutral/70">{product.category}</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">${product.price}</p>
                        <p className="text-sm text-velvette-neutral/70">Stock: {product.stock}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={
                            product.status === 'Active'
                              ? 'bg-velvette-success text-white'
                              : 'bg-velvette-warning text-white'
                          }
                        >
                          {product.status}
                        </Badge>
                        <Button size="icon" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="text-velvette-warning">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-playfair font-bold">Orders</h2>
              <div className="flex space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Orders</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Card className="soft-shadow">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-velvette-background rounded-lg">
                      <div>
                        <h3 className="font-semibold">{order.id}</h3>
                        <p className="text-sm text-velvette-neutral/70">{order.customer}</p>
                        <p className="text-xs text-velvette-neutral/50">{order.date}</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">${order.total}</p>
                        <p className="text-sm text-velvette-neutral/70">{order.items} items</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={
                            order.status === 'Delivered'
                              ? 'bg-velvette-success text-white'
                              : order.status === 'Shipped'
                              ? 'bg-velvette-accent text-white'
                              : 'bg-velvette-warning text-white'
                          }
                        >
                          {order.status}
                        </Badge>
                        <Button size="icon" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers" className="space-y-6">
            <h2 className="text-2xl font-playfair font-bold">Customers</h2>
            <Card className="soft-shadow">
              <CardContent className="p-6">
                <p className="text-center text-velvette-neutral/70 py-8">
                  Customer management features will be available once connected to Supabase.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-playfair font-bold">Settings</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="soft-shadow">
                <CardHeader>
                  <CardTitle className="font-playfair">Store Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="storeName">Store Name</Label>
                    <Input id="storeName" defaultValue="Velvette" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="storeDescription">Description</Label>
                    <Textarea 
                      id="storeDescription" 
                      defaultValue="Fashion that speaks to your soul. Curated pieces for the modern, confident woman."
                    />
                  </div>
                  <Button className="bg-velvette-primary hover:bg-velvette-primary/90">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card className="soft-shadow">
                <CardHeader>
                  <CardTitle className="font-playfair">Shipping Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="freeShipping">Free Shipping Threshold</Label>
                    <Input id="freeShipping" type="number" defaultValue="75" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shippingRate">Standard Shipping Rate</Label>
                    <Input id="shippingRate" type="number" defaultValue="5.99" />
                  </div>
                  <Button className="bg-velvette-primary hover:bg-velvette-primary/90">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
