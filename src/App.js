import { Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { LightMode } from "./themes/Theme";
import GlobalStyles from "./globalStyles"

//Routes are used to render different components based on the pathname
import Main from "./routes/Main";
import AboutPage from "./routes/AboutPage";
import SkillsPage from "./routes/SkillsPage";
import VideosPage from "./routes/VideosPage";
import ExperiencesPage from "./routes/ExperiencesPage";

const App = () => {
  const location = useLocation();

  return <>
      <GlobalStyles />
      <ThemeProvider theme={LightMode}>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/about" element={<AboutPage />}/>
          <Route exact path="/skills" element={<SkillsPage />}/>
          <Route exact path="/videos" element={<VideosPage />}/>
          <Route exact path="/experiences" element={<ExperiencesPage />}/>

        </Routes>
      </ThemeProvider>
    </>
  
}

export default App;
