import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

const Footer = () => {
  return (
    <footer className="w-full max-w-5xl bg-gradient-to-tr from-blue-950 to-blue-900 rounded-t-xl mx-auto px-4 py-8 grid md:grid-cols-2">
      <div className="flex flex-col gap-6 px-4 pb-8">
        <h2 className="text-3xl font-bold">Get in touch!</h2>
        <p>
          Get in touch with me if you want to chat about anything, like a
          collaboration, a job, or just to say hi.
        </p>
        <ul className="flex gap-x-4">
          <li>
            <a
              href="https://www.linkedin.com/in/fernando-gimeno/"
              target="_blank"
            >
              <LinkedInIcon width={32} height={32} className="hover:scale-110 transition-transform duration-500 " />
            </a>
          </li>
          <li>
            <a href="https://github.com/fernandouy" target="_blank">
              <GithubIcon width={32} height={32} className="hover:scale-110 transition-transform duration-500" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <form className="flex flex-col gap-8 text-black" action="">
          <div className="flex flex-col">
            <label className="text-white" htmlFor="name">
              Name:
            </label>
            <input className="p-2 rounded" type="text" id="name" />
          </div>

          <div className="flex flex-col">
            <label className="text-white" htmlFor="email">
              Email:
            </label>
            <input className="p-2 rounded" type="email" id="email" />
          </div>
          <div className="flex flex-col">
            <label className="text-white" htmlFor="subject">
              Subject:
            </label>
            <input className="p-2 rounded" type="text" id="subject" />
          </div>
          <div className="flex flex-col">
            <label className="text-white" htmlFor="message">
              Message:
            </label>
            <textarea className="p-2 rounded" />
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
