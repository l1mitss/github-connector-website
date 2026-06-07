import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Search, Loader2, AlertCircle, Users, GitBranch, MapPin, Link as LinkIcon } from "lucide-react";

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  company: string | null;
  twitter_username: string | null;
}

export default function GitHubUserSearch() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    setLoading(true);
    setError(null);
    setUserData(null);
    setSearched(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          setError(`User "${username}" not found on GitHub`);
        } else {
          setError("Failed to fetch user data. Please try again.");
        }
        setLoading(false);
        return;
      }

      const data: GitHubUser = await response.json();
      setUserData(data);
      setError(null);
    } catch (err) {
      setError("An error occurred while fetching user data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading) {
      handleSearch(e as any);
    }
  };

  return (
    <div className="space-y-6">
      {/* Search Form */}
      <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search GitHub User
          </CardTitle>
          <CardDescription>
            Enter a GitHub username to view their profile information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              placeholder="Enter GitHub username (e.g., torvalds, octocat)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
              className="flex-1"
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Error Message */}
      {error && (
        <Card className="border-red-500/20 bg-red-500/10">
          <CardContent className="pt-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-400">{error}</p>
          </CardContent>
        </Card>
      )}

      {/* User Results */}
      {userData && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Profile Card */}
          <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={userData.avatar_url}
                    alt={userData.login}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-lg border border-purple-500/20"
                  />
                </div>

                {/* User Info */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      {userData.name || userData.login}
                      <Badge variant="outline" className="text-xs">
                        @{userData.login}
                      </Badge>
                    </h3>
                    {userData.bio && (
                      <p className="text-foreground/70 mt-2">{userData.bio}</p>
                    )}
                  </div>

                  {/* Metadata */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {userData.location && (
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span className="text-foreground/70">{userData.location}</span>
                      </div>
                    )}
                    {userData.company && (
                      <div className="flex items-center gap-2 text-sm">
                        <Github className="w-4 h-4 text-blue-400" />
                        <span className="text-foreground/70">{userData.company}</span>
                      </div>
                    )}
                    {userData.blog && (
                      <div className="flex items-center gap-2 text-sm">
                        <LinkIcon className="w-4 h-4 text-cyan-400" />
                        <a
                          href={userData.blog}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 truncate"
                        >
                          Website
                        </a>
                      </div>
                    )}
                    {userData.twitter_username && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-foreground/70">@{userData.twitter_username}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <GitBranch className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Public Repos</p>
                    <p className="text-2xl font-bold text-purple-400">
                      {userData.public_repos}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Followers</p>
                    <p className="text-2xl font-bold text-blue-400">
                      {userData.followers}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Following</p>
                    <p className="text-2xl font-bold text-cyan-400">
                      {userData.following}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* GitHub Link */}
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
            >
              <a
                href={`https://github.com/${userData.login}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      )}

      {/* Empty State */}
      {searched && !userData && !loading && !error && (
        <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6 text-center">
            <Search className="w-12 h-12 text-foreground/30 mx-auto mb-3" />
            <p className="text-foreground/70">No results found. Try searching for a different username.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
