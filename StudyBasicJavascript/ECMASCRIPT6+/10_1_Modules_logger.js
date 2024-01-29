import {
    TYPE_LOG,
    TYPE_WARM,
    TYPE_ERROR
} from './10_2_Modules_constaint.js';

function logger (log, type = TYPE_LOG) {
    console[type](log);
};

export default logger;



