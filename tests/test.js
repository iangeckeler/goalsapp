let status = [0,1,0];
let updatedStatus = [1,0,0]

let newStatus = status.map((x,index)=>{
    if(x==0 && updatedStatus[index]==1) {
        return 1
    } else {
        return x
    }
})

