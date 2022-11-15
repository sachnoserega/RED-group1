import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'
import reportWebVitals from './reportWebVitals'
import App from './App'

// import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
// import AppProvider from './providers/AppProvider'

// const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
	 <App />
	</React.StrictMode>,
	document.getElementById('root')
)


reportWebVitals()
