import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Buzón de quejas y sugerencias';

  constructor(private authService: AuthService) { }

  logout() {
    // this.authService.logout();
  }

  isLoggedIn() {
    // return this.authService.isLoggedIn();
  }

}
