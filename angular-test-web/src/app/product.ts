import { ProductVariance } from './product-variance';
export interface Product {
  id: string;
  name: string;
  description: string;
  image_path: string;
  variance: ProductVariance[]
}
