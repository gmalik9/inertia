// inertia standard library

function clone(obj) {
    if (null === obj) {
        return obj;
    }

    if (typeof obj === 'array') {
        return obj.slice();
    }

    if (typeof obj !== 'object') {
        return obj;
    }

    var copy = obj.constructor();

    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }

    return copy;
}

function nth(list, n) {
    if (list.length && list.length + 1 < n) {
        return null;
    }

    return list[n];
}

function first(list) {
    return nth(list, 0);
}

function rest(list) {
    return list.slice(1);
}

function second(list) {
    return nth(list, 1);
}

function last(list) {
    return nth(list, list.length - 1);
}

function count(list) {
    return list.length;
}

function take(n, list) {
  return list.slice(0, n);
}

function partition(n, list) {
    if (list.length % n !== 0) {
        throw Error('Uneven number of elements.');
    }

    if (list.length === 0) {
        return [];
    }

    return conj(
        [take(n, list)],
        partition(n, list.slice(n))
    );
}

function cons(a, list) {
    return [a].concat(list);
}

function conj(list, a) {
    return list.concat(a);
}

function get(obj, key) {
    if (obj.hasOwnProperty(key)) {
        return obj[key];
    }

    return null;
}

// update a key in a map
function update(obj, key, value) {
    var copy = clone(obj);
    copy[key] = value;
    return copy;
}

function map(fn, list) {
    return list.map(fn);
}

function filter(fn, list) {
    return list.filter(fn);
}


// inertia standard library end



var a = [
        1,
        2,
        3
    ];
console.log(conj(a, 4));
console.log(cons(0, a));
console.log(a);
console.log(take(2, a));
console.log(count(a));
console.log(first(a));
console.log(partition(2, conj(a, 4)));
var inc = function (x) {
    return x + 1;
};
console.log(map(inc, a));