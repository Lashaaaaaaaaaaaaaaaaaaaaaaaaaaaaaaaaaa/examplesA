import { Routes } from '@angular/router';
import { Biding } from './components/biding/biding';
import { Service } from './components/services/service/service';
import { ReactiveForms } from './components/reactiveForms/components/reactive-forms/reactive-forms';
import { Profile } from './components/reactiveForms/components/profile/profile';
import { DirectivePipes } from './components/directive-pipes/directive-pipes/directive-pipes';
import { Rxjs } from './components/rxjs/components/rxjs/rxjs';
import { TemplateForm } from './components/template-forms/components/template-form/template-form';
// import { ViewEncapsulation } from './components/view-encapsulation/view-encapsulation';
// import { Animations } from './components/animations/animations';
// import { InputOutput } from './components/input-output/components/input-output/input-output';
// import { One } from './components/hostBiding-hostListener/one/one';
// import { Two } from './components/hostBiding-hostListener/two/two';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Error } from './components/error/error';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'biding',
        component: Biding,
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
      },
      {
        path: 'rxjs',
        component: Rxjs,
      },
      {
        path: 'templateForms',
        component: TemplateForm,
      },
      //   {
      //     path: 'viewEncapsulation',
      //     component: ViewEncapsulation,
      //   },
      //   {
      //     path: 'animations',
      //     component: Animations,
      //   },
      //   {
      //     path: 'input-output',
      //     component: InputOutput,
      //   },
      //   {
      //     path: 'hostBiding',
      //     component: One,
      //   },
      //   {
      //     path: 'hostListener',
      //     component: Two,
      //   },
    ],
  },
  {
    path: '**',
    component: Error,
  },
];
