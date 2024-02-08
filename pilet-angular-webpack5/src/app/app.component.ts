import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {ComponentContext} from "piral-debug-webpack5";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  title = 'ng-sample';

  constructor(
      private router: Router,
      @Inject('Context') public context: ComponentContext,
  ) {

  }

  ngOnInit(): void {
    let counter = 0;
    this.router.events.subscribe((event) => {
      if (event.type === 15) {
        console.log('context.navigation.url', this.context.navigation.url);
        console.log('router event', event.routerEvent);
        if (counter < 15) {
          counter++;
          this.router.navigate(['/sharing/test' + Math.ceil(Math.random() * 2)]);
        }
      }
    });
  }
}
