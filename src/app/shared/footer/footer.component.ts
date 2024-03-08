import { Component } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatCardModule,
    MatToolbar,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatGridListModule,
    MatIconModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor() {}
  deneme() {}
}
