console.log(window); // No sirve dentro de node.js, sin embargo, si se ejecuta desde un navegador si muestra los parámetros asociados a tal instrucción

console.log(global); // Node

console.log(self); // Webworker

console.log(globalThis); // Unifica los conceptos anteriores y se puede utilizar en cualquier concepto