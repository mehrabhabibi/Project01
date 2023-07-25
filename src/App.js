import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./Layouts/main/main"
import { HomePage, TutorialPage } from "./Pages"
import ReactModuleIntro from "./tutorials/react-module/react-module-intro"
import ReactComponentIntro from "./tutorials/react-components/ReactComponentIntro"
import TurorialHome from "./tutorials/tutorial-home/tutorial-home"


function App() {
 
  
  return (
  <BrowserRouter>
   <MainLayout>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path = '/tutorials' element={<TutorialPage />}>
      <Route index element={<TurorialHome />} />
      <Route path="react-module" element={<ReactModuleIntro/>}/>
      <Route path="react-component" element = {<ReactComponentIntro/>}/>
      </Route>
    </Routes>
   </MainLayout>
  </BrowserRouter>
  )
}

export default App
