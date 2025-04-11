import { Component } from '@angular/core';
import { ProductDetailComponentComponent } from '../product-detail-component/product-detail-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule, ProductDetailComponentComponent, FormsModule],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent {
  products = [
    { name: 'Visore per Realtà Virtuale', price: 499, description: 'Esperienza immersiva in realtà virtuale per il gaming' },
    { name: 'Caricatore Portatile', price: 39, description: 'Power bank compatto per la ricarica in movimento' },
    { name: 'Scooter Elettrico', price: 350, description: 'Scooter elettrico ecologico per gli spostamenti quotidiani' },
    { name: 'Hub Smart Home', price: 150, description: 'Centro di controllo per dispositivi smart' },
    { name: 'TV 4K', price: 899, description: 'TV Ultra HD 4K con funzionalità smart' }
  ];
  

  selectedProduct: Product | null = { name: '', price: 0, description: ''};

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  newProduct: Product = { name: '', price: 0, description: '' };

  addProduct() {
    if (this.newProduct.name && this.newProduct.price && this.newProduct.description) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', price: 0, description: ''};
    }
  }
}