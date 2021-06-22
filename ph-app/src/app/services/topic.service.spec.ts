import { TestBed } from '@angular/core/testing';

import { TopicService } from './topic.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

describe('TopicService', () => {
  let service: TopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [TopicService, HttpClient]
    });
    service = TestBed.inject(TopicService);
    const httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('doit récupérer la liste des topics depuis le backend', () => {
    service.getAllTopics().subscribe((result) => {
      expect(result).not.toEqual('');
    });
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
  afterEach(() => {
    TestBed.resetTestingModule();
  });
});


