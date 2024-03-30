const fish = {
    environment: "water",
    size: "small"
}
  
function ownProp (key, obj) {
    if (key in obj) {
        return true;
    }
    else {
        return false;
    }
}
    
console.log(ownProp ("size", fish)) ;