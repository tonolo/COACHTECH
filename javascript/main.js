// 　第一問　重複値を除く配列の作成
//filterの使用、indexOfの利用、返り値の使用、console.logの使用
const array1 = [2, 4, 7, 5, 4, 3, 8];

//const result = array.filter(function (item) {
  //return item.indexOf(item)
//});

//console.log(result);

let array = [2, 4, 7, 5, 4, 3, 8];


let result = array.filter(function(x, i, self) {
        return self.indexOf(x) === i;
    });

console.log(result);


//　第2問　2020年と2021がうるう年か同かを判定するコードの作成
//if文の使用、lwapyearという関数の使用、引数に西暦を渡す、返り値の使用、console.logの使用
//うるう年の定義
//西暦が4で割り切れるかつ100で割り切れない
//西暦が400で割り切れる

const lwapyear = (year) => {
  if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    return "うるう年です";
  } else {
    return "うるう年ではありません";
  };
};

console.log(lwapyear(2020));