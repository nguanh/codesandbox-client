import React, { FunctionComponent } from 'react';

import { GitProgress } from 'app/components/GitProgress';
import { useOvermind } from 'app/overmind';

const CommitModal: FunctionComponent = () => {
  const {
    state: {
      editor: {
        currentSandbox: { originalGit: git },
      },
      git: { commit },
      user: { username },
    },
  } = useOvermind();

  let message;

  if (commit) {
    if (commit.newBranch) {
      const newUrl = `https://github.com/${git.username}/${git.repo}/compare/${
        git.branch
      }...${username}:${commit.newBranch}?expand=1`;

      message = (
        <div>
          There was a merge conflict while committing, you can open a PR
          instead.
          <div style={{ fontSize: '.875rem', marginTop: '1rem' }}>
            <a href={newUrl} target="_blank" rel="noreferrer noopener">
              Click here to open a PR
            </a>
          </div>
        </div>
      );
    } else if (commit.merge) {
      message = (
        <div>
          Success! There were other commits, so we merged your changes in and
          opened an up to date sandbox.
        </div>
      );
    } else {
      message = <div>Successfully created commit!</div>;
    }
  }

  return <GitProgress result={message} message="Creating Commit..." />;
};

export default CommitModal;
