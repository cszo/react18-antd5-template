import { useRoutes } from "react-router-dom";
import { routes } from "./config";

export default function RouterElement() {
  const routerElement = useRoutes(routes);
  return routerElement;
}
