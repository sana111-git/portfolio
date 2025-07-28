

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6pwnmgu", // ✅ Your Service ID
        "template_zwkmd34", // ✅ Your Template ID
        form.current,
        "TQAk1UNpVxeIiBZH5" // ✅ Your Public Key
      )
      .then(
        () => {
          alert("✅ Thank you! Your message has been sent.");
          form.current.reset();
        },
        (error) => {
          console.error("❌ EmailJS Error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="text-gray-900">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">sanjana.deuja111@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">9745309982</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Kathmandu, Nepal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="text-gray-900">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  I'm currently pursuing my Bachelor's in Information Technology
                  and am always eager to learn, collaborate, and take on new
                  challenges. Whether you have a project idea, internship
                  opportunity, or just want to discuss technology, I'd love to
                  hear from you!
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>Best time to reach me:</strong> Weekdays 9 AM - 6 PM
                    (Nepal Time)
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Response time:</strong> Usually within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
              <CardTitle className="text-gray-900">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Your first name"
                      required
                      className="focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Your last name"
                      required
                      className="focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    rows={6}
                    required
                    className="focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
