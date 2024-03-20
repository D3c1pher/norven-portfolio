import './App.scss';
import { ThemeProvider } from './ThemeContext';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Cursor />
        <section id="Hero">
          <Navbar />
          {/* <Hero /> */}
        </section>
        <section id="Experience">
          <h1>Experience</h1>
          {/* <Experience /> */}
        </section>
        <section id="Portfolio">
          <h1>Portfolio</h1>
          {/* <Experience /> */}
        </section>
        <section id="Contacts">
          <h1>Contacts</h1>
          {/* <Experience /> */}
        </section>
      </ThemeProvider>
    </>
  )
}