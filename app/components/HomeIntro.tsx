export default function HomeIntro() {
  return (
    <section className="relative" style={{ marginTop: "0px" }}>
      <h1 className="max-w-[1000px] pr-0 sm:pr-28 text-[1.49rem] leading-[1.19] sm:text-[1.93rem] lg:text-[2.57rem] lg:leading-[1.14] font-semibold">
        <span className="text-light">Hello I&apos;m </span>
        <span className="text-title">Tal Hendy</span>
        <br />
        <span className="text-light">
          I&apos;m a product designer specializing in <span className="text-title">complex systems</span> and{" "}
          <span className="text-title">data-heavy products</span>
        </span>
      </h1>

      {/* spacer keeps cards below the text */}
      <div className="mt-[156px] sm:hidden" />
    </section>
  );
}
