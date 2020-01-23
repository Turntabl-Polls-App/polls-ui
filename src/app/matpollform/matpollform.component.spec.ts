import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatpollformComponent } from './matpollform.component';

describe('MatpollformComponent', () => {
  let component: MatpollformComponent;
  let fixture: ComponentFixture<MatpollformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatpollformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatpollformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
