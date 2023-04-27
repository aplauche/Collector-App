import { Route, Routes, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Single from "./pages/Single"
import BrowsePage from "./pages/Browse"
import CollectionPage from "./pages/Collection"
import NotFound from "./pages/NotFound"
import { motion, AnimatePresence } from "framer-motion"


function RouteTransitionWrapper({element}){
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {element}
      </motion.div>
    </AnimatePresence>
  );
}

function App() {

  return (
    <>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <RouteTransitionWrapper element={<Home />} />
            } />
            <Route path="/browse" element={
              <RouteTransitionWrapper element={<BrowsePage />} />
            } />
            <Route path="/browse/:id" element={
              <RouteTransitionWrapper element={<BrowsePage />} />
            } />
            <Route path="/artwork/:id" element={
              <RouteTransitionWrapper element={<Single />} />
            } />
            <Route path="/collection" element={
              <RouteTransitionWrapper element={<CollectionPage />} />
            } />
            <Route path="*" element={
              <RouteTransitionWrapper element={<NotFound />} />
            } />
          </Route>
        </Routes>

    </>
  )
}

export default App
