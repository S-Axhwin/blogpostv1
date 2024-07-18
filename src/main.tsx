import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/clerk-react';
import { dark, neobrutalism } from '@clerk/themes';


const KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


if (!KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='dark'>
    <ClerkProvider publishableKey={KEY} appearance={ {
  baseTheme: [dark, neobrutalism],
  variables: { colorTextOnPrimaryBackground: "black" }
}
} >
  <ClerkLoading>
    loading
  </ClerkLoading>
  <ClerkLoaded>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkLoaded>
    </ClerkProvider>
  </ThemeProvider>,
)
