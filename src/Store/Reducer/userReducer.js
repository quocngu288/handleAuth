export const userReducer = ((state = {}, action) => {
    switch (action.type) {
        case 'SIGNIN_REQUEST': {
            return { loading: true }
        }
        case 'SIGNIN_SUCCESS': {
            return { loading: false, userSigin: action.payload }
        }
        case 'SIGNIN_FAIL': {
            return { loading: false, errors: action.payload }
        }
        case 'LOGIN_REQUEST': {
            return { loading: true }
        }
        case 'LOGIN_SUCCESS': {
            const userLogin = action.payload;
            localStorage.setItem('user', JSON.stringify(userLogin))
            return { loading: false, userLogin }
        }
        case 'LOGIN_FAIL': {
            return { loading: false, errors: action.payload }
        }
        default: return state;
    }
})