export const day1 = [
  {
    name: '1-1',
    key: '1-1',
    question: '关于 const 与 let ,以下说法正确的是',
    type: 'check',
    options: [
      'const 声明的是一个只读变量，声明之后不允许改变其值',
      'let 声明一个变量前不能使用,const 可以',
      'let 作用域为块级;const 作用域为全局',
      'const 声明的变量存在变量提升,值为undefined',
      'let 和 const 在同一作用域不允许重复声明变量',
    ],
    answer: [],
    right: [0, 4],
    desc: [
      'const 与 let 都是 ES6 新增内容，需要和 var 区别',
      'var 是全局作用域,重复声明会进行覆盖，vat存在变量提升，声明前可以使用，值为undefined；let 和 const 为块级作用域，无变量提升，所以必须先声明后使用',
      '块级作用域在失效后会自动进行销毁，所以在不同块级作用域下（例如函数）声明的变量在外部无法访问（闭包情况除外）',
      'const 与 let 唯一区别在于：const 声明常量，不可更改；let 声明变量，可以更改。但是当const 声明的为引用数据类型（对象、数组）其内部的值可以变化，因为const只是限定了内存空间',
    ],
  },

  {
    name: '1-2',
    key: '1-2',
    question: '以下哪个返回值不是数组',
    type: 'check',
    options: [
      "document.getElementById('123')",
      "document.getElementsByClassName('123')",
      "document.getElementsByName('123')",
      'window.location.href',
      "document.getElementsByTagName('div')[0]",
    ],
    answer: [],
    right: [0, 3],
    desc: [
      'BOM 与 DOM，BOM包含DOM。前者是浏览器对象，对浏览器window对象进行各种JS操作（例如添加事件监听，冒泡捕获，动态添加DOM子节点……），DOM仅仅是指当前网页所用到的完整HTML代码片段，是一颗树形结构',
      'DOM树的结构：文档：一个页面就是一个文档，DOM中使用document表示；元素：页面中的所有标签都是元素，DOM中使用element表示；节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM中使用node表示',
      'getElementById 寻找满足查询 id 条件的第一个element，没有则返回null',
      'getElementsByClassName 寻找满足查询 class 条件的element集合（数组对象），没有则返回空数组',
      'getElementsByName 寻找满足查询 name 条件的element集合（数组对象），没有则返回空数组',
      'getElementsByTagName 寻找满足查询 标签 条件的element（数组对象），没有则返回空数组',
      'window.location.href 返回当前浏览器窗口所在完整域名（string）',
    ],
  },

  {
    name: '1-3',
    key: '1-3',
    question: '能否使用 a.length 或者 if(a[0]) 来判断 a 是一个数组',
    type: 'radio',
    options: ['不能', '能'],
    answer: null,
    right: 0,
    desc: [
      '获取长度，或者访问键名（即[0]）这些都不是 数组 的特有属性，string 使用这些方法也可以获取一个不为空的值',
      '为什么声明了一个 number ，就可以使用 toFixed() 方法呢？方法的定义应该是在对象里面学到的。高级一点的说法就是，JS的所有的基本数据类型声明的时候都会封装成特定的对象，也就是 Number对象、String对象……，这些对象和数组对象一样都有共同的方法，但每个类型都有属于自己的特点，这也就是JS高级里提到的原型/原型链',
      '数组类型的特点是：它是数据的有序集合（类似于 栈）',
      '判断一个数据 a 是否是数组可以使用 Array.isArray(a)，返回的是 布尔值。可以在代码全局搜索 Array.isArray 理解一下那段代码的意思',
    ],
  },

  {
    name: '1-4',
    key: '1-4',
    question:
      "已知对象可以通过直接访问属性名（key）新建属性，那么：const a = {name:'dzy'};console.log(a['name'].length);console.log(a['weight'].length)  的输出结果是",
    type: 'radio',
    options: ['3  0', '3  null', '3  error', '3  undefined'],
    answer: null,
    right: 2,
    desc: [
      '获取对象属性可以通过 . 和 []',
      '直接访问不存在的键名可直接创造该属性，但是值为 undefined',
      "a['weight'].length  为链式调用，相当于 a.weight.length。 a.weight 为 undefined,undefined 没有 length 属性",
      "链式调用顺序是从左至右依次调用，同级优先处理括号内。例如：a.name.length.toFixed(a.name.length+1)  顺序就是 a.name -> ('dzy').length -> a.name.length+1 -> ('dzy').length.toFixed(4) -> '3.0000'",
    ],
  },
]
