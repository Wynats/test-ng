import { TestBed, getTestBed, fakeAsync  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { of } from 'rxjs';

describe('LoginService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoginService
      ]
    });

    injector = getTestBed();
    loginServiceSpy = TestBed.get(LoginService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', fakeAsync(() => {
    const mockObservable = of({
      'user': 'Patatita',
      'email': 'micorreo@hotmail.com'
      });

      loginServiceSpy.getDataUser().subscribe(data => {
      console.log(data);
      expect(data.body).toEqual({
        'user': 'Patatita',
        'email': 'micorreo@hotmail.com'
      });
    });
  }));
});
