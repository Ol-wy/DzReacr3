

const initialState = {
    users: [
        {
            name: 'Alex',
            age: 20,
            id: 1,
        },
        {
            name: 'Jony',
            age: 30,
            id: 2,
        },
    ],
    usersCount: 2
}

export default(state = initialState, action) => {
    switch(action.type){
        case 'ADD': {
            return{
                ...state,
                users: [...state.users, {
                    name: action.name, 
                    age: action.age,
                    id: state.users[state.users.length - 1].id + 1,
                }],
                usersCount: state.usersCount +1
            }
        }
        case 'DELETE' : {
            return{
                users: [...state.users.filter(user => user.id !== action.payload)
            ]}
        }
        default: return state
    }
}

export const addUsers = (name, age) => {
    return (dispatch) => {
        return dispatch({type: 'ADD', name: name, age: age})
    }
}

export const removeUser = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}


