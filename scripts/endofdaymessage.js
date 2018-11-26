const endOfDayMsg = (tasks,status,name) => {
    let undone = status.filter((x)=>{return x==0}).length
    let tasknum = tasks.length;
    let message=[];
    if (name!== undefined){
        if(undone==tasknum) {
            message[0] = "What happened? You didn't complete any of your priorities today... Back at 'em tomorrow!"
            message[1] = name+ " didn't complete a single one of their priorities today, what a shame..."
        } else if(tasknum-undone == 0) {
            message[0]='Holy Productivity Batman! You killed it today!'
            message[1] = name+ ' completed all of their priorities today!'
        } else {
            message[0] = 'Way to knock at least one out! Try for more tomorrow ;)'
            message[1] = name+' completed at least one of their most important tasks today.'
        }
    } else {
        if(undone==tasknum) {
            message[0] = "What happened? You didn't complete any of your priorities today... Back at 'em tomorrow!"
            message[1] = "Your friend didn't complete a single one of their priorities today, what a shame..."
        } else if(tasknum-undone == 0) {
            message[0]='Holy Productivity Batman! You killed it today!'
            message[1] = 'Your friend completed all of their priorities today!'
        } else {
            message[0] = 'Way to knock at least one out! Try for more tomorrow ;)'
            message[1] = 'Your friend completed at least one of their most important tasks today.'
        }
    }
    for (let i=0;i<tasknum;i++) {
        if(status[i]==0){
            message.forEach((el)=>{
                el += `\n${i+1}. ${tasks[i]}`
            }) 
        } else {
            message.forEach((el)=>{
                el += `\n${i+1}. Done`
            }) 
        }
    }
}

module.exports = endOfDayMsg;
