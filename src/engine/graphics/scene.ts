export class Scene {
    
    private _canvas : HTMLCanvasElement;
    private _gl : WebGLRenderingContext;    


    constructor(canvas : HTMLCanvasElement) {
        this._canvas = canvas;
        this._gl = this._canvas.getContext('webgl');
        if (this._gl)
    } 
    
    public run() {
        
    }
}