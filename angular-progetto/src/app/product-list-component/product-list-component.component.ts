import { Component } from '@angular/core'; 
// Importa la classe 'Component' da Angular per definire un componente.

import { ProductDetailComponentComponent } from '../product-detail-component/product-detail-component.component'; 
// Importa il componente 'ProductDetailComponentComponent' per visualizzare i dettagli del prodotto selezionato.

import { CommonModule } from '@angular/common'; 
// Importa il modulo 'CommonModule' che include funzionalità comuni di Angular (come il supporto per ngIf, ngFor, etc.).

import { FormsModule } from '@angular/forms'; 
// Importa il modulo 'FormsModule' per gestire i moduli in Angular (in particolare per il two-way data binding).

@Component({
  selector: 'app-product-list-component', 
  // Definisce il selettore del componente (il nome dell'elemento HTML che rappresenta questo componente).

  imports: [CommonModule, ProductDetailComponentComponent, FormsModule], 
  // Specifica i moduli importati necessari per questo componente.

  templateUrl: './product-list-component.component.html', 
  // Collega il template HTML per il componente.

  styleUrl: './product-list-component.component.css' 
  // Collega il file CSS per gli stili del componente.
})
export class ProductListComponentComponent {
  // Definizione della classe del componente

  products = [
    { name: 'Visore per Realtà Virtuale', price: 499, description: 'Esperienza immersiva in realtà virtuale per il gaming' },
    { name: 'Caricatore Portatile', price: 39, description: 'Power bank compatto per la ricarica in movimento' },
    { name: 'Scooter Elettrico', price: 350, description: 'Scooter elettrico ecologico per gli spostamenti quotidiani' },
    { name: 'Hub Smart Home', price: 150, description: 'Centro di controllo per dispositivi smart' },
    { name: 'TV 4K', price: 899, description: 'TV Ultra HD 4K con funzionalità smart' }
  ];
  // Array di oggetti 'products' che contiene i prodotti da visualizzare nella lista, ognuno con nome, prezzo e descrizione.

  selectedProduct = null;
  // Variabile per memorizzare il prodotto selezionato (inizialmente è null).

  selectProduct(product: any) {
    this.selectedProduct = product; 
    // Imposta il prodotto selezionato, in modo che vengano visualizzati i dettagli di quel prodotto.
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);  
    // Rimuove il prodotto dalla lista in base all'indice passato (indice del prodotto da eliminare).
  }

  // Oggetto per il nuovo prodotto
  newProduct = { name: '', price: 0, description: '' };
  // Oggetto vuoto che contiene le informazioni del nuovo prodotto da aggiungere.

  addProduct() {
    // Funzione per aggiungere un nuovo prodotto
    if (this.newProduct.name && this.newProduct.price && this.newProduct.description) {
      // Verifica che il nuovo prodotto abbia nome, prezzo e descrizione validi.
      this.products.push({ ...this.newProduct }); 
      // Aggiunge una copia del nuovo prodotto alla lista dei prodotti esistenti.
      this.newProduct = { name: '', price: 0, description: '' }; 
      // Resetta l'oggetto newProduct, per poter inserire un nuovo prodotto successivamente.
    }
  }
}
