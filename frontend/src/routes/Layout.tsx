import ServiceCard from '../components/ServiceCard';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const Home = () => (
  <div className="max-w-screen-xl mx-auto p-5">
    <Navbar />
    <section className="text-center py-16 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Discover Local Services in Your Community</h1>
      <p className="text-lg text-gray-600 mb-8">Book appointments with top-rated artisans, service providers, and businesses.</p>
      <input
        type="text"
        placeholder="Search services "
        className="w-full max-w-lg p-4 border border-gray-300 rounded-lg"
      />
    </section>

    <section className="mt-16">
      <h2 className="text-3xl font-semibold text-center mb-10">Featured Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ServiceCard
          title="Cleaning"
          description="Professional cleaning services for homes and offices, ensuring a spotless and hygienic environment."
          price="50"
          rating={4}
          
        />
        <ServiceCard
          title="Electrician"
          description="Expert electrical services for installation, maintenance, and repair of wiring and systems."
          price="75"
          rating={3}
        />
        <ServiceCard
          title="Make Up"
          description="Expert makeup services for flawless, radiant looks tailored to any occasion."
          price="80"
          rating={4}
         
        />
        
      </div>
    </section>
    <Footer />
  </div>
);

export default Home;
