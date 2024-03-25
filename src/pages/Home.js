import "../css/home.css";
import Section from "./Section.js";
import "../css/about.css";
import ResumePDF from "../pdf/Resume.pdf"; // Import the PDF file
import "../css/skills.css";
import Card from "../components/Card.js";
function Home() {
  const handleOpenPDF = () => {
    // Step 1: Download the PDF
    fetch(ResumePDF)
      .then((response) => response.blob())
      .then((blob) => {
        // Step 2: Create a URL for the downloaded blob
        const url = URL.createObjectURL(blob);
        // Step 3: Open the PDF in a new window
        window.open(url, "_blank");
      })
      .catch((error) => console.error("Error downloading PDF:", error));
  };

  return (
    <div className="mainContainer">
      <section id="home">
        <div className="textBody">
          <h1 className="helloText">Hello, World! I am Albi</h1>
          <h2 className="SWEText">Software Engineer</h2>
          <h3 className="learnText">
            Read more <a href="#about">about me</a> or{" "}
            <a href="/contact">contact me</a>
          </h3>
        </div>
      </section>

      <Section sectionName="About" position={"1000"} sectionID="about">
        <div className="textContainer">
          <p class="text-stone-300 relative left-10 top-10 pt-4">
            {" "}
            A software engineer who is eager to learn, adapt and inovate through
            technology.
          </p>
          <p class="relative top-4">👨‍💻</p>

          <p class="text-stone-300 relative left-10 top-10">
            {" "}
            Currently pursuing a B.S. in{" "}
            <span style={{ color: "white", fontWeight: "bold" }}>
              Computer Science
            </span>{" "}
            at
            <span style={{ color: "white", fontWeight: "bold" }}> NJIT</span>.
          </p>
          <p class="relative top-4">🎓</p>

          <p class="text-stone-300 relative left-10 top-10">
            I am seeking internship opportunities in order to apply my
            theoretical knowledge
            <br />
            in practical settings, enhance my technical skills, and gain
            valuable industry <br />
            experience that will prepare me for a successful career in software
            engineering
          </p>
          <p class="relative bottom-2">💼</p>

          <p class="text-stone-300 relative left-10 top-10 pb-3">
            {" "}
            In my free time, I enjoy exercising, a passion that helps me balance
            physical health and <br />
            overall well-being where maintaining physical fitness enhances my
            overall well-being and performance.
          </p>
          <p class="relative bottom-2">🏋️</p>

          <a
            style={{ top: "70px", left: "40px" }}
            onClick={handleOpenPDF}
            className="resumeLink"
          >
            Resume
          </a>
        </div>
        <div class="relative ml-[430px] mt-[-290px]">
          <img
            class="w-auto h-[180px] rounded-full"
            src={`${process.env.PUBLIC_URL}/icons/picture.jpg`}
            className="photo"
          ></img>

          <h1 class="text-white text-2xl relative left-[30px] pt-3">
            Albi Zhaku
          </h1>
          <p class="text-stone-400 text-xl relative left-3 pt-1">
            Software Engineer
          </p>
        </div>
      </Section>

      <section id="skills" class="top-[1200px] relative">
        <h1 class="text-4xl text-white font-bold ml-[48%]">Skills</h1>
        <div class="relative bottom-[100px] right-[500px]">
          <Card w="240" h="300">
            <p class="font-bold text-2xl top-3 pb-2 left-[5%] relative text-white">
              Languages
            </p>

            <div>
              <img
                src={`${process.env.PUBLIC_URL}/icons/java.png`}
                class="w-5 h-auto relative top-4 mb-2 "
              ></img>
              <img
                src={`${process.env.PUBLIC_URL}/icons/javascript.png`}
                class="w-5 h-auto relative top-7 mb-2"
              ></img>
              <img
                src={`${process.env.PUBLIC_URL}/icons/python.png`}
                class="w-5 h-auto relative top-10 mb-4"
              ></img>
              <img
                src={`${process.env.PUBLIC_URL}/icons/c.png`}
                class="w-5 h-auto relative top-10 mb-4"
              ></img>
              <img
                src={`${process.env.PUBLIC_URL}/icons/cs.png`}
                class="w-5 h-auto relative top-10 mb-4"
              ></img>

              <img
                src={`${process.env.PUBLIC_URL}/icons/css.png`}
                class="w-5 h-auto relative top-10 mb-0"
              ></img>
            </div>

            <div class="relative bottom-[175px] left-3 text-white">
              <p class="ml-6 text-xl  relative text-white">Java</p>
              <p class="ml-6 text-xl  top-2.5   relative text-white">
                JavaScript
              </p>
              <p class="ml-6 text-xl  top-5  relative text-white">Python</p>
              <p class="ml-6 text-xl  top-7   relative text-white">C/C++</p>
              <p class="ml-6 text-xl  top-10   relative text-white">C#</p>
              <p class="ml-6 text-xl   top-12 relative text-white">HTML/CSS</p>
            </div>
          </Card>
          <div class="relative bottom-[450px] left-[250px]">
            <Card h="300" w="240">
              <p class="font-bold text-2xl top-3 pb-2 left-[5%] relative text-white">
                Frameworks
              </p>
              <div class="relative  left-3 text-white">
                <p class="ml-6 text-xl  relative text-white">ReactJS</p>
                <p class="ml-6 text-xl    relative text-white">NodeJS</p>
                <p class="ml-6 text-xl   relative text-white">.NET Core</p>
                <p class="ml-6 text-xl    relative text-white">Bootstrap</p>
                <p class="ml-6 text-xl    relative text-white">Tailwind CSS</p>
              </div>
            </Card>
          </div>

          <div class="relative bottom-[900px] left-[500px]">
            <Card h="300" w="240">
              <p class="font-bold text-2xl top-3 pb-2 left-[5%] relative text-white">
                Database
              </p>
              <div class="relative  left-3 text-white">
                <p class="ml-6 text-xl  relative text-white">MySQL</p>
                <p class="ml-6 text-xl    relative text-white">PostgreSQL</p>
                <p class="ml-6 text-xl   relative text-white">.NET Core</p>

              </div>
            </Card>
          </div>

          <div class="relative bottom-[1350px] left-[750px]">
            <Card h="300" w="240">
              <p class="font-bold text-2xl top-3 pb-2 left-[5%] relative text-white">
                Other tools
              </p>
              <div class="relative  left-3 text-white">
                <p class="ml-6 text-xl  relative text-white">Git</p>
                <p class="ml-6 text-xl    relative text-white">Eclipse</p>
                <p class="ml-6 text-xl   relative text-white">VSCode</p>
                <p class="ml-6 text-xl    relative text-white">AWS</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
