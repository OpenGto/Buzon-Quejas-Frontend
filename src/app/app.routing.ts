import { Routes, RouterModule } from '@angular/router';

// other routes
import { COMPLAINT_ROUTES } from './complaint/complaint.routing';
import { SUGGESTION_ROUTES } from './suggestion/suggestion.routing';

// components
import { HomeComponent } from './layout/home/home.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ComplaintListComponent } from './complaint/components/complaint-list/complaint-list.component';



const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'quejas', children: COMPLAINT_ROUTES },
  { path: 'sujerencias', children: SUGGESTION_ROUTES }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
