const LED_MAPPING = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [279, 206], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [471, 301], [0, 0], [477, 275], [482, 265], [0, 0], [474, 263], [0, 0], [474, 274], [471, 293], [0, 0], [0, 0], [465, 310], [0, 0], [467, 296], [467, 296], [468, 275], [0, 0], [474, 266], [0, 0], [478, 238], [484, 229], [481, 235], [479, 247], [471, 254], [473, 266], [463, 271], [465, 280], [456, 289], [456, 303], [454, 307], [442, 312], [441, 312], [447, 304], [445, 295], [448, 286], [452, 279], [463, 271], [467, 260], [471, 250], [475, 241], [472, 234], [482, 224], [483, 217], [486, 204], [482, 183], [478, 192], [482, 200], [474, 210], [471, 220], [467, 229], [470, 239], [465, 247], [460, 256], [453, 268], [449, 276], [439, 281], [435, 289], [435, 302], [431, 305], [419, 309], [424, 303], [428, 295], [433, 288], [436, 275], [438, 271], [448, 261], [453, 253], [457, 242], [462, 236], [467, 226], [0, 0], [467, 207], [476, 199], [480, 187], [483, 179], [480, 168], [482, 159], [481, 136], [478, 146], [482, 158], [0, 0], [470, 175], [468, 182], [464, 195], [461, 204], [456, 213], [458, 221], [453, 230], [448, 241], [443, 250], [439, 258], [428, 262], [424, 274], [419, 282], [416, 291], [414, 300], [409, 307], [398, 306], [402, 302], [406, 293], [407, 285], [414, 276], [417, 264], [424, 259], [428, 250], [428, 243], [436, 230], [440, 221], [444, 212], [449, 203], [456, 197], [453, 188], [463, 175], [467, 171], [464, 160], [475, 150], [478, 141], [479, 135], [479, 121], [479, 106], [476, 114], [474, 122], [464, 129], [461, 137], [459, 147], [456, 157], [457, 161], [446, 172], [442, 180], [439, 193], [436, 196], [435, 207], [423, 228], [425, 224], [419, 237], [415, 246], [411, 255], [406, 263], [403, 272], [399, 280], [395, 288], [396, 296], [389, 305], [378, 306], [382, 302], [384, 297], [386, 291], [386, 282], [391, 270], [395, 261], [399, 253], [400, 248], [408, 238], [412, 230], [415, 218], [417, 214], [425, 203], [425, 196], [431, 187], [435, 178], [439, 168], [447, 158], [452, 149], [449, 138], [0, 0], [454, 132], [0, 0], [461, 117], [464, 100], [265, 212], [0, 0], [464, 92], [460, 92], [0, 0], [457, 111], [453, 120], [450, 126], [446, 136], [0, 0], [435, 151], [429, 164], [425, 173], [421, 181], [417, 191], [414, 196], [408, 209], [406, 214], [400, 227], [396, 235], [391, 243], [390, 253], [385, 260], [380, 265], [378, 276], [375, 283], [371, 288], [369, 297], [372, 301], [374, 306], [367, 300], [364, 296], [367, 292], [368, 286], [359, 263], [360, 257], [362, 249], [378, 252], [382, 244], [385, 236], [385, 229], [389, 223], [395, 215], [399, 206], [403, 197], [407, 188], [414, 175], [417, 166], [421, 156], [426, 147], [0, 0], [435, 133], [436, 124], [0, 0], [443, 107], [449, 103], [0, 0], [448, 95], [0, 0], [454, 81], [445, 78], [0, 0], [444, 85], [0, 0], [434, 104], [429, 113], [432, 121], [424, 131], [420, 140], [416, 149], [414, 153], [408, 167], [403, 176], [399, 185], [395, 194], [389, 200], [385, 210], [382, 220], [380, 229], [375, 237], [372, 245], [364, 247], [365, 260], [361, 265], [357, 267], [354, 271], [355, 285], [354, 288], [358, 292], [425, 112], [427, 103], [428, 97], [428, 93], [0, 0], [0, 0], [414, 85], [413, 90], [412, 94], [410, 99], [412, 106], [415, 115], [0, 0], [0, 0], [0, 0], [398, 160], [399, 150], [403, 141], [404, 132], [404, 123], [403, 117], [403, 110], [403, 104], [403, 98], [402, 92], [402, 89], [389, 93], [385, 100], [388, 100], [392, 107], [393, 113], [0, 0], [0, 0], [389, 141], [389, 146], [392, 157], [390, 170], [389, 180], [387, 189], [385, 196], [382, 209], [334, 290], [371, 312], [340, 289], [344, 285], [346, 280], [349, 279], [353, 273], [355, 269], [359, 262], [362, 253], [363, 247], [366, 237], [368, 230], [371, 221], [372, 211], [374, 203], [375, 193], [373, 180], [378, 171], [376, 160], [375, 155], [375, 145], [378, 134], [379, 125], [378, 117], [375, 110], [376, 105], [373, 101], [373, 96], [361, 93], [364, 99], [361, 106], [360, 106], [360, 113], [360, 119], [363, 128], [360, 133], [360, 142], [360, 152], [361, 164], [361, 174], [360, 184], [362, 193], [361, 202], [360, 211], [358, 221], [357, 229], [355, 239], [353, 248], [350, 256], [348, 263], [346, 268], [343, 275], [341, 280], [338, 284], [333, 287], [334, 290], [329, 292], [328, 294], [320, 296], [322, 295], [325, 293], [328, 289], [0, 0], [332, 281], [334, 276], [336, 269], [338, 262], [339, 254], [341, 248], [342, 240], [343, 232], [345, 220], [346, 210], [346, 203], [347, 189], [0, 0], [349, 172], [349, 161], [349, 152], [347, 139], [350, 133], [350, 125], [349, 119], [349, 112], [349, 107], [346, 102], [344, 99], [348, 96], [332, 96], [0, 0], [331, 103], [332, 102], [328, 110], [335, 115], [335, 122], [335, 131], [335, 137], [335, 148], [328, 157], [328, 169], [0, 0], [333, 187], [0, 0], [328, 203], [331, 217], [0, 0], [330, 235], [326, 246], [328, 253], [326, 261], [323, 268], [324, 275], [322, 281], [320, 286], [318, 290], [316, 294], [313, 296], [311, 297], [0, 0], [299, 299], [301, 298], [303, 298], [305, 294], [306, 291], [307, 288], [309, 280], [307, 277], [312, 268], [313, 260], [314, 252], [311, 240], [314, 234], [0, 0], [315, 215], [313, 203], [313, 199], [314, 183], [314, 174], [314, 164], [315, 153], [318, 146], [319, 137], [319, 129], [319, 121], [316, 113], [317, 107], [318, 103], [317, 97], [317, 94], [315, 90], [299, 85], [301, 89], [302, 94], [303, 100], [300, 106], [303, 109], [297, 117], [300, 122], [301, 131], [300, 144], [300, 154], [300, 164], [299, 174], [300, 178], [299, 194], [298, 203], [298, 213], [297, 222], [297, 232], [296, 240], [293, 247], [295, 258], [296, 267], [295, 274], [296, 280], [293, 286], [291, 289], [290, 292], [293, 296], [292, 299], [290, 300], [292, 300], [282, 299], [282, 300], [282, 299], [280, 296], [281, 289], [278, 288], [281, 285], [282, 278], [0, 0], [279, 257], [0, 0], [280, 247], [280, 231], [282, 228], [282, 218], [279, 203], [0, 0], [0, 0], [0, 0], [281, 164], [0, 0], [0, 0], [286, 140], [0, 0], [281, 121], [0, 0], [0, 0], [0, 0], [0, 0], [285, 92], [0, 0], [0, 0], [272, 78], [0, 0], [270, 85], [0, 0], [0, 0], [267, 101], [267, 108], [266, 116], [269, 122], [267, 136], [267, 141], [266, 156], [266, 160], [265, 176], [265, 185], [265, 195], [265, 205], [263, 211], [265, 224], [266, 233], [263, 239], [266, 251], [266, 259], [266, 267], [264, 271], [267, 280], [268, 285], [269, 291], [271, 294], [268, 296], [270, 298], [271, 298], [261, 296], [260, 295], [257, 292], [256, 294], [254, 289], [254, 285], [250, 278], [254, 271], [252, 267], [252, 259], [251, 250], [251, 237], [252, 228], [254, 220], [254, 211], [252, 199], [252, 189], [254, 182], [252, 170], [253, 160], [252, 150], [253, 140], [256, 133], [253, 122], [254, 113], [0, 0], [0, 0], [256, 89], [259, 86], [257, 79], [260, 76], [258, 72], [248, 73], [247, 77], [249, 78], [247, 81], [245, 91], [245, 93], [244, 101], [242, 114], [239, 121], [240, 133], [240, 142], [239, 152], [239, 162], [238, 172], [238, 176], [238, 191], [238, 200], [237, 210], [239, 215], [236, 228], [239, 236], [239, 243], [238, 249], [238, 257], [235, 265], [236, 271], [238, 279], [239, 285], [242, 290], [244, 293], [0, 0], [0, 0], [231, 281], [228, 285], [227, 278], [225, 278], [223, 275], [224, 266], [0, 0], [222, 257], [221, 250], [221, 236], [219, 231], [224, 222], [226, 213], [224, 206], [227, 196], [228, 185], [228, 177], [0, 0], [228, 153], [228, 149], [0, 0], [0, 0], [232, 119], [233, 110], [0, 0], [235, 93], [0, 0], [234, 84], [0, 0], [0, 0], [240, 72], [0, 0], [0, 0], [225, 76], [0, 0], [224, 93], [217, 97], [0, 0], [221, 115], [214, 122], [217, 128], [213, 141], [216, 153], [215, 163], [214, 173], [213, 182], [213, 192], [211, 200], [210, 208], [209, 217], [211, 222], [205, 231], [207, 241], [209, 245], [206, 253], [207, 256], [200, 257], [207, 264], [198, 262], [206, 270], [196, 267], [185, 282], [189, 277], [191, 274], [193, 268], [195, 263], [197, 256], [198, 250], [214, 234], [201, 235], [201, 226], [202, 218], [203, 210], [203, 201], [204, 192], [205, 183], [206, 173], [203, 161], [203, 151], [204, 146], [207, 134], [208, 125], [206, 113], [207, 105], [210, 101], [210, 92], [211, 88], [213, 85], [211, 80], [214, 76], [203, 78], [200, 82], [197, 85], [195, 88], [198, 94], [195, 97], [195, 106], [193, 110], [190, 119], [0, 0], [0, 0], [188, 152], [188, 162], [188, 172], [187, 182], [187, 191], [187, 201], [186, 210], [189, 217], [189, 226], [188, 235], [188, 242], [187, 249], [186, 256], [186, 264], [185, 270], [0, 0], [182, 281], [0, 0], [177, 288], [171, 293], [167, 291], [167, 285], [173, 278], [173, 271], [167, 267], [167, 260], [174, 250], [170, 239], [174, 234], [174, 225], [175, 216], [172, 203], [0, 0], [175, 186], [173, 181], [0, 0], [0, 0], [0, 0], [178, 138], [0, 0], [0, 0], [181, 112], [182, 107], [0, 0], [186, 93], [0, 0], [187, 90], [193, 84], [192, 82], [180, 84], [175, 87], [172, 91], [175, 97], [167, 101], [171, 107], [0, 0], [160, 119], [165, 131], [164, 141], [160, 151], [160, 162], [159, 171], [159, 181], [158, 191], [159, 200], [158, 210], [158, 213], [158, 228], [0, 0], [155, 243], [0, 0], [161, 259], [155, 269], [159, 277], [160, 283], [160, 289], [160, 294], [160, 299], [151, 302], [153, 295], [146, 291], [146, 285], [145, 278], [144, 271], [151, 261], [144, 255], [150, 246], [149, 237], [149, 227], [149, 219], [150, 210], [146, 197], [147, 188], [147, 178], [150, 172], [148, 159], [148, 149], [149, 144], [150, 129], [150, 121], [151, 114], [153, 108], [156, 101], [159, 97], [166, 94], [165, 89], [168, 86], [175, 85], [164, 86], [0, 0], [156, 92], [0, 0], [151, 98], [144, 100], [141, 105], [138, 111], [136, 119], [134, 126], [131, 135], [130, 144], [130, 153], [132, 166], [132, 176], [132, 186], [132, 196], [135, 204], [132, 214], [136, 222], [133, 233], [133, 242], [131, 248], [132, 256], [133, 265], [135, 272], [136, 279], [137, 287], [139, 294], [0, 0], [0, 0], [130, 291], [128, 285], [132, 275], [124, 269], [122, 262], [120, 254], [118, 244], [116, 236], [0, 0], [121, 218], [0, 0], [119, 200], [0, 0], [118, 181], [118, 169], [118, 161], [112, 149], [114, 139], [0, 0], [125, 126], [0, 0], [131, 112], [132, 103], [135, 99], [139, 96], [146, 93], [148, 90], [141, 93], [0, 0], [130, 102], [0, 0], [0, 0], [119, 117], [0, 0], [106, 129], [0, 0], [101, 146], [99, 156], [97, 165], [98, 174], [97, 185], [99, 196], [100, 206], [102, 212], [103, 222], [104, 232], [106, 242], [109, 251], [111, 258], [114, 265], [117, 272], [120, 280], [122, 288], [110, 271], [106, 264], [103, 257], [99, 248], [96, 240], [94, 233], [92, 224], [90, 213], [89, 203], [88, 195], [87, 184], [87, 176], [93, 167], [0, 0], [94, 146], [0, 0], [99, 130], [101, 125], [106, 118], [112, 113], [118, 109], [122, 105], [127, 100], [118, 106], [0, 0], [0, 0], [0, 0], [96, 128], [0, 0], [88, 143], [88, 150], [84, 156], [79, 168], [78, 177], [78, 185], [79, 196], [80, 206], [82, 215], [84, 224], [86, 233], [89, 239], [92, 249], [96, 257], [100, 264], [88, 253], [85, 246], [81, 238], [79, 229], [76, 220], [74, 211], [74, 203], [76, 193], [76, 184], [0, 0], [75, 166], [81, 158], [83, 149], [87, 142], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [79, 236], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];

