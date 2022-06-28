"use strict";
const IO = require('../src/engine/fileSystem/IO');
test('IO : Get file content', () => {
    expect(IO.getFileContent('path')).toBe('fileContent');
});
