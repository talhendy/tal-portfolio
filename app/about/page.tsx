import Header from "../components/Header";
import Footer from "../components/Footer";
import Shot from "../components/Shot";

/* ---------- Passion card ---------- */

function PassionCard({
  title,
  background,
  children,
  graphic,
}: {
  title: string;
  background: string; // any CSS background value (color or gradient)
  children: React.ReactNode;
  graphic: React.ReactNode;
}) {
  return (
    <div
      className="relative flex flex-col rounded-[16px] sm:rounded-[24px] overflow-hidden h-[560px] md:h-[700px]"
      style={{ background }}
    >
      {/* graphic fills the card; each graphic positions itself */}
      <div className="absolute inset-0">{graphic}</div>

      <div className="relative px-10 pt-[40px]">
        <h3 className="text-2xl md:text-[32px] font-semibold capitalize text-title">
          {title}
        </h3>
        <div className="mt-4 text-sm md:text-base leading-relaxed text-body max-w-[493px]">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function AboutPage() {
  return (
    <>
<Header />
      <main className="flex-1">
        {/* Intro section — 262px gutters on desktop to match grid */}
        <div className="mx-auto max-w-[1790px] px-5 sm:px-8 lg:px-10">
          {/* Intro: paragraph (left) + photo & decorations (right) */}
          <section className="relative pt-[162px] lg:pt-[116px] pb-0">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
              {/* Paragraph — left half */}
              <div className="flex-1" style={{ transform: "translateY(-40px)" }}>
                <p className="text-[1.2rem] leading-[1.19] sm:text-[1.55rem] lg:text-[40px] lg:leading-[1.14] font-semibold">
                  <span style={{ color: "#B1B1B1" }}>I&apos;m part of a team designing complex internal products for a large corporation. </span>
                  <span className="text-title">I own projects end to end</span>
                  <span style={{ color: "#B1B1B1" }}> - from concept to delivery - </span>
                  <span className="text-title">collaborating closely with PMs, developers, and analysts</span>
                  <span style={{ color: "#B1B1B1" }}>, while also owning the company&apos;s </span>
                  <span className="text-title">design system</span>
                  <span style={{ color: "#B1B1B1" }}>.</span>
                </p>
              </div>
              {/* Photo — right half, centered */}
              <div className="flex-1 flex justify-center mb-12 lg:mb-0">
                <Shot
                  src="/about/picture-new.svg"
                  alt="Tal Hendy"
                  className="w-[240px] lg:w-[364px] h-auto"
                  style={{ transform: "rotate(5.86deg)" }}
                />
              </div>
            </div>

          </section>
        </div>

        {/* Passion cards — original gutters */}
        <div className="mx-auto max-w-[1790px] px-5 sm:px-8 lg:px-10 mt-[103px]">
          <p style={{ fontFamily: "var(--font-caveat)", fontSize: "32px", color: "#262626", marginBottom: "16px" }}>
            Check out my side projects
          </p>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pb-8">
            {/* Work */}
            <PassionCard
              title="Work"
              background="#deeeff"
              graphic={
                <div className="absolute inset-x-0 bottom-6 flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/about-work-cards.png"
                    alt="UX Club cards"
                    className="w-[82%] max-w-[440px] h-auto"
                  />
                </div>
              }
            >
              I founded and run a UX Club for our design team - curating content,
              recommending resources, mentoring designers through their
              presentation prep, and organizing the learning agenda.
            </PassionCard>

            {/* Play */}
            <PassionCard
              title="Play"
              background="linear-gradient(to bottom, #ead3eb, #607fc2)"
              graphic={
                <div className="absolute inset-x-0 bottom-[80px] sm:bottom-[120px] flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/about-volleyball-3d.png"
                    alt="Dodgeball"
                    className="w-[252px] max-w-[61%] h-auto"
                  />
                </div>
              }
            >
              I co-founded a women&apos;s dodgeball group in my area. A safe space
              for women to meet, train, and laugh together.
              <br />
              <span className="text-title">But don&apos;t be fooled</span> we take
              this very seriously. We&apos;ve got sponsors and everything.
            </PassionCard>

            {/* Write */}
            <PassionCard
              title="Write"
              background="#f0f0f0"
              graphic={
                <div className="absolute inset-x-0 bottom-0 top-[350px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/about-write-circles.png"
                    alt=""
                    aria-hidden="true"
                    className="w-[85%] max-w-none h-auto block mx-auto"
                  />
                </div>
              }
            >
              I share my career insights for designers on Medium. I published an
              article about my first year in UX, and there&apos;s another one
              brewing about career transitions - the things nobody tells you
              before making the jump.
              <a
                href="https://medium.com/@talhendy0102/my-first-year-as-a-product-designer-how-not-to-lose-yourself-along-the-way-75d4bcf1bb18"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 font-medium text-title underline capitalize"
              >
                Link to the article
              </a>
            </PassionCard>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
