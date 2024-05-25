import ExternalLinkIcon from "../icons/ExternalLinkIcon";
import GithubIcon from "../icons/GithubIcon";

const ProjectCard = ({
  stack,
  title,
  description,
  imgSrc,
  previewLink,
  githubLink,
}: {
  stack: React.ComponentType<React.SVGProps<SVGSVGElement>>[];
  title: string;
  description: string;
  imgSrc?: string;
  previewLink?: string;
  githubLink?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row rounded-lg">
      <img
        src={imgSrc}
        alt=""
        className="w-full md:max-w-sm md:object-contain md:object-top rounded-lg"
      />
      <div className="flex flex-col gap-4 px-8">
        <h3 className="text-xl font-semibold">{title}</h3>
        <ul className="flex gap-x-2">
          {stack.map((Icon) => (
            <li key={Icon.name}>
              <Icon width={32} height={32} />
            </li>
          ))}
        </ul>
        <p>{description}</p>
        <div className="flex gap-x-4">
          <a
            className="flex items-center gap-x-2 border px-4 py-2 rounded"
            href={githubLink}
            target="_blank"
          >
            <GithubIcon width={24} height={24} />
            Repository
          </a>
          <a
            className="flex items-center gap-x-2 bg-gray-800 border border-gray-600 transition-colors duration-300 hover:border-gray-500 px-4 py-2 rounded"
            href={previewLink}
            target="_blank"
          >
            <ExternalLinkIcon width={24} height={24}/>
            Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