const X_MAX = 486;
const Y_MAX = 312;
const X_MIN = 74;
const Y_MIN = 72;

const WIDTH = (X_MAX + 1) - X_MIN;
const HEIGHT = (Y_MAX + 1 ) - Y_MIN;

var socket = null;

window.onload = function () {
    console.log("working");
    socket = io();
    console.log();
    // getMaxMin(ledMapping);
    //sampleImageCanvas(LED_MAPPING);
    sampleVideoCanvas(LED_MAPPING);
};

function plotOnCanvas(xyrgbArray) {
    var mappingCanvas = document.getElementById('mappingCanvas');
    mappingCanvas.width = WIDTH;
    mappingCanvas.height = HEIGHT;
    var context = mappingCanvas.getContext('2d');

    xyrgbArray.forEach(function (xyrgb) {
        if (!(xyrgb.x == 0 && xyrgb.y == 0)) {
            context.fillStyle = "rgb(" + xyrgb.r + "," + xyrgb.g + "," + xyrgb.b + ")";
            context.fillRect(xyrgb.x, xyrgb.y, 4, 4);
        }
    });

}

function xygbArrayToHexColorStringArray(xyrgbArray) {
    var colorStringArray = [];
    xyrgbArray.forEach(function(xyrgb) {
        var red = xyrgb.r >> 4;
        var green = xyrgb.g >> 4;
        var blue = xyrgb.b >> 4;
        var colorString = ("#" + red.toString(16) + green.toString(16) + blue.toString(16));
        colorStringArray.push(colorString);
    });
    return colorStringArray;
}

