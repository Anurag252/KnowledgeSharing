import { TestBed } from '@angular/core/testing';

import { AuthService } from './authentication-service.service';

describe('AuthenticationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy(); 
  });
});
