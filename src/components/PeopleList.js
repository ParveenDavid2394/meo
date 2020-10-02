import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class PeopleList extends Component{

    renderPeople = () =>{
        if (this.props.people !== undefined) {
            return this.props.people.map(person => {
                return(
                    <Link to={`/${person.name}`} key={person.id} className='singleProfilePicContainer'>
                        <img src={`Albums/${person.name}/${person.profile_pic}.jpeg`} alt="" className='profilePic'/>
                        
                        <div>
                            <h1 className='info'>{person.name}</h1>
                            {
                                person.online_status === 'on' && <img src="Albums/live.svg" alt="live" className='live'/>
                            }
                        </div>
                    </Link>
                )
            })
        }
    }

    render(){
        console.log('PeopleList.js', this.props.people)
        return(
            <div className='allProfilePicContainer'>
                {this.renderPeople()}
            </div>
        )
    }
}

export default PeopleList