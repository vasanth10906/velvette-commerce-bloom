
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/hooks/useProducts';
import { Link } from 'react-router-dom';
import { Plus, Package, TrendingUp, Star } from 'lucide-react';

const AdminDashboard = () => {
  const { data: products, isLoading } = useProducts();

  const featuredCount = products?.filter(p => p.is_featured).length || 0;
  const trendingCount = products?.filter(p => p.is_trending).length || 0;
  const totalProducts = products?.length || 0;

  return (
    <div className="min-h-screen bg-velvette-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold mb-2">Admin Dashboard</h1>
          <p className="text-velvette-neutral/70">Manage your Velvette store</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Package className="h-4 w-4" />
                Total Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isLoading ? '...' : totalProducts}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Trending Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isLoading ? '...' : trendingCount}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
                <Star className="h-4 w-4" />
                Featured Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isLoading ? '...' : featuredCount}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Low Stock
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isLoading ? '...' : products?.filter(p => p.stock_quantity < 10).length || 0}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Products */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Products</CardTitle>
                <Link to="/admin/products">
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <p>Loading products...</p>
                ) : products && products.length > 0 ? (
                  <div className="space-y-4">
                    {products.slice(0, 5).map((product) => (
                      <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <img
                          src={product.images?.[0] || 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=center'}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{product.name}</h3>
                          <p className="text-sm text-gray-600">${product.price}</p>
                          <div className="flex gap-2 mt-1">
                            {product.is_trending && (
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Trending</span>
                            )}
                            {product.is_featured && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Featured</span>
                            )}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          Stock: {product.stock_quantity}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500 mb-4">No products found. Create your first product to get started.</p>
                    <Link to="/admin/products">
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Your First Product
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/admin/products">
                  <Button className="w-full justify-start" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Product
                  </Button>
                </Link>
                <Link to="/admin/products">
                  <Button className="w-full justify-start" variant="outline">
                    <Package className="h-4 w-4 mr-2" />
                    Manage Products
                  </Button>
                </Link>
                <Button className="w-full justify-start" variant="outline" disabled>
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Store Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Products Active:</span>
                    <span className="font-medium">{totalProducts}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Featured Products:</span>
                    <span className="font-medium">{featuredCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trending Products:</span>
                    <span className="font-medium">{trendingCount}</span>
                  </div>
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

export default AdminDashboard;
