// Import dei moduli Angular necessari
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations'; // Per animazioni
import { ProductDetailComponentComponent } from '../product-detail-component/product-detail-component.component'; // Import del componente dettaglio prodotto
import { CommonModule } from '@angular/common'; // Modulo comune di Angular
import { FormsModule } from '@angular/forms'; // Per l'utilizzo di ngModel nei form

// Definizione dell'interfaccia Product per tipizzare gli oggetti prodotto
interface Product {
  name: string;
  price: number;
  description: string;
  image: string; // Campo per l'immagine del prodotto
}

// Decoratore del componente
@Component({
  selector: 'app-product-list-component', // Selettore per usare questo componente nel template
  imports: [CommonModule, ProductDetailComponentComponent, FormsModule], // Moduli importati per template e funzioni
  templateUrl: './product-list-component.component.html', // Template HTML del componente
  styleUrls: ['./product-list-component.component.css'], // Stile associato
  animations: [
    // Animazioni per la comparsa/scomparsa del dettaglio prodotto
    trigger('modalAnimation', [
      transition(':enter', [ // Quando il dettaglio entra
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('250ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [ // Quando il dettaglio esce
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ])
  ]
})
export class ProductListComponentComponent implements OnInit {
  products = [
    {
      name: 'Visore Realtà Virtuale',
      price: 499,
      description: 'Esperienza immersiva in realtà virtuale per il gaming',
      image: 'https://m.media-amazon.com/images/I/71DxOgGn3WL._AC_SX522_.jpg'
    },
    {
      name: 'Caricatore Portatile',
      price: 39,
      description: 'Power bank compatto per la ricarica in movimento',
      image: 'https://m.media-amazon.com/images/I/71JHEXgWWbL.__AC_SX300_SY300_QL70_ML2_.jpg'
    },
    {
      name: 'Scooter Elettrico',
      price: 350,
      description: 'Scooter elettrico ecologico per gli spostamenti quotidiani',
      image: 'https://m.media-amazon.com/images/I/71e2+51pnFL._AC_SY300_SX300_.jpg'
    },
    {
      name: 'Hub Smart Home',
      price: 150,
      description: 'Centro di controllo per dispositivi smart',
      image: 'https://m.media-amazon.com/images/I/31UZaioUO-L._SX522_.jpg'
    },
    {
      name: 'TV 4K',
      price: 899,
      description: 'TV Ultra HD 4K con funzionalità smart',
      image: 'https://m.media-amazon.com/images/I/71Il4wiqQ7L._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Cuffie Bluetooth',
      price: 120,
      description: 'Cuffie senza fili con suono di alta qualità',
      image: 'https://m.media-amazon.com/images/I/61yPRBPFStL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Smartwatch',
      price: 220,
      description: 'Orologio intelligente con monitoraggio della salute',
      image: 'https://m.media-amazon.com/images/I/61d57c-mBfL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Frigorifero Smart',
      price: 800,
      description: 'Frigorifero con WiFi per controllare la temperatura a distanza',
      image: 'https://m.media-amazon.com/images/I/8154LLpmkML._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Lampada LED Smart',
      price: 55,
      description: 'Lampada LED con controllo vocale',
      image: 'https://m.media-amazon.com/images/I/511hdAqgLTL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Macchina Caffè Espresso',
      price: 180,
      description: 'Macchina da caffè con sistema espresso',
      image: 'https://m.media-amazon.com/images/I/61Mi-xTc0ML._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Drone con Telecamera 4K',
      price: 899,
      description: 'Drone con stabilizzazione ottica e fotocamera 4K per riprese aeree professionali',
      image: 'https://m.media-amazon.com/images/I/717z4YYJykL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Smart Speaker',
      price: 129,
      description: 'Altoparlante intelligente con assistente vocale per il controllo della casa smart',
      image: 'https://m.media-amazon.com/images/I/71C3lbbeLsL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Laptop Gaming 15"',
      price: 1299,
      description: 'Laptop potente con display da 15 pollici e scheda grafica NVIDIA per il gaming',
      image: 'https://m.media-amazon.com/images/I/711r3RNmNoL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Proiettore 4K',
      price: 649,
      description: 'Proiettore portatile con risoluzione 4K per un\'esperienza cinema a casa',
      image: 'https://m.media-amazon.com/images/I/81licgoujPL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Action Camera GoPro Hero 10',
      price: 349,
      description: 'Action camera con qualità video 4K e design resistente all\'acqua',
      image: 'https://m.media-amazon.com/images/I/615eTO83jLL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Smartphone Pieghevole',
      price: 1799,
      description: 'Smartphone pieghevole con display AMOLED e fotocamera da 108MP',
      image: 'https://m.media-amazon.com/images/I/71WheH0tbuL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Cuffie Noise Cancelling',
      price: 249,
      description: 'Cuffie over-ear con tecnologia di cancellazione del rumore attivo per una qualità audio superiore',
      image: 'https://m.media-amazon.com/images/I/51JNhjr4McL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Oculus Quest 2',
      price: 399,
      description: 'Visore VR standalone, senza fili, con giochi e esperienze in realtà virtuale',
      image: 'https://m.media-amazon.com/images/I/71pZ7hyytWL._FMavif_AC_SR230,210_PQ50_.jpg'
    },
    {
      name: 'Chiavetta USB 3.0 256GB',
      price: 49,
      description: 'Chiavetta USB 3.0 con grande capacità di memoria, ideale per archiviare e trasferire dati velocemente',
      image: 'https://m.media-amazon.com/images/I/51sqAFCzf0L._FMavif_AC_SR230,210_PQ50_.jpg'
    },
    {
      name: 'Termometro Smart per Smartphone',
      price: 79,
      description: 'Termometro digitale intelligente che si collega allo smartphone per monitorare la temperatura corporea',
      image: 'https://m.media-amazon.com/images/I/71nNMM+5paL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Macbook Pro 14"',
      price: 2499,
      description: 'Laptop Apple con chip M1 Pro, display Retina da 14 pollici e 16 GB di RAM',
      image: 'https://m.media-amazon.com/images/I/61F42+I6LgL._AC_SX522_.jpg'
    },
    {
      name: 'GoPro Hero 10',
      price: 499,
      description: 'Action cam 4K ultra-resistente per riprese in movimento e avventure all\'aperto',
      image: 'https://m.media-amazon.com/images/I/61PL5ufIrQL._FMavif_AC_SR230,210_PQ50_.jpg'
    },
    {
      name: 'Robot Aspirapolvere',
      price: 399,
      description: 'Robot aspirapolvere con tecnologia di mappatura intelligente e controllo tramite app',
      image: 'https://m.media-amazon.com/images/I/61oMZGYU-XL._FMavif_AC_SR230,210_PQ50_.jpg'
    },
    {
      name: 'Altoparlante Bluetooth',
      price: 129,
      description: 'Altoparlante portatile con audio di alta qualità e batteria a lunga durata',
      image: 'https://m.media-amazon.com/images/I/81E6G7Btv-L._AC_UL480_FMwebp_QL65_.jpg'
    }
  ];
  
  selectedProduct: Product | null = null; // Prodotto selezionato (per mostrare i dettagli)
  searchQuery: string = ''; // Testo inserito nel campo di ricerca
  filteredProducts: Product[] = []; // Lista dei prodotti filtrati secondo la ricerca

  // Lifecycle hook che si esegue appena il componente è inizializzato
  ngOnInit() {
    // Inizializza i prodotti filtrati con tutta la lista completa
    this.filteredProducts = [...this.products];
  }

  // Funzione per selezionare un prodotto e mostrarlo nel dettaglio
  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  // Funzione per eliminare un prodotto dalla lista
  deleteProduct(index: number) {
    this.products.splice(index, 1); // Rimuove l'elemento all'indice specificato
    this.filterProducts(); // Aggiorna la lista filtrata
  }

  // Oggetto per contenere i dati del nuovo prodotto da aggiungere
  newProduct: Product = { name: '', price: 0, description: '', image:'' };

  // Aggiunge un nuovo prodotto alla lista
  addProduct() {
    // Controlla che i campi principali siano compilati
    if (this.newProduct.name && this.newProduct.price && this.newProduct.description) {
      this.products.push({ ...this.newProduct }); // Aggiunge il prodotto alla lista
      // Resetta i campi del form dopo l’aggiunta
      this.newProduct = { name: '', price: 0, description: '' , image:'' };
      this.filterProducts(); // Aggiorna la lista filtrata
    }
  }

  // Chiude il dettaglio prodotto (nasconde il componente dettaglio)
  closeModal() {
    this.selectedProduct = null;
  }

  // Filtra i prodotti in base alla ricerca (solo se il nome inizia con il testo cercato)
  filterProducts() {
    const query = this.searchQuery.trim().toLowerCase(); // Converte la query in minuscolo

    if (query === '') {
      // Se la query è vuota, mostra tutti i prodotti
      this.filteredProducts = [...this.products];
    } else {
      // Altrimenti filtra per nome che inizia con la query
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().startsWith(query)
      );
    }
  }

  // Scrolla automaticamente alla sezione "Aggiungi Prodotto"
  scrollToAddProduct() {
    const element = document.getElementById('aggiungi-prodotto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Effetto smooth scroll
    }
  }

  // Scrolla automaticamente alla sezione "Gestione Prodotti"
  scrollToManageProducts() {
    const element = document.getElementById('gestione-prodotti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Effetto smooth scroll
    }
  }
}