const people = {}

const people_reducer = (state = people, action) =>{
    switch (action.type) {
        case 'GET_PEOPLE':
            return{
                ...state,
                getPeople: action.payload
            }
    
        default:
            return state;
    }
}

export default people_reducer