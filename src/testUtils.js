import UserContext from './auth/UserContext'

const demoUser = {
    username: 'testuser',
    first_name: 'testfirst',
    last_name: 'testlast',
    email: 'testuser@test.com'
}

const UserProvider = ({ children, currentUser = demoUser }) => (
    <UserContext.Provider value={{ currentUser }}>
        {children}
    </UserContext.Provider>
)

export default UserProvider