import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  username = '';
  password = '';

  async login() {
    // login api
    this.http
      .post('https://localhost:7014/login', {
        username: this.username,
        password: this.password,
      })
      .subscribe(
        (res: any) => {
          alert(`Login Status: ${res.message}`);
        },
        (error) => {
          console.log('error', error);
        }
      );
  }
}
