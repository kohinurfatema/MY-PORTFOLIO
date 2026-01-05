import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaBook, FaMicrophone } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const hobbies = [
    { icon: <FaCode />, name: 'Coding' },
    { icon: <FaBook />, name: 'Reading' },
    { icon: <FaMicrophone />, name: 'Singing' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-img-wrapper illustration-about">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/muslim-woman-working-on-laptop-illustration-download-in-svg-png-gif-file-formats--hijab-girl-arabian-freelancer-female-employee-business-pack-people-illustrations-8333170.png"
                alt="Hijabi Developer Illustration"
                className="illustration"
              />
              <div className="experience-badge">
                <span className="years">Fresh</span>
                <span className="text">Graduate</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>My Journey in Programming</h3>

            <p>
              Hi! I am Kohinur Akter Fatema, a passionate web developer who recently
              completed my Higher Secondary Certificate. My programming journey began
              when I discovered the exciting world of web development and fell in love
              with creating interactive digital experiences.
            </p>

            <p>
              I specialize in building responsive, user-friendly web applications
              using modern technologies like React, JavaScript, and CSS. I love the
              creative process of transforming ideas into functional, beautiful
              websites that solve real problems and delight users.
            </p>

            <p>
              When I am not coding, you will find me reading books or singing songs.
              These hobbies help me stay balanced and inspired in my creative journey.
            </p>

            <h4>Things I Love</h4>
            <div className="hobbies">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  className="hobby-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {hobby.icon}
                  <span>{hobby.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
