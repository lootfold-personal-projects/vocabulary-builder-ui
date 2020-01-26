import { TestBed } from '@angular/core/testing';

import { ItemsService } from './items.service';
import { ModelsModule } from './models.module';

describe('ItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ModelsModule]
    }).compileComponents();
  });

  it('should be created', () => {
    const service: ItemsService = TestBed.get(ItemsService);
    expect(service).toBeTruthy();
  });
});
