import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class="progress-bar"></div>
    <div class="relative header-bg p-8 text-center text-3xl font-bold flex justify-center items-center h-2/5 md:h-1/3 w-full">
      <h1 class="text-white">
        <span class="block font-thin text-2xl md:text-8xl uppercase">Hi There </span>
        <span class="block font-extrabold text-4xl md:text-5xl uppercase scroll-animated"> Let's work together </span>
      </h1>
      <div class="absolute right-0 gap-4 bottom-0 hidden">
        <div class="text-white bottom-0 text-xs font-normal hover:cursor-pointer" [routerLink]="['/']">home</div>
        <div class="text-white bottom-0 text-xs font-normal hover:cursor-pointer" [routerLink]="['/playground']">Playground</div>
      </div>
    </div>
  `,
  styleUrls: [`./header.component.scss`],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
