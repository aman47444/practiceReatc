import React, { Component } from 'react'
import {
    Button,
    ListGroup
} from 'react-bootstrap'
export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false,
            tagLabel: [
                {name:"2020"},
                {name:'2018'},
                {name:"2019"},
                {name:"Camry"},
                {name:"National Promotion"},
                {name:"Ford"},
                {name:"OCP"},
                {name:"July"},
                {name:"March"},
                {name:"ToyotaCare"},
                {name:"Sale"},
                {name:'Winter'},
                {name:'SeasonalPromo'},
                {name:'Discount'}
            ],
            selected: 0
        }
        
    }

    taoggleFun = (index) => {
        console.log(index)
        this.setState({
            isSelected: !this.state.isSelected,
            selected: index
        })
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Aman Kumar</h1>
                <div className="container">
                    { this.state.tagLabel.map((item, index) =>
                        <ListGroup><ListGroup.Item>{this.state.isSelected && this.state.selected === index ? <Button onClick={this.taoggleFun.bind(this, index)} key={index} ><i className="fa fa-check mr-3" aria-hidden="true"></i>{item.name}</Button>
                         : <Button key={index} onClick={this.taoggleFun.bind(this,index)}><i className="fa fa-tags mr-3" aria-hidden="true"></i>{item.name}</Button>}</ListGroup.Item></ListGroup>
                    )}
                </div>
            </div>
        )
    }
}