function getMaxMin(arrayOfArrays) {
    var xMax = Number.MIN_VALUE;
    var xMin = Number.MAX_VALUE;
    var yMax = Number.MIN_VALUE;
    var yMin = Number.MAX_VALUE;

    arrayOfArrays.forEach(function (coord) {
        var x = coord[0];
        var y = coord[1];

        if (!(x == 0 && y == 0)) {
            if (x > xMax) {
                xMax = x;
            }
            if (x < xMin) {
                xMin = x;
            }
            if (y > yMax) {
                yMax = y;
            }
            if (y < yMin) {
                yMin = y;
            }
        }
    });
}

var sampleImageCanvas = function (mappingArray) {
    var sourceCanvas = document.getElementById('sourceCanvas');
    sourceCanvas.width = WIDTH;
    sourceCanvas.height = HEIGHT;
    var sourceContext = sourceCanvas.getContext('2d');

    var image = new Image();
    // image.src = source.src;

    image.src = "/data/union-jack.png";
    image.crossOrigin = "Anonymous";
    image.onload = function () {
        sourceContext.drawImage(image, 0, 0, WIDTH, HEIGHT);
        var xyrgbArray = getXyrgbArrayFromContext(sourceContext, mappingArray);
        plotOnCanvas(xyrgbArray);
        emitColorStringArray(xygbArrayToHexColorStringArray(xyrgbArray));
    };
};


