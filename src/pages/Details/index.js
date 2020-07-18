import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

const Details = () => {
  const { params } = useRouteMatch();
  const [repository, setRepository] = useState(null);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((res) => {
      setRepository(res.data);
    });

    api.get(`repos/${params.repository}/issues`).then((res) => {
      setIssues(res.data);
    });

    /* async function loadData(): Promise<void> {
      const [respository, issues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);
    }

    loadData(); */
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt="profile" />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <p>Stars</p>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <p>Forks</p>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <p>Issues Abertas</p>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Details;
