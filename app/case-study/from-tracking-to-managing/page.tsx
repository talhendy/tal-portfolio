import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeTiltCard from "../../components/HomeTiltCard";
import Shot from "../../components/Shot";

export const metadata: Metadata = {
  title: "From Tracking to Managing - Tal Hendy",
  description:
    "Case study: turning a tracking dashboard request into an operational work tool for maintenance managers.",
};

/* ---------- Layout wrappers ----------
   Text  → centred 1166px column (≈377px side margins on a 1920 screen)
   Wide  → 1760px column (≈80px side margins) for full-bleed dashboards     */

function Text({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  // max-w 934 + 32px side padding ⇒ 870px content, centred (~525px margins on a 1920 screen)
  return (
    <div className={`mx-auto w-full max-w-[934px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

function Wide({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  // Fixed 80px side margins on laptop/desktop (the site-wide grid), reduced on smaller screens
  return (
    <div className={`w-full px-5 sm:px-8 lg:px-20 ${className}`}>
      {children}
    </div>
  );
}

/* ---------- Text primitives ---------- */

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

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[22.8px] md:text-[32px] font-semibold lowercase first-letter:uppercase leading-tight text-title">
      {children}
    </h3>
  );
}

function ParaTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-[17px] md:text-[18px] font-bold text-title">{children}</p>;
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[18px] leading-[1.54] text-body ${className}`}>{children}</p>;
}

// Caption shown directly under a full-width dashboard panel (left-aligned, wide)
function Caption({ children }: { children: React.ReactNode }) {
  return (
    <Wide className="mt-[10px]">
      <p className="text-[16px] leading-[1.5] text-body">{children}</p>
    </Wide>
  );
}

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
    <div className="rounded-[16px] sm:rounded-[24px] bg-[#dfecf5] p-4 sm:p-8 lg:p-14 overflow-hidden">
      <Shot src={src} alt={alt} width={width} height={height} className="w-[80%] h-auto block mx-auto" />
    </div>
  );
}

/* ---------- Page ---------- */