var sampleVideoCanvas = function (mappingArray) {

    var sourceCanvas = document.getElementById('sourceCanvas');
    sourceCanvas.width = WIDTH;
    sourceCanvas.height = HEIGHT;
    var sourceContext = sourceCanvas.getContext('2d');

    var loop;

    var video = document.createElement('video');

    video.src = "/data/video.mp4";
    video.crossOrigin = "Anonymous";
    video.controls = "controls";
    video.autoplay = false;
    video.loop = false;
    video.addEventListener('canplay', function() {
        video.play();
    });
    video.addEventListener('playing', function() {
        loop = sampleLoop();
    });
    video.addEventListener('paused', function() {
        clearInterval(loop);
    });
    video.addEventListener('ended', function() {
        video.stop();
        clearInterval(loop);
    });


    var sampleLoop = function() {
        return setInterval (function() {
            sourceContext.drawImage(video, 0, 0, WIDTH, HEIGHT);
            var xyrgbArray = getXyrgbArrayFromContext(sourceContext, mappingArray);
            plotOnCanvas(xyrgbArray);
            emitColorStringArray(xygbArrayToHexColorStringArray(xyrgbArray));
        }, 1000/10);
    };

    var source = document.getElementById('source');
    source.appendChild(video);
};

var getXyrgbArrayFromContext = function(context, mappingArray) {
    var sourceData = context.getImageData(0, 0, WIDTH, HEIGHT);
    var pixelData = sourceData.data;

    var xyrgbArray = [];
    mappingArray.forEach(function (coord) {
        var x = coord[0] - X_MIN;
        var y = coord[1] - Y_MIN;

        var xyrgb;
        if (x == 0 && y == 0) {
            xyrgb = {
                x: x,
                y: y,
                r: 0,
                g: 0,
                b: 0
            }
        } else {
            var rgbaRIndex = ((y * WIDTH) + x) * 4;
            xyrgb = {
                x: x,
                y: y,
                r: pixelData[rgbaRIndex],
                g: pixelData[rgbaRIndex + 1],
                b: pixelData[rgbaRIndex + 2]
            }
        }
        xyrgbArray.push(xyrgb);
    });
    return xyrgbArray;
};

var emitColorStringArray = function(colorStringArray) {
    socket.emit('selectColorStringArray', colorStringArray);
};
