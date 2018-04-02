import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/index';

import {UsersService} from '../../../services/index';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.cmp.html',
  styleUrls: ['./users-list.cmp.css'],
})
export class UsersListComponent implements OnInit {
  public usersList: Observable<User[]>;

  constructor(private usersListService: UsersService) { }

  public ngOnInit() {
    this.usersList = this.usersListService.getUsersList();
  }
}
