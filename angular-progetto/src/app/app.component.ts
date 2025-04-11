import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ProductListComponentComponent } from './product-list-component/product-list-component.component'; // Importa il componente prodotto

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponentComponent, FormsModule],  // Assicurati di includere FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lavoro-gruppo';
}
