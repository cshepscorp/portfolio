import { FaExternalLinkSquareAlt, FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
            <a
              class="btn btn-sm btn"
              href={props.gitHubLink}
              target="_blank"
            >
              <Link to="{props.appLink}">Link</Link>GitHub Repo <FaGithubAlt />
            </a>
            <a
              class="btn btn-sm btn-active"
              href={props.appLink}
              target="_blank"
            >
              Deployed App <FaExternalLinkSquareAlt />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
