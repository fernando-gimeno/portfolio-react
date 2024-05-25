import img from "../assets/20240222_114710.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="container mx-auto p-8 flex flex-col lg:flex-row lg:justify-between gap-y-12 items-center justify-center clip"
    >
      <div className="flex flex-col gap-y-4 justify-center flex-1">
        <h1 className="text-5xl md:text-6xl font-bold">
          I'm <span className="text-blue-600">Fernando G.</span>
        </h1>
        <p className="text-lg font-semibold">
          Web Developer / Frontend Engineer
        </p>
        <p className="">
          I design and code beautifully simple things, and I love what I do.
        </p>
      </div>
      <img
        className="rounded-full w-full max-w-64 object-cover object-top border-4 border-blue-600"
        src={img}
        alt="Profile picture"
      />
    </section>
  );
};

export default HeroSection;
