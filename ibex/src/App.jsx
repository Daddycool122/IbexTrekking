import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";import { Suspense, lazy, useEffect } from "react";
import Lenis from "lenis";
import ScrollToTop from "./ScrollToTop";

// Lazy load components
const Home = lazy(() => import("./Home"));
const Valley_of_flower = lazy(() => import("./Trekking/Valley_of_flower"));
const Chopta_Chandrashila = lazy(() =>
  import("./Trekking/Chopta_chandrashila")
);
const PangarchullaPeak = lazy(() => import("./Trekking/Pangarchulla"));
const PanchKedar = lazy(() => import("./Trekking/Panch_kedar"));
const Kedarkantha = lazy(() => import("./Trekking/Kedarkantha"));
const WinterKuariPass = lazy(() => import("./Trekking/Kuari"));
const Gaumukh_Tapovan = lazy(() => import("./Trekking/Gaumukh_tapovan"));
const Brahmatal = lazy(() => import("./Trekking/Brahmatal"));
const Rafting = lazy(() => import("./Rafting/Rafting"));
const Review = lazy(() => import("./Review.jsx"));
const Trekking = lazy(() => import("./Trekking.jsx"));
const Tours = lazy(() => import("./Tours.jsx"));
const RiverRafting = lazy(() => import("./Rafting.jsx"));
const About = lazy(() => import("./About.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const Terms = lazy(() => import("./Termsandconditions.jsx"));
const PrivacyPolicy = lazy(() => import("./Privacypolicy.jsx"));
const RefundAndCancelationPolicy = lazy(() =>
  import("./Refundandcancellation.jsx")
);
const Kunjapuri = lazy(() => import("./Trekking/KunjapuriHike.jsx"));
const AliBedniBugyal = lazy(() => import("./Trekking/AliBedniBugyal.jsx"));
const DyaraBugyal = lazy(() => import("./Trekking/DyaraBugyal.jsx"));
const AdiKailash = lazy(() => import("./Trekking/AdiKailash.jsx"));
const Payment = lazy(() => import("./Payment.jsx"));
const BookingConfirmed = lazy(() => import("./Trekking/BookingConfirmed.jsx"));
const ChardhamYatra = lazy(() => import("./Trekking/ChardhamYatra.jsx"));
import FloatingContact from "./FloatingContact.jsx";
import EnquiryWidget from "./components/EnquiryWidget.jsx";
import LoadingScreen from "./LoadingScreen";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* tarekking */}
          <Route path="/Trekking" element={<Trekking />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/tours" element={<Tours />} />
          <Route
            path="/valley-of-flower"
            element={<Valley_of_flower />}
          />

          
          <Route
            path="/chopta-chandrashilla-trek"
            element={<Chopta_Chandrashila />}
          />
          <Route
            path="/pangarchulla-peak-trek"
            element={<PangarchullaPeak />}
          />
          <Route path="/panch-kedar-trek" element={<PanchKedar />} />
          <Route path="/kedarkantha-trek" element={<Kedarkantha />} />
          <Route path="/kuari-pass-trek" element={<WinterKuariPass />} />
          <Route path="/gaumukh-tapovan-trek" element={<Gaumukh_Tapovan />} />
          <Route path="/brahmatal-trek" element={<Brahmatal />} />
          <Route path="/ali-bedni-bugyal-trek" element={<AliBedniBugyal />} />
          <Route path="/dayara-bugyal-trek" element={<DyaraBugyal />} />

          {/* rafting */}
          <Route path="/river-rafting" element={<RiverRafting />} />
          <Route path="/Rafting" element={<Rafting />} />
          <Route path="/rafting" element={<Rafting />} />

          {/* review */}
          <Route path="/Review" element={<Review />} />
          <Route path="/review" element={<Review />} />

          {/* hike */}
          <Route path="/kunjapuri-hike" element={<Kunjapuri />} />
          <Route path="/adi-kailash-tour" element={<AdiKailash />} />
          <Route path="/chardham-yatra-2026" element={<ChardhamYatra />} />

          {/* about and legal */}
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/terms-and-condition" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/refund-and-cancellation"
            element={<RefundAndCancelationPolicy />}
          />

          {/* payment */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/booking-confirmed" element={<BookingConfirmed />} />
        </Routes>
      </Suspense>
      <FloatingContact />
      <EnquiryWidget />
    </Router>
  );
}

export default App;
