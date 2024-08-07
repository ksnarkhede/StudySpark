import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HomeCardsComponent } from "../home-cards/home-cards.component";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HomeCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(){}

}
