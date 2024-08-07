import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-home-cards',
  standalone: true,
  imports: [],
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css'
})
export class HomeCardsComponent {
  @Input() cardTitle: String='';
  @Input() cardDescription: String='';

}
