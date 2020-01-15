(function ($, window, document) {

    $.fn.lineLoader = function (options) {


        var options = $.extend({}, $.fn.lineLoader.defaults, options);

        this.finishLoading = function () {
            options.slowing = false;
            options.speed = 10;
        }

        return this.each(function () {

            var element = $(this);

            window.requestAnimFrame = (function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
            })();

            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext("2d");

            var grd;
            var path;
            var progres = 0;
            var currentPath = 0;
            var t0 = 0;
            var t1 = 0;
            var height = 38;
            var finish = false;

            function percente(x1, y1, bx1, by1, bx2, by2, x2, y2) {
                var u0 = 1 - t0;
                u1 = 1 - t1;

                qxa = x1 * u0 * u0 + bx1 * 2 * t0 * u0 + bx2 * t0 * t0;
                qxb = x1 * u1 * u1 + bx1 * 2 * t1 * u1 + bx2 * t1 * t1;
                qxc = bx1 * u0 * u0 + bx2 * 2 * t0 * u0 + x2 * t0 * t0;
                qxd = bx1 * u1 * u1 + bx2 * 2 * t1 * u1 + x2 * t1 * t1;

                qya = y1 * u0 * u0 + by1 * 2 * t0 * u0 + by2 * t0 * t0;
                qyb = y1 * u1 * u1 + by1 * 2 * t1 * u1 + by2 * t1 * t1;
                qyc = by1 * u0 * u0 + by2 * 2 * t0 * u0 + y2 * t0 * t0;
                qyd = by1 * u1 * u1 + by2 * 2 * t1 * u1 + y2 * t1 * t1;

                xa = qxa * u0 + qxc * t0;
                xb = qxa * u1 + qxc * t1;
                xc = qxb * u0 + qxd * t0;
                xd = qxb * u1 + qxd * t1;

                ya = qya * u0 + qyc * t0;
                yb = qya * u1 + qyc * t1;
                yc = qyb * u0 + qyd * t0;
                yd = qyb * u1 + qyd * t1;

                return [xa, ya, xb, yb, xc, yc, xd, yd];
            }

            function drawCurve(x1, y1, bx1, by1, bx2, by2, x2, y2) {
                ctx.lineTo(x1, y1);
                ctx.bezierCurveTo(bx1, by1, bx2, by2, x2, y2);
            }

            function drawPath() {
                ctx.beginPath();
                for (var i = 0; i < path.length; i++) {
                    if (i == currentPath) {
                        path[i][8] = path[i][8] >= 1 ? true : path[i][8];
                        currentPath = path[i][8] >= 1 ? currentPath += 1 : currentPath;
                        t1 = path[i][8] >= 1 ? 0 : t1;
                        t1 = path[i][8];
                        var v = percente(path[i][0], path[i][1], path[i][2], path[i][3], path[i][4], path[i][5], path[i][6], path[i][7]);
                        drawCurve(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7]);
                        path[i][8] += options.speed;
                    } else if (path[i][8]) {
                        drawCurve(path[i][0], path[i][1], path[i][2], path[i][3], path[i][4], path[i][5], path[i][6], path[i][7]);
                    }
                };
                ctx.lineWidth = options.lineSize;
                ctx.lineJoin = options.lineJoin;
                ctx.strokeStyle = options.color;
                ctx.stroke();

                if (options.slowing) {
                    options.speed = options.speed / options.slowingSpeed;
                }
            }

            function getStartingX(string) {
                var width = 0;
                for (var i = 0; i < string.length; i++) {
                    width += $.fn.lineLoader.map[string[i]].width;
                };
                return canvas.width / 2 - width / 2;
            }

            function calculateNewX(array, x, y) {
                var newArray = [];
                for (var i = 0; i < array.length; i++) {
                    newArray.push(i % 2 ? array[i] + y : array[i] + x);
                };
                newArray.push(false);
                return newArray;
            }

            function calculateNewPath(array, x, y) {
                var newArray = [];
                for (var i = 0; i < array.length; i++) {
                    newArray.push(calculateNewX(array[i], x, y));
                };
                return newArray;
            }

            function getFirstLine() {
                return [0, canvas.height / 2 + height, 0, canvas.height / 2 + height, getStartingX(options.text), canvas.height / 2 + height, getStartingX(options.text), canvas.height / 2 + height, false];
            }

            function getLastLine(string) {
                var width = 0;
                for (var i = 0; i < string.length; i++) {
                    width += $.fn.lineLoader.map[string[i]].width;
                };
                var x = canvas.width / 2 + width;
                return [x, canvas.height / 2 + height, x, canvas.height / 2 + height, canvas.width, canvas.height / 2 + height, canvas.width, canvas.height / 2 + height, false];
            }

            function makePath(string) {
                var x = getStartingX(string);
                var y = canvas.height / 2;
                var path = [];
                path.push(getFirstLine())
                for (var i = 0; i < string.length; i++) {
                    var newPath = calculateNewPath($.fn.lineLoader.map[string[i]].path, x, y);
                    path = path.concat(newPath);
                    x += $.fn.lineLoader.map[string[i]].width;
                };
                path.push(getLastLine(string))

                return path;
            }

            function drawBackground() {
                ctx.fillStyle = options.gradientBackground ? grd : options.backgroundColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            function trimText(text) {
                var newText = text.replace(/[^\w\s]/gi, '');
                return newText.toLowerCase();
            }

            function resize() {
                var box = canvas.getBoundingClientRect();
                canvas.width = box.width;
                canvas.height = box.height;
                grd = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.height);
                grd.addColorStop(0, options.gradientColor1);
                grd.addColorStop(1, options.gradientColor2);
            }

            function setFullPath(to) {
                for (var i = 0; i < to; i++) {
                    path[i][path[i].length - 1] = true;
                };
            }

            function isFinish() {
                if (path[path.length - 1][path[path.length - 1].length - 1] >= 1 && !finish) {
                    finish = true;
                    if (options.fadeOut) {
                        $(canvas).fadeOut(options.fadeOutDuration, function () {
                            $(this).remove();
                            if (options.onFinish) {
                                options.onFinish.call();
                            }
                            if (options.hideScroll) {
                                element.css('overflow', 'auto');
                            }
                        });
                    } else {
                        $(canvas).remove();
                        if (options.onFinish) {
                            options.onFinish.call();
                        }
                        if (options.hideScroll) {
                            element.css('overflow', 'auto');
                        }
                    }
                }
            }

            function reDraw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawBackground();
                drawPath();
                isFinish();
                requestAnimationFrame(reDraw);
            }

            function start() {
                $(canvas).css(options.canvas.style).appendTo(element);
                if (options.fadeIn) {
                    $(canvas).hide().fadeIn(options.fadeInDuration);
                }
                if (options.hideScroll) {
                    element.css('overflow', 'hidden');
                }
                options.text = trimText(options.text);
                resize();
                path = makePath(options.text);
                reDraw();
            }

            start();

            $(window).resize(function () {
                resize();
                path = makePath(options.text);
                setFullPath(currentPath)
            });
        });

    }

    $.fn.lineLoader.defaults = {

        text: 'loading',
        color: '#2c3e50',
        lineSize: 2.5,
        lineJoin: 'round',

        speed: 1,
        slowing: false,
        slowingSpeed: 1.04,

        hideScroll: false,

        fadeIn: false,
        fadeInDuration: 30,
        fadeOut: true,
        fadeOutDuration: 50,

        backgroundColor: 'transparent',

        gradientBackground: false,
        gradientColor1: '#95a5a6',
        gradientColor2: '#7f8c8d',

        canvas: {
            id: 'line-loader',
            style: {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                zIndex: 9999999
            }
        }
    }

    $.fn.lineLoader.map = {

        d: {
            path: [
                [0, 38, 0, 38, 5, 38, 5, 38],
                [5, 38, 5, 38, 5, 2.209, 5, 2.209],
                [5, 2.209, 5, 2.209, 17.329, 2.209, 17.329, 2.209],
                [17.329, 2.209, 20.104, 2.188, 22.236, 2.375, 23.701, 2.722],
                [23.701, 2.722, 25.75, 3.167, 27.5, 4.021, 28.951, 5.286],
                [28.951, 5.286, 30.833, 6.854, 32.292, 8.896, 33.186, 11.401],
                [33.186, 11.401, 34.104, 13.875, 34.583, 16.708, 34.59, 19.909],
                [34.59, 19.909, 34.604, 22.604, 34.271, 25.021, 33.639, 27.136],
                [33.639, 27.136, 32.979, 29.229, 32.188, 30.958, 31.197, 32.349],
                [31.197, 32.349, 30.208, 33.708, 29.125, 34.792, 27.938, 35.596],
                [27.938, 35.596, 26.354, 36.646, 24.958, 37.021, 23.664, 37.39],
                [23.664, 37.39, 22.354, 37.729, 20.396, 38.137, 17.915, 38],
                [17.915, 38, 17.915, 38, 39.59, 38, 39.59, 38]
            ],
            width: 39.59
        },
        e: {
            path: [
                [0, 38, 0, 38, 5, 38, 5, 38],
                [5, 38, 5, 38, 5, 2.209, 5, 2.209],
                [5, 2.209, 5, 2.209, 30.878, 2.209, 30.878, 2.209],
                [30.878, 2.209, 30.878, 2.209, 30.878, 6.433, 30.878, 6.433],
                [30.878, 6.433, 30.878, 6.433, 9.736, 6.433, 9.736, 6.433],
                [9.736, 6.433, 9.736, 6.433, 9.736, 17.395, 9.736, 17.395],
                [9.736, 17.395, 9.736, 17.395, 29.537, 17.395, 29.537, 17.395],
                [29.537, 17.395, 29.537, 17.395, 29.537, 21.594, 29.537, 21.594],
                [29.537, 21.594, 29.537, 21.594, 9.736, 21.594, 9.736, 21.594],
                [9.736, 21.594, 9.736, 21.594, 9.736, 33.776, 9.736, 33.776],
                [9.736, 33.776, 9.736, 33.776, 31.708, 33.776, 31.708, 33.776],
                [31.708, 33.776, 31.708, 33.776, 31.708, 38, 31.708, 38],
                [31.708, 38, 31.708, 38, 36.708, 38, 36.708, 38]
            ],
            width: 36.708
        },
        f: {
            path: [
                [0, 38, 0, 38, 5, 38, 5, 38],
                [5, 38, 5, 38, 5, 2.209, 5, 2.209],
                [5, 2.209, 5, 2.209, 29.146, 2.209, 29.146, 2.209],
                [29.146, 2.209, 29.146, 2.209, 29.146, 6.433, 29.146, 6.433],
                [29.146, 6.433, 29.146, 6.433, 9.736, 6.433, 9.736, 6.433],
                [9.736, 6.433, 9.736, 6.433, 9.736, 17.517, 9.736, 17.517],
                [9.736, 17.517, 9.736, 17.517, 26.533, 17.517, 26.533, 17.517],
                [26.533, 17.517, 26.533, 17.517, 26.533, 21.74, 26.533, 21.74],
                [26.533, 21.74, 26.533, 21.74, 9.736, 21.74, 9.736, 21.74],
                [9.736, 21.74, 9.736, 21.74, 9.736, 38, 9.736, 38],
                [9.736, 38, 9.736, 38, 34.146, 38, 34.146, 38]
            ],
            width: 34.146
        },
        h: {
            path: [
                [0, 38, 0, 38, 5, 38, 5, 38],
                [5, 38, 5, 38, 5, 2.209, 5, 2.209],
                [5, 2.209, 5, 2.209, 9.736, 2.209, 9.736, 2.209],
                [9.736, 2.209, 9.736, 2.209, 9.736, 16.906, 9.736, 16.906],
                [9.736, 16.906, 9.736, 16.906, 28.34, 16.906, 28.34, 16.906],
                [28.34, 16.906, 28.34, 16.906, 28.34, 2.209, 28.34, 2.209],
                [28.34, 2.209, 28.34, 2.209, 33.076, 2.209, 33.076, 2.209],
                [33.076, 2.209, 33.076, 2.209, 33.076, 38, 33.076, 38],
                [33.076, 38, 33.076, 38, 38.076, 38, 38.076, 38]
            ],
            width: 38.076
        },
        i: {
            path: [
                [0, 38, 0, 38, 5, 38, 5, 38],
                [5, 38, 5, 38, 5, 2.209, 5, 2.209],
                [5, 2.209, 5, 2.209, 9.736, 2.209, 9.736, 2.209],
                [9.736, 2.209, 9.736, 2.209, 9.736, 38, 9.736, 38],
                [9.736, 38, 9.736, 38, 14.736, 38, 14.736, 38]
            ],
            width: 14.736
        },
        n: {
            path: [
                [0, 38, 0, 38, 5, 38, 5, 38],
                [5, 38, 5, 38, 5, 2.209, 5, 2.209],
                [5, 2.209, 5, 2.209, 9.858, 2.209, 9.858, 2.209],
                [9.858, 2.209, 9.858, 2.209, 28.657, 30.31, 28.657, 30.31],
                [28.657, 30.31, 28.657, 30.31, 28.657, 2.209, 28.657, 2.209],
                [28.657, 2.209, 28.657, 2.209, 33.199, 2.209, 33.199, 2.209],
                [33.199, 2.209, 33.199, 2.209, 33.199, 38, 33.199, 38],
                [33.199, 38, 33.199, 38, 38.199, 38, 38.199, 38]
            ],
            width: 38.199
        },
        o: {
            path: [
                [0, 38, 0, 38, 19.114, 38, 19.114, 38],
                [19.114, 38, 18.75, 37.973, 15.725, 37.8, 13.081, 36.169],
                [13.081, 36.169, 10.424, 34.537, 8.417, 32.31, 7.051, 29.504],
                [7.051, 29.504, 5.667, 26.667, 5.021, 23.688, 5, 20.568],
                [5, 20.568, 5.021, 14.625, 6.563, 9.979, 9.785, 6.616],
                [9.785, 6.616, 12.958, 3.229, 17.062, 1.562, 22.139, 1.575],
                [22.139, 1.575, 25.438, 1.562, 28.417, 2.333, 31.074, 3.943],
                [31.074, 3.943, 33.729, 5.479, 35.75, 7.687, 37.143, 10.547],
                [37.143, 10.547, 38.583, 13.354, 39.229, 16.563, 39.229, 20.153],
                [39.229, 20.153, 39.208, 23.771, 38.479, 26.979, 37.031, 29.895],
                [37.031, 29.895, 35.563, 32.729, 33.521, 34.917, 30.806, 36.401],
                [30.806, 36.401, 28.104, 37.875, 25.229, 37.979, 24.114, 38],
                [24.114, 38, 24.114, 38, 44.229, 38, 44.229, 38]
            ],
            width: 44.229
        },
        p: {
            path: [
                [0, 38, 0, 38, 5, 38, 5, 38],
                [5, 38, 5, 38, 5, 2.209, 5, 2.209],
                [5, 2.209, 5, 2.209, 18.501, 2.209, 18.501, 2.209],
                [18.501, 2.209, 20.875, 2.156, 22.703, 2.313, 23.945, 2.551],
                [23.945, 2.551, 25.703, 2.828, 27.172, 3.406, 28.364, 4.224],
                [28.364, 4.224, 29.542, 5.021, 30.521, 6.146, 31.233, 7.678],
                [31.233, 7.678, 31.958, 9.146, 32.306, 10.776, 32.319, 12.561],
                [32.319, 12.561, 32.318, 15.576, 31.365, 18.165, 29.415, 20.288],
                [29.415, 20.288, 27.482, 22.388, 23.976, 23.447, 18.916, 23.449],
                [18.916, 23.449, 18.916, 23.449, 9.736, 23.449, 9.736, 23.449],
                [9.736, 23.449, 9.736, 23.449, 9.736, 38, 9.736, 38],
                [9.736, 38, 9.736, 38, 37.306, 38, 37.306, 38]
            ],
            width: 35
        },
        ' ': {
            path: [
                [0, 38, 0, 38, 30, 38, 30, 38]
            ],
            width: 30
        },
    };

}(jQuery, window, document));


function showLoader() {
    $('body').lineLoader({
        text: 'FIND HOPE',
        gradientBackground: true,
        speed: 0.6,
        color: '#ecf0f1',
        gradientColor1: '#1abc9c',
        gradientColor2: '#16a085'
    });
}
var i = 0;
var timer = setInterval(() => {
    showLoader();
    console.log(i);
    if (i > 1)
        clearInterval(timer);
    i++;
}, 3000);