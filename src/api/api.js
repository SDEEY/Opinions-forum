const apiKey = 'AIzaSyCD_vhkYWg-cFyACxAiufKeSiaQwzNIWWw'
const baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:'

export const authApi = {
     async signInWithEmailAndPassword (data){
        const response = await fetch(`${baseUrl}signInWithPassword?key=${apiKey}`, {
            method: 'POST',
            body: JSON.stringify({
                email: data.email, password: data.password, returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
         console.log(json)

    },

    async signUpWithEmailAndPassword (data){
        const response = await fetch(`${baseUrl}signUp?key=${apiKey}`, {
            method: 'POST',
            body: JSON.stringify({
                email: data.email, password: data.password, returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        console.log(json)
        // {json.idToken && <Redirect to='/myProfile'/>}
    }
}