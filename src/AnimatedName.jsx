import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function AnimatedName() {
  const words = ['Welcome', 'to', 'Osmosis'];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap', // For responsiveness
        gap: '0.8rem',
        marginTop: '60px',
        padding: '0 1rem',
        textAlign: 'center',
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={item}
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)', // responsive font size
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimatedName;
