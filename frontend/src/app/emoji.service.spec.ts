import { TestBed } from '@angular/core/testing';

import { EmojiService } from './emoji.service';

describe('EmojiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmojiService = TestBed.get(EmojiService);
    expect(service).toBeTruthy();
  });
});
