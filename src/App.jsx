import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function ScrollManager() {
  const location = useLocation();
  const scrollTarget = location.state?.scrollTo;

  useEffect(() => {
    // In-page section scrolling (handled by Home/Nav) sets location.state;
    // any other navigation lands at the top of the new page.
    if (!scrollTarget) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, scrollTarget]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollManager />
      <Nav />
      <div className="lg:pl-[var(--rail-width)]">
        <main className="pt-[65px] lg:pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
