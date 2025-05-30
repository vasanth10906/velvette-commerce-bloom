
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { seedSampleProducts } from '@/utils/seedData';
import { useToast } from '@/hooks/use-toast';

const AdminSeeder = () => {
  const [isSeeding, setIsSeeding] = useState(false);
  const { toast } = useToast();

  const handleSeedProducts = async () => {
    setIsSeeding(true);
    try {
      await seedSampleProducts();
      toast({
        title: "Success!",
        description: "Sample products have been created successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create sample products. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSeeding(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Quick Setup</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Get started quickly by adding sample products to your store.
          </p>
          <Button 
            onClick={handleSeedProducts}
            disabled={isSeeding}
            className="w-full"
          >
            {isSeeding ? 'Creating Products...' : 'Add Sample Products'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminSeeder;
