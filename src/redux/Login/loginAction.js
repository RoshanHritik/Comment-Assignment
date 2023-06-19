export const loginStart = () => {
    return {
        type: 'login-started'
    }
}

export const loginSuccessful = (data) => {
    return {
        type: 'login-success',
        payload: data
    }
} 
export const loginFailure = (message) => {
    return {
        type: 'login-fail',
        payload: message
    }
} 
