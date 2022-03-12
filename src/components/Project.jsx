import { FaExternalLinkSquareAlt, FaGithubAlt } from 'react-icons/fa';

function Project(props) {
  return (
    <>
      <div class="card w-96 glass card-normal bg-base-100 shadow-xl">
        <figure>
          <img src={props.image} alt={props.name} />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{props.name}</h2>
          <p>{props.description}</p>
          <p>
            <strong>Tech Used:</strong> {props.tech}
          </p>
          <div class="btn-group justify-end pt-2">
            <button class="btn btn-sm" href={props.gitHubLink}>
              GitHub Repo <FaGithubAlt />
            </button>
            <button class="btn btn-sm btn-active" href={props.appLink}>
              Deployed App <FaExternalLinkSquareAlt />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
