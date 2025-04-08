import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-lavoro-gruppo';
}