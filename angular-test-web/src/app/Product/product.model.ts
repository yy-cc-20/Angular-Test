import { ProductVariance } from './product-variance.model';
export interface Product {
  id: string;
  name: string;
  description: string;
  image_path: string;
  lower_price_range?: number;
  upper_price_range?: number;
  variance_list?: ProductVariance[];
}
