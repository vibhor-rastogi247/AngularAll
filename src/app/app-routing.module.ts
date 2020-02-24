import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadderComponent } from './Components/headder/headder.component';
import { BasicComponent } from './Components/basic/basic.component';
import { FormComponent } from './Components/form/form.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', 
    component:  BasicComponent
  },
  { path: 'form', 
  component:  FormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
