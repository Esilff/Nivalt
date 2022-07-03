"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
class Scene {
    constructor(canvas) {
        this._canvas = canvas;
        this._gl = this._canvas.getContext('webgl');
        if (this._gl)
            ;
    }
    run() {
    }
}
exports.Scene = Scene;
