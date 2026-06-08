import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  GitBranch,
  Star,
  GitFork,
  Eye,
  AlertCircle,
  Loader2,
  ExternalLink,
  Code2,
} from "lucide-react";
import { useGitHubRepositories, SortOption, FilterOption } from "@/hooks/useGitHubRepositories";

interface RepositoryBrowserProps {
  username: string;
}

export default function RepositoryBrowser({ username }: RepositoryBrowserProps) {
  const [sort, setSort] = useState<SortOption>("updated");
  const [filter, setFilter] = useState<FilterOption>("all");
  const [language, setLanguage] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const { repositories, loading, error } = useGitHubRepositories({
    username,
    sort,
    filter,
    language,
  });

  // Extract unique languages from repositories
  const languages = useMemo(() => {
    const langs = new Set<string>();
    repositories.forEach((repo) => {
      if (repo.language) {
        langs.add(repo.language);
      }
    });
    return Array.from(langs).sort();
  }, [repositories]);

  // Filter repositories by search term
  const filteredRepositories = useMemo(() => {
    return repositories.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
    );
  }, [repositories, searchTerm]);

  if (!username) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          Repository Browser
        </h3>
        <p className="text-foreground/70">
          Explore and filter {repositories.length} repositories
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <Card className="border-red-500/20 bg-red-500/10">
          <CardContent className="pt-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-400">{error}</p>
          </CardContent>
        </Card>
      )}

      {/* Controls */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className="text-sm font-medium text-foreground/70 mb-2 block">
            Search Repositories
          </label>
          <Input
            placeholder="Search by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Sort */}
        <div>
          <label className="text-sm font-medium text-foreground/70 mb-2 block">
            Sort By
          </label>
          <Select value={sort} onValueChange={(value) => setSort(value as SortOption)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="updated">Recently Updated</SelectItem>
              <SelectItem value="created">Recently Created</SelectItem>
              <SelectItem value="stars">Most Stars</SelectItem>
              <SelectItem value="forks">Most Forks</SelectItem>
              <SelectItem value="name">Name (A-Z)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Filter */}
        <div>
          <label className="text-sm font-medium text-foreground/70 mb-2 block">
            Filter
          </label>
          <Select value={filter} onValueChange={(value) => setFilter(value as FilterOption)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Repositories</SelectItem>
              <SelectItem value="public">Public Only</SelectItem>
              <SelectItem value="private">Private Only</SelectItem>
              <SelectItem value="sources">Sources Only</SelectItem>
              <SelectItem value="forks">Forks Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Language Filter */}
      {languages.length > 0 && (
        <div>
          <label className="text-sm font-medium text-foreground/70 mb-3 block">
            Filter by Language
          </label>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={language === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setLanguage("all")}
              className={language === "all" ? "bg-gradient-to-r from-purple-600 to-blue-600" : ""}
            >
              All Languages
            </Button>
            {languages.map((lang) => (
              <Button
                key={lang}
                variant={language === lang ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage(lang)}
                className={language === lang ? "bg-gradient-to-r from-purple-600 to-blue-600" : ""}
              >
                {lang}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6 flex items-center justify-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin text-purple-400" />
            <p className="text-foreground/70">Loading repositories...</p>
          </CardContent>
        </Card>
      )}

      {/* Repositories List */}
      {!loading && filteredRepositories.length > 0 && (
        <div className="grid gap-4">
          {filteredRepositories.map((repo) => (
            <Card
              key={repo.id}
              className="group border-purple-500/20 bg-card/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  {/* Repository Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 truncate"
                      >
                        <GitBranch className="w-4 h-4 flex-shrink-0" />
                        {repo.name}
                        <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      {repo.private && (
                        <Badge variant="outline" className="text-xs flex-shrink-0">
                          Private
                        </Badge>
                      )}
                      {(repo as any).fork && (
                        <Badge variant="outline" className="text-xs flex-shrink-0">
                          Fork
                        </Badge>
                      )}
                    </div>

                    {repo.description && (
                      <p className="text-sm text-foreground/70 mb-3 line-clamp-2">
                        {repo.description}
                      </p>
                    )}

                    {/* Topics/Tags */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                        {repo.topics.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{repo.topics.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}

                    {/* Language */}
                    {repo.language && (
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <Code2 className="w-4 h-4" />
                        <span>{repo.language}</span>
                      </div>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex gap-4 md:gap-6 flex-wrap md:flex-nowrap">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GitFork className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-medium">{repo.forks_count}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-medium">{repo.watchers_count}</span>
                    </div>
                  </div>
                </div>

                {/* Updated Date */}
                <div className="mt-4 pt-4 border-t border-purple-500/10">
                  <p className="text-xs text-foreground/50">
                    Updated {new Date(repo.updated_at).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredRepositories.length === 0 && repositories.length > 0 && (
        <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6 text-center">
            <AlertCircle className="w-12 h-12 text-foreground/30 mx-auto mb-3" />
            <p className="text-foreground/70">
              No repositories match your filters. Try adjusting your search criteria.
            </p>
          </CardContent>
        </Card>
      )}

      {/* No Repositories State */}
      {!loading && repositories.length === 0 && !error && (
        <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6 text-center">
            <GitBranch className="w-12 h-12 text-foreground/30 mx-auto mb-3" />
            <p className="text-foreground/70">
              No repositories found for this user.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
