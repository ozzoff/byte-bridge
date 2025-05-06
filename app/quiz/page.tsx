import React from "react";
import banner from "../../public/images/banner.jpg";
import logo from "../../public/images/logo-main.png";

export default function EventPage() {
  return (
    <>
      <header className="flex items-center justify-center fixed top-0 left-0 right-0 z-10">
        <img className="logo" src={logo.src} alt="" />
      </header>

      <section className="my-[50px] sm:my-[100px]  px-4 max-w-4xl mx-auto">
        <img className="rounded-[20px] w-full" src={banner.src} alt="Banner" />

        <h1 className="text-3xl font-bold mt-6">
          ByteBridge Coding Quiz 001 by ByteBridge × SATashkent
        </h1>

        <p className="mt-2 text-gray-600 text-[18px] sm:text-[20px]">Furqat ko&rsquo;chasi, 15/1 | SATashkent</p>

        <p className="mt-4 text-[18px] sm:text-[20px]">
          Our coding quiz challenges and inspires tech enthusiasts of all levels with
          thought-provoking questions, real-world scenarios, and exciting rewards.
          It&rsquo;s more than a competition — it’s a celebration of logic, curiosity,
          and the love of code.
        </p>

        <button className="mt-4 bg-yellow text-black px-4 py-2 rounded hover:bg-red hover:text-white ">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfn-zafbl1kXaxsCjNNI8DG0hVOjL3S2w0Fs2HuaN2D97oU1w/viewform?usp=dialog">Register</a>
          
        </button>

        <h2 className="text-2xl font-semibold mt-10">About the event</h2>

        <p className="mt-4 text-[18px] sm:text-[20px]">
          Get ready for ByteBridge Coding Quiz 001 — an exciting offline challenge
          designed to test and celebrate your coding skills! Whether you&rsquo;re just
          starting out or already coding like a pro, this quiz welcomes all
          experience levels in a fun, high-energy environment.
        </p>

        <p className="mt-2 text-[18px] sm:text-[20px]">
          Participants will tackle a series of coding challenges with increasing
          difficulty, crafted to evaluate problem-solving, logic, and real-world
          application — all as individuals, no teams required.
        </p>

        <p className="mt-4 text-[18px] sm:text-[20px]">
          <strong>What Makes ByteBridge Special?</strong>
          <br />– Open to all skill levels — from beginners to advanced coders
          <br />– Thoughtful, skill-based coding challenges in any programming language
          <br />– Increasing difficulty to push your coding limits
          <br />– Official certificates for all participants
          <br />– Opportunity to connect with fellow coders
          <br />– Post-quiz workshops led by tech specialists
        </p>

        <p className="mt-4 text-[18px] sm:text-[20px]">
          <strong>What to Expect:</strong>
          <br />🧠 Coding Challenges: Solve problems that test logic, syntax, and
          real-world thinking in your preferred language.
          <br />🎓 Learn & Grow: Participate in post-quiz workshops to gain insights
          from industry experts.
          <br />🏅 Get Recognized: Walk away with a certificate and sharpened skills.
          <br />📍 Location: Furqat ko&rsquo;chasi, 15/1 | SATashkent
          <br />📅 Date: 04.05.2025
          <br />🕒 Time: 2:00 PM
          <br />Bring your brain. Bring your curiosity.
          <br />Join the first ByteBridge Coding Quiz — and code your way to the top!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 bg-gray-100 p-6 rounded-xl">
          <div>
            <h3 className="font-semibold text-lg">When?</h3>
            <p className="text-[18px] sm:text-[20px]">Sunday, May 11, 2025 — 2:00 PM to 4:00 PM (GMT+5)</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Where?</h3>
            <p className="text-[18px] sm:text-[20px]">Furqat ko&rsquo;chasi, 15/1 | SATashkent</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Who?</h3>
            <p className="text-[18px] sm:text-[20px]">Anyone interested in coding</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Questions?</h3>
            <a
              href="https://t.me/ozzoff7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Contact us
            </a>
          </div>
        </div>

        <div className="w-full h-[400px] mt-10 rounded-xl overflow-hidden">
          <iframe
            title="Event Location"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5994.055033239589!2d69.244288!3d41.308265!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzI5LjgiTiA2OcKwMTQnMzkuNCJF!5e0!3m2!1sen!2s!4v1746556847382!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <button className="mt-4 p bg-yellow text-black hover:bg-red hover:text-white px-4 py-5 w-[100%] rounded">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfn-zafbl1kXaxsCjNNI8DG0hVOjL3S2w0Fs2HuaN2D97oU1w/viewform?usp=dialog">Register Now</a>
        </button>
      </section>
    </>
  );
}
