function isOnlyObj(object) {//判断是不是最简单的对象(没有嵌套)
    for (let key in object) {
        if (typeof object[key] === "object" && object[key] !== null) {
            return false
        }
    }
    return true
}
function isPureObj(object) {//判断是不是纯对象，而不是数组。
    return Object.prototype.toString.call(object) === '[object Object]'
}
function typeOf(obj) {
    return Object.prototype.toString.call(obj)
}
function deepCopy(obj) {
    let copy;
    let contain = arguments[1] || new WeakMap();
    if (typeOf(obj) === '[object Object]') {
        copy = {}
        if (contain.has(obj)) {
            copy = obj
        } else {
            contain.set(obj, 'MARK')
            for (let key in obj) {
                copy[key] = deepCopy(obj[key], contain);
            }
        }
    } else if (typeOf(obj) === '[object Function]') {
        copy = obj.bind();
    } else if (typeOf(obj) === '[object Array]') {
        copy = obj.map((item) => {
            return deepCopy(item, contain);
        })
    } else {
        copy = obj;
    }
    return copy
}
function ChangeIndexArrayInArry(array = [], element, instead) {
    if (!Array.isArray(element)) {
        const index = array.indexOf(element);
        if (index > -1) {
            array.splice(index, 1)
            array.unshift(element)
        }
    } else {
        element.reverse().forEach((value, index) => {
            const indexs = array.indexOf(value);
            if (indexs > -1) {
                array.splice(indexs, 1)
                array.unshift(value)
            }
        })
    }
    return array
}
module.exports = {
    isOnlyObj,
    isPureObj,
    typeOf,
    deepCopy,
    ChangeIndexArrayInArry
}