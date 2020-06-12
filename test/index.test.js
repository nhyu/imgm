const ImageMerge = require('../src/index');

test('', () => {
    const imgm = new ImageMerge();
    imgm.add({
        img: './image/body.png',
        sx: 56,
        sy: 56,
        sw: 200,
        sh: 200,
        x: 10,
        y: 10,
        w: 200,
        h: 200,
    });

    return imgm.draw().then(base64 => { });
});
