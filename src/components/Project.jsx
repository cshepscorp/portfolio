import { FaExternalLinkSquareAlt, FaGithubAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Project(props) {
  return (
    <>
      <div className="card glass card-normal bg-base-300 dark:bg-base-100 shadow-xl">
        <figure>
          <img src={props.image} alt={props.name} />
        </figure>
        <div className="card-body dark:text-gray-200">
          <h2 className="card-title">{props.name}</h2>
          <p>{props.description}</p>
          <p>
            <strong>Tech Used:</strong> {props.tech}
          </p>
          <div className="btn-group justify-end pt-2">
            <a
              className="btn btn-sm btn"
              href={props.gitHubLink}
              target="_blank"
            >
              <Link to="{props.appLink}" className="info">Link</Link>GitHub Repo <FaGithubAlt />
            </a>
            <a
              className="btn btn-sm btn-active"
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
