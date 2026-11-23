import { Routes } from '@angular/router';

// Public Layout & Sections
import { Layout } from './layout/layout/layout';
import { Home } from './layout/home/home';
import { Contact } from './layout/contact/contact';
import { About } from './layout/about/about';
import { OurServices } from './layout/our-services/our-services';
import { OurClients } from './layout/our-clients/our-clients';

// Shared Components
import { NotFound } from './shared/not-found/not-found';
import { Theme as Dtheme } from './shared/theme/theme';

// Dashboard Layout & Sections
import { Dashboard } from './dashboard/dashboard/dashboard';
import { Home as Dhome } from './dashboard/home/home';
import { Contact as Dcontact } from './dashboard/contact/contact';
import { About as Dabout } from './dashboard/about/about';
import { OurServices as DourServices } from './dashboard/our-services/our-services';
import { OurClients as DourClients } from './dashboard/our-clients/our-clients';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'services', component: OurServices },
      { path: 'clients', component: OurClients },
      { path: 'contact', component: Contact }
    ]
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Dhome },
      { path: 'about', component: Dabout },
      { path: 'services', component: DourServices },
      { path: 'clients', component: DourClients },
      { path: 'contact', component: Dcontact },
      { path: 'theme', component: Dtheme }
    ]
  },
  { path: '**', component: NotFound }
];