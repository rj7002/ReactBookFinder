import {createRoot} from "react-dom/client"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import '/Users/ryan/book-finder-react/src/index.css'
const root = createRoot(document.getElementById('root'))
root.render(
  <>
  <Header/>
  <Sidebar/>
  </>
  
)