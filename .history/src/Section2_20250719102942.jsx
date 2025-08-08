import React from 'react'
import { motion } from 'framer-motion'
import card1 from './image/sun2.jpg'
import card2 from './image/sub3.jpg'
import card3 from './image/sub1.jpg'

function Section2({ isDark }) {
  const Section2 = {
    backgroundColor: isDark ? '#0E121B' : 'darkred',
    color: isDark ? 'white' : 'white',
  }
  const cards = {
    backgroundColor: isDark ? '#27272A' : 'white',
    color: isDark ? 'white' : 'darkred',
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.3,
        type: 'spring',
      },
    }),
  }

  const cardsData = [
    {
      image: card1,
      name: 'Raghuveer Sain (Director)',
      desc: 'RS-CIT || Tally(RS-CFA)',
    },
    {
      image: card2,
      name: 'Er. Deepankar Pal',
      desc: 'Web Development || Digital Marketing || Programing Lan...',
    },
    {
      image: card3,
      name: 'Mayank Bhambhani',
      desc: 'Graphics Designing',
    },
  ]

  return (
    <>
      <div className="container-fluid p-0 ">
        <div className="row">
          <div className="col-12 Section2 pt-2" style={Section2}>
            <h2 className='text-center mt-5 bolder'>Our Skilled & Supportive Faculty</h2>

            <div className="row">
              <div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7 m-auto">
                <h5 className='text-center mt-4'>
                  At Osmosis, our trainers bring over 6+ years of industry experience to the classroom.
                  They are dedicated to teaching every course from zero level, ensuring that even beginners
                  build a strong foundation. With a practical and student-friendly approach, they make
                  complex concepts easy to understand and apply.
                </h5>
              </div>
            </div>

            <div className="row mt-5 mb-5">
              {cardsData.map((card, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-3"
                >
                  <div className="row">
                    <div className="col-11 m-auto cards" style={cards}>
                      <div className="row">
                        <div className="col-12 col-sm-11 p-0">
                          <img src={card.image} className='img-fluid cards-img' alt="" />
                        </div>
                        <div className="col-12" style={{ height: "110px" }}>
                          <h4 className='bolder mt-3'>{card.name}</h4>
                          <p>{card.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="row">
              <div className="col-12">
                <h2 className='text-center bolder mt-5 mb-5'>
                  Empowering Aspiring Developers to Build Their Future in Tech!
                </h2>
                <div className="row mt-4 mb-5">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center mt-5">
                    <p>Students land their first developer job in</p>
                    <h1>6 months</h1>
                    <h5>on average</h5>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center mt-5">
                    <p>Over</p>
                    <h1>15,000+</h1>
                    <h5>students trained</h5>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center mt-5">
                    <p>Total YouTube Views</p>
                    <h1>500K+</h1>
                    <h5>views and counting</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Section2
