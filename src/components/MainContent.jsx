import MediaCard from "./MediaCard";

export default function MainContent() {
  return (
    <>
      <section className="left">Column</section>
      <section className="middle">
        <div className="media-grid">
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </div>
      </section>
      <section className="right">Column</section>
    </>
  );
}
