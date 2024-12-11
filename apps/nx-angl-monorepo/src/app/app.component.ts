import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';

@Component({
  imports: [CvComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [``],
})
export class AppComponent {
  title = 'nx-angl-monorepo';
}
