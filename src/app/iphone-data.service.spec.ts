import { TestBed, inject } from '@angular/core/testing';

import { IphoneDataService } from './iphone-data.service';

describe('IphoneDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IphoneDataService]
    });
  });

  it('should be created', inject([IphoneDataService], (service: IphoneDataService) => {
    expect(service).toBeTruthy();
  }));
});
