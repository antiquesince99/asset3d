import { TestBed } from '@angular/core/testing';

import { OrdersrviceService } from './ordersrvice.service';

describe('OrdersrviceService', () => {
  let service: OrdersrviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersrviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
