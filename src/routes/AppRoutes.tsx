import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// App Layout
import AppLayout from "../components/layout/AppLayout";

// Pages
import LandingPage from "../pages/LandingPage";



const AppRoutes= () => {
  return (
    <BrowserRouter>
        <Routes>
            {/*MAIN APPLICATION*/}
            <Route path="/" element={<AppLayout/>}>
                <Route index element = {<LandingPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes