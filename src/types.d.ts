export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrls: string[];
};

export type CartItem = {
  product: Product;
  quantity: number;
};
