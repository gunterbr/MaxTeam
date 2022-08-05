import React, { lazy } from 'react'
import { HomeRedirect } from './RouteUtils'
import RouteController from './RouteController'
const Home = lazy(() => import('../components/Home'))
const Admin = lazy(() => import('../components/Admin'))

const routes = [
    {
        path: "/",
        exact: true,
        component: HomeRedirect
    },
    {
        path: "/home",
        exact: true,
        render: props => <Home {...props} />
    },
    {
        path: "/admin",
        exact: true,
        render: props => <RouteController component={Admin} {...props} />
    }
]

export default routes