import "../css/cards.css"
import "../pages/styles.css"
function Card({children, h, w}) {
  return (
    <div class="card" style={{ height: `${h}px`, width: `${w}px` }} >
      <div class="container">
        {children}
      </div>
    </div>
  );
}

export default Card;
