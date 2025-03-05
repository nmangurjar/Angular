import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  logoPath: string;
  bridgelabzUrl: string;

  constructor() {

    this.logoPath = 'https://images.yourstory.com/cs/images/companies/logo-1586419574337.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75';
    this.bridgelabzUrl = 'https://www.bridgelabz.com';
  }

  openBridgeLabzSite() {
    window.open(this.bridgelabzUrl, '_blank');
  }
}


