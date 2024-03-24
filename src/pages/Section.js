import "../css/section.css";

function Section({ sectionName, children, position, sectionID }) {
  return (
    <div className="sectionContainer" style={{ top: `${position}px` }}>
      <section id={sectionID}>
        <header className="headerText">{sectionName}</header>
        {children}
      </section>
    </div>
  );
}

export default Section;
