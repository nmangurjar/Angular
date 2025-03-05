import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logoPath: string = 'https://images.yourstory.com/cs/images/companies/logo-1586419574337.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75';
  bridgelabzUrl: string = 'https://www.bridgelabz.com';
  userName: string = '';  // This will store the user input

  openBridgeLabzSite() {
    window.open(this.bridgelabzUrl, '_blank');
  }
}
