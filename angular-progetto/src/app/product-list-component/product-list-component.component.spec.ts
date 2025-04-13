// Importazioni necessarie per i test
import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa gli strumenti per configurare e testare un componente

// Importa il componente che vogliamo testare
import { ProductListComponentComponent } from './product-list-component.component';

// Blocca la descrizione del test per il componente ProductListComponentComponent
describe('ProductListComponentComponent', () => {
  let component: ProductListComponentComponent; // Variabile che conterrà l'istanza del componente
  let fixture: ComponentFixture<ProductListComponentComponent>; // Oggetto che fornisce accesso al DOM del componente

  // Eseguito prima di ogni test asincrono
  beforeEach(async () => {
    // Configura un modulo di test in Angular per il componente
    await TestBed.configureTestingModule({
      imports: [ProductListComponentComponent] // Usa `imports` perché il componente è standalone
    })
    .compileComponents(); // Compila il componente e i suoi template HTML/CSS

    // Crea un'istanza del componente da testare
    fixture = TestBed.createComponent(ProductListComponentComponent);

    // Assegna l'istanza alla variabile `component`
    component = fixture.componentInstance;

    // Triggera il rilevamento dei cambiamenti per aggiornare il DOM
    fixture.detectChanges();
  });

  // Test base: verifica che il componente venga creato correttamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Controlla che l'istanza del componente esista (non sia null o undefined)
  });
});
