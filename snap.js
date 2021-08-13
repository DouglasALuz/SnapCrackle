function snapCrackle(maxValue){

let snap = []
for(let i=1; i<=maxValue; i++){
    
    if((i%5===0)&&(i%2===1)){
    snap.push("SnapCrackle")
    }
    else if(i%2===1){
         snap.push("Snap")
    }
    else if(i/i === 1){
    snap.push(i)
}
}
return snap.join(', ')
}
console.log(snapCrackle(20))


//---------------------------------------------


function snapCrackle(maxValue){

    let snap = []
    
   



    for(let i=1; i<=maxValue; i++){
            if(primo(i)&&(i%5===0)&&(i%2===1)){
            snap.push("SnapCracklePrime")    
            }
            else if((i%5===0)&&(i%2===1)){
            snap.push("SnapCrackle")
            }
            else if(primo(i)&&i%2===1){
            snap.push("SnapPrime")    
            }
            else if(i%2===1){
            snap.push("Snap")
            }
            else if(i===2){
            snap.push("Prime")    
            }
            else if(i/i === 1){
            snap.push(i)
    }
    
    }
    return snap.join(', ')
    }
    console.log(snapCrackle(200))


function primo (maxValue) {
    for (let i = 2; i < maxValue; i++)
      if (maxValue % i === 0) {
        return false
      }
    return maxValue
  };