import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, GitBranch, AlertCircle, Users, Code2, Zap, Loader2 } from "lucide-react";
import GitHubUserSearch from "@/components/GitHubUserSearch";
import RepositoryBrowser from "@/components/RepositoryBrowser";
import { useGitHubUser } from "@/hooks/useGitHubUser";

/**
 * Design: Modern Developer Experience with Gradient Accents
 * - Dark navy background with purple-to-blue gradient accents
 * - Glassmorphism effects for layered UI
 * - Bold typography (Sora) paired with monospace code (JetBrains Mono)
 * - Smooth animations and hover effects
 * - Feature cards with lift effects on hover
 */

export default function Home() {
  const OWNER_USERNAME = "l1mitss";
  const { user: ownerData, loading: ownerLoading } = useGitHubUser(OWNER_USERNAME);

  const capabilities = [
    {
      icon: Github,
      title: "User Management",
      description: "Retrieve authenticated user details, followers, and account information.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: GitBranch,
      title: "Repository Management",
      description: "List, view, and interact with repositories including private ones.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: AlertCircle,
      title: "Issue Tracking",
      description: "List and manage issues within repositories with real-time updates.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code2,
      title: "Pull Request Management",
      description: "List and manage pull requests with comprehensive filtering options.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Activity Monitoring",
      description: "Access public events and activity feeds for users and repositories.",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "API Access",
      description: "Directly interact with the GitHub API for advanced operations.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const demoData = [
    { label: "User", value: "l1mitss (Amar Sultan)" },
    { label: "Repositories", value: "12 total (2 public, 10 private)" },
    { label: "Followers", value: "2" },
    { label: "Following", value: "3" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
              <Github className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              GitHub Connector
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#capabilities" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Capabilities
            </a>
            <a href="#demo" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Demo Data
            </a>
            <a href="#api" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              API Reference
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Badge className="mx-auto bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-blue-500/30">
              <Zap className="w-3 h-3 mr-1" />
              Powerful GitHub Integration
            </Badge>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              GitHub Connector
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive command-line access to GitHub functionalities. Manage repositories, track code changes, and automate your development workflow with powerful API integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl" />
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663738229071/hoNUdjxahycQT9NwnHuLFM/data-flow-illustration-L7Fn4jryLvYvPPk8NLJAaE.webp"
              alt="GitHub API Data Flow"
              className="relative w-full rounded-2xl border border-purple-500/20 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 border-t border-border/50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Core Capabilities
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              The GitHub connector provides comprehensive access to GitHub's powerful features through command-line integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <Card
                  key={idx}
                  className="group relative overflow-hidden border-purple-500/20 bg-card/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                >
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  <CardHeader className="relative">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cap.color} p-2.5 mb-4`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-lg">{cap.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-foreground/60">
                      {cap.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Data Section */}
      <section id="demo" className="py-20 border-t border-border/50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Live Demo Data
            </h3>
            <p className="text-foreground/70">
              Real data fetched from the GitHub connector
            </p>
          </div>

          {/* GitHub User Search Feature */}
          <div className="mb-12">
            <GitHubUserSearch />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {ownerLoading ? (
              <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm md:col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <CardDescription>Loading live data...</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ) : ownerData ? (
              <>
                <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardDescription className="text-foreground/50">User (Live)</CardDescription>
                    <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {ownerData.name || ownerData.login}
                    </CardTitle>
                  </CardHeader>
                </Card>
                <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardDescription className="text-foreground/50">Repositories (Live)</CardDescription>
                    <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {ownerData.public_repos} public
                    </CardTitle>
                  </CardHeader>
                </Card>
                <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardDescription className="text-foreground/50">Followers (Live)</CardDescription>
                    <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {ownerData.followers}
                    </CardTitle>
                  </CardHeader>
                </Card>
                <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardDescription className="text-foreground/50">Following (Live)</CardDescription>
                    <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {ownerData.following}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </>
            ) : (
              demoData.map((item, idx) => (
                <Card key={idx} className="border-purple-500/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardDescription className="text-foreground/50">{item.label}</CardDescription>
                    <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {item.value}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))
            )}
          </div>

          {/* Code Example */}
          <Card className="border-purple-500/20 bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardHeader>
              <CardTitle>API Example</CardTitle>
              <CardDescription>Fetching user information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-background/50 rounded-lg p-4 overflow-x-auto border border-purple-500/20">
                <pre className="text-sm text-cyan-400 font-mono">
                  <code>{`$ gh api user

{
  "login": "l1mitss",
  "id": 85800111,
  "name": "Amar Sultan",
  "public_repos": 2,
  "followers": 2,
  "following": 3
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Repository Browser Section */}
          <div className="mt-16 pt-12 border-t border-purple-500/20">
            <RepositoryBrowser username={OWNER_USERNAME} />
          </div>
        </div>
      </section>

      {/* API Reference Section */}
      <section id="api" className="py-20 border-t border-border/50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Key Features
            </h3>
            <p className="text-foreground/70">
              What you can do with the GitHub connector
            </p>
          </div>

          <div className="space-y-4">
            {[
              { title: "User Management", desc: "Retrieve authenticated user details and profile information" },
              { title: "Repository Management", desc: "List, view, and interact with repositories including private ones" },
              { title: "Issue Tracking", desc: "List and manage issues within repositories" },
              { title: "Pull Request Management", desc: "List and manage pull requests" },
              { title: "Activity Monitoring", desc: "Access public events and activity feeds" },
              { title: "API Access", desc: "Directly interact with the GitHub API for advanced operations" }
            ].map((feature, idx) => (
              <Card key={idx} className="border-purple-500/20 bg-card/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <CardDescription>{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to integrate GitHub?
          </h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            The GitHub connector provides powerful command-line access to streamline your development workflow and automate GitHub tasks.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
            Start Using GitHub Connector
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-foreground/50">
            <p>&copy; 2026 GitHub Connector. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
