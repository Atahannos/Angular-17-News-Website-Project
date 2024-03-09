import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-connect-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
  ],
  templateUrl: './connect-form.component.html',
  styleUrl: './connect-form.component.scss',
})
export class ConnectFormComponent {
  Iletisim: FormGroup = this.formBuilder.group({
    name: '',
    message: '',
    mail: '',
  });
  constructor(private formBuilder: FormBuilder) {}

  consoleAt() {
    console.log(this.Iletisim.value);
  }
  async send() {
    emailjs.init('GozrXfAHkJInXsFHt');
    let response = await emailjs.send('service_s3dpkwy', 'template_criow3w', {
      name: this.Iletisim.value.name,
      message: this.Iletisim.value.message,
      mail: this.Iletisim.value.mail,
    });
    alert('gönderdim kanzi');
    this.Iletisim.reset();
  }
}
