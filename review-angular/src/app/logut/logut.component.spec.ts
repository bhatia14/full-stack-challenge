import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogutComponent } from './logut.component';

describe('LogutComponent', () => {
  let component: LogutComponent;
  let fixture: ComponentFixture<LogutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
