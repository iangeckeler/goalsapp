const React = require('react')
const e = React.createElement

const List = props => {
    return e('ul',null,[
        props.items.map((item,index)=>{
            return e('li',{key:index},item);
        })])
}

module.exports = List