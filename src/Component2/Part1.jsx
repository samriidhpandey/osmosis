import React from 'react'
import ad2 from '../image/ad2.png'

function Part1({ isDark }) {
  const part1 = {
    backgroundColor: isDark ? 'black' : 'darkred',
    color: isDark ? 'white' : 'white',
  };
  const details = {
    backgroundColor: isDark ? '#0E121B' : 'white',
    color: isDark ? 'white' : 'black',

  };
  const sectionStyle = {
    marginBottom: '40px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f8f9fa',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginTop: '20px',
  };

  const titleStyle = {
    fontWeight: '700',
    color: '#222',
    fontSize: '2rem',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    fontWeight: '600',
    color: '#333',
    fontSize: '1.5rem',
    marginTop: '30px',
    marginBottom: '10px',
  };

  const textStyle = {
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#444',
  };
  return (
    <>
      <div className="container py-5">
      <h1 style={titleStyle}>Best Tech Skills to Learn in 2025 for a High-Paying Career</h1>
      <p style={textStyle}>
        Technology is evolving at an unprecedented pace. If you're aiming for a high-paying career in 2025, 
        mastering the right tech skills can change your life. Here's your ultimate guide.
      </p>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>1. Artificial Intelligence & Machine Learning (AI/ML)</h2>
        <p style={textStyle}>
          AI is transforming industries like healthcare and finance. Roles include AI Engineer, ML Developer, and Data Scientist.
          <br /><strong>Average Salary:</strong> ₹10L - ₹35L/year<br />
          <strong>Learn:</strong> Python, TensorFlow, MySQL
        </p>
        <img src="https://via.placeholder.com/800x400?text=AI+%26+ML" alt="AI & ML" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>2. Full-Stack Web Development (MERN Stack)</h2>
        <p style={textStyle}>
          Learn MongoDB, Express.js, React.js, and Node.js to become a versatile developer.
          <br /><strong>Average Salary:</strong> ₹6L - ₹15L/year
        </p>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/YOUR_MERN_VIDEO_LINK"
          title="MERN Stack Video"
          frameBorder="0"
          allowFullScreen
          style={imageStyle}
        ></iframe>
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>3. Digital Marketing & SEO</h2>
        <p style={textStyle}>
          Rank websites, generate leads, and grow brands online.
          <br /><strong>Roles:</strong> SEO Specialist, PPC Marketer<br />
          <strong>Average Salary:</strong> ₹4L - ₹12L/year
        </p>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/YOUR_DIGITAL_MARKETING_VIDEO"
          title="Digital Marketing Video"
          frameBorder="0"
          allowFullScreen
          style={imageStyle}
        ></iframe>
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>4. Mobile App Development (Flutter & React Native)</h2>
        <p style={textStyle}>
          The mobile-first era is booming. Learn Flutter (Dart) or React Native (JavaScript) to build apps.
          <br /><strong>Average Salary:</strong> ₹8L - ₹20L/year
        </p>
        <img src="https://via.placeholder.com/800x400?text=Mobile+App+Development" alt="App Development" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>5. Cybersecurity & Ethical Hacking</h2>
        <p style={textStyle}>
          Protect digital infrastructure. Learn Kali Linux, CEH Certification.
          <br /><strong>Average Salary:</strong> ₹12L - ₹30L/year
        </p>
        <img src="https://via.placeholder.com/800x400?text=Cybersecurity+%26+Hacking" alt="Cybersecurity" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>6. Cloud Computing (AWS, Azure, Google Cloud)</h2>
        <p style={textStyle}>
          Shift to the cloud. Learn Kubernetes, Terraform, and cloud platforms.
          <br /><strong>Average Salary:</strong> ₹12L - ₹35L/year
        </p>
        <img src="https://via.placeholder.com/800x400?text=Cloud+Computing" alt="Cloud" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>7. Graphic Design & Video Editing</h2>
        <p style={textStyle}>
          Visual content is king. Learn Adobe Photoshop, Premiere Pro, After Effects, Canva.
          <br /><strong>Average Salary:</strong> ₹4L - ₹15L/year
        </p>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/YOUR_GRAPHIC_DESIGN_VIDEO"
          title="Graphic Design Video"
          frameBorder="0"
          allowFullScreen
          style={imageStyle}
        ></iframe>
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>8. Python & Data Science</h2>
        <p style={textStyle}>
          Learn Python, Pandas, NumPy, MySQL. Analyze big data and extract insights.
          <br /><strong>Average Salary:</strong> ₹8L - ₹22L/year
        </p>
        <img src="https://via.placeholder.com/800x400?text=Data+Science+with+Python" alt="Python Data Science" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>9. Blockchain & Web3 Development</h2>
        <p style={textStyle}>
          Web3 is the future. Learn Solidity and smart contract development on Ethereum.
          <br /><strong>Average Salary:</strong> ₹12L - ₹40L/year
        </p>
        <img src="https://via.placeholder.com/800x400?text=Blockchain+%26+Web3" alt="Web3" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>10. IT & Technical Support</h2>
        <p style={textStyle}>
          Learn Basic Computer Skills and Tally Prime.
          <br /><strong>Average Salary:</strong> ₹3L - ₹8L/year
        </p>
        <img src="https://via.placeholder.com/800x400?text=IT+%26+Support" alt="IT Support" style={imageStyle} />
      </div>

      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>How to Get Started?</h2>
        <ul style={textStyle}>
          <li>📚 Join courses at <a href="https://www.instagram.com/osmosiscomputer" target="_blank" rel="noreferrer">Osmosis Computer</a></li>
          <li>📜 Get certified by top platforms</li>
          <li>🛠️ Build real-world projects</li>
          <li>📰 Stay updated with trends and tools</li>
        </ul>
      </div>

      <div style={{ ...sectionStyle, backgroundColor: '#e9f7ef' }}>
        <h2 style={{ ...subtitleStyle, color: '#0c513f' }}>🌟 The Time to Act is NOW!</h2>
        <p style={textStyle}>
          Whether you're a beginner or a pro – mastering tech skills in 2025 means more income, job stability, and career growth.
          <br /><br />
          💼 <strong>Get trained and placed</strong> with Osmosis Computer in Jodhpur!
        </p>
      </div>
    </div>
    </>
  )
}

export default Part1