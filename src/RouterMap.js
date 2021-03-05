import Dashboard from "./screen/dashboard/Dashboard"
import Profile from "./screen/profile/Profile"

const route = [
    {
        path: "/",
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: "/profile",
        exact: true,
        main: () => <Profile />
    }
]

export default route