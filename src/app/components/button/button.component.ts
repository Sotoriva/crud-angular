import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input()
  badge: string;

  @Input()
  disabled: boolean = false;

  @Input()
  size: 'small' | 'normal' | 'big' = 'normal';

  @Input()
  outline: boolean;

  @Input()
  buttonColor: string = 'primary';

  @Input()
  badgeColor: string = 'dark';

  @Input()
  badgeCorner: boolean;

  constructor() {}

  ngOnInit() {}

  getButtonSizeClass() {
    switch (this.size) {
      case 'small':
        return 'btn-sm';
      case 'normal':
        return '';
      case 'big':
        return 'btn-lg';
    }
  }

  getButtonClassColor() {
    if (this.outline) {
      return 'btn-outline-' + this.buttonColor;
    }
    return 'btn-' + this.buttonColor;
  }
}
