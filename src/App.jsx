import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Single from "./pages/Single"
import BrowsePage from "./pages/Browse"
import CollectionPage from "./pages/Collection"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/browse/:id" element={<BrowsePage />} />
            <Route path="/artwork/:id" element={<Single />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

    </>
  )
}

export default App
