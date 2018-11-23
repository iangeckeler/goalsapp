const e = React.createElement

//creat the list item component
const List = props => {
    return e('ul',null,[
        props.items.map((item,index)=>{
            return e('li',{key:index},item);
        })])
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            temp: '',
            items: []
        };
    }

    onClick ()  {
        event.preventDefault();
        this.setState((prevState)=>{
            return {temp:'',items: [...prevState.items,this.state.temp]}
        })
    }

    onChange(event) {
        this.setState({temp: event.target.value})
    }

    save() {
        event.preventDefault();
        console.log(this.state.items)
        console.log(this.state.title)
        const payload = {
        title: this.state.title,
        body: this.state.items,
        };

        const url = 'https://dicto.serveo.net/sendData';
        axios({
            url:url,
            method:'post',
            data:payload,
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            window.location.replace('/')
        });
    }

    render() {
        return e('div',null,[
            e('form',{onSubmit:event=>{
                event.preventDefault();
            }},[
                e('input',{placeholder:'Title',
                onChange:(event)=> {
                    this.setState({title:event.target.value})
                }})
            ]),
            e('form',null,[
                e(List,{items: this.state.items}),
                e('input',{value:this.state.temp, onChange:this.onChange.bind(this)}),
                e('button',{onClick:this.onClick.bind(this)},'Add New'),
                e('button',{onClick:this.save.bind(this)},'Save')
            ])
        ])
    }

}



ReactDOM.render(e(App),document.getElementById('fruit-list'))
