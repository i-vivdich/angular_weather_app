import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggled: EventEmitter<any> = new EventEmitter();

  emitSidebarCall() {
    this.toggled.emit(true);
  }

  constructor() { }

  ngOnInit() {
  }

}
