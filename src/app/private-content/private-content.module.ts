import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrivateContentPage } from './private-content.page';
import { PrivateContentResolver } from './private-content.resolver';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { IonicModule } from '@ionic/angular';
import { ShellModule } from '../utils/shell/shell.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

//import {ImageModelPageModule} from './image-model/image-modal.module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/tabs/tab2']);

@NgModule({
  declarations: [PrivateContentPage],
  imports: [
    NgxIonicImageViewerModule,
    CommonModule,
    IonicModule,
    ShellModule,
    //    ImageModelPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: PrivateContentPage,
        canActivate: [AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectUnauthorizedToLogin
        },
        resolve: {
          data: PrivateContentResolver
        }
      }
    ])
  ],
  providers: [PrivateContentResolver]
})
export class PrivateContentModule { }
