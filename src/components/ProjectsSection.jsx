import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Wanderlust - Travel Listings Web App",
    description:
      "Built a full-stack MERN application with EJS templating, user authentication, Cloudinary image uploads, and Mapbox integration; deployed on Render with MongoDB Atlas as backend.",
    image: "/projects/project1.png",
    tags: ["MongoDB", "Express.js", "Node.js", "EJS", "Bootstrap CSS"],
    demoUrl: "https://wanderlust-skz1.onrender.com/listings",
    githubUrl: "https://github.com/adithyas0047/Wanderlust",
  },

  {
    id: 2,
    title: "Grocery Web Application",
    description:
      "Developed a responsive full stack grocery list web app with user authentication, real-time item management, and cost calculation. Built using HTML, CSS, JavaScript, and backend integration, achieving 92% form validation accuracy.",
    image: "/projects/project2.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap CSS"],
    githubUrl: "https://github.com/adithyas0047/Grocery-WebApp",
  },

  {
    id: 3,
    title: "Assitive Device for Visually Impaired",
    description:
      "Developed a real-time assistive device for the visually impaired using Raspberry Pi CM, Python, and OpenCV. Integrated face recognition, OCR (Tesseract), Google TTS, and a GUI for voice-based interaction and face training.",
    image: "/projects/project3.png",
    tags: ["Python", "OpenCV", "Tesseract", "Google TTS"],
  },

  {
    id: 4,
    title: "Loan Approval Prediction System using Machine Learning",
    description:
      "Developed a loan approval prediction model using Python, data preprocessing, and Random Forest Classifier. Achieved 76% accuracy, enhancing efficiency and transparency in financial decision-making.",
    image: "/projects/project4.png",
    tags: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Numpy",
      "Random Forest Classifier",
    ],
    githubUrl: "https://github.com/adithyas0047/loan-approval-prediction",
  },

  {
    id: 5,
    title: "News Website",
    description:
      "Developed a full-stack news platform using React.js, Node.js, Express.js, and MongoDB. Integrated NewsAPI to display real-time global headlines and implemented secure user authentication with Passport.js. Designed a responsive interface for seamless browsing across devices.",
    image: "/projects/project5.png",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Passport.js",
      "NewsApi.org",
    ],
    demoUrl: "https://news-website-ashy-gamma.vercel.app/",
    githubUrl: "https://github.com/adithyas0047/News-Website",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-4 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of my most impactful projects, highlighting my experience
          in web development, machine learning, and IoT. These projects
          demonstrate my ability to design, develop, and deploy real-world
          applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-1">
                  {" "}
                  {project.title}{" "}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {" "}
                  {project.description}{" "}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/adithyas0047"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
