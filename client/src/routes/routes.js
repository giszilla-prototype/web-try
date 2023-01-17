import React from "react";

//Home
const Homepage = React.lazy(() => import('../pages/Homepage'))

const Routes = [
    //Home
    {path:'/', element: <Homepage/>},
]

export default Routes