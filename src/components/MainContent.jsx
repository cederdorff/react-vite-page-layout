import MediaCard from "./MediaCard";

export default function MainContent() {
  return (
    <>
      <section className="left">Column</section>
      <section className="middle">
        <MediaCard />
        <MediaCard />
      </section>
      <section className="right">Column</section>
    </>
  );
}
