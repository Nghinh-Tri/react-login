import HomePage from "./screen/HomePage/HomePage"
import Profile from "./screen/Profile/Profile"

const route = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage />
    },
    {
        path: "/profile",
        exact: true,
        main: () => <Profile />
    }
]

export default route