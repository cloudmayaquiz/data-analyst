import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 95 },
      { name: "ReactJS NodeJS", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "HTML,CSS,TailwindCSS", level: 70 },
    ],
  },
  {
    title: "Data Analysis Tools",
    skills: [
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 90 },
      { name: "Scikit-learn", level: 85 },
      { name: "API", level: 75 },
      { name: "TensorFlow/PyTorch", level: 75 },
    ],
  },
  {
    title: "AI / Visualization",
    skills: [
      { name: "Sheets/Excel", level: 95 },
      { name: "Tableau", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "Matplotlib/Seaborn", level: 90 },
      { name: "GenAI GPTs LLMs ML", level: 85 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "BigQuery", level: 75 },
      { name: "Object Storage", level: 90 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            My expertise spans across various tools and technologies in the data science ecosystem.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
