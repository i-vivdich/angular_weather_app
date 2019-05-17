import { UserService } from './../_services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() toggled: EventEmitter<any> = new EventEmitter();

  emitSidebarCall() {
    this.toggled.emit(true);
  }

  private user: User;

  constructor(
    private userService: UserService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
        'github',
        sanitizer.bypassSecurityTrustResourceUrl(
          '../../assets/svg/github.svg'
        )
      );
  }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

}
