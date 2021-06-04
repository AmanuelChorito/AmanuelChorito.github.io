const arr=[1,2,3,4,7,9,3,10];
let result=arr.filter(function(elem,index,array) {
return elem>5;}).map(function(elem,index,array){
  return index
});
console.log(result)
    const arr1=[1,2,3,4,7,9,3,10];
    let res= arr1.reduce(function(accumulator,current,index,array){
      accumulator+=current;
      return accumulator;
    },0);
    console.log(res)



let name = 'john'
const point = {
    x: 3,
    y: 5,
    getArea: function () {
        return this.x * this.y
    },
    'this is': true
}
console.log(point.x, point.y)
console.log(point.getArea())
console.log(point['this is'])
point[name] = 'smth'
point.result = point.getArea()
console.log(point)