
export const getPeople = () =>{

    const getPeople = fetch('http://localhost:3004/people')
                        .then(response => response.json())

    return {
        type: 'GET_PEOPLE',
        payload: getPeople
    }
}

export const personDetail = (name) =>{
    const getPeople = fetch(`http://localhost:3004/people?name=${name}`,    {method:'GET'}).then(response => response.json())

    return{
        type:'PERSON_DETAIL',
        payload: getPeople
    }
}