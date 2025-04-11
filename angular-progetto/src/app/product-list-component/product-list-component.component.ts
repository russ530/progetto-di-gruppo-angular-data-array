import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
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
  styleUrls: ['./product-list-component.component.css'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('250ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ])
  ]
})
export class ProductListComponentComponent implements OnInit {
  products = [
    { name: 'Visore Realtà Virtuale', price: 499, description: 'Esperienza immersiva in realtà virtuale per il gaming' },
    { name: 'Caricatore Portatile', price: 39, description: 'Power bank compatto per la ricarica in movimento' },
    { name: 'Scooter Elettrico', price: 350, description: 'Scooter elettrico ecologico per gli spostamenti quotidiani' },
    { name: 'Hub Smart Home', price: 150, description: 'Centro di controllo per dispositivi smart' },
    { name: 'TV 4K', price: 899, description: 'TV Ultra HD 4K con funzionalità smart' },
    { name: 'Cuffie Bluetooth', price: 120, description: 'Cuffie senza fili con suono di alta qualità' },
    { name: 'Smartwatch', price: 220, description: 'Orologio intelligente con monitoraggio della salute' },
    { name: 'Frigorifero Smart', price: 800, description: 'Frigorifero con WiFi per controllare la temperatura a distanza' },
    { name: 'Lampada LED Smart', price: 55, description: 'Lampada LED con controllo vocale' },
    { name: 'Macchina Caffè Espresso', price: 180, description: 'Macchina da caffè con sistema espresso' },
    { name: 'Drone con Telecamera 4K', price: 899, description: 'Drone con stabilizzazione ottica e fotocamera 4K per riprese aeree professionali' },
    { name: 'Smart Speaker', price: 129, description: 'Altoparlante intelligente con assistente vocale per il controllo della casa smart' },
    { name: 'Laptop Gaming 15"', price: 1299, description: 'Laptop potente con display da 15 pollici e scheda grafica NVIDIA per il gaming' },
    { name: 'Proiettore 4K', price: 649, description: 'Proiettore portatile con risoluzione 4K per un\'esperienza cinema a casa' },
    { name: 'Action Camera GoPro Hero 10', price: 349, description: 'Action camera con qualità video 4K e design resistente all\'acqua' },
    { name: 'Smartphone Pieghevole', price: 1799, description: 'Smartphone pieghevole con display AMOLED e fotocamera da 108MP' },
    { name: 'Cuffie Noise Cancelling', price: 249, description: 'Cuffie over-ear con tecnologia di cancellazione del rumore attivo per una qualità audio superiore' },
    { name: 'Oculus Quest 2', price: 399, description: 'Visore VR standalone, senza fili, con giochi e esperienze in realtà virtuale' },
    { name: 'Chiavetta USB 3.0 256GB', price: 49, description: 'Chiavetta USB 3.0 con grande capacità di memoria, ideale per archiviare e trasferire dati velocemente' },
    { name: 'Termometro Smart per Smartphone', price: 79, description: 'Termometro digitale intelligente che si collega allo smartphone per monitorare la temperatura corporea' },
    { name: 'Cuffie Noise Cancelling', price: 250, description: 'Cuffie over-ear con cancellazione del rumore attiva per un\'esperienza audio immersiva' },
    { name: 'Macbook Pro 14"', price: 2499, description: 'Laptop Apple con chip M1 Pro, display Retina da 14 pollici e 16 GB di RAM' },
    { name: 'GoPro Hero 10', price: 499, description: 'Action cam 4K ultra-resistente per riprese in movimento e avventure all\'aperto' },
    { name: 'Robot Aspirapolvere', price: 399, description: 'Robot aspirapolvere con tecnologia di mappatura intelligente e controllo tramite app' },
    { name: 'Altoparlante Bluetooth', price: 129, description: 'Altoparlante portatile con audio di alta qualità e batteria a lunga durata' }
  ];

  selectedProduct: Product | null = null;
  searchQuery: string = '';  // Variabile per la ricerca
  filteredProducts: Product[] = [];

  ngOnInit() {
    // Inizializza la lista dei prodotti filtrati
    this.filteredProducts = [...this.products];
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.filterProducts();  // Riaffina la lista dopo la rimozione
  }

  newProduct: Product = { name: '', price: 0, description: '' };

  addProduct() {
    if (this.newProduct.name && this.newProduct.price && this.newProduct.description) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', price: 0, description: '' };
      this.filterProducts();  // Riaffina la lista dopo l'aggiunta
    }
  }

  closeModal() {
    this.selectedProduct = null;
  }

  // Funzione per filtrare i prodotti in base alla ricerca
  filterProducts() {
    const query = this.searchQuery.trim().toLowerCase();
  
    if (query === '') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().startsWith(query) // <-- CERCA SOLO ALL'INIZIO
      );
    }
  }
 // Scroll alla sezione di aggiunta prodotto
scrollToAddProduct() {
  const element = document.getElementById('aggiungi-prodotto');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Scroll alla sezione di gestione prodotti
scrollToManageProducts() {
  const element = document.getElementById('gestione-prodotti');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

}
