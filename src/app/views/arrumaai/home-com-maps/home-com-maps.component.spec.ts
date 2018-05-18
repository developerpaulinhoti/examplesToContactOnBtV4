import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComMapsComponent } from './home-com-maps.component';

describe('HomeComMapsComponent', () => {
  let component: HomeComMapsComponent;
  let fixture: ComponentFixture<HomeComMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
