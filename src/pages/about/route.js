const { lazy } = require("react");
const { clientRoute } = require("../../constants/route.constant");

const About = lazy(() => import("./index"));

const route = {
  path: clientRoute.ABOUT,
  element: About,
};

export default route;
