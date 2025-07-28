import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import Badge from "../components/Badge";
import { Code, Users, Cog, Monitor } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Java", "HTML", "CSS"],
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Communication", "Punctuality", "Teamwork"],
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Core Skills",
      icon: Cog,
      skills: ["Scheduling", "Adaptable", "Tech-savvy"],
      color: "bg-purple-100 text-purple-800",
    },
    {
      title: "Technical Tools",
      icon: Monitor,
      skills: ["Microsoft Office", "Google Workspace", "Web Development"],
      color: "bg-orange-100 text-orange-800",
    },
  ];

  const additionalSkills = [
    "Volunteering",
    "IT Support",
    "Leadership",
    "Data Entry",
  ];

  const programmingSkills = [
    { name: "C Programming", level: 85 },
    { name: "C++", level: 80 },
    { name: "Java", level: 75 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical abilities, programming
            languages, and professional skills
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow shadow-lg"
              >
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                  <CardTitle className="flex items-center gap-3 text-gray-900">
                    <IconComponent className="h-6 w-6 text-emerald-600" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className={`${category.color} hover:opacity-80 transition-opacity`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Programming Languages Detail */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
            <CardTitle className="text-gray-900">
              Programming Proficiency
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 w-32">
                    {skill.name}
                  </span>
                  <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Skills */}
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
            <CardTitle className="text-gray-900">
              Additional Competencies
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
