import { Injectable } from '@nestjs/common';

interface Product {
  id: string;
  name: string;
  description: string;
  photoUrl: string;
}

export class ProductsService {

  async getProducts(): Promise<Product[]> {
    // Fetch products from NestJS backend
    const response = await fetch('/products');
    const products = await response.json();
    
    // Store in localStorage
    localStorage.setItem('products', JSON.stringify(products));
    
    return products;
  }

  async getProductPhoto(product: Product) {
    // Fetch photo from backend
    const photoResponse = await fetch(`/photos/${product.id}`);
    const photoUrl = await photoResponse.text();
    
    // Store in localStorage
    const photos = JSON.parse(localStorage.getItem('photos') || '{}');
    photos[product.id] = photoUrl;
    localStorage.setItem('photos', JSON.stringify(photos));
    
    return photoUrl;
  }

}
