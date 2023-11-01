import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
const user = 'luscacid'
export function Routes (){
    return (
    <BrowserRouter>
        <AppRoutes  />
    </BrowserRouter>
    )
}
