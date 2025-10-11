import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  styles: [
    `.hello-container { border: 2px solid #007acc; padding: 16px; margin: 16px 0; border-radius: 8px; background: #f8fafc; }`,
    `.hello-title { font-size: 1.1rem; font-weight: 600; color: #007acc; margin-bottom: 8px; }`,
    `.hello-help { background: #e8f5e8; padding: 8px; border-radius: 4px; color: #256029; margin-bottom: 10px; font-size: 1rem; }`,
    `.hello-toggle-btn { padding: 8px 16px; background: #007acc; color: #fff; border: none; border-radius: 4px; cursor: pointer; margin: 8px 0; font-size: 1rem; font-weight: 500; transition: background 0.2s; }`,
    `.hello-toggle-btn:hover { background: #005fa3; }`
  ],
  template: `
    <div class="hello-container">
      <p class="hello-title">Hello from Angular!!</p>
      @if (show) {
        <p class="hello-help">{{ helpText }}</p>
      }
      <button (click)="toggle()" class="hello-toggle-btn">Toggle</button>
    </div>
  `,
})
export class HelloComponent {
  @Input() helpText = 'help';

  show = false;

  toggle() {
    this.show = !this.show;
  }
}