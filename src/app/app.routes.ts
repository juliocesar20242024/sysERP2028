import { Routes } from '@angular/router';
import { Login } from './features/components/login/login'
import {Home} from './features/components/home/home';
import { Dashboard } from './features/components/dashboard/dashboard';
import {Cotizaciones} from './features/components/cotizaciones/cotizaciones';
import {Compras} from './features/components/compras/compras';
import {Admin} from './features/components/admin/admin';
import {Factura} from './features/components/factura/factura';
import {Inventario} from './features/components/inventario/inventario';
import {Sidebar} from './core/layout/sidebar/sidebar';

export const routes: Routes = [
  { path: '', component:Home },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'compras', component: Compras  },
  { path: 'cotiza', component: Cotizaciones  },
  { path: 'admin', component: Admin  },
  { path: 'facturas', component: Factura  },
  { path: 'inventario', component: Inventario  },

];



