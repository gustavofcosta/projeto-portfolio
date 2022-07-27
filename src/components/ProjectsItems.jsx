import Button from "./Button";

const ProjectsItems = ({ url, urlgithub, img, title, description }) => {
  return (
    <article>
      <figure>
        <a href={url} target="_blank">
          <img src={img} alt={title} />
        </a>
      </figure>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <Button>
          <a href={url} target="_blank">
            Site
          </a>
        </Button>
        <Button>
          <a href={urlgithub} target="_blank">
            GitHub
          </a>
        </Button>
      </div>
    </article>
  );
};

export default ProjectsItems;
