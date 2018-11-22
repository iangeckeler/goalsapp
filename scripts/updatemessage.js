const updateMsg = (tasks,status) => {
    let undone = status.filter((x)=>{return x==0}).length
    let tasknum = tasks.length;
    let message='';
    if(undone==tasknum) {
        message='No priorities checked off, get crackin!'
        for (let i=0;i<tasknum;i++) {
            if(status[i]==0){
                message += `\n${i+1}. ${tasks[i]}`
            } else {
                message += `\n${i+1}. Done`
            }
        }
    } else if(tasknum-undone == 1) {
        message='One down, way to go!'
        for (let i=0;i<tasknum;i++) {
            if(status[i]==0){
                message += `\n${i+1}. ${tasks[i]}`
            } else {
                message += `\n${i+1}. Done`
            }
        }
    } else if(tasknum-undone == tasknum-1) {
        message='One to go, finish him!'
        for (let i=0;i<tasknum;i++) {
            if(status[i]==0){
                message += `\n${i+1}. ${tasks[i]}`
            } else {
                message += `\n${i+1}. Done`
            }
        }
    }
    message+= '\n When you finish a task, type the number of the task to check it off.'
    return message
}

module.exports = updateMsg;
