export default function MediaCard() {
  return (
    <article className="media-card">
      <img
        className="media-card-image"
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=80"
        alt="Laptop and code on a desk"
      />
      <div className="media-card-content">
        <h2 className="media-card-title">Build Better UI Components</h2>
        <p className="media-card-text">
          This is a reusable media component with an image, text, and a button.
        </p>
        <button className="media-card-button">Learn more</button>
      </div>
    </article>
  );
}
