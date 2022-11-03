const doNotKnow = (array) => {
    let newArray = []
    let resultArr = []
    let final = []
    array.forEach(element => {
          element = element * (array.indexOf(element) + 1)
          newArray.push(element)
          resultArr.push(element)
    });
    
    
    newArray.sort(function(a, b){return a-b});
    

    newArray.forEach(element => {
        resultArr.forEach(ele => {
            if( ele === element) {
                let index = resultArr.indexOf(ele)
                final.push(array[index])

                console.log(index)
            }
        })
    })

    console.log(final)    
}



let arr = [23, 2, 3, 4, 5]

doNotKnow(arr)