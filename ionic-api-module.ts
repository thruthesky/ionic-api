import { NgModule } from '@angular/core';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
const cloudSettings: CloudSettings = {
  'core': {
    //'app_id': '2e401812'
    'app_id': '46ab1702'
  }
};
@NgModule({
  imports: [
     CloudModule.forRoot(cloudSettings)
  ]
})
export class IonicApiModule { }