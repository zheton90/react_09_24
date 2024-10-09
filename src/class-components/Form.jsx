import React from 'react'


export class Form extends React.Component{
    state = {    
        name: 'Zhen',
        arr: ['ivanov', 'petrov', 'sidorov']
    }  

    handelChangeName = (ev) => {
        this.setState({name: '1'})
        this.setState({name: '2'})
    }

    handelSubmit = (ev) => {
        ev.preventDefault()
        console.log(this.state.name)

    }


    render () {
       return <form onSubmit={this.handelSubmit}> 
       {this.state.arr.map((item, idx) => {
        return <div key={idx}>{item}</div>
       })}       
       <p>Name: {this.state.name}</p>
       <input type='text' onChange={this.handelChangeName}/>
       <br/>
       <button>send name</button>
   </form>
    }
}