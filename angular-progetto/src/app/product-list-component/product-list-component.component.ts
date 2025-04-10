import { Component } from '@angular/core';
import { ProductDetailComponentComponent } from '../product-detail-component/product-detail-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule, ProductDetailComponentComponent, FormsModule],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent {
  products: Product[] = [
    { name: 'Visore per Realtà Virtuale', price: 499, description: 'Esperienza immersiva in realtà virtuale per il gaming', imageUrl: 'https://via.placeholder.com/150/007bff/FFFFFF?Text=VR' },
    { name: 'Caricatore Portatile', price: 39, description: 'Power bank compatto per la ricarica in movimento', imageUrl: 'https://via.placeholder.com/150/6c757d/FFFFFF?Text=Charger' },
    { name: 'Scooter Elettrico', price: 350, description: 'Scooter elettrico ecologico per gli spostamenti quotidiani', imageUrl: 'https://via.placeholder.com/150/28a745/FFFFFF?Text=Scooter' },
    { name: 'Hub Smart Home', price: 150, description: 'Centro di controllo per dispositivi smart', imageUrl: 'https://via.placeholder.com/150/dc3545/FFFFFF?Text=Hub' },
    { name: 'TV 4K', price: 899, description: 'TV Ultra HD 4K con funzionalità smart', imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sharpconsumer.it%2Ftv%2F55eh2e%2F&psig=AOvVaw1db3Wx3CJ6p0p_0TZMCLVQ&ust=1744411986986000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODVxJjHzowDFQAAAAAdAAAAABAE' }
  ];

  selectedProduct: Product | null = { name: '', price: 0, description: '', imageUrl: '' };

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  newProduct: Product = { name: '', price: 0, description: '', imageUrl: '' };

  addProduct() {
    if (this.newProduct.name && this.newProduct.price && this.newProduct.description) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', price: 0, description: '', imageUrl: '' };
    }
  }
}