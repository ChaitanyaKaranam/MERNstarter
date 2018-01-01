import React , {Component} from 'react';
import axios from 'axios';

export default class Sample extends Component{

    constructor(props){
        super(props);
        this.state={
            sampleData:[]
        }       

    }
    
    componentDidMount(){
        axios.get('http://localhost:5000/api/sample').then((res)=>{
            console.log(res);
            this.setState({sampleData:res.data});
        }).catch((err)=>{
            console.log(err);
        });
    }

    renderSample(){
        if(this.state.sampleData){
            return this.state.sampleData.map(val=>{
                return <li className="collection-item" key={val.id}>{val.name}</li>
            });
        }
    }
    
    render(){
        return(
            <div>
            <ul className="collection">
            {this.renderSample()}
            </ul>    
                
            </div>    
        )
    }
}