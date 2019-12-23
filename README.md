#practice to use node.js and angular to save log (use ngx-logger)


##1. npm i ngx-logger (need know your ngx-logger patch Configuration Angular patch)


##2. app.component.ts 

import {NGXLogger} from 'ngx-logger';
constructor(private logger: NGXLogger);

use this.logger.debug('your debug log message')
    this.logger.info('your info log message')
    this.logger.log('your log message')
    this.logger.warn('your warn log message')
    this.logger.error('your error log message')
    

##3. /environments/enviroment.ts

import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {
...,
logging:{
level: NgxLoggerLevel.DEBUG,
serverLogLevel: NgxLoggerLevel.DEBUG,
serverLoggingUrl:'set your API url' 
  }
};



##4. app.module.ts

import {LoggerModule} from 'ngx-logger';
...,
import: [
...,
LoggerModule.forRoot(environment.logging)
]


##5. when you send a NGX-logger your API will get log in request

E.g

{"message":"your debug log message","additional":[],"level":1,"timestamp":"2019-12-23T03:03:15.914Z","fileName":"main.js","lineNumber":"113"}
{"message":"your info log message","additional":[],"level":2,"timestamp":"2019-12-23T03:03:16.579Z","fileName":"main.js","lineNumber":"116"}
{"message":"your log message","additional":[],"level":3,"timestamp":"2019-12-23T03:03:17.163Z","fileName":"main.js","lineNumber":"119"}
{"message":"your warn log message","additional":[],"level":4,"timestamp":"2019-12-23T03:03:17.707Z","fileName":"main.js","lineNumber":"122"}
{"message":"your error log message","additional":[],"level":5,"timestamp":"2019-12-23T03:03:18.243Z","fileName":"main.js","lineNumber":"125"}

