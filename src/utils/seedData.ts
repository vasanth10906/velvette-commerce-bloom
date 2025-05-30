
import { supabase } from '@/integrations/supabase/client';

export const seedSampleProducts = async () => {
  try {
    // Get category IDs first
    const { data: categories } = await supabase
      .from('categories')
      .select('id, name');

    if (!categories || categories.length === 0) {
      console.error('No categories found. Please ensure categories are created first.');
      return;
    }

    const dressCategory = categories.find(c => c.name.toLowerCase().includes('dress'));
    const topCategory = categories.find(c => c.name.toLowerCase().includes('top'));
    const accessoryCategory = categories.find(c => c.name.toLowerCase().includes('accessor'));
    const loungeCategory = categories.find(c => c.name.toLowerCase().includes('lounge'));

    const sampleProducts = [
      {
        name: 'Sunset Midi Dress',
        description: 'A beautiful flowing midi dress perfect for any occasion. Made with premium fabric and designed for comfort and style.',
        price: 129.99,
        discount_price: 89.99,
        stock_quantity: 25,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        images: ['https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop&crop=center'],
        tags: ['dress', 'midi', 'elegant', 'summer'],
        category_id: dressCategory?.id,
        is_featured: true,
        is_trending: true
      },
      {
        name: 'Cloud Comfort Sweater',
        description: 'Incredibly soft and cozy sweater that feels like wearing a cloud. Perfect for layering or wearing on its own.',
        price: 65.99,
        stock_quantity: 30,
        sizes: ['XS', 'S', 'M', 'L'],
        images: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop&crop=center'],
        tags: ['sweater', 'cozy', 'winter', 'soft'],
        category_id: topCategory?.id,
        is_featured: false,
        is_trending: true
      },
      {
        name: 'Vintage Leather Bag',
        description: 'Timeless leather handbag with vintage-inspired design. Spacious interior with multiple compartments for organization.',
        price: 199.99,
        discount_price: 149.99,
        stock_quantity: 15,
        sizes: ['One Size'],
        images: ['https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=500&fit=crop&crop=center'],
        tags: ['bag', 'leather', 'vintage', 'handbag'],
        category_id: accessoryCategory?.id,
        is_featured: true,
        is_trending: true
      },
      {
        name: 'Cozy Lounge Set',
        description: 'Ultra-comfortable matching lounge set perfect for relaxing at home or casual outings. Soft, breathable fabric.',
        price: 79.99,
        stock_quantity: 20,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        images: ['https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=500&fit=crop&crop=center'],
        tags: ['loungewear', 'set', 'comfortable', 'casual'],
        category_id: loungeCategory?.id,
        is_featured: false,
        is_trending: true
      },
      {
        name: 'Classic White Tee',
        description: 'Essential white t-shirt made from premium cotton. A wardrobe staple that goes with everything.',
        price: 29.99,
        stock_quantity: 50,
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        images: ['https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=500&fit=crop&crop=center'],
        tags: ['tee', 'basic', 'cotton', 'classic'],
        category_id: topCategory?.id,
        is_featured: true,
        is_trending: false
      },
      {
        name: 'Floral Summer Dress',
        description: 'Light and airy floral dress perfect for summer days. Features a flattering A-line silhouette.',
        price: 95.99,
        stock_quantity: 18,
        sizes: ['XS', 'S', 'M', 'L'],
        images: ['https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop&crop=center'],
        tags: ['dress', 'floral', 'summer', 'aline'],
        category_id: dressCategory?.id,
        is_featured: true,
        is_trending: false
      }
    ];

    const { data, error } = await supabase
      .from('products')
      .insert(sampleProducts)
      .select();

    if (error) {
      console.error('Error inserting sample products:', error);
      return;
    }

    console.log('Sample products created successfully:', data);
    return data;
  } catch (error) {
    console.error('Error seeding sample products:', error);
  }
};
