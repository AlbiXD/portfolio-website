import { useEffect } from "react";
import "../css/header.css";
import "../css/dot.css";
function Header({ title }) {
  useEffect(() => {
    setLinePosition();

    function handleResize() {
      setLinePosition();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function setLinePosition() {
    var moonPosition = document
      .getElementById("moonImage")
      .getBoundingClientRect();
    var headerPosition = document
      .querySelector(".headerText")
      .getBoundingClientRect();

    var moonX = moonPosition.left;
    var headerX = headerPosition.left;

    var lineWidth = moonX - headerX - 10;

    document.documentElement.style.setProperty("--bar-width", `${lineWidth}px`);
  }
  return (
    <div>
      <header className="headerText"> {title} </header>
    </div>
  );
}

export default Header;
