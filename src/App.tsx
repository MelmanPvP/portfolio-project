import './App.css'
import Header from "./components/header/header.tsx";
import Main from "./components/main/main.tsx";
import Stack from "./components/main/stack/stack.tsx";
import Projects from "./components/main/projects/projects.tsx";
import Footer from "./components/footer/footer.tsx";

function App() {

  return (
    <>
      <Header/>
        <Main/>

        <Footer/>
    </>
  )
}

export default App
