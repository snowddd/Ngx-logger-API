import { Component } from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxlog';
  constructor(private logger: NGXLogger,private http: HttpClient) { }

  log(lvl) {
    switch (lvl) {
      case 0:
        this.logger.debug('%cMultiple', 'color : green');
        break;
      case 1:
        this.logger.info('[app.component.ts] line25 : 通常會放些重要的成功訊息並讓 QA 可以進行確認');
        break;
      case 2:
        this.logger.log('[app.component.ts] line28 : 一般LOG');
        break;
      case 3:
        this.logger.warn('[app.component.ts] line31 : 可以用來警示的錯誤，出現時可以提供分析的資訊');
        break;
      case 4:
        this.logger.error('[app.component.ts] line34 : 一般的錯誤，出現了就需要思考並排時間解決！');
        break;
    }
  }
}
