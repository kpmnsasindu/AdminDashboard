import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ManageProfileRoutingModule } from './manage-profile-routing.module';
import { ManageProfileComponent } from './manage-profile.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    ManageProfileRoutingModule,
    
  ],
  declarations: [
    ManageProfileComponent,
    AddProfileComponent,
    UserProfileComponent
  ],
})
export class ManageProfileModule { }