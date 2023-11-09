//ts : typescript만 사용할 때
//tsx : react component에서 사용 시

export interface Product {
  id: number;
  brand: string;
  name: string;
  price: number; //소수점?
  price_sign: any; //null?
  currency: any; //null
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number;
  category: any; //null
  product_type: string;
  tag_list: any[]; //[]
  created_at: string; //"2016-10-01T18:36:15.012Z"
  updated_at: string;
  product_api_url: string;
  api_featured_image: string;
  product_colors: any[]; //[]
}
