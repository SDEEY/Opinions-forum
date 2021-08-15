// import * as axios from "axios"
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
         return await response.json()
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
        return await response.json()
    }
}

export const ownProfileApi = {
    async setOwnAvatar (){
        return await fetch('https://picsum.photos/150')
    }
}