import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  styles: [`
    .btn-toggle {
      background-color: #04AA6D; /* Green */
      color: white;
      padding: 5px 7px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease; /* Smooth transition for hover effect */
    }

    .btn-toggle:hover {
      background-color: #038C5A; /* Darker green on hover */
    }
    `],
  template: `
    <p>Hello from Angular!!</p>

    @if (show) {
      <p> {{ helpText }} </p>
    }

    <button (click)="toggle()" class="btn-toggle">Toggle</button>
  `,
})
export class HelloComponent {
  @Input() helpText = 'help';

  show = false;

  toggle() {
    this.show = !this.show;
  }
}