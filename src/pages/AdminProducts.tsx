
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductForm from '@/components/ProductForm';
import ProductList from '@/components/ProductList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const AdminProducts = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleProductCreated = () => {
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-velvette-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-playfair font-bold mb-2">Product Management</h1>
            <p className="text-velvette-neutral/70">Manage your store products</p>
          </div>
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            {showAddForm ? 'Cancel' : 'Add Product'}
          </Button>
        </div>

        <div className="space-y-8">
          {showAddForm && (
            <ProductForm onSuccess={handleProductCreated} />
          )}
          
          <ProductList />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminProducts;
