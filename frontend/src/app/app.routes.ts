import {Routes} from '@angular/router';
import {Dashboard} from './dashboard/dashboard.component';
import {NoContent} from './no-content';
import {GuaranteeComponent} from './guarantee/guarantee.component';
import {GuaranteeTypeComponent} from './guarantee-type/guarantee-type.component';
import {NewGuaranteeTypeComponent} from './guarantee-type/new-guarantee-type/new-guarantee-type.component';
import {EditGuaranteeTypeComponent} from './guarantee-type/edit-guarantee-type/edit-guarantee-type.component';
import {EditGuaranteeComponent} from './guarantee/edit-guarantee/edit-guarantee.component';
import {SignInComponent} from './signin/signin.component';
import {Ng2TokenAuthService} from './common/ng2-token-auth/ng2-token-auth.service';
import {SignInFinalizeComponent} from './signin/signin-finalize.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: Dashboard,
    canActivate: [Ng2TokenAuthService]
  },
  {
    path: 'sign_in',
    component: SignInComponent,
  },
  {
    path: 'auth/finalize',
    component: SignInFinalizeComponent,
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [Ng2TokenAuthService]
  },
  {
    path: 'guarantees',
    component: GuaranteeComponent,
    canActivate: [Ng2TokenAuthService]
  },
  {
    path: 'guarantees/edit',
    component: EditGuaranteeComponent,
    canActivate: [Ng2TokenAuthService]
  },
  {
    path: 'guarantee-types',
    component: GuaranteeTypeComponent,
    canActivate: [Ng2TokenAuthService]
  },
  {
    path: 'guarantee-types/new',
    component: NewGuaranteeTypeComponent,
    canActivate: [Ng2TokenAuthService]
  },
  {
    path: 'guarantee-types/:id',
    component: EditGuaranteeTypeComponent,
    canActivate: [Ng2TokenAuthService]
  },
  {
    path: '**',
    component: NoContent
  },
];
