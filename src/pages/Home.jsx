import Button from "../components/Button";
import { Card, CardContent } from "../components/Card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  GraduationCap,
  Award,
  Mail,
  User,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-48 h-48 rounded-full mx-auto bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center border-4 border-emerald-300 shadow-lg">
                <User className="w-24 h-24 text-emerald-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-emerald-600">Sanjana Deuja</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Bachelor's Student in Information Technology with a passion for
              tech, creativity, and continuous learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <Link to="/projects" className="flex items-center">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
              <CardContent className="pt-6">
                <GraduationCap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Education
                </h3>
                <p className="text-gray-600">
                  BIT Student at Texas International College
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
              <CardContent className="pt-6">
                <Code className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Programming
                </h3>
                <p className="text-gray-600">C, C++, Java, HTML, CSS</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Achievements
                </h3>
                <p className="text-gray-600">
                  Multiple certificates and awards
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Location
                </h3>
                <p className="text-gray-600">Kathmandu, Nepal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            I'm a Bachelor of Information Technology student with a deep passion
            for tech, a creative mindset and a drive to learn and grow. I bring
            strong computer skills, a sharp eye for detail and a genuine
            dedication to doing great work.
          </p>
          <Button
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
          >
            <Link to="/about">Learn More About Me</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
