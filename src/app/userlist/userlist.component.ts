import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: User[];

  isEdit: boolean = false;

  constructor(private userService: UserService) { }

  currentUser: User = {
    id: 0,
    name: '',
    email: '',
    phone: '',
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onNewUser(user: User) {
    this.users.push(user);
    this.currentUser = {
      id: 0,
      name: '',
      email: '',
      phone: ''
    };
  }

  editUser(user: User) {
    this.currentUser = user;
    this.isEdit = true;
  }

  onUpdatedUser(user: User) {
    this.users.forEach((cur, index) => {
      if (user.id === cur.id) {
        this.users.splice(index, 1);
        this.users.unshift(user);
        this.isEdit = false;
        this.currentUser = {
          id: 0,
          name: '',
          email: '',
          phone: ''
        };
      }
    });
  }

  deleteUser(user: User) {
    if (confirm('Are you sure you want to delete?')) {
      this.userService.deleteUser(user.id).subscribe(() => {
        this.users.forEach((cur, index) => {
          if (user.id === cur.id) {
            this.users.splice(index, 1);
          }
        });
      });
    }
  }

}
