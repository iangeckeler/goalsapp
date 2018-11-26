const newGoalMsg = (name) => {
    let message =[];
    if(name!==undefined) {
        message[0] = 'Way to set some priorities today ' +name+ '! Below is a list of the goals you set. Your stakeholder will get the list and see how many you complete by the end of the day!'
        message[1] = name+" chose you as their stakeholder with thefocusapp. Here are their priorities! At the end of the day you can see how many they completed!"
        return message
    } else {
        message[0] = 'Way to set some priorities today! Below is a list of the goals you set. Your stakeholder will get the list and see how many you complete by the end of the day!'
        message[1] = "Someone you know chose you as their stakeholder with thefocusapp. Here are their priorities!"
        return message
    }

}

module.exports = newGoalMsg;
