import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Query from "./pages/Query/Query.tsx";
import Layout from "./components/Layout/Layout.tsx";

const App = () => {


    const routes = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'query'} element={<Query/>}/>
                </Route>
            </>
        )
    )


    return (
        <RouterProvider router={routes}></RouterProvider>
    )
}

export default App;