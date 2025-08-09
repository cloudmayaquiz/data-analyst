"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { ProjectUploadDialog } from "./project-upload-dialog"

const sampleProjects = [
  {
    id: 1,
    title: "E-commerce Sales Analysis",
    description:
      "Comprehensive analysis of online retail data to identify sales trends, customer behavior patterns, and revenue optimization opportunities.",
    technologies: ["Python", "Pandas", "Matplotlib", "SQL"],
    image: "/placeholder.svg?height=200&width=400",
    liveUrl: "https://example.com/project1",
    githubUrl: "https://github.com/example/project1",
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    description:
      "Machine learning model to predict customer churn using historical data, achieving 85% accuracy with feature importance analysis.",
    technologies: ["Python", "Scikit-learn", "Tableau", "PostgreSQL"],
    image: "/placeholder.svg?height=200&width=400",
    liveUrl: "https://example.com/project2",
    githubUrl: "https://github.com/example/project2",
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description:
      "Interactive Power BI dashboard for financial KPI tracking, budget analysis, and performance monitoring across multiple departments.",
    technologies: ["Power BI", "DAX", "Excel", "SQL Server"],
    image: "/placeholder.svg?height=200&width=400",
    liveUrl: "https://example.com/project3",
    githubUrl: "https://github.com/example/project3",
  },
]

export function Projects() {
  const [projects, setProjects] = useState(sampleProjects)
  const [isUploadOpen, setIsUploadOpen] = useState(false)

  const handleProjectUpload = (newProject: any) => {
    const project = {
      ...newProject,
      id: projects.length + 1,
      image: "/placeholder.svg?height=200&width=400",
    }
    setProjects([...projects, project])
  }

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore my data analysis projects showcasing various techniques and technologies.
          </p>
          <Button onClick={() => setIsUploadOpen(true)} className="mt-4">
            <Plus className="mr-2 h-4 w-4" />
            Add New Project
          </Button>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="aspect-video bg-gray-100 dark:bg-gray-700">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ProjectUploadDialog open={isUploadOpen} onOpenChange={setIsUploadOpen} onUpload={handleProjectUpload} />
    </section>
  )
}
