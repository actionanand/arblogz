import { Component, Input, ContentChildren, QueryList, AfterContentInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';

@Component({
  selector: 'Tabs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tabs-container">
      <div class="tabs-header">
        <button 
          *ngFor="let tab of getTabsArray()"
          [class.active]="tab.value === selectedValue"
          (click)="selectTab(tab.value)"
          class="tab-button">
          {{ tab.label }}
        </button>
      </div>
      <div class="tabs-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .tabs-container {
      margin: 16px 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }
    
    .tabs-header {
      display: flex;
      gap: 0;
      margin-bottom: 0;
      border-bottom: 1px solid #e1e5e9;
      background-color: #f8f9fa;
      border-radius: 6px 6px 0 0;
      padding: 0 8px;
    }
    
    .tab-button {
      padding: 12px 16px;
      border: none;
      background: transparent;
      cursor: pointer;
      font-weight: 500;
      color: #656d76;
      font-size: 14px;
      transition: all 0.15s ease;
      border-bottom: 2px solid transparent;
      position: relative;
    }
    
    .tab-button:hover {
      color: #1976d2;
      background-color: rgba(25, 118, 210, 0.05);
    }
    
    .tab-button.active {
      color: #1976d2;
      border-bottom-color: #1976d2;
      background-color: #fff;
      font-weight: 600;
    }
    
    .tabs-content {
      padding: 20px;
      border: 1px solid #e1e5e9;
      border-top: none;
      border-radius: 0 0 6px 6px;
      background: #fff;
      min-height: 60px;
    }
  `]
})
export class TabsComponent implements OnInit, AfterContentInit {
  @Input() defaultValue?: string;
  @Input() values?: Array<{label: string, value: string}>;
  
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  
  selectedValue: string = '';

  ngOnInit() {
    // Initialize with values array if provided
    if (this.values && this.values.length > 0) {
      this.selectedValue = this.defaultValue || this.values[0].value;
    }
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.initializeTabs();
      
      // Listen for tab changes
      this.tabs.changes.subscribe(() => {
        setTimeout(() => this.initializeTabs(), 0);
      });
    }, 0);
  }

  private initializeTabs() {
    if (this.values && this.values.length > 0) {
      // Use values prop
      this.selectedValue = this.defaultValue || this.values[0].value;
    } else if (this.tabs && this.tabs.length > 0) {
      // Use content children
      const defaultTab = this.tabs.find(tab => tab.default);
      this.selectedValue = this.defaultValue || defaultTab?.value || this.tabs.first?.value || '';
    }
    
    this.updateTabVisibility();
  }

  selectTab(value: string) {
    this.selectedValue = value;
    this.updateTabVisibility();
  }

  private updateTabVisibility() {
    if (this.tabs) {
      this.tabs.forEach(tab => {
        tab.active = tab.value === this.selectedValue;
      });
    }
  }

  getTabsArray() {
    if (this.values && this.values.length > 0) {
      return this.values;
    }
    
    if (this.tabs) {
      return this.tabs.map(tab => ({
        label: tab.label,
        value: tab.value
      }));
    }
    
    return [];
  }
}