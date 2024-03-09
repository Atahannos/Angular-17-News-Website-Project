import { Component, OnInit } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  dovizLink = 'https://finans.truncgil.com/today.json';
  dovizata: any[];
  dolar: number;
  euro: number;
  yen: number;
  ruble: number;
  gumus: number;
  ons: number;
  altın: number;

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get(this.dovizLink).subscribe((data: any) => {
      this.dolar = data.USD.Alış;
      this.euro = data.EUR.Alış;
      this.yen = data.JPY.Alış;
      this.ruble = data.RUB.Alış;
      this.gumus = data.gumus.Alış;
      this.ons = data.ons.Alış;
    });
  }
  deneme() {
    const linkedinLink = 'https://www.linkedin.com/in/atahangune/';
    window.open(linkedinLink, '_blank');
    console.log('bastım');
  }

  github() {
    const githubLink = 'https://github.com/Atahannos';
    window.open(githubLink, '_blank');
    console.log('bastım');
  }

  popup() {
    alert('soon..');
  }
  isChecked = false;

  toggleTheme() {
    this.isChecked = !this.isChecked;
  }
}
