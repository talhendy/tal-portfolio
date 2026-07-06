import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeTiltCard from "../../components/HomeTiltCard";
import Shot from "../../components/Shot";

export const metadata: Metadata = {
  title: "From Conversation to Conversion - Tal Hendy",
  description:
    "Case study: reviving an unused calculating tool by understanding why users abandoned it and redesigning it around their real sales conversations.",
};

/* ---------- Layout wrappers (identical to other case studies) ---------- */

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

/* Dashboard panel — coral bg for this case study */
function Dashboard({
  src,
  alt,
  width,
  height,
  imgClassName = "w-[80%] h-auto block mx-auto",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  imgClassName?: string;
}) {
  return (
    <div className="rounded-[16px] sm:rounded-[24px] bg-[#E46267] p-4 sm:p-8 lg:p-14 overflow-hidden">
      <Shot src={src} alt={alt} width={width} height={height} className={imgClassName} />
    </div>
  );
}

/* ---------- Page ---------- */

export default function FromConversationToConversion() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="pt-[60px] lg:pt-[128px]">
          <Wide>
            <h1 className="text-4xl sm:text-6xl lg:text-[96px] font-bold tracking-[-2px] lowercase first-letter:uppercase leading-[1.04] text-title">
              From Conversation To Conversion
            </h1>
          </Wide>
          <Wide className="mt-8 lg:mt-12">
            <Dashboard
              src="/case-study/fctc-hero.svg"
              alt="Lens profit calculator — sales agent tool"
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
                  A calculating tool used by sales agents in their selling conversations with
                  optometrists. The calculator helps simplify calculations and visualize the profit.
                </Body>
              </div>
              <dl className="space-y-6 lg:pt-4 lg:ml-10">
                <div>
                  <dt className="font-bold text-title">My Role</dt>
                  <dd className="text-body">Product designer</dd>
                </div>
                <div>
                  <dt className="font-bold text-title">Product Manager</dt>
                  <dd className="text-body">Tom Gorfinkel</dd>
                </div>
                <div>
                  <dt className="font-bold text-title">Developer</dt>
                  <dd className="text-body">Baha Amasha</dd>
                </div>
              </dl>
            </div>
          </Text>
        </section>

        {/* Starting Point */}
        <section className="mt-20 lg:mt-[140px]">
          <Text>
            <SectionTitle>Starting point</SectionTitle>
            <Body className="mt-10">
              The company wanted to increase the sales of high technology and more profitable lenses.
              Part of the strategy was to bring back to use an existing calculating tool that was
              visually outdated.
            </Body>
          </Text>
        </section>

        {/* Challenge 1 */}
        <section className="mt-20 lg:mt-[140px]">
          <Text>
            <SectionTitle>Challenge</SectionTitle>
            <Body className="mt-10">
              Design a product that integrates well in a sales pitch and supports the sale
              conversation with the client.
            </Body>
          </Text>
          <Wide className="mt-12 lg:mt-20">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch">
              {/* Before */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex-1 rounded-[16px] sm:rounded-[24px] bg-[#ECECEC] p-4 sm:p-6 lg:p-10 overflow-hidden">
                  <Shot
                    src="/case-study/fctc-image1.svg"
                    alt="Before: old calculator"
                    width={723}
                    height={382}
                    className="w-full h-auto block"
                  />
                </div>
                <p className="text-[16px] text-body text-center">Before</p>
              </div>
              {/* After */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="rounded-[16px] sm:rounded-[24px] bg-[#E46267] p-4 sm:p-6 lg:p-10 overflow-hidden">
                  <Shot
                    src="/case-study/fctc-challenge.svg"
                    alt="After: redesigned calculator"
                    width={725}
                    height={408}
                    className="w-full h-auto block"
                  />
                </div>
                <p className="text-[16px] text-body text-center">After</p>
              </div>
            </div>
          </Wide>
        </section>

        {/* Discovery */}
        <section className="mt-20 lg:mt-[140px]">
          <Text>
            <Orientation>Discovery</Orientation>
            <div className="mt-10">
              <SectionTitle>The users had all the answers</SectionTitle>
            </div>
            <div className="mt-10">
              <Body>The old design raised a lot of questions:</Body>
              <ul className="mt-2 space-y-1">
                {[
                  "Do they use the current calculator, and if not why?",
                  "What does a conversation between a sales agent and a client look like?",
                  "What are the tools they use today to promote sales apart from the calculator?",
                  "What needs does it address and what needs it does not?",
                  "How do they use the calculator in a conversation today and for what purpose?",
                ].map((q) => (
                  <li key={q} className="flex gap-3 text-[18px] leading-[1.54] text-body">
                    <span className="text-body mt-[0.1em]">•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 lg:mt-20">
              <SubTitle>User research</SubTitle>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/case-study/fctc-icon-goal.svg" alt="" width={32} height={32} />
                  <Body className="mt-2">
                    The main goal was understanding how to adapt the calculator to their needs.
                  </Body>
                </div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/case-study/fctc-icon-users.svg" alt="" width={32} height={32} />
                  <Body className="mt-2">
                    Users were sales agents from four different countries.
                  </Body>
                </div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/case-study/fctc-icon-zoom.svg" alt="" width={32} height={32} />
                  <Body className="mt-2">Zoom interviews</Body>
                </div>
              </div>
            </div>
          </Text>
        </section>

        {/* Design */}
        <section className="mt-20 lg:mt-[140px]">
          <Text>
            <Orientation>Design</Orientation>
            <div className="mt-10">
              <SectionTitle>Research insights and design solutions</SectionTitle>
            </div>

            {/* Framing the Conversation */}
            <div className="mt-12 lg:mt-20">
              <SubTitle>Framing the conversation</SubTitle>
              <div className="mt-6 space-y-8">
                <div>
                  <ParaTitle>Research insight</ParaTitle>
                  <Body className="mt-1">
                    The sales agent focuses the conversation with the client around a category of
                    lenses and compares packages within those categories rather than comparing between
                    individual parameters.
                  </Body>
                </div>
                <div>
                  <ParaTitle>Implementation</ParaTitle>
                  <Body className="mt-1">
                    I changed the horizontal layout to a vertical layout and added a &apos;Category&apos;
                    parameter to be chosen first. This corresponds better with the course of the
                    conversation.
                  </Body>
                </div>
              </div>
            </div>
          </Text>
          <Wide className="mt-10">
            <Shot
              src="/case-study/fctc-framing.svg"
              alt="Framing the conversation — sketch evolution"
              width={1760}
              height={400}
              className="w-full h-auto block"
            />
          </Wide>
          <Text>

            {/* Changing Conceptions */}
            <div className="mt-12 lg:mt-20">
              <SubTitle>Changing conceptions</SubTitle>
              <div className="mt-6 space-y-8">
                <div>
                  <ParaTitle>Research insight</ParaTitle>
                  <Body className="mt-1">
                    The conversation is based on the retail price the optometrist sets.
                  </Body>
                </div>
                <div>
                  <ParaTitle>Implementation</ParaTitle>
                  <Body className="mt-1">
                    At first, it seemed like a small detail: the calculator didn&apos;t allow agents
                    to enter the retail price. But this limitation made the tool almost irrelevant in
                    real sales conversations. By adding the retail price option, the calculator became
                    practical and accurate. It also challenged the long-held assumption that
                    optometrists never share their retail prices with sales agents.
                  </Body>
                </div>
              </div>
            </div>

            {/* Talking Money */}
            <div className="mt-12 lg:mt-20">
              <SubTitle>Talking money</SubTitle>
              <div className="mt-6 space-y-8">
                <div>
                  <ParaTitle>Research insight</ParaTitle>
                  <Body className="mt-1">
                    The conversation surrounded profit, and the visuals had to support that.
                  </Body>
                </div>
                <div>
                  <ParaTitle>Implementation</ParaTitle>
                  <Body className="mt-1">
                    To make profit more tangible, I used tags that highlight it from different
                    perspectives. The income breakdown shows exactly where it comes from, making it
                    easy to read at a glance. By doing so, profit finally gets the spotlight it
                    deserves — turning an abstract number into a clear value driver in the sales
                    conversation.
                  </Body>
                </div>
              </div>
            </div>
          </Text>

          {/* Talking Money visual composite — 3 equal cards */}
          <Wide className="mt-10">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex-1 rounded-[16px] sm:rounded-[24px] bg-[#F5ACAF] p-6 sm:p-8 lg:p-10 flex items-center justify-center overflow-hidden">
                <Shot
                  src="/case-study/fctc-talking1.svg"
                  alt="Retail price input"
                  width={425}
                  height={114}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-1 rounded-[16px] sm:rounded-[24px] bg-[#F5ACAF] p-6 sm:p-8 lg:p-10 flex items-center justify-center overflow-hidden">
                <Shot
                  src="/case-study/fctc-talking2.svg"
                  alt="Income breakdown"
                  width={425}
                  height={163}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-1 rounded-[16px] sm:rounded-[24px] bg-[#F5ACAF] p-6 sm:p-8 lg:p-10 pt-6 flex items-end justify-center overflow-hidden" style={{ paddingBottom: 0 }}>
                <Shot
                  src="/case-study/fctc-talking3.svg"
                  alt="Profit visualization on mobile"
                  width={326}
                  height={416}
                  className="w-auto h-auto max-h-[380px]"
                />
              </div>
            </div>
          </Wide>
        </section>

        {/* Extending the Conversation */}
        <section className="mt-20 lg:mt-[140px] mb-8">
          <Text>
            <SectionTitle>Extending the conversation</SectionTitle>
            <Body className="mt-10">
              During conversations with clients, the sales team often felt the discussion ended too
              quickly — just at the point where there was room to explore more. They wanted a way to
              extend the dialogue and naturally introduce upsells and service upgrades. That&apos;s
              how the idea for a shopping bag screen was born: a familiar e-commerce touchpoint that
              allows sales reps to offer additional products and services in a seamless,
              value-driven way.
            </Body>
          </Text>
          <Wide className="mt-12 lg:mt-20">
            <Dashboard
              src="/case-study/fctc-extending.svg"
              alt="Shopping bag screen — extending the sales conversation"
              width={1476}
              height={883}
              imgClassName="w-[88%] h-auto block mx-auto"
            />
          </Wide>
          <Wide className="mt-8 lg:mt-12">
            <Dashboard
              src="/case-study/fctc-perfect-fit.svg"
              alt="Your perfect fit — shopping bag screen with upsells"
              width={1476}
              height={908}
              imgClassName="w-[88%] h-auto block mx-auto"
            />
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
                    title="From tracking to managing"
                    href="/case-study/from-tracking-to-managing"
                    imageSrc="/home/from-tracking-new.svg"
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
                    title="Designing data"
                    href="/case-study/designing-data"
                    imageSrc="/home/designing-data-new.svg"
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
