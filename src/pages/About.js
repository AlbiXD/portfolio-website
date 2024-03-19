import "../css/About.css";
import "../css/Home.css";
import "../components/NavBar";
import ResumePDF from "../pdf/Resume.pdf"; // Import the PDF file

function About() {
  const handleOpenPDF = () => {
    //Downloads the PDF
    fetch(ResumePDF)
      .then(response => response.blob())
      .then(blob => {
        //Create a URL for the downloaded blob
        const url = URL.createObjectURL(blob);
        //Open the PDF in a new window
        window.open(url, '_blank');
      })
      .catch(error => console.error('Error downloading PDF:', error));
  };


  return (
    <div className="mainBody">
      <h1 className="aboutText">About</h1>

      <div className="imageBody">
        <img src="https://i.imgur.com/vJgMFri.jpeg" className="albiPhoto" />
      </div>

      <div className="paragraphBody">
        <h1 className="nameText">Albi Zhaku</h1>
        <h2 className="sweText">Software Engineer</h2>
        <h3 className="locationText">Morristown, NJ - albizhaku1@gmail.com</h3>
        <h4 className="descText">
          I am an enthusiastic software developer who enjoys building cool
          software and solving problems.
        </h4>

        <a 
         onClick={handleOpenPDF}
         
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default About;
