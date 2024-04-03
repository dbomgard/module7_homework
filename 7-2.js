const fish = {
    environment: "water",
    size: "small"
}
  
function ownProp (key, obj) {
    return key in obj;
}
    
console.log(ownProp ("size", fish)) ;