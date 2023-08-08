let given_array=[2,3,1,4,0]
for (let i=0;i<given_array.length;i++){
    for (let j=0;j<given_array.length;j++){
        if (given_array[j]>given_array[j+1]){
           let  x=given_array[j]
           given_array[j]=given_array[j+1]
           given_array[j+1]=x

            
        }
    }
}
console.log(given_array);