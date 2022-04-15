function oddNumber(arr){
    arr.some((val)=>{
        if(val % 2 !== 0){
            return false
        }
    })
}

function hasAZero(num){
    return num.some((val)=>{
        return val === 0;
    })
}

function hasOnlyOddNumbers(arr){
    return arr.every((val)=>{
        return val % 2 !== 0;
    })
}

function hasNoDuplicates(arr){
    return arr.every((val)=>{
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}

function hasCertainKey(arr,key){
    return arr.every((val)=>{
        return key in val
    })
}

function hasCertainValue(arr,key,searchVal){
    return arr.every((val)=>{
        return val[key] === searchVal;
    })
}