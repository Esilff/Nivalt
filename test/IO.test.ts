const IO = require('../src/engine/fileSystem/IO');


test('IO : Get file content', () => {
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
    expect(IO.readFile('./assets/color.glsl')).toBe(expectedContent);
});