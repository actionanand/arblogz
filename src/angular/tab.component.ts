import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Tab',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="active" class="tab-content">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .tab-content {
      /* Content styling can be added here if needed */
    }
  `]
})
export class TabComponent {
  @Input() value!: string;
  @Input() label!: string;
  @Input() default: boolean = false;
  
  active: boolean = false;
}