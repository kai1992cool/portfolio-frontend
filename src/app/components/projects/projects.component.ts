import { Component } from '@angular/core';
import { CardItemComponent } from '../../shared/components/card-item/card-item.component';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [CardItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
