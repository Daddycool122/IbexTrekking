import { Helmet } from "react-helmet-async";
import React, { useState } from "react";
import styles from "./About.module.css"; // keep CSS separate for clarity
import { useNavigate } from "react-router-dom";
import team1 from "./team-member-1.webp";
import team2 from "./team-member-2.webp";
import ibexBadge from "./assets/ibex-badge.webp";
import iceAxeBadge from "./assets/ice-axe-badge.webp";

const AboutUs = () => {
  const navigate = useNavigate();
  const [expandedAccordion, setExpandedAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? -1 : index);
  };

  const accordionItems = [
    {
      title: "Who We Are",
      content: [
        "At Ibex Ice Axe, we believe that every journey into the mountains is more than just a trek—it's an experience that shapes you. From the snowy peaks of the Himalayas to hidden trails waiting to be discovered, we guide you through unforgettable journeys that connect you with nature and with yourself.",
        "Founded with a passion for the mountains and a commitment to sharing the beauty of the Himalayas, Ibex Ice Axe has become a trusted name in adventure tourism. Our team comprises experienced mountaineers, certified guides, and outdoor enthusiasts who have dedicated their lives to exploring and sharing the wonders of the mountains.",
        "We started with a simple vision: to make high-altitude trekking and adventure sports accessible to everyone, regardless of their experience level. Today, we have successfully guided thousands of adventurers through some of the most spectacular trails in India."
      ]
    },
    {
      title: "Our Mission",
      content: [
        "To make trekking and adventure sports accessible, safe, and fun for everyone.",
        "To provide reliable guidance, expert knowledge, and a supportive community.",
        "To promote eco-friendly travel and respect for the natural world.",
        "We are committed to providing world-class adventure experiences while maintaining the highest standards of safety and environmental responsibility. Our mission goes beyond just organizing treks; we aim to educate our participants about mountain conservation, sustainable tourism practices, and the importance of preserving these pristine ecosystems for future generations."
      ]
    },
    {
      title: "Why Choose Ibex Ice Axe",
      content: [
        "Experienced guides who know the trails inside out",
        "Treks tailored for beginners and seasoned adventurers",
        "Focus on safety, comfort, and authentic experiences",
        "Comprehensive pre-trek training and fitness guidance",
        "24/7 medical support and emergency protocols",
        "Small group sizes for personalized attention",
        "Eco-friendly practices and sustainable tourism commitments",
        "Our commitment to excellence sets us apart from other adventure operators. We invest in continuous training for our guides, maintain state-of-the-art safety equipment, and follow international trekking standards."
      ]
    },
    {
      title: "Our Experience & Values",
      content: [
        "With years of experience in high-altitude trekking and adventure sports, we have honed our expertise across diverse terrain, altitudes, and weather conditions.",
        "Our guides have collectively completed hundreds of expeditions, accumulating invaluable knowledge about trail conditions, weather patterns, and optimal trekking strategies.",
        "We believe in integrity, inclusivity, environmental stewardship, community building, and safety above all else."
      ]
    },
    {
      title: "What We Offer",
      content: [
        "Diverse portfolio of adventures: Valley of Flowers, Kedarkantha, Chopta-Chandrashila, Brahmatal, Kuari Pass, Ali Bedni Bugyal, Dayara Bugyal, Pangarchulla Peak, Gaumukh-Tapovan.",
        "Beginner-friendly day hikes to challenging multi-day treks reaching altitudes over 4000 meters.",
        "Thrilling river rafting experiences in the Ganges.",
        "Customized group treks, corporate team-building adventures, and family-friendly trekking options.",
        "Each package includes nutritious meals, comfortable accommodation, safety equipment, expert guidance, and comprehensive support."
      ]
    },
    {
      title: "Our Vision",
      content: [
        "To be the most trusted and respected adventure operator in the Himalayas.",
        "Creating transformative experiences that change lives and perspectives.",
        "Expanding trek offerings, training more guides, and reaching more communities.",
        "Investing in technology and innovation to enhance safety and comfort on treks.",
        "Active participation in tree-planting initiatives, waste management programs, and trail restoration projects.",
        "Creating a model of sustainable adventure tourism that benefits both adventurers and the mountains we explore."
      ]
    }
  ];

  return (
    <div className={styles.aboutPage}>

      <Helmet>
        <title>About Ibex Ice Axe | Our Story & Mission</title>
        <meta name="description" content="Learn about Ibex Ice Axe, our expert team of mountaineers, and our mission to provide safe, sustainable, and unforgettable Himalayan adventures." />
      </Helmet>

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.h1}>About Ibex Ice Axe</h1>
          <p className={styles.heroSubtitle}>Conquering Trails, Creating Memories</p>
          <div className={styles.heroUnderline}></div>
        </div>
      </header>

      {/* The Name Section with Cards */}
      <section className={styles.nameSection}>
        <h2 className={styles.sectionHeading}>The Name "Ibex Ice Axe"</h2>
        <div className={styles.symbolsGrid}>
          <div className={styles.symbolCard}>
            <div className={styles.symbolIcon}>
              <img src={ibexBadge} alt="Ibex Badge" className={styles.symbolImage} />
            </div>
            <h3>The Ibex</h3>
            <p>
              A fearless mountain goat, symbolizing strength, balance, and the spirit of climbing higher against all odds. Native to these magnificent mountains for centuries.
            </p>
          </div>
          <div className={styles.symbolCard}>
            <div className={styles.symbolIcon}>
              <img src={iceAxeBadge} alt="Ice Axe Badge" className={styles.symbolImage} />
            </div>
            <h3>The Ice Axe</h3>
            <p>
              A quintessential mountaineering tool representing resilience and survival in the harshest terrains, symbolizing preparation and support.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className={styles.accordionSection}>
        <div className={styles.accordionContainer}>
          <h2 className={styles.sectionHeading}>Explore Our Story</h2>
          {accordionItems.map((item, index) => (
            <div key={index} className={styles.accordionItem}>
              <button
                className={`${styles.accordionHeader} ${
                  expandedAccordion === index ? styles.active : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles.headerContent}>
                  <span className={styles.accordionItemIcon}>{item.icon}</span>
                  <span className={styles.accordionTitle}>{item.title}</span>
                </div>
                <span className={styles.accordionIcon}>
                  {expandedAccordion === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`${styles.accordionContent} ${
                  expandedAccordion === index ? styles.open : ""
                }`}
              >
                <div className={styles.accordionInner}>
                  {item.content.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.content}>
        <h2 className={styles.sectionHeading}>Who We Are</h2>
        <p>
          At <strong>Ibex Ice Axe</strong>, we believe that every journey into
          the mountains is more than just a trek—it’s an experience that shapes
          you. From the snowy peaks of the Himalayas to hidden trails waiting to
          be discovered, we guide you through unforgettable journeys that
          connect you with nature and with yourself.
        </p>        <p>
          Founded with a passion for the mountains and a commitment to sharing the beauty of the Himalayas, Ibex Ice Axe has become a trusted name in adventure tourism. Our team comprises experienced mountaineers, certified guides, and outdoor enthusiasts who have dedicated their lives to exploring and sharing the wonders of the mountains. We started with a simple vision: to make high-altitude trekking and adventure sports accessible to everyone, regardless of their experience level. Today, we have successfully guided thousands of adventurers through some of the most spectacular trails in India.
        </p>
        <p>
          Each expedition we organize is carefully planned and executed with utmost attention to detail. We understand that mountain trekking is not just a physical challenge; it's an emotional and spiritual journey. Our guides are trained to ensure that every participant not only reaches their destination safely but also develops a deep connection with nature and fellow adventurers. We pride ourselves on creating experiences that leave lasting memories and inspire people to push their boundaries.
        </p>      </section>

      {/* Mission */}
      <section className={styles.content}>
        <h2 className={styles.sectionHeading}>Our Mission</h2>
        <p>Our mission is simple:</p>
        <ul>
          <li>
            To make trekking and adventure sports accessible, safe, and fun for
            everyone.
          </li>
          <li>
            To provide reliable guidance, expert knowledge, and a supportive
            community.
          </li>
          <li>
            To promote eco-friendly travel and respect for the natural world.
          </li>
        </ul>
        <p>
          We are committed to providing world-class adventure experiences while maintaining the highest standards of safety and environmental responsibility. Our mission goes beyond just organizing treks; we aim to educate our participants about mountain conservation, sustainable tourism practices, and the importance of preserving these pristine ecosystems for future generations. Every expedition is an opportunity to inspire people to become responsible travelers and advocates for nature conservation.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className={styles.why_choose}>
        <h2 className={styles.sectionHeading}>Why Choose Us?</h2>
        <ul>
          <li>✅ Experienced guides who know the trails inside out</li>
          <li>✅ Treks tailored for beginners and seasoned adventurers</li>
          <li>✅ Focus on safety, comfort, and authentic experiences</li>
          <li>✅ A community that inspires and grows together</li>
          <li>✅ Comprehensive pre-trek training and fitness guidance</li>
          <li>✅ 24/7 medical support and emergency protocols</li>
          <li>✅ Small group sizes for personalized attention</li>
          <li>✅ Eco-friendly practices and sustainable tourism commitments</li>
        </ul>
        <p>
          Our commitment to excellence sets us apart from other adventure operators. We invest in continuous training for our guides, maintain state-of-the-art safety equipment, and follow international trekking standards. With Ibex Ice Axe, you're not just booking a trek; you're choosing a partner who cares about your safety, comfort, and success. Our success is measured not just by reaching the summit, but by the smiles on the faces of our trekkers and the connections they make with fellow adventurers.
        </p>
      </section>

      {/* The Name */}
      <section className={styles.content}>
        <h2 className={styles.sectionHeading}>The Name "Ibex Ice Axe"</h2>
        <p>
          The <strong>ibex</strong>, a fearless mountain goat, symbolizes
          strength, balance, and the spirit of climbing higher against all odds.
          The <strong>ice axe</strong> is a tool of resilience and survival in
          the harshest terrains. Together, they represent our vision—to help
          adventurers reach new heights with courage and preparation.
        </p>
        <p>
          The Himalayan ibex, native to these magnificent mountains, has thrived for centuries by adapting to extreme conditions and navigating treacherous terrain with grace and agility. Similarly, we believe every trekker carries within them the potential to overcome challenges and discover their inner strength. The ice axe, a quintessential tool in mountaineering, represents our commitment to providing the right guidance, support, and resources to help you achieve your mountain dreams. Together, these symbols encapsulate our philosophy: adventure is not just about reaching the destination; it's about the journey, the growth, and the transformations that happen along the way.
        </p>
      </section>

      {/* Experience & Values */}
      <section className={styles.content}>
        <h2 className={styles.sectionHeading}>Our Experience & Values</h2>
        <p>
          With years of experience in high-altitude trekking and adventure sports, we have honed our expertise across diverse terrain, altitudes, and weather conditions. Our guides have collectively completed hundreds of expeditions, accumulating invaluable knowledge about trail conditions, weather patterns, and optimal trekking strategies. This experience translates into safer, more enjoyable, and more memorable adventures for our participants.
        </p>
        <p>
          Our core values drive everything we do. We believe in integrity—being honest about trek difficulty levels and physical requirements. We embrace inclusivity—welcoming trekkers of all ages and abilities. We champion environmental stewardship—leaving no trace and actively participating in trail maintenance and conservation efforts. We foster community—creating connections between trekkers and local communities. Most importantly, we prioritize safety above all else, with every decision made with the well-being of our participants in mind.
        </p>
      </section>

      {/* Our Offerings */}
      <section className={styles.content}>
        <h2 className={styles.sectionHeading}>What We Offer</h2>
        <p>
          Ibex Ice Axe offers a diverse portfolio of adventures tailored to different preferences and fitness levels. From beginner-friendly day hikes to challenging multi-day treks reaching altitudes over 4000 meters, we have something for everyone. Our trekking packages include Valley of Flowers, Kedarkantha, Chopta-Chandrashila, Brahmatal, Kuari Pass, Ali Bedni Bugyal, Dayara Bugyal, Pangarchulla Peak, Gaumukh-Tapovan, and many more. We also offer thrilling river rafting experiences in the Ganges, catering to adventure seekers looking for aquatic thrills.
        </p>
        <p>
          Each package is meticulously designed to balance adventure with comfort. We provide nutritious meals prepared by experienced cooks, comfortable accommodation in homestays or camps, all necessary safety equipment, expert guidance, and comprehensive support. Our pre-trek consultations ensure you're adequately prepared, both physically and mentally, for the adventure ahead. We also offer customized group treks, corporate team-building adventures, and family-friendly trekking options.
        </p>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2 className={styles.sectionHeading}>Meet Our Expert Team</h2>
        <p className={styles.teamIntro}>
          Our dedicated team of experienced trek leaders and adventure professionals are committed to ensuring your journey is safe, enjoyable, and transformative.
        </p>
        <div className={styles.team_members}>
          <div className={styles.member}>
            <div className={styles.memberImageWrapper}>
              <img src={team2} alt="Team Member" />
              <div className={styles.memberOverlay}>
                <p>Expert Guide</p>
              </div>
            </div>
            <h3>Paras Rawat</h3>
            <p className={styles.memberRole}>Trek Leader</p>
            <div className={styles.memberBadges}>
              <span className={styles.badge}>Certified</span>
              <span className={styles.badge}>Experienced</span>
            </div>
          </div>
          <div className={styles.member}>
            <div className={styles.memberImageWrapper}>
              <img src={team1} alt="Team Member" />
              <div className={styles.memberOverlay}>
                <p>Expert Guide</p>
              </div>
            </div>
            <h3>Akshay Panday</h3>
            <p className={styles.memberRole}>Trek Leader</p>
            <div className={styles.memberBadges}>
              <span className={styles.badge}>Certified</span>
              <span className={styles.badge}>Experienced</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Start Your Adventure?</h2>
        <p>Join thousands of adventurers who have experienced the magic of the Himalayas with Ibex Ice Axe.</p>
        <button className={styles.ctaButton} onClick={() => navigate('/trekking')}>Book Your Trek Now</button>
      </section>

      {/* Footer */}
      <footer className={styles.pageFooter}>
        <p>© 2025 Ibex Ice Axe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
