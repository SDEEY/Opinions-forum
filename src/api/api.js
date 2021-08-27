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
    },

    async changeEmail(idToken, email) {
        const response = await fetch(`${baseUrl}update?key=${apiKey}`, {
            method: 'POST',
            body: JSON.stringify({
                idToken: `${idToken}`, email, returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    },

    async changePassword(idToken, password) {
        const response = await fetch(`${baseUrl}update?key=${apiKey}`, {
            method: 'POST',
            body: JSON.stringify({
                idToken: `${idToken}`, password, returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    },
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

export const newsApi = {
    async getNews(numberOfPage) {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=20&page=${numberOfPage}&apiKey=bb691d2119c0416c96f30bfa8478956a`)
        return await response.json()
    },

}

export const postsApi = {
    async getPosts() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            return await response.json()
        } catch (e) {
            console.log(e)
            // alert(e)
        }
    },

    async getPostsUsers(userId) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            return await response.json()
        } catch (e) {
            // console.log(e)
            alert(e)
        }
    },

    async getPostsUser(userId) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            return await response.json()
        } catch (e) {
            // console.log(e)
            alert(e)
        }
    },

    async getPostComments(postId) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            return await response.json()
        } catch (e) {
            // console.log(e)
            alert(e)
        }
    },

    async getUserPosts(userId) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            return await response.json()
        } catch (e) {
            // console.log(e)
            alert(e)
        }
    },

}

export const usersApi = {
    async getUsersFromGitHub(){
        try {
            const response = await fetch('https://api.github.com/users')
            return await response.json()
        } catch (e) {
            alert(e)
        }
    },
    async getFollowersOfUserFromGitHub(username){
        try {
            const response = await fetch(`https://api.github.com/users/${username}/followers`)
            return await response.json()
        } catch (e) {
            alert(e)
        }
    },
    async getSubscriptionsOfUserFromGitHub(username){
        try {
            const response = await fetch(`https://api.github.com/users/${username}/following`)
            return await response.json()
        } catch (e) {
            alert(e)
        }
    },
}

