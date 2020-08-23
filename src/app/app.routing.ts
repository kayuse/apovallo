import { Routes } from '@angular/router';
// Layouts
import {
  CondensedComponent,
  BlankComponent,
  CorporateLayout,
  SimplyWhiteLayout,
  ExecutiveLayout,
  CasualLayout ,
  BlankCasualComponent,
  BlankCorporateComponent,
  BlankSimplywhiteComponent
} from './@pages/layouts';
import {LoginComponent} from './@pages/layouts/simplywhite/login/login.component';
import {RegisterPageComponent} from './@pages/layouts/session/register/register.component';
import {ProfileComponent} from './@pages/layouts/simplywhite/profile/profile.component';
import {TransactionsComponent} from './@pages/layouts/simplywhite/transactions/transactions.component';
import {PentComponent} from './@pages/layouts/simplywhite/pent/pent.component';
import {UserActivationComponent} from './@pages/layouts/simplywhite/user-activation/user-activation.component';
import {TransferComponent} from './@pages/layouts/simplywhite/transfer/transfer.component';
import {TnxSuccessfulComponent} from './@pages/layouts/simplywhite/tnx-successful/tnx-successful.component';
import {TnxFailedComponent} from './@pages/layouts/simplywhite/tnx-failed/tnx-failed.component';
import {TnxPendingComponent} from './@pages/layouts/simplywhite/tnx-pending/tnx-pending.component';
import {TnxDetalsComponent} from './@pages/layouts/simplywhite/tnx-detals/tnx-detals.component';
import {AuthGuardService} from './util/AuthGuardService';
import {BeneficiaryListComponent} from './@pages/layouts/simplywhite/beneficiary-list/beneficiary-list.component';
import {BeneficiaryDetailComponent} from './@pages/layouts/simplywhite/beneficiary-detail/beneficiary-detail.component';





export const AppRoutes: Routes = [

  {
    path: '',
    data: {
        breadcrumb: 'Home'
    },
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'account/activate/:activation_key/:user',
    component: UserActivationComponent
  },
  {
    path: 'dashboard',
    data: {
        breadcrumb: 'Home'
    },
    component: SimplyWhiteLayout,
    canActivate: [AuthGuardService],
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'transactions', component: TransactionsComponent},
      {path: 'transactions/successful', component: TnxSuccessfulComponent},
      {path: 'transactions/failed', component: TnxFailedComponent},
      {path: 'transactions/pending', component: TnxPendingComponent},
      {path: 'transactions/:id', component: TnxDetalsComponent},
      {path: '', component: PentComponent},
      {path: 'transfer', component: TransferComponent},
      {path: 'beneficiary', component: BeneficiaryListComponent},
      {path: 'beneficiary/:id', component: BeneficiaryDetailComponent}
    ]
  },
  {
    path: 'corporate',
    data: {
        breadcrumb: 'Home'
    },
    component: CorporateLayout
  },
];
