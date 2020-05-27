import React from 'react';
import { Link } from 'react-router-dom';
import { string, number } from 'prop-types';

const RepoInfo = ({
  projectId,
  mergeRequests,  
  currentBranch,
  branchesCount,
  dataInstanesCount,
}) => {
  return (
  <>
    <div className="repo-info">
    {branchesCount > 0 && (
      <>
      <Link to={`/my-projects/${projectId}/${currentBranch}/commits`} className="repo-stat" replace>
        <p className="stat-no" />
        <p className="stat-type">Commits</p>
      </Link>
      <Link to={`/my-projects/${projectId}/branches`} className="repo-stat">
        <p className="stat-no">{branchesCount}</p>
        <p className="stat-type">Branches</p>
      </Link>
      </>
    )}
      <Link to={`/my-projects/${projectId}/merge-requests/overview`} className="repo-stat">
        <p className="stat-no">{mergeRequests.length}</p>
        <p className="stat-type">Merge requests</p>
      </Link>

      <Link className="repo-stat" to={`/my-projects/${projectId}/visualizations`} >
        <p className="stat-no" />
        <p className="stat-type">Visualizations</p>
      </Link>

      <Link to={`/my-projects/${projectId}/-/data-pipelines`} className="repo-stat" replace>
        <p className="stat-no">{dataInstanesCount}</p>
        <p className="stat-type">Datasets</p>
      </Link>
    </div>
  </>
)};

RepoInfo.propTypes = {
  projectId: number.isRequired,
  numberOfContributors: number.isRequired,
  currentBranch: string.isRequired,
  branchesCount: number.isRequired,
  dataInstanesCount: number.isRequired,
};

export default RepoInfo;
