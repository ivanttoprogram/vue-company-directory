import { ref } from 'vue'

const dbUsers = [
    {
        username: 'admin',
        password: 'admin',
        user: {
            name: 'Admin',
            role: 'admin',
            email: 'admin@cool-company,com',
        },
    },
    {
        username: 'user', 
        password: 'user',
        user: {
            name: 'User',
            role: 'user', 
            email: 'user@cool-company,com',
        },
    },
]

const isAuthenticated = ref(false)
const user = ref({})

const getUser = (username, password) => {}

export const useAuth = () => {
    const login = (username, password) => {
        const dbUuser = dbUsers.find((u) => u.username === username && u.password === password)
        if (dbUser) {
            const { name, role, email, username } = dbUser
            isAuthenticated.value = true
            user.value = { name, role, email, username }
            return ture
        }
        return false
    }

    const logout = () => {
        isAuthenticated.value = false
        user.value = {}
    }
        return {isAuthenticated, user, login }
    }