import { TestBed } from '@angular/core/testing';

import { ItemsService } from './items.service';
import { ItemsModule } from './items.module';

describe('ItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ItemsModule]
    }).compileComponents();
  });

  it('should be created', () => {
    const service: ItemsService = TestBed.get(ItemsService);
    expect(service).toBeTruthy();
  });
});
