var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// 对象池
var ObjectPool = (function () {
    function ObjectPool() {
        this.pool = {};
    }
    Object.defineProperty(ObjectPool, "instance", {
        get: function () {
            if (ObjectPool._objectPool == null) {
                ObjectPool._objectPool = new ObjectPool();
            }
            return ObjectPool._objectPool;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取对象
     * @className 对象类名
     * @args 构造函数传参
     */
    ObjectPool.prototype.pop = function (className) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.pool[className] == null) {
            this.pool[className] = [];
        }
        var list = this.pool[className];
        if (list.length > 0) {
            return list.pop();
        }
        else {
            var argsLen = args.length;
            var clz = egret.getDefinitionByName(className);
            var obj;
            switch (argsLen) {
                case 0:
                    obj = new clz();
                    break;
                case 1:
                    obj = new clz(args[0]);
                    break;
                case 2:
                    obj = new clz(args[0], args[1]);
                    break;
                case 3:
                    obj = new clz(args[0], args[1], args[2]);
                    break;
                case 4:
                    obj = new clz(args[0], args[1], args[2], args[3]);
                    break;
                case 5:
                    obj = new clz(args[0], args[1], args[2], args[3], args[4]);
                    break;
            }
            obj.className = className;
        }
        return obj;
    };
    /**
     * 回收对象
    * @obj 需要回收的对象
    */
    ObjectPool.prototype.push = function (obj, funName) {
        if (funName === void 0) { funName = null; }
        var className = obj.className;
        if (this.pool[className] == null) {
            console.log("回收对象的数组不存在");
            return;
        }
        this.pool[className].push(obj);
        if (this.pool[className]) {
            funName && this.dealFun(className, funName);
        }
    };
    /**
     * 创建对象(用于将要大量使用前，预先创建，防止使用时大量创建卡顿)
     * @className 对象类定义
     * @num 创建数量
     * @args 构造函数传参
     */
    ObjectPool.prototype.create = function (className, num) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var list = [];
        for (var i = 0; i < num; i++) {
            list.push(this.pop.apply(this, [className].concat(args)));
        }
        for (i = 0; i < num; i++) {
            this.push(list.pop());
        }
    };
    /**
     * 获取对象池对象数量
     * @className 对象类定义
     * @return 对象数量
     */
    ObjectPool.prototype.getLen = function (className) {
        if (this.pool[className]) {
            return this.pool[className].length;
        }
        return 0;
    };
    /**
     * 清理对象
     * @className 对象类定义
    * @funName 清理前执行指定函数
     */
    ObjectPool.prototype.clear = function (className, funName) {
        if (funName === void 0) { funName = null; }
        if (this.pool[className]) {
            funName && this.dealFun(className, funName);
            this.pool[className] = null;
            delete this.pool[className];
        }
    };
    /**
     * 对象池所有对象执行指定函数
     * @className 对象类定义
     * @funName 函数名
     */
    ObjectPool.prototype.dealFun = function (className, funName) {
        if (this.pool[className]) {
            var list = this.pool[className];
            var len = list.length;
            for (var i = 0; i < len; i++) {
                list[i][funName] && list[i][funName]();
            }
        }
    };
    return ObjectPool;
}());
__reflect(ObjectPool.prototype, "ObjectPool");
//# sourceMappingURL=ObjectPool.js.map