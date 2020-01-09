import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseranswerComponent } from './useranswer.component';

describe('UseranswerComponent', () => {
  let component: UseranswerComponent;
  let fixture: ComponentFixture<UseranswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseranswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseranswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
