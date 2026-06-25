export default function Footer() {
  return (
    <footer className="w-full mt-20 md:mt-28">
      <div className="mx-auto max-w-[1790px] px-5 sm:px-8 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-16 lg:gap-24 text-sm text-body">
          <span>+927 509973994</span>
          <a href="mailto:Talhendy0102@gmail.com" className="underline">
            Talhendy0102@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/tal-hendy-5b2217233/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
