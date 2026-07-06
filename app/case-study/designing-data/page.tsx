import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeTiltCard from "../../components/HomeTiltCard";
import Shot from "../../components/Shot";

export const metadata: Metadata = {
  title: "Designing Data - Tal Hendy",
  description:
    "Case study: turning a dense collection of safety data into a dashboard that delivers meaningful business insights.",
};

/* ---------- Layout wrappers (shared case-study system) ---------- */

function Text({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[934px] px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

function Wide({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full px-5 sm:px-8 lg:px-20 ${className}`}>{children}</div>
  );
}

/* ---------- Text primitives (identical to case study 1) ---------- */

function Orientation({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] md:text-base uppercase tracking-[5.4px] text-light font-normal">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-[-2px] lowercase first-letter:uppercase leading-[1.05] text-title">
      {children}
    </h2>
  );
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[18px] leading-[1.54] text-body ${className}`}>{children}</p>;
}

// Dark-blue dashboard panel for this case study
function Dashboard({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="rounded-[16px] sm:rounded-[24px] bg-[#000759] p-4 sm:p-8 lg:p-14 overflow-hidden">
      <Shot src={src} alt={alt} width={width} height={height} className="w-[80%] h-auto block mx-auto" />
    </div>
  );
}

/* ---------- Page ---------- */

export default function DesigningData() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-[60px] lg:pt-[128px]">
          <Wide>
            <h1 className="text-4xl sm:text-6xl lg:text-[96px] font-bold tracking-[-2px] lowercase first-letter:uppercase leading-[1.04] text-title">
              Designing Data
            </h1>
          </Wide>
          <Wide className="mt-8 lg:mt-12">
            <Dashboard
              src="/case-study/dd-hero.svg"
              alt="Company-wide safety status dashboard"
              width={1397}
              height={798}
            />
          </Wide>
        </section>

        {/* Background */}
        <section className="mt-20 lg:mt-[140px]">
          <Text>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16">
              <div>
                <SectionTitle>Background</SectionTitle>
                <Body className="mt-10">
                  The company&apos;s management team wanted the ability to track
                  employee safety data and receive a clear overview of the overall
                  safety status within the company.
                </Body>
              </div>
              <dl className="space-y-6 lg:pt-4 lg:ml-10">
                <div>
                  <dt className="font-bold text-title">My Role</dt>
                  <dd className="text-body">Product designer</dd>
                  <dd className="text-body">Project Manager</dd>
                </div>
                <div>
                  <dt className="font-bold text-title">Developer</dt>
                  <dd className="text-body">Yulia Markovski</dd>
                </div>
              </dl>
            </div>
          </Text>
        </section>

        {/* Challenge */}
        <section className="mt-20 lg:mt-[140px]">
          <Text>
            <SectionTitle>Challenge</SectionTitle>
            <Body className="mt-10">
              Transform a collection of data into a dashboard that provides
              meaningful business insights.
            </Body>
          </Text>
          <Wide className="mt-12 lg:mt-20">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch">
              {/* Before */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex-1 rounded-[16px] sm:rounded-[24px] bg-[#ECECEC] p-4 sm:p-6 lg:p-10 overflow-hidden">
                  <Shot
                    src="/case-study/dd-challenge-before.svg"
                    alt="Before: old dashboard"
                    width={723}
                    height={382}
                    className="w-full h-auto block"
                  />
                </div>
                <p className="text-[16px] text-body text-center">Before</p>
              </div>
              {/* After */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex-1 rounded-[16px] sm:rounded-[24px] bg-[#000759] p-4 sm:p-6 lg:p-10 overflow-hidden flex items-center justify-center">
                  <Shot
                    src="/case-study/dd-challenge-after.svg"
                    alt="After: redesigned dashboard"
                    width={723}
                    height={382}
                    className="w-full h-auto block"
                  />
                </div>
                <p className="text-[16px] text-body text-center">After</p>
              </div>
            </div>
          </Wide>
        </section>

        {/* From Chaos to Clarity */}
        <section className="mt-20 lg:mt-[140px]">
          <Text>
            <Orientation>Discovery and design</Orientation>
            <div className="mt-10">
              <SectionTitle>From Chaos to Clarity</SectionTitle>
            </div>
            <Body className="mt-10">
              To bring order to the complexity, I began by mapping the data and
              grouping it into content domains. From there, I built a clear
              hierarchy with tabs, filters, and drill-downs. This structure turned
              a dense dataset into something intuitive - making it easy to navigate
              and effortless to understand.
            </Body>
          </Text>
          <Wide className="mt-12 lg:mt-20">
            <div className="rounded-[16px] sm:rounded-[24px] bg-[#000759] pt-4 sm:pt-8 lg:pt-14 px-4 sm:px-8 lg:px-14 pb-0 overflow-hidden flex items-end justify-center">
              <Shot src="/case-study/dd-chaos.svg" alt="Tab-based navigation and smart filters dashboard" width={1195} height={1317} className="w-[80%] h-auto block mx-auto" />
            </div>
          </Wide>
        </section>

        {/* From Data to Insight */}
        <section className="mt-20 lg:mt-[140px] mb-8">
          <Text>
            <SectionTitle>From Data to Insight - Uncovering the Problem</SectionTitle>
            <Body className="mt-10">
              During my discussions with the main user, we examined the raw graphs
              he had shared and used them as a starting point to uncover the real
              business challenges behind the numbers. Once the problems were clear,
              I was able to redesign the visualizations so they directly addressed
              those challenges with a clearer and more effective solution.
            </Body>
          </Text>

          {/* The Journey card */}
          <Wide className="mt-12 lg:mt-20">
            <div className="rounded-[16px] sm:rounded-[24px] bg-[#000759] pt-10 sm:pt-14 lg:pt-16 overflow-hidden">
              {/* Inner content constrained to Text width */}
              <div className="mx-auto w-full max-w-[934px] px-5 sm:px-8">

                {/* Card header */}
                <div className="mb-10 lg:mb-14">
                  <p className="text-white text-2xl lg:text-[32px] font-bold">The Journey</p>
                  <p className="text-white/60 text-sm lg:text-base mt-2">
                    Starting from the original graph, through the business insights we identified, and ending with the redesigned visualization.
                  </p>
                </div>

                {/* Step 1 — Identifying the business problems */}
                <div className="mb-10 lg:mb-14">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/case-study/dd-icon-check.svg" alt="" width={32} height={32} />
                  <p className="text-white font-bold text-base lg:text-lg mt-4 mb-3">Identifying the business problems</p>
                  <ul className="text-white/70 text-sm lg:text-base space-y-1 list-disc list-inside">
                    <li>Identify the leading causes of road incidents within the selected time period.</li>
                    <li>Compare the overall picture to the previous year.</li>
                    <li>Understand the gaps in incident counts per cause between the current period and last year.</li>
                  </ul>
                </div>

                {/* Step 2 — Designing the chart */}
                <div className="mb-10 lg:mb-14">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/case-study/dd-icon-droplet.svg" alt="" width={32} height={32} />
                  <p className="text-white font-bold text-base lg:text-lg mt-4 mb-3">Designing the chart</p>
                  <p className="text-white/70 text-sm lg:text-base">
                    The redesigned lollipop chart highlights the top causes in a clean and focused way. By filtering to the top 5, 10, or 15 causes, it reduces cognitive load while emphasizing the selected period in color and last year in gray. This makes it easy to compare current versus previous year trends and clearly see the gaps for each cause.
                  </p>
                </div>
              </div>

              {/* Chart image — full card width */}
              <div className="mb-10 lg:mb-14 mx-auto w-full max-w-[934px] px-5 sm:px-8">
                <Shot src="/case-study/dd-journey-chart.svg" alt="Top incident causes lollipop chart" width={1181} height={360} className="w-full h-auto" />
              </div>

              {/* Step 3 — Placing the graph in context */}
              <div className="mx-auto w-full max-w-[934px] px-5 sm:px-8">
                <div className="mb-10 lg:mb-14">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/case-study/dd-icon-codesandbox.svg" alt="" width={32} height={32} />
                  <p className="text-white font-bold text-base lg:text-lg mt-4 mb-3">Placing the graph in context</p>
                  <p className="text-white/70 text-sm lg:text-base">
                    To create a stronger connection between the causes of incidents and the broader organizational view, I placed this graph within the content domain &apos;Analysis of Recordable Incident Causes.&apos; This placement ensures that the lollipop chart is not seen in isolation, but as part of a wider analytical context.
                  </p>
                </div>
              </div>

              {/* Dashboard image — full wide */}
              <div className="w-full px-5 sm:px-8 lg:px-20 pb-10 lg:pb-14">
                <Shot src="/case-study/dd-journey-dashboard.svg" alt="Safety insights dashboard in context" width={1182} height={676} className="w-full h-auto" />
              </div>
            </div>
          </Wide>
        </section>
        {/* More case studies navigation */}
        <section className="mt-[110px] mb-0">
          <Wide>
            <div className="bg-[#F0F0F0] rounded-[16px] sm:rounded-[24px] px-8 lg:px-16 pt-12 lg:pt-16 pb-12 lg:pb-16">
              {/* Overlapping cards — left on top (z-10), right behind (z-0) */}
              <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-0">
                {/* Left card — on top */}
                <div className="relative z-10 w-[68%] lg:w-[35%]">
                  <HomeTiltCard
                    title="From conversation to conversion"
                    href="/case-study/from-conversation-to-conversion"
                    imageSrc="/home/from-conversation-new.svg"
                    imageWidth={800}
                    imageHeight={500}
                    initialRotate={-3}
                    hoverRotate={-1.5}
                    titleClassName="text-[18px] font-bold text-title leading-tight"
                    imageMb="mb-[8px]"
                  />
                </div>
                {/* Right card — slightly behind and lower */}
                <div className="relative z-0 w-[68%] lg:w-[35%] lg:-ml-[10%] lg:mt-[4%]">
                  <HomeTiltCard
                    title="From tracking to managing"
                    href="/case-study/from-tracking-to-managing"
                    imageSrc="/home/from-tracking-new.svg"
                    imageWidth={800}
                    imageHeight={500}
                    initialRotate={1}
                    hoverRotate={0}
                    titleClassName="text-[18px] font-bold text-title leading-tight"
                    imageMb="mb-[8px]"
                  />
                </div>
              </div>
            </div>
          </Wide>
        </section>
      </main>
      <div className="[&>footer]:mt-0">
        <Footer />
      </div>
    </>
  );
}
