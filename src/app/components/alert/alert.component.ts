import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input()
  color: string = 'primary';

  @Input()
  closeable: boolean;

  @Output()
  onClose = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
