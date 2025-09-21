import { Briefcase, Code, User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto mx-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {" "}
              Passionate Web Developer and Electronics & Communication Engineer
            </h3>
            <p className="text-muted-foreground">
              Hello! I’m Adithya S, an Electronics and Communication Engineer
              with a strong interest in Web Development and innovative
              technology solutions. My journey started with programming and
              electronics, where I enjoyed exploring how hardware and software
              can work together to solve real-world problems.
            </p>
            <p className="text-muted-foreground">
              Over time, I discovered my passion for building modern web
              applications that are not only functional but also intuitive and
              user-friendly. Alongside web development, I’ve worked on impactful
              electronics projects — including an assistive device for the
              visually impaired that combines computer vision, voice
              interaction, and hardware integration to improve accessibility.
            </p>
            <p className="text-muted-foreground">
              I see myself as a curious learner and problem solver, always eager
              to explore new technologies, whether it’s designing a responsive
              website or developing IoT-based systems. My goal is to create
              solutions that make a difference, blending creativity with
              technical expertise
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch{" "}
              </a>

              <a
                href="/AdithyaS(4).pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                View Resume{" "}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Trained in the MERN stack for 6 months, with hands-on
                    experience in building responsive and full-stack web
                    applications. Skilled in developing RESTful APIs, designing
                    user-friendly interfaces, managing databases, and deploying
                    applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Experienced in designing clean, modern, and responsive
                    interfaces with a strong focus on user experience. Skilled
                    at turning ideas into intuitive layouts and ensuring that
                    applications are both visually appealing and easy to
                    navigate.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Work Experience</h4>
                  <p className="text-muted-foreground">
                    I worked as an IoT Project Intern at SuVeechi Technologies,
                    developing an assistive device for the visually impaired
                    using Raspberry Pi and computer vision. I also have hands-on
                    MERN stack experience, building full-stack applications with
                    a focus on responsive design and APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
