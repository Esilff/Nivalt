const IO = require('../src/engine/fileSystem/IO');


test('IO : Read file content',async () => {
    const expectedContent = `#stage vertex

    attribute vec4 aVertexPostion;
    
    uniform mat4 uModelViewMatrix;
    uniform mat4 uPojectionMatrix;
    
    void main() {
        gl_Position = uModelViewMatrix * uPojectionMatrix * aVertexPostion;
    }
    
    #stage fragment
    
    void main() {
        gl_FragColor = vec4(1.0,1.0,1.0,1.0);
    }`
    let result : string = '';
    await IO.readFile('/assets/color.glsl').then((out : string) => result = out);
    expect(result).toBe(expectedContent);
});