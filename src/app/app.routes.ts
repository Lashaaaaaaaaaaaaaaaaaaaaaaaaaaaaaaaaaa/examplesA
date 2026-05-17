import { Routes } from '@angular/router';
import { Binding } from './components/binding/binding';
import { Service } from './components/services/service/service';
import { ReactiveForms } from './components/reactiveForms/components/reactive-forms/reactive-forms';
import { Profile } from './components/reactiveForms/components/profile/profile';
import { DirectivePipes } from './components/directive-pipes/directive-pipes/directive-pipes';
import { Rxjs } from './components/rxjs/components/rxjs/rxjs';
import { TemplateForm } from './components/template-forms/components/template-form/template-form';
import { ViewEncapsulation } from './components/viewEncapsulation/components/view-encapsulation/view-encapsulation';
import { Animations } from './components/animations/animations/animations';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Error } from './components/error/error';
import { authGuardGuard } from './components/viewEncapsulation/guards/auth-guard-guard';
import { InputOutput } from './components/input-output/components/input-output/input-output';
import { HostBindingHostListener } from './components/hostListener-hostBinding/components/host-binding-host-listener/host-binding-host-listener';
import { All } from './components/all/components/all/all';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'binding',
        component: Binding,
      },
      {
        path: 'services',
        component: Service,
      },
      {
        path: 'reactiveForms',
        component: ReactiveForms,
      },

      {
        path: 'profile',
        component: Profile,
      },
      {
        path: 'directives-pipes',
        component: DirectivePipes,
        canActivate: [authGuardGuard],
      },
      {
        path: 'rxjs',
        component: Rxjs,
      },
      {
        path: 'templateForms',
        component: TemplateForm,
      },
      {
        path: 'viewEncapsulation',
        component: ViewEncapsulation,
      },
      {
        path: 'animations',
        component: Animations,
      },
      {
        path: 'input-output',
        component: InputOutput,
      },
      {
        path: 'hostListener-hostBinding',
        component: HostBindingHostListener,
      },
      {
        path: 'all',
        component: All,
      },
    ],
  },
  {
    path: '**',
    component: Error,
  },
];
