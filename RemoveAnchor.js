function removeUrlAnchor(url){
    const noHash = url.split('#')[0]
    return noHash
}

console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')); 


