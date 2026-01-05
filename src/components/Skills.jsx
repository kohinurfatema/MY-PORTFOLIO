import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaFigma
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiExpress,
  SiNextdotjs, SiVite, SiPostman
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact />, level: 85, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80, color: '#06B6D4' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 70, color: '#ffffff' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 75, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, level: 70, color: '#ffffff' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 70, color: '#47A248' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#F05032' },
        { name: 'VS Code', icon: <VscCode />, level: 90, color: '#007ACC' },
        { name: 'Figma', icon: <FaFigma />, level: 70, color: '#F24E1E' },
        { name: 'Vite', icon: <SiVite />, level: 80, color: '#646CFF' },
        { name: 'Postman', icon: <SiPostman />, level: 75, color: '#FF6C37' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + skillIndex * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        style={{ background: skill.color }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
