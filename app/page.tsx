import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Services from '../components/Services'
import FutureProjects from '../components/FutureProjects'
import Products from '../components/Products'
import ProjectGallery from '../components/ProjectGallery'
import Location from '../components/Location'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Hero />
      <Partners />
      <section id="services">
        <Services />
      </section>
      <FutureProjects />
      <section id="gallery">
        <Products />
      </section>
      <ProjectGallery />
      <Location />
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}

