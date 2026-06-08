import { useState, useEffect } from "react";

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  url: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string | null;
  size: number;
  private: boolean;
  topics: string[];
}

export type SortOption = "stars" | "forks" | "updated" | "created" | "name";
export type FilterOption = "all" | "public" | "private" | "sources" | "forks" | "archived";

interface UseGitHubRepositoriesOptions {
  username: string;
  sort?: SortOption;
  filter?: FilterOption;
  language?: string;
}

export function useGitHubRepositories(options: UseGitHubRepositoriesOptions) {
  const { username, sort = "updated", filter = "all", language } = options;
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    const fetchRepositories = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch repositories from GitHub API
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=${sort}&direction=desc`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        let data: GitHubRepository[] = await response.json();

        // Apply filter
        if (filter !== "all") {
          data = data.filter((repo) => {
            switch (filter) {
              case "public":
                return !repo.private;
              case "private":
                return repo.private;
              case "sources":
                return !repo.fork;
              case "forks":
                return repo.fork;
              case "archived":
                return (repo as any).archived;
              default:
                return true;
            }
          });
        }

        // Apply language filter
        if (language && language !== "all") {
          data = data.filter((repo) => repo.language === language);
        }

        setRepositories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username, sort, filter, language]);

  return { repositories, loading, error };
}
