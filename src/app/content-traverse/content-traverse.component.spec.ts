import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTraverseComponent } from './content-traverse.component';

describe('ContentTraverseComponent', () => {
  let component: ContentTraverseComponent;
  let fixture: ComponentFixture<ContentTraverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTraverseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTraverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
