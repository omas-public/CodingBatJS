[Array](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)
=====

JavaScript の Array オブジェクトは、配列を構築するためのグローバルオブジェクトです。配列とは、高レベルのリスト構造のようなオブジェクトです。


Propeaty
--------

### Array.prototype.length
配列内の要素数を反映します。

```
let arr = [1, 2, 3];
arr[arr.length - 1]; // 最後の要素にアクセス
```

Method
--------
### Array.prototype.join([separator = ','])
メソッドは、配列のすべての要素を繋いで文字列にします。

```
let arr = [1, 2, 3];
arr.join();    // '123'
arr.join(' '); // '1 2 3'
arr.join('\n') // '1\n2\n3'
```

### Array.prototype.slice(begin[,end])
配列の一部を取り出して新しい配列を返します。
```
let arr = [1, 2, 3];
arr(1);    // [2, 3]
arr(-1);   // [3]
arr(-2);   // [2, 3]
arr(0, 2); // [1, 2]
```

### Array.prototype.includes()
特定の要素が配列に含まれているかどうかを true または false で返します。
```
let arr = [1, 2, 3];
arr.includes(2); // true
arr.includes(4); // false
```

### Array.prototype.indexOf(searchElement[, fromIndex])
引数に与えられた内容と同じ内容を持つ配列要素の内、最初のものの添字を返します。存在しない場合は -1 を返します。

```
let arr = [1, 2, 3, 1];
arr.indexOf(1); // 0
arr.indexOf(5); // -1
```

### Array.prototype.lastIndexOf(searchElement[, fromIndex])
配列中で与えられた要素が見つけられた最後の添字を返します。もし存在しなければ -1 を返します。配列は fromIndex から逆向きに検索されます。
```
let arr = [1, 2, 3, 1];
arr.indexOf(1); // 0
arr.indexOf(5); // -1
```


### Array.prototype.reverse()
配列の要素を反転させます。最初の要素は最後に、最後の要素は最初になります。
```
let arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

### Array.prototype.sort([compareFunction])
配列の要素をソートします。

```
let arr = [1, 3, 2];
arr.sort((a, b) => a - b); // [1, 2, 3]
arr.sort((a, b) => b - a); // [3, 2, 1]
```

### Array.prototype.concat(value1[, value2[, ...[, valueN]]])

concat() メソッドは、配列に他の配列や値をつないでできた新しい配列を返します。

```
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
arr1.concat(b); // [1, 2 ,3 ,3 ,4, 5]
```

### Array.prototype.fill(value[, start = 0[, end = this.length]])
fill() メソッドは、配列中の開始インデックスから終了インデックスまでの要素を固定値で設定します。

Array(3).fill(0); // [0, 0, 0]


### Other

- Array.prototype.push()
- Array.prototype.pop()
- Array.prototype.unshift()
- Array.prototype.shift()

- Array.prototype.map()
- Array.prototype.filter()
- Array.prototype.reduce()
- Array.prototype.reduceRight()


- Array.prototype.some()
- Array.prototype.every()

- Array.prototype.forEach()
- Array.prototype.keys()

- Array.prototype.find()
- Array.prototype.findIndex()
