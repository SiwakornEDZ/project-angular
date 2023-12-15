import { Component, Input } from '@angular/core';
import { booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css',
  template: `
  <h2>Child component with &#64;Input() metadata configurations</h2>

  <p>
    Today's item: {{item}}
    Item's Availability: {{itemAvailability}}
  </p>
  `
})
export class ItemDetailComponent {
    @Input() item = ''; // <-- Decorator
}
