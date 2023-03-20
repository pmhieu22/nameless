const { lazy } = require("react");
const { clientRoute } = require("../../constants/route.constant");

const Home = lazy(() => import('./index'));

const route = {
    path: clientRoute.DEFAULT,
    element: Home,
}

export default route;