import React from "react";
import flowerShopImg from "../assets/AWS Certificate.png";
import ecBookstoreImg from "../assets/google certificate.png";
import clothingImg from "../assets/Lancaster University.png";
import school1Img from "../assets/Coding Studio.png";
import school2Img from "../assets/Daniel Goleman.png";
import intraImg from "../assets/intra.png";
import scienceImg from "../assets/Someone.png";
import biniImg from "../assets/PublicTrust.png";
import HumanEmotional from "../assets/Human.png";
import AgeBased from "../assets/AgeBased.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "AWS Panorama - Building Edge Computer Vision (CV) Applications Certificate",
      description:
        "I successfully completed the course 'AWS Panorama - Building Edge Computer Vision (CV) Applications' in just one hour. This course deepened my understanding of building Computer Vision (CV) applications at the edge using the innovative AWS Panorama platform",
      image: flowerShopImg,
      link: "https://media.licdn.com/dms/document/media/v2/D562DAQEXBFFY_u7JXA/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1720126501976?e=1764201600&v=beta&t=130kxLgAFxM7Qb83_1xMnZG8CTRa7pEwVXlsgMy0VoM",
      tech: ["ID Kredensial 17780_5_5857831_1720126323", "Diterbitkan Juli 2024"],
    },
    {
      title: "Google AI Essentials Certificate",
      description:
        "I recently completed the Google AI Essentials course on Coursera, deepening my knowledge in AI and machine learning. With this new understanding, I am eager to apply AI technology to create innovative solutions and contribute to tech projects.",
      image: ecBookstoreImg,
      link: "https://media.licdn.com/dms/document/media/v2/D562DAQFU9b9dzVLIDw/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1720016398959?e=1764201600&v=beta&t=ES75f-CgGmGDCBvveqCofai5da9s-oadJKLLfowSOzs",
      tech: ["ID Kredensial 3L9FJPAXEFY3", "Diterbitkan Jul 2024"],
    },
    {
      title: "Introduction to Virtual, Augmented and Mixed Reality by Lancester University ",
      description:
        "Explore the transformative technologies of Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR) with expertise from Lancaster University. Gain insights into their applications across industries and understand their potential to revolutionize experiences and innovation",
      image: clothingImg,
      link: "https://media.licdn.com/dms/document/media/v2/D562DAQEOf8eeGmmgWA/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1720125596159?e=1764201600&v=beta&t=HsvDflrSaMEZd0ZdSxEwxxhERn_dQQMbq0QLSXa_yGc",
      tech: ["ID Kredensial aemjfml", "Diterbitkan Jul 2024"],
    },
    {
      title: "Coding Studio BootCamp",
      description:
        "I recently completed a bootcamp at Coding Studio, where I honed my skills in various programming languages and software development. Through real-world projects, I gained in-depth understanding and practical experience ready to be applied in the workplace.",
      image: school1Img,
      link: "https://media.licdn.com/dms/document/media/v2/D562DAQG9gTEKet1W8Q/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1734812373754?e=1764201600&v=beta&t=tBSaCyCSi9utyziZl-VgfjVWgUoS5SkPdarHvTcJL_U",
      tech: ["Diterbitkan Feb 2024"],
    },
    {
      title: "Implementing the Concept of Emotional Intelligence for Personal and Professional Success: A Review of the Book Emotional Intelligence by Daniel Goleman",
      description:
        "",
      image: school2Img,
      link: "https://medium.com/@muhammadrafiariza/implementing-the-concept-of-emotional-intelligence-for-personal-and-professional-success-a-review-0ba526924598",
      tech: ["Medium", "Book Review", "Publication"],
    },
    {
      title: "Analysis of the Relationship Between Introverted Personality Traits and Operational Decision-Making of Pilots in Commercial Aviation",
      description:
        "",
      image: intraImg,
      link: "https://www.researchgate.net/publication/394417358_Analysis_of_the_Relationship_Between_Introverted_Personality_Traits_and_Operational_Decision-Making_of_Pilots_in_Commercial_Aviation",
      tech: ["Article", "ResearchGate"],
    },
    {
      title: "The Beauty of Imperfection in Someone Who Will Love You in All Your Damaged Glory",
      description:
        "",
      image: scienceImg,
      link: "https://medium.com/@muhammadrafiariza/the-beauty-of-imperfection-in-someone-who-will-love-you-in-all-your-damaged-glory-05af1aa72fb2",
      tech: ["Medium", "Book Review"],
    },
    {
      title: "The Dynamics of Public Trust in Pilots Following Aviation Safety Incidents",
      description:
        "",
      image: biniImg,
      link: "https://www.researchgate.net/publication/394417108_The_Dynamics_of_Public_Trust_in_Pilots_Following_Aviation_Safety_Incidents",
      tech: ["Article", "ResearchGate", ],
    },
    {
      title: "The Role of Inner Conflict in Shaping Human Emotional Behavior",
      description:
        "",
      image: HumanEmotional,
      link: "https://www.researchgate.net/publication/394418152_The_Role_of_Inner_Conflict_in_Shaping_Human_Emotional_Behavior",
      tech: ["Article", "ResearchGate", ],
    },
    {
      title: "Age-Based Recruitment Practices: A Critical Need for Paradigm Shift in Indonesia",
      description:
        "",
      image: AgeBased,
      link: "https://www.researchgate.net/publication/394418538_Age-Based_Recruitment_Practices_A_Critical_Need_for_Paradigm_Shift_in_Indonesia",
      tech: ["Article", "ResearchGate", ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-orange-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl text-stone-800 mb-6"
          style={{ fontFamily: "satoshi-black" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get to Know Me
        </motion.h2>

        <motion.p
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base"
          style={{ fontFamily: "satoshi-medium" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here’s an update on my journey! Every day is a step forward. Let’s continue to grow, learn, and push ourselves to be better together. 
          The path may not always be easy, but it’s always worth it. Let’s make today count!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3
                  className="text-xl font-semibold text-stone-800 mb-2"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-zinc-600 text-sm mb-4"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-rose-200 text-rose-800 px-2 py-1 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-rose-300 border-1 border-stone-800 text-stone-800 px-4 py-2 rounded-sm text-sm font-semibold hover:bg-rose-400 transition-colors"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  View 
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
