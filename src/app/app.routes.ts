import { Routes } from '@angular/router';
import { Layout} from './core/layout/layout';
import { Login } from './features/components/login/login'

export const routes: Routes = [



  { path: '', component: Login, },

  { path: 'login', component: Login },


  { path: 'about', component: Layout },

];


