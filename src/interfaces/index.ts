// export interface ProductInterface {
//     _id: string;
//     name: string;
//     image: string;
//     description: string;
//     brand: string;
//     category: string;
//     price: number;
//     countInStock: number;
//     rating: number;
//     numReviews: number;
//     reviews: Review[];
//   }
  
//   export interface CartItemInterface {
//     productId: string;
//     name: string;
//     image: string;
//     price: number;
//     countInStock: number;
//     qty: number;
//   }
  
//   export interface CartInterface {
//     cartItems: CartItemInterface[];
//     shippingDetails: ShippingDetails;
//     paymentMethod: string;
//     taxPrice: number;
//     shippingPrice: number;
//     itemsPrice: number;
//     totalPrice: number;
//   }
  
//   export interface UserInterface {
//     _id: string;
//     email: string;
//     name: string;
//     isAdmin: boolean;
//     accessToken: string;
//   }
  
//   export interface UserCredentials {
//     name: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
//   }
  
//   export interface UserEditCredentials {
//     name: string;
//     email: string;
//     isAdmin: boolean;
//   }
  
//   export interface ShippingDetails {
//     address: string;
//     city: string;
//     postalCode: string;
//     country: string;
//   }
  
//   export interface PaymentResult {
//     id: string;
//     status: string;
//     update_time: string;
//     email_address: string;
//   }
  
//   export interface OrderInterface {
//     _id?: string;
//     orderItems: CartItemInterface[];
//     shippingDetails: ShippingDetails;
//     paymentMethod: string;
//     taxPrice: number;
//     shippingPrice: number;
//     itemsPrice: number;
//     totalPrice: number;
//     isPaid?: boolean;
//     paidAt?: string;
//     isDelivered?: boolean;
//     deliveredAt?: string;
//     createdAt?: string;
//     paymentResult?: PaymentResult;
//     user?: {
//       name: string;
//       email: string;
//     };
//   }
  
//   export interface Review {
//     name?: string;
//     _id?: string;
//     user?: string;
//     createdAt?: string;
//     rating: number;
//     comment: string;
//   }
  
//   export interface PaginatedProducts {
//     products: ProductInterface[];
//     pages: number;
//     page: number;
//   }
  
export interface Slideshow {
    img: string;
    title: string;
    mainTitle: string;
    price: string;
  }

export interface SmallCardProduct {
  imageUrl: string;
  productName: string;
  description: string;
  rating: number;
  price: string;
}

export interface BigCardProduct {
    id: number;
    productName: string;
    brand: string;
    imageUrl: string;
    description: string;
    category: string;
    variant: string;
    size: string;
    color: string;
    tags: string[];
    sku: string;
    price: number;
    qty: number;
    points: number;
    originalPrice: number;
    discount: number;
  };