import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import store from './store/store.jsx'
// import { Provider } from 'react-redux'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <StrictMode>
    <App/>
  </StrictMode>
)

