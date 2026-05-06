import HomeContent from "../components/HomeContent";

export const revalidate = 3600;

async function fetchStats() {
    const res = await fetch("https://api.github-star-counter.workers.dev/user/Seemo0", {
        next: { revalidate },
    });
    return res.json();
}

async function fetchTopRepos() {
    const res = await fetch("https://api.github.com/users/Seemo0/repos?type=owner&per_page=100", {
        next: { revalidate },
    });
    return res.json();
}

export default async function Page() {
    const stats = await fetchStats();
    const repos = await fetchTopRepos();

    const topRepos = repos
        ?.sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);

    return <HomeContent stats={stats} topRepos={topRepos} />;
}
