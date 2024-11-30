import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/Context.jsx'
import { Toaster } from "react-hot-toast"

ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
	<BrowserRouter>
		<App />
		<Toaster/>
	</BrowserRouter>
	</ContextProvider>
);


