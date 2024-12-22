import {CustomerReviews,Footer,Hero,PopularProducts,Services,SpecialOffers,Subscribe,SuperQuality} from './sections/index'
import Nav from './components/Nav';
const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>   
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32">
      <Subscribe/>
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
)

export default App;