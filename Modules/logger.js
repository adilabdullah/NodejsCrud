const log4js = require('log4js');
const LOG_PATH='./Logs';
log4js.configure({
  appenders: {
   log: { 
           type: 'dateFile',
           filename: '${LOG_PATH}/logs.log',
           pattern: '-yyyy-MM-dd',
           backups: 3,
           maxLogSize: 10485760, 
           compress: true 
            }
  },
  categories: {
    default: { appenders: [ 'log' ], level: 'debug'}
  },
});

const logger = log4js.getLogger();
//logger.info('I will be logged in all-the-logs.log');

function PrintLog(a)
{
logger.info(a);
}

module.exports={PrintLog}
