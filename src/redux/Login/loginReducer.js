const loginInitialState = {
    loading: false,
    userDetails: {},
    error: ''
}

export const loginReducer = (state=loginInitialState, action) => {
    if(action.type === 'login-started') {
        return {
            ...state,
            loading: true
        } 
    } else if(action.type === 'login-success') {
        return {
            ...state,
            loading: false,
            userDetails: action.payload
        }
    } else if(action.type === 'login-fail') {
        return {
            ...state,
            loading: false,
            error: action.payload
        }
    }
    return state
}

// state while making API call
//1. loader --> means api call is going through
//2. api call success
//3. api call failed