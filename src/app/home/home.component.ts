import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private http: HttpClient) {
    this.http.get(environment.apiUrl+'/api/hello').subscribe( (result) => {
      console.log('result', result, typeof result);
      this.text = result as string;
    });
  }
  text: string = '';
}
