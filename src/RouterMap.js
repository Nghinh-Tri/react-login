import Dashboard from "./screen/dashboard/Dashboard"
import Profile from "./screen/profile/Profile"
import Project from "./screen/project/Project"
import ProjectDetail from "./screen/project-detail/ProjectDetail"
import CreateProject from "./screen/create-project/CreateProject"
import CreatePosition from "./screen/create-position/CreatePosition"
import SuggestCandidate from "./screen/suggest-candidate/SuggestCandidate"

const route = [
    {
        path: "/",
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: '/project',
        exact: true,
        main: () => <Project />
    },
    {
        path: '/project/create-project',
        exact: true,
        main: ({ history }) => <CreateProject history={history} />
    },
    {
        path: '/project/create-position',
        exact: true,
        main: ({ history }) => <CreatePosition history={history} />
    },
    {
        path: '/project/suggest-candidate',
        exact: true,
        main: () => <SuggestCandidate />
    },
    {
        path: '/project/:id',
        exact: true,
        main: ({ match }) => <ProjectDetail match={match} />
    },
    {
        path: '/project/:id/edit',
        exact: true,
        main: ({ match, history }) => <CreateProject match={match} history={history} />
    },
    {
        path: "/profile",
        exact: true,
        main: () => <Profile />
    }
]

export default route