import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import Badge from "../components/Badge";
import { Award, Heart, Sparkles, Trophy } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Certificate of Volunteer Achievement",
      icon: Award,
      description:
        "Recognition for outstanding volunteer service and community contribution",
      count: 2,
      color: "text-emerald-600",
    },
    {
      title: "Project Participation Certificate",
      icon: Trophy,
      description:
        "Acknowledgment of active participation in academic and technical projects",
      color: "text-blue-600",
    },
    {
      title: "Certificate of Excellence in Cleanliness",
      icon: Sparkles,
      description:
        "Award for maintaining high standards of cleanliness and organization",
      color: "text-purple-600",
    },
    {
      title: "Blood Donation Certificate",
      icon: Heart,
      description:
        "Recognition for contributing to blood donation drives and helping save lives",
      color: "text-red-600",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Certificates & Achievements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and awards that highlight my commitment to excellence,
            community service, and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => {
            const IconComponent = certificate.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow shadow-lg border-l-4 border-l-emerald-500"
              >
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className={`h-8 w-8 ${certificate.color}`} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {certificate.title}
                        {certificate.count && (
                          <Badge className="ml-2 bg-emerald-100 text-emerald-800">
                            {certificate.count}x
                          </Badge>
                        )}
                      </h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-600 leading-relaxed">
                    {certificate.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievement Summary */}
        <Card className="mt-12 bg-gradient-to-r from-emerald-50 to-green-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-gray-900">
              Achievement Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  4+
                </div>
                <p className="text-gray-700 font-medium">Certificates Earned</p>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  2x
                </div>
                <p className="text-gray-700 font-medium">
                  Volunteer Recognition
                </p>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  100%
                </div>
                <p className="text-gray-700 font-medium">
                  Commitment to Excellence
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What These Achievements Represent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Award className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-sm text-gray-600">
                Commitment to high standards in all endeavors
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Heart className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Service</h3>
              <p className="text-sm text-gray-600">
                Dedication to helping others and giving back
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Trophy className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Achievement</h3>
              <p className="text-sm text-gray-600">
                Recognition for outstanding performance
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Sparkles className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-sm text-gray-600">
                Maintaining high standards in all work
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
