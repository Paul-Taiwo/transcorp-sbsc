import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailRoomComponent } from './avail-room.component';

describe('AvailRoomComponent', () => {
  let component: AvailRoomComponent;
  let fixture: ComponentFixture<AvailRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
