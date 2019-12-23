import { Component } from '@angular/core';
import {NGXLogger} from 'ngx-logger';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxlog';
  constructor(private logger: NGXLogger) { }

  log(lvl) {
    switch (lvl) {
      case 0:
        this.logger.debug('[app.component.ts] This is debug', 'color : green');
        break;
      case 1:
        this.logger.info('[app.component.ts] This is info');
        break;
      case 2:
        this.logger.log('[app.component.ts] This is log');
        break;
      case 3:
        this.logger.warn('[app.component.ts] This is warn');
        break;
      case 4:
        this.logger.error('[app.component.ts] This is error');
        break;
    }
  }
}
