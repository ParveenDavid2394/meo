import React, {Component} from 'react'
import { connect } from 'react-redux'
import PeopleList from './PeopleList'
import {getPeople} from '../action/index'

class App extends Component{

    componentDidMount(){
        this.props.getPeople()
    }

    render(){

        return(
            <div>
                <PeopleList people={this.props.allPeople} />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    // console.log("++++++++++++++++++", state)
    return{
        allPeople: state.people.getPeople
    }
}

// const mapDispatchToProps = dispatch =>{
//     return{
//         fetchPeople: 
//     }
// }

export default connect(mapStateToProps,{getPeople})(App) 