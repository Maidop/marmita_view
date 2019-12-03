import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() displayItem = false; // Input, para dar acesso a outro component
  @Output() onClose = new EventEmitter<void>();
  titulo: "Login";

  constructor() { }

  ngOnInit() {
  }

}
