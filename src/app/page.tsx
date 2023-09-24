import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/About';
import Reviews from '../components/Reviews';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Banner/>
      <About/>
      <Reviews/>
    </main>
  )
}
