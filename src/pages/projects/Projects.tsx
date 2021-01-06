import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Repositories } from './Styles';

interface Repository {
  id: number;
  name: string;
  description: string;
  owner: {
    avatar_url: string;
    login: string;
  };
  language: string;
}

function Projects() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    api.get<Repository[]>('users/gfilenga/repos')
      .then(response => {
        console.log(response.data);
        const repositoriesReturned = response.data;

        let repositories2: Repository[] = repositoriesReturned;

        setRepositories(repositories2);
      });
  }, [])

  return (
    <Repositories>
      {repositories.map(repository => (
        <a
          href="teste"
          key={repository.id}
        >
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>
          </div>
        </a>
      ))}
    </Repositories>
  )
}

export default Projects
