import { auth } from '../../firebase'
// import { history } from '../../helper/history'


export const Signin = (email, pass) => {

    return async (dispatch) => {
        dispatch({ type: 'SIGNIN_REQUEST' })
        try {
            let user = await auth.createUserWithEmailAndPassword(email, pass)
            dispatch({ type: "SIGNIN_SUCCESS", payload: user })

        } catch (error) {
            dispatch({ type: 'SIGNIN_FAIL', payload: error })
        }

    }
}
export const login = (email, pass) => {
    return async (dispatch) => {
        dispatch({ type: 'LOGIN_REQUEST' })
        try {
            let user = await auth.signInWithEmailAndPassword(email, pass)
            dispatch({ type: "LOGIN_SUCCESS", payload: user })
        } catch (error) {
            dispatch({ type: 'LOGIN_FAIL', payload: error })
        }

    }
}
export const logout = () => {
    return auth.signOut()
}