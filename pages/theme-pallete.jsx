import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="site-container p-8 flex flex-col items-start">
        <div id="headings">
          <h1>Heading 1: Bayfront Health</h1>
          <h2>Heading 2: Remaining Text Sizes</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>This is a paragraph</p>
          <a href="#">This is a link</a>
          <p><button>Learn More</button></p>
        </div>

        <div className="mt-16"><h3>Website Colors</h3></div>
        <div id="color-grid" className="grid gap-6 grid-cols-1 md:grid-cols-3 md:rows-2">
        <div className="bg-primaryAccent mx-auto w-60 p-8  border-gray-400 border-2 text-center">Primary Accent</div>
          <div className="bg-secondaryAccent mx-auto w-60 p-8 border-gray-400 border-2 text-center">Secondary Accent</div>
          <div className="bg-primaryDark mx-auto w-60 p-8 text-white border-gray-400 border-2 text-center">Primary Dark</div>
          <div className="bg-secondaryDark mx-auto w-60 p-8 text-white border-gray-400 border-2 text-center">Secondary Dark</div>
          <div className="bg-primaryLight mx-auto w-60 p-8 text-primaryDark border-gray-400 border-2 text-center">Primary Light</div>
          <div className="bg-secondaryLight mx-auto w-60 p-8 text-primaryDark border-gray-400 border-2 text-center">Secondary Light</div> 
        </div>
      </div>
    </main>
  );
}