export default function FromTrackingToManaging() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-[60px] lg:pt-[128px]">
          <Wide>
            <h1 className="text-4xl sm:text-6xl lg:text-[96px] font-bold tracking-[-2px] lowercase first-letter:uppercase leading-[1.04] text-title">
              From Tracking To Managing
            </h1>
          </Wide>
          <Wide className="mt-8 lg:mt-12">
            <div className="rounded-[16px] sm:rounded-[24px] bg-[#dfecf5] p-4 sm:p-8 lg:p-14 overflow-hidden">
              <Shot
                src="/case-study/ftm-hero.svg"
                alt="Safety Insights region overview dashboard"
                width={1397}
                height={798}
                className="w-[80%] h-auto block mx-auto"
              />
            </div>
          </Wide>
        </section>

        {/* Background */}
        <section className="mt-20 lg:mt-[140px]">
          <Text>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16">
              <div>
                <SectionTitle>Background</SectionTitle>
                <Body className="mt-10">
                  Maintenance units at a major electricity company manage hundreds
                  of safety deficiencies across facilities, ensuring regulatory
                  compliance and operational safety.
                </Body>
              </div>
              <dl className="space-y-6 lg:pt-4 lg:ml-10">
                {[
                  ["My Role", "Product designer"],
                  ["Project Manager", "Ruth Ben Haim"],
                  ["Developer", "Yulia Markovski"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-bold text-title">{k}</dt>
                    <dd className="text-body">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Text>
        </section>

        {/* Starting Point */}
        <section className="mt-20 lg:mt-[140px]">
          <Text>
            <SectionTitle>Starting Point</SectionTitle>
            <Body className="mt-10">
              The finance team reached out on behalf of senior leadership (division
              and department heads) requesting a control dashboard to monitor
              maintenance operations across different regions.
            </Body>
          </Text>
        </section>

        {/* Discovery */}
        <section className="mt-20 lg:mt-[140px]">
          <Text>
            <Orientation>Discovery</Orientation>
            <div className="mt-10">
              <SectionTitle>Getting Up to Speed</SectionTitle>
            </div>
            <Body className="mt-10">
              The brief was minimal and filled with technical terminology I
              didn&apos;t understand. To get up to speed quickly, I used custom
              Claude Skills I&apos;d built to prepare for the kickoff meeting.
            </Body>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              <li className="text-[18px] leading-[1.54] text-body">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/case-study/claude-asterisk.svg" alt="" aria-hidden="true" width={35} height={35} className="mb-4 w-[35px] h-[35px]" />
                <span className="font-semibold text-title">
                  &lsquo;Kickoff-Meeting&rsquo;
                </span>{" "}
                skill to help me structure the discovery session effectively.
              </li>
              <li className="text-[18px] leading-[1.54] text-body">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/case-study/claude-asterisk.svg" alt="" aria-hidden="true" width={35} height={35} className="mb-4 w-[35px] h-[35px]" />
                <span className="font-semibold text-title">
                  &lsquo;User-Research&rsquo;
                </span>{" "}
                skill to help me plan the user interviews quickly.
              </li>
            </ul>

            <div className="mt-12 lg:mt-20">
              <SubTitle>Understanding the Request</SubTitle>
              <Body className="mt-6">
                Leadership identified resource waste in maintenance units and low
                performance scores. They wanted a dashboard to track performance
                in real-time and alert units about issues so they could correct
                course.
              </Body>
            </div>

            <div className="mt-12 lg:mt-20">
              <SubTitle>Going Deeper: Talking to Domain Experts</SubTitle>
              <Body className="mt-6">
                I requested access to Maintenance Managers, the domain experts who
                understood the technical details. In those conversations, a
                different story emerged: managers were struggling with inefficient,
                overwhelming workflows. They needed help with field monitoring and
                work planning. Only then could they improve scores and use
                resources more efficiently.
              </Body>
            </div>
          </Text>
        </section>

        {/* The Shift */}
        <section className="mt-20 lg:mt-[140px]">
          <Text>
            <SectionTitle>The Shift</SectionTitle>
            <Body className="mt-10">
              A tracking dashboard for executives wouldn&apos;t solve inefficiency
              at the operational level. This required rethinking who the primary
              user should be. Maintenance Managers became the primary persona.
            </Body>
            <Shot
              src="/case-study/ftm-shift.svg"
              alt="Persona reframing diagram"
              width={1270}
              height={945}
              className="mt-12 lg:mt-20 w-full h-auto block"
            />
            <div className="mt-12 lg:mt-20">
              <SubTitle>Reframing the Challenge</SubTitle>
              <Body className="mt-6">
                Design a product that provides Maintenance Managers with real-time
                visibility into their operations so they can make better decisions
                and use resources more efficiently?
              </Body>
            </div>
          </Text>
        </section>

        {/* Solution */}
        <section className="mt-20 lg:mt-[140px]">
          <Text>
            <Orientation>Design</Orientation>
            <div className="mt-10">
              <SectionTitle>Solution</SectionTitle>
            </div>
            <Body className="mt-10">
              The solution needed to function as an operational work tool, not just
              an investigative dashboard.
            </Body>
          </Text>

          {/* 1 - Layout for Work */}
          <Text className="mt-12 lg:mt-20">
            <SubTitle>Layout for Work, Not Just Display</SubTitle>
            <div className="mt-6 space-y-8">
              <div>
                <ParaTitle>Research insight</ParaTitle>
                <Body className="mt-1">
                  Maintenance Managers need space to manage hundreds of
                  deficiencies and organize field work, not just view summaries.
                </Body>
              </div>
              <div>
                <ParaTitle>Implementation</ParaTitle>
                <Body className="mt-1">
                  I moved KPIs to the left sidebar, creating vertical workspace for
                  task management.
                </Body>
              </div>
            </div>
          </Text>
          <Wide className="mt-10">
            <Dashboard src="/case-study/ftm-dash1.svg" alt="Work center management dashboard" width={1457} height={849} />
          </Wide>
          <Caption>
            KPIs moved to the left to maximize horizontal screen space. This lets
            users see critical information without scrolling and provides more
            workspace for planning field operations.
          </Caption>

          {/* 2 - Progressive Clarity */}
          <Text className="mt-12 lg:mt-20">
            <SubTitle>Progressive Clarity</SubTitle>
            <div className="mt-6 space-y-8">
              <div>
                <ParaTitle>Research insight</ParaTitle>
                <Body className="mt-1">
                  Maintenance Managers use scattered Excel files and email threads
                  where critical information gets lost and is difficult to track
                  across hundreds of deficiencies spread across 9 Work Centers.
                </Body>
              </div>
              <div>
                <ParaTitle>Implementation</ParaTitle>
                <Body className="mt-1">
                  I studied how managers work with Excel and email to understand
                  their decision-making process. Then I designed a flow that guides
                  them without overload.
                </Body>
              </div>
            </div>
          </Text>
          <Wide className="mt-10">
            <Dashboard src="/case-study/ftm-dash2.svg" alt="Progressive clarity work flow dashboard" width={1634} height={1714} />
          </Wide>

          {/* 3 - Shared Visibility */}
          <Text className="mt-12 lg:mt-20">
            <SubTitle>Shared Visibility from the Bottom Up</SubTitle>
            <Body className="mt-6">
              By giving access to multiple organizational levels, the product
              creates shared ownership and reduces bottlenecks.
            </Body>
            <div className="mt-8 text-[18px] leading-[1.54] text-body">
              <p>Access across three levels:</p>
              <ul className="mt-3 space-y-3">
                <li className="flex gap-3">
                  <span className="text-title font-bold">•</span>
                  <span>
                    Work Center Managers - see their center&apos;s status at any
                    time, access polygon data, and make deployment decisions
                    independently
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-title font-bold">•</span>
                  <span>
                    Maintenance Managers - monitor performance and plan work
                    across all 9 Work Centers
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-title font-bold">•</span>
                  <span>
                    Senior Leadership - monitor performance scores without
                    micromanagement
                  </span>
                </li>
              </ul>
            </div>
          </Text>
          <Wide className="mt-10">
            <Dashboard src="/case-study/ftm-dash3.svg" alt="Multi-level access dashboard" width={1397} height={798} />
          </Wide>
          <Caption>
            Recommended visit order with clear status indicators enables work
            center managers to make deployment decisions independently.
          </Caption>
          <Wide className="mt-12 lg:mt-20">
            <Dashboard src="/case-study/ftm-dash4.svg" alt="Regional performance overview" width={1397} height={798} />
          </Wide>
          <Caption>
            Regional performance scores give senior leadership operational
            visibility without micromanaging day-to-day decisions.
          </Caption>
        </section>

        {/* Measuring Success */}
        <section className="mt-20 lg:mt-[140px]">
          <Text>
            <Orientation>Measure</Orientation>
            <div className="mt-10">
              <SectionTitle>Measuring Success</SectionTitle>
            </div>
            <Body className="mt-10">
              To track whether the solution works, we defined 3 KPIs.
            </Body>
            <ol className="mt-8 space-y-4 list-decimal pl-6 text-[18px] leading-[1.54] text-body marker:font-bold marker:text-title">
              <li>
                <span className="font-semibold text-title">
                  Overdue deficiency reduction
                </span>{" "}
                - measuring decrease in overdue items.
              </li>
              <li>
                <span className="font-semibold text-title">
                  Inspection Completion Rate
                </span>{" "}
                - tracking progress toward annual inspection goals.
              </li>
              <li>
                <span className="font-semibold text-title">
                  Field team response time
                </span>{" "}
                - measuring how quickly teams are deployed to critical areas.
              </li>
            </ol>
          </Text>
        </section>

        {/* More case studies navigation */}
        <section className="mt-[110px] mb-0">
          <Wide>
            <div className="bg-[#F0F0F0] rounded-[16px] sm:rounded-[24px] px-8 lg:px-16 pt-12 lg:pt-16 pb-12 lg:pb-16">
              {/* Overlapping cards — blue on top (z-10), pink behind (z-0) */}
              <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-0">
                {/* Blue card — left, on top */}
                <div className="relative z-10 w-[68%] lg:w-[35%]">
                  <HomeTiltCard
                    title="Designing data"
                    href="/case-study/designing-data"
                    imageSrc="/home/designing-data-new.svg"
                    imageWidth={800}
                    imageHeight={500}
                    initialRotate={-3}
                    hoverRotate={-1.5}
                    titleClassName="text-[18px] font-bold text-title leading-tight"
                    imageMb="mb-[8px]"
                  />
                </div>
                {/* Pink card — right, slightly behind and lower */}
                <div className="relative z-0 w-[68%] lg:w-[35%] lg:-ml-[10%] lg:mt-[4%]">
                  <HomeTiltCard
                    title="From conversation to conversion"
                    href="/case-study/from-conversation-to-conversion"
                    imageSrc="/home/from-conversation-new.svg"
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
