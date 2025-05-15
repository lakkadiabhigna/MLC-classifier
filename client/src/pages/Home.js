import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css'; // Ensure this CSS file has the highlight styles

function Home() {

  // Highlight the section when navigated via anchor link
  useEffect(() => {
    const highlightSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          section.classList.add("highlight");
          setTimeout(() => {
            section.classList.remove("highlight");
          }, 1000);
        }
      }
    };
  
    highlightSection(); // Run once on mount
    window.addEventListener("hashchange", highlightSection);
    return () => window.removeEventListener("hashchange", highlightSection);
  }, []);
  

  return (
    <div className='page-fade'>
      <Navbar />
      <div className="home-container">
        <div className="overlay">
          <h1 className="main-title">Multi-Label Classification</h1>
          <p className="description">
            A deep learning LSTM model that predicts multiple fields (labels) from research paper titles and abstracts.
          </p>

          <div className="card-container">

            <div className="card" id="about">
              <h2>About Multi-label Classification</h2>
              <p>
                Unlike single-label classification, multi-label classification allows assigning more than one category to each input. It is useful when an input may belong to multiple fields, as in this research paper categorization task.
              </p>
              <p>
                Multi-label classification is widely used in NLP tasks such as sentiment analysis, tagging, and topic classification. Our model leverages a Long Short-Term Memory (LSTM) network, highly effective for handling sequential data like text.
              </p>
            </div>

            <div className="card" id="faq">
              <h2>FAQs</h2>
              <ul>
                <li><strong>What is multi-label classification?</strong> <br />A task where each input can belong to multiple categories simultaneously.</li>
                <li><strong>How does the LSTM model work?</strong><br /> It learns from sequences of paper titles and abstracts to predict multiple field labels.</li>
                <li><strong>Can I use this for other classification tasks?</strong> <br />Yes! You can train it with a different labeled dataset.</li>
              </ul>
            </div>

            <div className="card" id="contact">
              <h2>Contact</h2>
              <p>If you have any questions or suggestions, feel free to reach out at <a href="mailto:nlp@classifier.com">nlp@classifier.com</a>.</p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
