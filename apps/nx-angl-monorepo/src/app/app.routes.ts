import { Route } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';
import { CvComponent } from './cv/cv.component';

export const appRoutes: Route[] = [
  { path: '', component: CvComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: '**', redirectTo: '' },
];
