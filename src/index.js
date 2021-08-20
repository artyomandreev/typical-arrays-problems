exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    return array.reduce((x, y) => x < y ? x : y);
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    return array.reduce((x, y) => x > y ? x : y);
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    return array.reduce((x, y) => x + y) / array.length;
}
