const myEach = (collection, callback) => {
    const copy = typeof collection === 'object' ? 
    Object.values(collection) :
    [...collection];
    for(let i = 0; i < copy.length; i++){
        callback(copy[i]);
    }
    return collection;
}

const myMap = (collection, callback) => {
    const copy = typeof collection === 'object' ? 
    Object.values(collection) :
    [...collection];
    for(let i = 0; i < copy.length; i++){
        copy[i] = callback(copy[i])
    }
    console.log(collection, copy)
    return copy;
}

const myReduce = (collection, callback, acc) => {
    const copy = typeof collection === 'object' ? 
    Object.values(collection) :
    [...collection];
    console.log(collection, callback);
    if(!acc){
        acc = copy.shift();
    }
    while(copy.length > 0){
        let element = copy.shift();
        acc = callback(acc, element, collection);
        console.log(acc, element);
    }
    return acc;
}