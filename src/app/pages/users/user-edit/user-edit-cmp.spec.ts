import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UsersService} from '../../../services';
import {UsersServiceMock} from '../../../test/mocks/user-service.mock';
import {UserEditComponent} from './user-edit-cmp';
import {ReactiveFormsModule} from '@angular/forms';
import {ActivatedRouteStub} from '../../../test/stubs/router.stub';
import {ActivatedRoute} from '@angular/router';

describe('user-edit-cmp', () => {
  let fixture: ComponentFixture<UserEditComponent>;
  let cmp: UserEditComponent;
  const activatedRoute: ActivatedRouteStub = new ActivatedRouteStub();
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        UserEditComponent,
      ],
      providers: [
        { provide: UsersService, useClass: UsersServiceMock, },
        { provide: ActivatedRoute, useValue: activatedRoute, }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditComponent);
    cmp = fixture.componentInstance;

    usersService = fixture.debugElement.injector.get(UsersService);
  });

  it('should create component', () => {
    expect(cmp).toBeDefined();
  });

  xit('should submit if user values is valid', () => {
  });

  xit('should not submit if user values is invalid', () => {
  });
});
