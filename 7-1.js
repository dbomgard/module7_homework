const animal = { 
    color: "orange"
}
  
const fish = {
    environment: "water",
    size: "small"
}
  
function ownProp (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} : ${obj[key]}`);
        }
    }
}

ownProp (fish) ;