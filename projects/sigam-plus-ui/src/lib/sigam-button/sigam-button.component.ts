
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sigam-button',
  templateUrl: './sigam-button.component.html',
  styleUrls: ['./sigam-button.component.scss']
})
export class SigamButtonComponent {
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() content: string = '';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('Button clicked');
  }
}
