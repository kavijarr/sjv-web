import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import AOS from 'aos';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(){
    AOS.init();
  }
}
