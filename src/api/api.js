// import * as axios from "axios"

const apiKey = 'AIzaSyCD_vhkYWg-cFyACxAiufKeSiaQwzNIWWw'
const baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:'

export const authApi = {
    async signInWithEmailAndPassword(data) {
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

    async signUpWithEmailAndPassword(data) {
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
    async setOwnAvatar() {
        return await fetch('https://picsum.photos/150')
    },

    async setOwnNickname(idToken) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCD_vhkYWg-cFyACxAiufKeSiaQwzNIWWw', {
            method: 'POST',
            body: JSON.stringify({
                idToken: `${idToken}`
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    },

    async updateOwnNickname(idToken, displayName){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCD_vhkYWg-cFyACxAiufKeSiaQwzNIWWw', {
            method: 'POST',
            body: JSON.stringify({
                idToken: `${idToken}`,
                displayName: `${displayName}`,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        return await response.json()

    },

    async getOwnDateData(idToken) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCD_vhkYWg-cFyACxAiufKeSiaQwzNIWWw', {
            method: 'POST',
            body: JSON.stringify({
                idToken: `${idToken}`
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    }


}