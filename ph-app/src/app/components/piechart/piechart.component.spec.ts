import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';

import { PiechartComponent } from './piechart.component';

describe('PiechartComponent', () => {
  let component: PiechartComponent;
  let fixture: ComponentFixture<PiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiechartComponent ],
      imports: [ChartsModule],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
