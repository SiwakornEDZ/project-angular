import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    standalone: true,
    imports: [MatCardModule]
})
export class CardComponent {

}
