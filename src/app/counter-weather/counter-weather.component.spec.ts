import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWeatherComponent } from './counter-weather.component';

describe('CounterWeatherComponent', () => {
  let component: CounterWeatherComponent;
  let fixture: ComponentFixture<CounterWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterWeatherComponent]
    });
    fixture = TestBed.createComponent(CounterWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
