
export async function listProducts() {
    try {
      const [mensRes, womensRes] = await Promise.all([
        fetch('https://dummyjson.com/products/category/mens-shoes'),
        fetch('https://dummyjson.com/products/category/womens-shoes'),
      ]);
  
      const [mensData, womensData] = await Promise.all([
        mensRes.json(),
        womensRes.json(),
      ]);
  
      return [...mensData.products, ...womensData.products].slice(0, 30);
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }
  
export async function getProductById(id: number) {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      return await res.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }

}  