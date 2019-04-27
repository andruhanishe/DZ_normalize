import {normalize} from "./lib.js";

const data = [2, 15, 28, 100, 2, 0, 15, 1];

const dataNorm = normalize(data,2);
console.log(dataNorm);