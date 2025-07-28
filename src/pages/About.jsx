import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import Badge from "../components/Badge";
import { GraduationCap, MapPin, Calendar, Globe } from "lucide-react";

export default function About() {
  const languages = [
    { name: "Nepali", level: "Native or Bilingual Proficiency" },
    { name: "Hindi", level: "Full Professional Proficiency" },
    { name: "Turkish", level: "Professional Working Proficiency" },
    { name: "Korean", level: "Elementary Proficiency" },
  ];

  const interests = [
    "Dancing",
    "Reading",
    "Singing",
    "Finance and Budgeting",
    "Sports",
    "Volunteering",
    "Baking",
    "Travelling",
    "Web Development",
    "Psychology",
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know more about my background, education, and what drives my
            passion for technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Personal Info */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <MapPin className="h-5 w-5 text-emerald-600" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Kathmandu, Nepal</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">sanjana.deuja111@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">9745309982</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">About</h3>
                <p className="text-gray-600">
                  Bachelor of Information Technology student with a deep passion
                  for tech, a creative mindset and a drive to learn and grow. I
                  bring strong computer skills, a sharp eye for detail and a
                  genuine dedication to doing great work.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <GraduationCap className="h-5 w-5 text-emerald-600" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Bachelor of Information Technology (BIT)
                  </h3>
                  <p className="text-emerald-600 font-medium">
                    Texas International College of Management and IT
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>November 2024 - Present</span>
                  </div>
                  <div className="mt-3">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Key Subjects:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Basic Computer Architecture</li>
                      <li>C Programming</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Languages */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Globe className="h-5 w-5 text-emerald-600" />
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-900">
                    {language.name}
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-800"
                  >
                    {language.level}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interests */}
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
            <CardTitle className="text-gray-900">Interests & Hobbies</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-colors"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
