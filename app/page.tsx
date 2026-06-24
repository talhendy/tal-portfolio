import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeIntro from "./components/HomeIntro";
import HomeTiltCard from "./components/HomeTiltCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-[1790px] px-5 sm:px-8 lg:px-10">
          {/* Hero + toggle */}
          {/* Mobile: tighten bottom gap so the toggle sits ~8px above the gray
              cards section. Desktop keeps the original 40px / 100px spacing. */}
          <div className="pt-[40px] sm:pt-[196px] pb-2 sm:pb-10">
            <HomeIntro />
          </div>
        </div>

        {/* Project cards — stacked, tilted, on light-gray background */}
        <div className="mx-auto max-w-[1790px] px-5 sm:px-8 lg:px-10 pb-16 mt-0 sm:mt-[100px]">
          <div className="bg-[#F0F0F0] rounded-[16px] sm:rounded-[24px]">
          <div className="w-[87%] sm:w-[75%] mx-auto flex flex-col gap-8 sm:gap-[100px] py-6 sm:py-24 lg:py-32">
            <HomeTiltCard
              title="From tracking to managing"
              description="A control center that helps maintenance managers run operations more efficiently, instead of drowning in spreadsheets."
              href="/case-study/from-tracking-to-managing"
              imageSrc="/home/from-tracking.svg"
              imageWidth={1333}
              imageHeight={745}
              initialRotate={3}
              hoverRotate={1}
            />
            <HomeTiltCard
              title="Designing Data"
              description="Transform a collection of data into a dashboard that provides meaningful business insights."
              href="/case-study/designing-data"
              imageSrc="/home/designing-data.svg"
              imageWidth={1324}
              imageHeight={724}
              initialRotate={-3}
              hoverRotate={-1.5}
            />
            <HomeTiltCard
              title="From conversation to conversion"
              description="Reviving an unused product by understanding why users abandoned it and redesigning it around their specific needs."
              href="/case-study/from-conversation-to-conversion"
              imageSrc="/home/from-conversation.svg"
              imageWidth={1305}
              imageHeight={682}
              initialRotate={1}
              hoverRotate={0}
            />
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
