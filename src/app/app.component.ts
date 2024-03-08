import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './shared/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewsComponent } from './shared/news/news.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { ConnectFormComponent } from './shared/connect-form/connect-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ConnectFormComponent,
    HttpClientModule,
    FooterComponent,
    MatProgressBarModule,
    MatCardModule,
    RouterOutlet,
    MatSlideToggleModule,
    HeaderComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NewsComponent,
    MatGridListModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
})
export class AppComponent {}
