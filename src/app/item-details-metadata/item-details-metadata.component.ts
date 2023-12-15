import { Component,Input } from '@angular/core';
import { booleanAttribute } from '@angular/core';
@Component({
  selector: 'app-item-details-metadata',
  templateUrl: './item-details-metadata.component.html',
  styleUrl: './item-details-metadata.component.css',
  template: `
  <h2>Child component with &#64;Input() metadata configurations</h2>

  <p>
    Today's item: {{item}}
    Item's Availability: {{itemAvailability}}
  </p>
  `
})
export class ItemDetailsMetadataComponent {
  @Input({required: true}) item!: string;
  @Input({transform: booleanAttribute}) itemAvailability!: boolean;
}
