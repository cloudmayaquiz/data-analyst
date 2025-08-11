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
      "Comprehensive analysis of online retail data to identify sales trends, customer behavior patterns, and revenue optimization opportunities using advanced analytics.",
    technologies: ["Python", "Pandas", "Matplotlib", "SQL", "Tableau"],
    image: "/placeholder.svg?height=300&width=500&text=E-commerce+Sales+Dashboard",
    liveUrl: "https://example.com/project1",
    githubUrl: "https://github.com/example/project1",
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    description:
      "Machine learning model to predict customer churn using historical data, achieving 85% accuracy with feature importance analysis and actionable insights.",
    technologies: ["Python", "Scikit-learn", "Tableau", "PostgreSQL", "XGBoost"],
    image: "/placeholder.svg?height=300&width=500&text=Customer+Churn+ML+Model",
    liveUrl: "https://example.com/project2",
    githubUrl: "https://github.com/example/project2",
  },
  {
    id: 3,
    title: "Financial KPI Dashboard",
    description:
      "Interactive Power BI dashboard for financial KPI tracking, budget analysis, and performance monitoring across multiple departments with real-time updates.",
    technologies: ["Power BI", "DAX", "Excel", "SQL Server", "Azure"],
    image: "/placeholder.svg?height=300&width=500&text=Financial+KPI+Dashboard",
    liveUrl: "https://example.com/project3",
    githubUrl: "https://github.com/example/project3",
  },
  {
    id: 4,
    title: "Exploratory Data Analysis",
    description:
      "Comprehensive EDA framework to explore data structure, identify key characteristics, and uncover potential relationships using statistical methods and visualizations.",
    technologies: ["NumPy", "Pandas", "Plotly", "Seaborn", "Jupyter"],
    image: "/placeholder.svg?height=300&width=500&text=Exploratory+Data+Analysis",
    liveUrl: "https://example.com/project4",
    githubUrl: "https://github.com/example/project4",
  },
  {
    id: 5,
    title: "EV Dashboard using Tableau",
    description:
      "Interactive Tableau dashboard analyzing Electric Vehicle market trends, charging infrastructure, adoption rates, and geographic distribution patterns.",
    technologies: ["Tableau", "CSV", "Google Sheets", "Design Skills"],
    image: "/placeholder.svg?height=300&width=500&text=EV+Tableau+Dashboard",
    liveUrl: "https://example.com/project5",
    githubUrl: "https://github.com/example/project5",
  },
  {
    id: 6,
    title: "Netflix Data Analysis using Python",
    description:
      "Comprehensive analysis of Netflix's content library exploring content distribution, genre trends, geographic patterns, and rating insights using Python.",
    technologies: ["NumPy", "Pandas", "Plotly", "Seaborn", "Jupyter"],
    image: "/placeholder.svg?height=300&width=500&text=Netflix+Data+Analysis",
    liveUrl: "https://example.com/project6",
    githubUrl: "https://github.com/example/project6",
  },
  {
    id: 7,
    title: "Instagram User Analytics using Python",
    description:
      "Python-based analytics tool analyzing Instagram engagement metrics, follower growth patterns, post performance, and audience demographics insights.",
    technologies: ["BeautifulSoup", "Pandas", "Matplotlib", "Streamlit"],
    image: "/placeholder.svg?height=300&width=500&text=Instagram+Analytics",
    liveUrl: "https://example.com/project7",
    githubUrl: "https://github.com/example/project7",
  },
  {
    id: 8,
    title: "Spotify Track Popularity Analysis",
    description:
      "Machine learning analysis of Spotify track features to predict song popularity, identifying key audio characteristics that drive music success.",
    technologies: ["NumPy", "Pandas", "Scikit-learn", "Spotify API", "Matplotlib"],
    image: "/placeholder.svg?height=300&width=500&text=Spotify+Popularity+Analysis",
    liveUrl: "https://example.com/project8",
    githubUrl: "https://github.com/example/project8",
  },
  {
    id: 9,
    title: "Coca-Cola Sales Analysis",
    description:
      "Strategic sales analysis optimizing Coca-Cola's revenue forecasting, regional performance tracking, and market penetration strategies.",
    technologies: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    image: "/placeholder.svg?height=300&width=500&text=Coca+Cola+Sales+Analysis",
    liveUrl: "https://example.com/project9",
    githubUrl: "https://github.com/example/project9",
  },
  {
    id: 10,
    title: "K-Means Brain Scan Analysis",
    description:
      "Medical imaging analysis using K-Means clustering for brain tissue segmentation, abnormality detection, and automated medical diagnosis support.",
    technologies: ["NumPy", "Scikit-learn", "Nibabel", "K-Means", "OpenCV"],
    image: "/placeholder.svg?height=300&width=500&text=Brain+Scan+K-Means",
    liveUrl: "https://example.com/project10",
    githubUrl: "https://github.com/example/project10",
  },
  {
    id: 11,
    title: "BBC News Classification using NLP",
    description:
      "Natural Language Processing system for automated BBC news categorization, sentiment analysis, and content organization using advanced NLP techniques.",
    technologies: ["NLTK", "Scikit-learn", "DistilBERT", "Pandas", "Matplotlib"],
    image: "/placeholder.svg?height=300&width=500&text=BBC+News+NLP",
    liveUrl: "https://example.com/project11",
    githubUrl: "https://github.com/example/project11",
  },
  {
    id: 12,
    title: "LLM-Enhanced Web Scraping",
    description:
      "Advanced web scraping system enhanced with Large Language Models for intelligent data extraction, parsing, and automated content processing.",
    technologies: ["Scrapy", "GPT-4", "LangChain", "BeautifulSoup", "Python"],
    image: "/placeholder.svg?height=300&width=500&text=LLM+Web+Scraping",
    liveUrl: "https://example.com/project12",
    githubUrl: "https://github.com/example/project12",
  },
  {
    id: 13,
    title: "Student Performance Analysis",
    description:
      "Educational analytics system analyzing student performance patterns, identifying at-risk students, and providing data-driven insights for academic improvement.",
    technologies: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "SciPy"],
    image: "/placeholder.svg?height=300&width=500&text=Student+Performance+Analysis",
    liveUrl: "https://example.com/project13",
    githubUrl: "https://github.com/example/project13",
  },
  {
    id: 14,
    title: "F1 Racing Analytics using SQL",
    description:
      "Comprehensive Formula 1 racing database analysis using SQL for driver performance tracking, team statistics, race results, and historical comparisons.",
    technologies: ["SQL", "MySQL", "Tableau", "Python", "Data Modeling"],
    image: "/placeholder.svg?height=300&width=500&text=F1+Racing+SQL+Analytics",
    liveUrl: "https://example.com/project14",
    githubUrl: "https://github.com/example/project14",
  },
]

export function Projects() {
  const [projects, setProjects] = useState(sampleProjects)
  const [isUploadOpen, setIsUploadOpen] = useState(false)

  const handleProjectUpload = (newProject: any) => {
    const project = {
      ...newProject,
      id: projects.length + 1,
      image: "/placeholder.svg?height=300&width=500&text=New+Data+Project",
    }
    setProjects([...projects, project])
  }

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore my comprehensive data analysis projects showcasing various techniques and technologies across
            different industries.
          </p>
          <Button onClick={() => setIsUploadOpen(true)} className="mt-4">
            <Plus className="mr-2 h-4 w-4" />
            Add New Project
          </Button>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - Professional Data Analysis Dashboard`}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="line-clamp-1 text-lg font-semibold">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                <div className="flex space-x-2">
                  {project.liveUrl && (
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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
