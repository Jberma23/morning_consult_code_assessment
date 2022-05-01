const fs = require('fs')

function fetchReviews(n){
    fs.readFile("review_list.text", function(error, data) {
      if (error) { throw error; }
      sanitizeData(data.toString().split('\n'), n)
      let array = data.toString().split('\n').map((each) => {return each.split('\t').filter((e) => {return e != ''})})
    });
    // for(let stirng of array){
    //     console.log(stirng)
    // }
}
function sanitizeData(data, n){
    let headers = []
    let stopCount = 0
    let hashArray = []
    let hash = {}
    let arry = data.map(element => {
        if(data.indexOf(element) === 0){
            headers = element.match(/\w+/gi)
        }
        element.split('\t').map((each, idx, array) => {
            // console.log('e')
           each === ''?  null : hash[headers[idx]] = each
           hashArray.push(hash)
        })
        return hash
    })
    console.log(hashArray)
    findCount(arry, n)
    // console.log(arry.filter(checkUnique))
    // let arry = data.map(element => {
    //     return element.split('\t').filter((each) => {return each !== ''})
    // })
    // arry.map((elem, idx, array) => {

    // })

}
function findCount(array, n){
    let hash = {};
    for(let book of array){
        if(hash[book[0]]) hash[book[0]]++
        if(!hash[book[0]]) hash[book[0]] = 0;
    }
    let result = []
        console.log(hash)


}
// function checkUnique(val, idx, self){
//     return self.indexOf(val) === idx
// }
fetchReviews(5)




class BookParser{
    constructor(){

    }




}

