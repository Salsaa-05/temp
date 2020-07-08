import React , {Component}  from 'react';
import {WorkSection,WorkTitle,Span,WorkPart,Icon,PartTitle,PartDesc,Line} from './style.js'
import axios from 'axios'


class Work extends Component{

state = {
works : []

}
// did mount is used to download all the json file before render.

// componentDidMount it use with state component
componentDidMount(){
axios.get('js/data.json').then( res => {this.setState({works:res.data.works})} )
}
    render(){

const {works} = this.state;

const worksList = works.map( (workitem) => {
    return( 
       //so here first when it loops it will statfy the condition when it count 1 at begin 
        <WorkPart first={workitem.id}   key={workitem.id}>
<Icon className={workitem.icon_name}></Icon>
    <PartTitle>{workitem.title}</PartTitle>
<Line/>
<PartDesc>
    {workitem.body}
</PartDesc>
</WorkPart>

    )

} )
        
    return (
        <WorkSection>
        <div className="container">
            <WorkTitle><Span>some work</Span> IN</WorkTitle>
            
            {worksList}
           
        </div>
    </WorkSection>
    );
}
    
} 
   
  

export default Work;
