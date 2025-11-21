"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Rocket,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Database,
  Layout,
  Server,
  Globe,
  Terminal,
  Cpu,
  Zap
} from "lucide-react";

export default function Home() {
  const skills = [
    { name: "Frontend", icon: Layout, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: Server, items: ["Node.js", "Python", "Express", "FastAPI"] },
    { name: "Database", icon: Database, items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
    { name: "DevOps", icon: Terminal, items: ["Docker", "AWS", "CI/CD", "Kubernetes"] },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time inventory, payment integration, and admin dashboard",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      icon: Globe,
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time data visualization platform with ML-powered insights and predictive analytics",
      tech: ["React", "Python", "TensorFlow", "Redis"],
      icon: Cpu,
    },
    {
      title: "Social Media API",
      description: "Scalable RESTful API serving 100k+ users with authentication and real-time features",
      tech: ["Express", "MongoDB", "Socket.io", "Docker"],
      icon: Zap,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full glass-effect z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="text-accent" size={28} />
            <span className="font-bold text-xl">DevPortfolio</span>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          className="max-w-5xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Sparkles className="inline-block text-accent animate-float" size={40} />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-6 text-balance"
          >
            Fullstack
            <span className="gradient-text"> Developer</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto text-balance"
          >
            Crafting seamless digital experiences from database to deployment.
            Building scalable, modern applications with cutting-edge technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent rounded-full font-semibold glow-effect hover:bg-accent-light transition-all flex items-center space-x-2"
            >
              <span>View Projects</span>
              <Rocket size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-full font-semibold hover:border-accent transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mt-12"
          >
            {[
              { Icon: Github, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Twitter, href: "#" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-8 text-center gradient-text">
              About Me
            </h2>
            <div className="glass-effect rounded-3xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                I'm a passionate fullstack developer with 5+ years of experience building
                robust, scalable applications. I specialize in creating end-to-end solutions
                that combine beautiful user interfaces with powerful backend systems.
                From concept to deployment, I bring ideas to life with clean code and modern architecture.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-16 text-center gradient-text"
          >
            Technical Skills
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect rounded-2xl p-6 hover:border-accent transition-all"
              >
                <skill.icon className="text-accent mb-4" size={36} />
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-400">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-16 text-center gradient-text"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -10 }}
                className="glass-effect rounded-2xl p-8 hover:border-accent transition-all cursor-pointer"
              >
                <project.icon className="text-accent mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/20 text-accent-light rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-t from-transparent to-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-8 gradient-text">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Have a project in mind? Let's create something amazing together.
            </p>

            <motion.a
              href="mailto:hello@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 px-10 py-5 bg-accent rounded-full font-semibold text-lg glow-effect hover:bg-accent-light transition-all"
            >
              <Mail size={24} />
              <span>hello@example.com</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>&copy; 2025 Fullstack Developer. Crafted with passion and code.</p>
        </div>
      </footer>
    </main>
  );
}
