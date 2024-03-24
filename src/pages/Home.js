import "../css/home.css";
import Section from "./Section.js";
import "../css/about.css";

function Home() {
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
          <p className="text">
            {" "}
            👨‍💻 A software engineer who is eager to learn, adapt and inovate through
            technology.
          </p>
          <p className="text">
            {" "}
            🎓 Currently pursuing a B.S. in{" "}
            <span style={{ color: "white", fontWeight: "bold" }}>
              Computer Science
            </span>{" "}
            at
            <span style={{ color: "white", fontWeight: "bold" }}> NJIT</span>.

          </p>
          <p className= "text">💼 I am seeking internship opportunities in order to apply my theoretical knowledge 
          <br/>in practical settings, enhance my technical skills, and gain valuable industry <br/>
          experience that will prepare me for a successful career in software engineering</p>


          <p className= "text">🏋️ In my free time, I enjoy exercising, a passion that helps me balance physical health and <br/>
           overall well-being where maintaining physical fitness enhances my overall well-being and performance.</p>


           <p className="text" style={{ color: "white"}}>
            Resume
           </p>
        </div>
        //
        <div className="imageContainer">
          <img
            src={`${process.env.PUBLIC_URL}/icons/picture.jpg`}
            className="photo"
          ></img>

          <h1 className="name">Albi Zhaku</h1>
          <p className="sweText">Software Engineer</p>
        </div>
      </Section>
    </div>
  );
}

export default Home;
