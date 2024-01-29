// ==== Modules ====

/**
 * Muốn sử dụng thì chính file index phải có type = module
 * logger phải được export từ file bên ngoài vào thì mới import được
 * Một module được export default duy nhất 1 lần, còn không default thì được nhiều lần
 */
import logger from './10_1_Modules_logger.js';  //Import nhưng cái là import default
import {
    TYPE_LOG, 
    TYPE_WARM, 
    TYPE_ERROR
} from './10_2_Modules_constaint.js';  //Im port những cái không phải là import default bằng detructuring

//Hoặc import tất cả và lưu vào object bằng as
// import * as consstant from './10_2_Modules_constaint.js';
import logger2 from './TestImport/logger2.js';
console.log(logger);

logger('Test logger', 'warn');
logger('Test logger', TYPE_ERROR);