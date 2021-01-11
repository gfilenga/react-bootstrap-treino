import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { FiChevronRight } from 'react-icons/fi';
import { Repositories } from './Styles';


interface Repository {
  id: number;
  name: string;
  html_url: string;
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
        setRepositories(repositoriesReturned);
      });
  }, [])

  return (
    <Repositories>
      {repositories.map(repository => (
        <a
          href={repository.html_url}
          key={repository.id}
        >
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
            <strong>{repository.name}</strong>
            <p>{repository.language}</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      ))}
    </Repositories>
  )
}

export default Projects
