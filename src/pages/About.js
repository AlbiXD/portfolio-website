import "../css/about.css";
import "../components/NavBar";
import ResumePDF from "../pdf/Resume.pdf"; // Import the PDF file
import Header from "../components/Header"


function About() {
  const handleOpenPDF = () => {
    //Downloads the PDF
    fetch(ResumePDF)
      .then((response) => response.blob())
      .then((blob) => {
        //Create a URL for the downloaded blob
        const url = URL.createObjectURL(blob);
        //Open the PDF in a new window
        window.open(url, "_blank");
      })
      .catch((error) => console.error("Error downloading PDF:", error));
  };

  return (
    <div className="mainBody">
      <Header title = "About"></Header>
    </div>
  );
}

export default About;
