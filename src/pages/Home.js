import "../css/Home.css";

function Home() {
    return (
      <div className="textBody">
        <h1 className="helloText">Hello, World! I am Albi</h1>
        <h2 className="SWEText">Software Engineer</h2>
        <h3 className="learnText">
          Read more <a href="/about">about me</a> or <a href="/contact">contact me</a>
        </h3>
      </div>
    );
  }
  
  export default Home;