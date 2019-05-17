export = suxue
export as namespace suxue
declare namespace suxue {
    type typeString = "[object Null]" | "[object Undefined]" | "[object String]" | "[object Number]" | "[object Boolean]" | "[object Function]" | "[object Date]" | "[object Array]" | "[object RegExp]" | "[object Object]"

    /**
     * 判断是不是最简单的对象(没有嵌套)
     * @param obj 一个对象
     */
    function isOnlyObj(obj: Object): boolean;
    /**
     * 判断是不是纯对象，而不是数组。
     * @param obj 一个对象
     */
    function isPureObj(obj: Object): boolean;
    /**
     * 判断对象类型
     * @param obj 任何 JavaScript 支持的值
     */
    function typeOf(obj: any): typeString;
    /**
     * 深拷贝
     * @param obj 任何 JavaScript 支持的值
     */
    function deepCopy(obj: any): any;
    /**
     * 将数组的元素提前
     * @param array 原数组
     * @param element 提前的元素
     * @param intead 替代元素
     */
    function ChangeIndexArrayInArry(array: Array<any>, element: any, instead?: any): Array<any>;
}
