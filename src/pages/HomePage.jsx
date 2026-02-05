import Hero from '../components/Hero'
import shoppingImage from '../assets/Shopping.png'

function HomePage() {
  return (
    <div>
      <Hero
        title="Welcome to My Online Store"
        subtitle="Best deals every day"
        CallToAction="Shop Now"
        image={shoppingImage}
      />

      {/* AI-generated content: introduction text */}
      <section className="home-intro">
        <h2>Why Shop With Us?</h2>
        <p>
          We offer high-quality tech products at competitive prices.
          Our goal is to make your online shopping experience simple,
          fast, and enjoyable.
        </p>
      </section>
    </div>
  )
}

export default HomePage
