const serveoHost = appUrl;
const localHost = '/'
const host = localHost;

console.log('working')

// axios.get(host+'getData').then(res=>{
//     console.log(res)
// });

let formButton = document.getElementById('form-button');
console.log(formButton)
formButton.onclick = () => {
    event.preventDefault();
    let stakeholderPhone = document.getElementById('stakeholderPhone').value;
    let items=[];
    for (let i=0;i<3;i++){
        let taskNum = `task${i+1}`
        console.log(taskNum)
        let value = document.getElementById(taskNum).value
        items.push(value);
    }
    console.log(stakeholderPhone)
    console.log(items)
    const payload = {
    stakephone: stakeholderPhone,
    body: items,
    };

    let url = host+'sendData';
    axios({
        url:url,
        method:'post',
        data:payload,
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>{
        console.log(res)
        window.location.replace('/')
    });
}
