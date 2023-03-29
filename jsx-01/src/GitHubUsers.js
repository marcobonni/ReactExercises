import useSWR from "swr"

const fetcher = url ? () => fetch(url).then(response => response.json()) : null;
export function useGithubUsers() {
    const  { data, error } = useSWR(`https://api.github.com/users`, fetcher)
    return { 
        users: data,
        error,
        isLoading: !data && !error
    }
}
export function GitHubUsers() {
    const {users, error, isLoading} = useGithubUsers()
    return (
        <div>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>An error haas occured</h3>}
        {users && !error && <ul>
            {users.map(user => (<li key={user.login}>{user.login}</li>))}
        </ul>}
        </div>
    )
}