import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homeform',
  templateUrl: './homeform.component.html',
  styleUrls: ['./homeform.component.css']
})
export class HomeformComponent implements OnInit {

  @Output() newUser: EventEmitter<User> = new EventEmitter();
  @Output() updatedUser: EventEmitter<User> = new EventEmitter();
  @Input() currentUser: User;
  @Input() isEdit: boolean;

  constructor(private UserService: UserService) { }

  ngOnInit() {
  }

  addUser({name, email, phone}) {
    if (!name || !email || !phone) {
      alert('Please add correct contact details.');
    } else {
      this.UserService.saveUser({ name, email, phone } as User).subscribe(user => {
        this.newUser.emit(user);
      });
    }
  }

  updateUser() {
    this.UserService.updateUser(this.currentUser).subscribe(user => {
      this.isEdit = false;
      this.updatedUser.emit(user);
    });
  }

}
