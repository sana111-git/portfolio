import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import Badge from "../components/Badge";
import { Calendar, Zap, Thermometer, Battery } from "lucide-react";
import roboscooer from "../assets/robo-scoccer.jpg";

export default function Projects() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the projects I've worked on, showcasing my technical skills
            and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <Card className="hover:shadow-xl transition-shadow shadow-lg border-l-4 border-l-emerald-500">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <CardTitle className="text-2xl text-gray-900">
                  Science and IT Expo (Robo-Soccer)
                </CardTitle>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">January 2025 - February 2025</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <img
                  src={roboscooer}
                  alt="Robo-Soccer Project"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Project Overview
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Robo-Soccer is a fun robotics competition where teams create
                  and program robots to play soccer. The robots move on their
                  own, work together, and try to score goals, just like in a
                  real soccer game. It's a great way to learn about engineering,
                  programming and problem-solving while having hands-on
                  experience with robotics and artificial intelligence.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Features Implemented
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors">
                    <Zap className="h-6 w-6 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-900">
                      Speed Monitoring
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors">
                    <Thermometer className="h-6 w-6 text-orange-600" />
                    <span className="text-sm font-medium text-gray-900">
                      Temperature Sensors
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                    <Battery className="h-6 w-6 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">
                      Battery Health
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Technical Implementation
                </h3>
                <p className="text-gray-600 mb-3">
                  Implemented comprehensive sensor integration for monitoring
                  critical robot performance metrics:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>
                    Speed sensors for real-time velocity tracking and movement
                    optimization
                  </li>
                  <li>
                    Temperature monitoring to prevent overheating and ensure
                    optimal performance
                  </li>
                  <li>
                    Battery health monitoring for power management and
                    operational reliability
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Skills Demonstrated
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors">
                    Robotics
                  </Badge>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors">
                    Sensor Integration
                  </Badge>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors">
                    Programming
                  </Badge>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors">
                    Problem Solving
                  </Badge>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors">
                    Artificial Intelligence
                  </Badge>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors">
                    Engineering
                  </Badge>
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors">
                    Teamwork
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
