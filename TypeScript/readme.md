# TypeScript

- 无法直接运行

- 需要翻译成主流的 js 代码

- 将 js 弱类型 变成 Typing 强类型

## ts 的优势

1. 类型推演和类型匹配

2. 开发编译时报错

3. 极大程度避免低级错误

4. 支持 js 的最新特性

## 配置开发环境

- [文档](https://www.typescriptlang.org/docs/)

## ts 工作流

- code.ts -> tsc code.ts -> code.js

1. 安装一个开发用轻量服务器`yarn add -D lite-server`
2. 添加启动服务命令`scripts: { 'start': 'lite-server'}`

## ts 的类型基础

1. 根据上下文自动适配类型

2. 显示指定类型

   - `let var : type = value;`

## 数组和元组 Array Tuple

- 指定数组类型

  - `let list: number[] = [1,2,3,4]`
  - `let list: Array<number> = [1,2,3,4]`
  - `let list: any[] = [1,2,3,4]`
  - `let list = [1,2,3,4,'4']`

- Tupple 元组， 固定类型，固定长度的特殊数组

  - `let person :[number, string] = [1,'tom']`
  - 不能改变对应位置的数据类型，也不能增加或减少数组项
  - 使用元组时可以使用 push 方法，多加注意

## 联合类型和文献类型 Union Literal

- Union 类型，可以支持多种类型的类型

  - `let union : string | number`

- 多个确定值的联合就是字面量类型 Literal
  - `let literal : 1 | "2" | true | [1,2,3]`

## 枚举类型 Enum

```typescript
//未指定数值
enum Color {
  red, // 0
  green, // 1
  blue, // 2
}
let color = Color.blue; // 输出 2
// 指定数值，从指定数值开始，也可以给每个值指定数字/字符串
enum Color {
  red = 5, // 5
  green = "green", // green
  blue = 10, // 7
}
let color = Color.blue; // 输出 10
```

## any 和 unknown

- any 快速开始时可用，不保证类型，完成继承了 js 的灵活性

- unknown 可以保证类型的安全

## void 、 undefined 和 never

- void 没有返回值的函数

- undefined 只有`return`的函数

- never 永远执行不完的函数，比如因为抛出异常而未完成的函数
  ```typescript
  function throwError(message: string, errorCode: number) {
    throw {
      message,
      errorCode,
    };
  }
  throwError("not found", 404);
  ```

## 类型适配(类型断言) Type Assertions

有变量`let message : any`
适配为字符串 string 类型的两种方法

1. `const str1 = (<string>message).split(0)`
2. `const str2 = (message as string).toLowerCase()`

**使用类型断言，必须要对当前类型有百分百的把握，否则会发生严重错误**

## 函数类型

`function fn(): type{}`

- 省略参数
  - `(mess: string, code?: number)=>{}` 此处 code 为 undefined
  - 设置默认值`(mess: string, code: number = 0)=>{}`
  - 可选参数还是默认参数，都必须是在末尾

## 对象类型

- js 中，对象是 key to value
- ts 中，是 key to type 键类型对
- 无法给初始化时没有写明的属性赋值和访问，除非对象的类型为 any
- `const person :object = {...}` 相当于`const person :{}`指定了一个空对象，不要这样使用，直接什么不写，自己匹配类型即可

## 接口 Interface 与 class

```typescript
interface Point {
  x: number;
  y: number;
}
const drawPoint = (point: Point) => {
  console.log({ x: point.x, y: point.y });
};
```

- 功能相关的事物应该放在同一个集合中，形成一个模块，这就是高内聚，模块是互相独立的，不同的模块之间应该保持低耦合的状态，把所有相关的模块，属性都打包到一个地方就形成了一个类

- 用面向对象的方法改造下上面的代码

```typescript
interface IPoint {
    // 删除私有属性xy
    // x: number;
    // y: number;
    drawPoint() => void;
    getDistances: (p: IPoint) => number;
    //需要给接口添加getter 和setter
    // setX() => void;
    // setY() => void;
    // getX() => number;
    // getY() => number;
    // 使用set，get懒人包时，接口改写为
    X: number;
    Y: number;
}

class Point implements IPoint {
    //使用访问修饰符的时候，ts会自动生成成员变量， 同时也会赋值，但此时就不能使用参数缺省的方法了
    construct(private x: number, private y: number){
        // this.x = x;
        // this.y = y;
    }
    drawPoint = () => {
        console.log('x', this.x, 'y': this.y)
    }
    getDistances = (p: IPoint) =>{
        return Math.pow(p.X - this.x, 2) + Math.pow(p.Y - this.y, 2)
    }
    set X (value:number) {
        if(value < 0)
            throw new Error('value不能小于0')
        this.x = value
        }
    set Y (value:number) {
        if(value < 0)
            throw new Error('value不能小于0')
        this.y = value
        }
    get X () {
        return this.x
    }
    get Y () {
        return this.y
    }
}

```

### 访问修饰符 Access Modifier

- 对 class 内部的属性和方法进行访问限制

- public private protected

- 在接口中的所有方法和属性都是公开的，必须被实现，所以私有属性不能出现在接口中，需要删除接口中的 xy

- 默认情况下，所有的成员变量和方法都是 public，所有不用给他们写明 public

- ts 的 set 和 get 的懒人包,`set 大写的属性名(){...}`，`get 大写的属性名(){...}`

  - 使用 `point.X = 10, point.X`

- 使用懒人包出现 set X 的错误时要指定编译的版本 >= es5
  - `tsc -t es5 file.ts`

## module 模块

同 es6 的用法

## Generics 泛型

- `<T>(arr:Array<T>)=>{}` T 只是约定俗成的写法，也可以时任意字符
- `<T>(arr:T[])=>{}` T 只是约定俗成的写法，也可以时任意字符
- `const makeTuple = <T,Y>(x: T, y: Y)=> [x, y]` 多泛型的表达方式
- `const makeTuple = <T = number,Y = string>(x: T, y: Y)=> [x, y]` 创建默认类型

## 类型守卫 Type Guards

```typescript
type Square = {
  size: number;
};
type Rectangle = {
  width: number;
  height: number;
};
type Shape = Square | Rectangle;
//类型守卫 ... is ...
function isSquare(shape: Shape): shape is Square {
  return "size" in shape;
}
//类型守卫 ... is ...
function isRectangle(shape: Shape): shape is Rectangle {
  return "width" in shape;
}
function area(shape: Shape): number {
  if (isSquare(shape)) {
    return shape.size * shape.size;
  }
  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }
}
```

## 函数重载 Function overload

```typescript
function reverse(string: string): string;
function reverse(array: string[]): string[];
function reverse(stringOrArray: string | string[]) {
  if (typeof stringOrArray === "string") {
    return stringOrArray.split("").reverse().join("");
  } else {
    return stringOrArray.slice().reverse();
  }
}
```

- 此时可以通过出入的数据类型，清楚的区分出返回的数据类型

## 调用签名 Call Signatures

- 函数的调用签名

```typescript
// type Add = (a: number, b: number) => number;
// {}方式, 好处是可以往里面增加属性，同时可以重载函数
type Add = {
  (a: number, b: number): number;
};

const add: Add = (a: number, b: number) => a + b;
```

## 索引签名 Index Signatures

- 通过索引访问对象的方法就是索引签名

## readonly 只读

- 对参数进行操作，会改变传参本身，会产生副作用

- 副作用与纯函数相反，指一个函数处理了与返回值无关的事情
- 输入参数一样，而输出结果不确定的情况就是副作用

```ts
function reverseSorted(input: number[]): number[] {
    return input.sort().reverse();
}
const started = [1,2,3,4,5]
const result = reverseSorted(started)
//此时 started 本身也会被逆序， 产生了不好的副作用
// 所以需要将input设置为readonly
function reverseSorted( input: readonly number[])...
```

## 双重断言 Double Assertion

`point3 = person as any as Point3D`

## 常量断言

- js 的字符串不可修改，immutable
- `let str = 'elvis'; str[2] = 'x' // error`
- 常量对象可以通过访问对象的属性，进行修改数据
- 使用常量断言就可以让数据不能被修改

```ts
const object = {
  name: "tom",
};
//此时可以通过obj.name修改数据
// 常量断言
const object = {
  name: "tom",
} as const;
//此时obj.name 不可修改
//常量断言可以断言任何一个类型
//可以把原始类型的变量都转换为readonly，包括数组
```

## this

- this 必须是第一位参数
- `this: { value: number ... }`

## typeof 操作符

- 从已有变量中提取变量类型

```ts
const center = {
  x: 0,
  y: 0,
  z: 0,
};
type Point = typeof center;
```

## keyof 操作符

- 将对象的 key 提取为联合类型

- `type PersonKey = keyof Person`
- `function getValueByKey <Obj, Key extends keyof Obj>(obj: Obj, key: Key){return obj[key]}`

## 类型查找 lookup types

- 通过 key 访问数据的形式访问类型
- `:RequestData['payment']`
- 数组类型`:RequestData['payment'][0]`

## 类型映射 Mapped Types

将 type 对象中的所有 key 都循环出来，形成新的 type ，搭配 keyof

- `readonly [key in keyof TypeObject]: number`

进阶，搭配 lookup types 将每种不同类型的 key 匹配他自己的类型

- `readonly [key in keyof TypeObject]: TypeObject[key]`

再进一步，使用泛型，去掉类型约束

```ts
//原始
type ReadonlyPoint = {
  readonly [key in keyof Point]: Point[key];
};
//使用泛型
export type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
const center: Readonly<Point> = {};

//Readonly 是ts的内建函数，在此只作为举例
```

## 映射修饰符 Mapped Modifier

- 上一段的 readonly 就是 映射修饰符

- 局部变量映射
- `export type Partial<T> = { [P in keyof T]? : T[p] }`
- Partial<T>是内建函数，无需自己实现
