import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {UsersService} from '../../../services';
import {User} from '../../../models';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit-cmp.html',
  styleUrls: ['./user-edit-cmp.css']
})
export class UserEditComponent implements OnInit {
  public form: FormGroup;
  private userId: number;

  constructor(private userService: UsersService,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  public ngOnInit() {
    this.initForm();

    this.userId = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.userId)
      .subscribe((value) => {
        this.form.setValue({
          name: value.name,
          username: value.username,
          email: value.email,
          phone: value.phone,
          website: value.website,
        });
      });
  }

  public submitForm() {
    if (!this.form.valid) {
      this.form.updateValueAndValidity();

      return;
    }

    this.updateUser();
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, [
        Validators.required,
        Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]],
      phone: null,
      website: null
    });
  }

  private updateUser() {
    const user: User = Object.assign({}, this.form.value);

    console.log(user);
    this.userService.updateUser(this.userId, user);
  }
}
