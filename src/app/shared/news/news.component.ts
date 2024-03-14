import { Component, OnInit } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    NgFor,
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  articles: any[];
  newsItems: any[] = [];
  resimler: string[] = [
    'assets/İmages/a.jpg',
    'assets/İmages/b.jpg',
    'assets/İmages/c.jpg',
    'assets/İmages/d.jpg',
    'assets/İmages/e.jpg',
    'assets/İmages/f.jpg',
    'assets/İmages/g.jpg',
    'assets/İmages/h.jpg',
    'assets/İmages/i.jpg',
    'assets/İmages/j.jpg',
    'assets/İmages/k.jpg',
    'assets/İmages/l.jpg',
    'assets/İmages/m.jpg',
    'assets/İmages/n.jpg',
  ];
  randomIndex: number;
  resimyolu: string;
  x =
    'https://newsapi.org/v2/top-headlines?country=tr&apiKey={your-key}';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<any>(this.x).subscribe((data: any) => {
      this.articles = data.articles;
    });
  }
  randomImages() {
    const randomImage: string[] = [];
    this.randomIndex = Math.floor(Math.random() * this.resimler.length);
    randomImage.push(this.resimler[this.randomIndex]);
    return randomImage;
  }

  goToNews(newsLink: string) {
    window.open(newsLink, '_blank');
    console.log('routing to news..');
  }
}
