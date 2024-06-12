import { useEffect, useState } from 'react';
import axios from 'axios';

const GitRepo = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    try {
      setLoading(true);
      const value = await axios.get(
        `https://api.github.com/users/mralexgray/repos`
      );
      setLoading(false);
      value.data && value.data.length && setRepos(value.data);
    } catch (reason) {
      setLoading(false);
      console.log(reason);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td style={{ width: '20%' }}>Repo Name</td>
            <td style={{ width: '10%' }}>Visibility</td>
            <td style={{ width: '70%' }}>Url</td>
          </tr>
        </thead>
        <tbody>
          {repos.map((r) => {
            return (
              <tr style={{ textAlign: 'left' }}>
                <td style={{ width: '20%' }}>{r.full_name}</td>
                <td style={{ width: '10%' }}>
                  {r.private ? 'private' : 'public'}
                </td>
                <td style={{ width: '70%' }}>
                  <a target="_blank" href={r.html_url}>
                    {r.html_url}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {loading ? 'loading...' : ''}
    </div>
  );
};

export default GitRepo;
