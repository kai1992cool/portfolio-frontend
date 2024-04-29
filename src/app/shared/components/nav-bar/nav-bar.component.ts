import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/interface.user';


@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  router = inject(Router);

  // TODO: Review 
  // usersService = inject(UsersService);



  async ngOnInit() {

    console.log('funciona');

  }

}
