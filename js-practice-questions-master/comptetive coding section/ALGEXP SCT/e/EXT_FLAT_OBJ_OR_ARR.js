console.log("Hello Geek!")

let ob = {
    a:1,
    b:2,
    c: {
        x:1,y:2,z:{
            d:1,e:2,f:3
        }
    },
    g:'hii',
    h:'hello'
}


function flatten(obj , keyAcc = ''){
    const flattenObj = {}
    
    for(let key in obj){
        let keyName = keyAcc ? `${keyAcc}.${key}` : `${key}` 
        if(typeof obj[key] == 'object'){
            Object.assign(flattenObj , flatten(obj[key], keyName) )
        }else{
            flattenObj[keyName] = obj[key]
        }
    }
    
    
    
    return flattenObj
}

console.log(flatten(ob))


function flattenArr(arr){
    
    let flattenArrList = []
    
    for(let i=0 ;i< arr.length ; i++){
        if(Array.isArray(arr[i])){
     flattenArrList =     flattenArrList.concat(flattenArr(arr[i]))
            
        }else{
           flattenArrList.push(arr[i])
        }
    }
    
    return flattenArrList
}
console.log(flattenArr([[[[[[2,3]]]],6],4]))