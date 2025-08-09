import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Database, TrendingUp } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            With over 5 years of experience in data analysis and business intelligence, I specialize in turning raw data
            into compelling stories that drive business decisions.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <Database className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-bold">Data Engineering</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Expert in SQL, Python, and ETL processes for data pipeline development and management.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <BarChart3 className="h-12 w-12 text-green-600" />
              <h3 className="text-xl font-bold">Data Visualization</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Creating impactful dashboards and reports using Tableau, Power BI, and custom visualization tools.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <TrendingUp className="h-12 w-12 text-purple-600" />
              <h3 className="text-xl font-bold">Statistical Analysis</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Advanced statistical modeling and machine learning techniques for predictive analytics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
