 
    var compress_images = require('compress-images'), INPUT_path_to_your_images, OUTPUT_path;
 
    INPUT_path_to_your_images = './images/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
    OUTPUT_path = './output/';
    
    compress_images(INPUT_path_to_your_images, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
                                                {jpg: {engine: 'mozjpeg', command: ['-quality', '30']}},
                                                {png: {engine: 'pngquant', command: ['--quality=50-70']}},
                                                {svg: {engine: 'svgo', command: '--multipass'}},
                                                {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(){
    });