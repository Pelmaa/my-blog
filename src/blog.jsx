
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Users, Globe, Briefcase } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Journey to Website Development
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A transformative 3-month adventure that changed my life forever
          </p>
        </header>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                Where It All Began
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                My journey into web development started in an unexpected way. I was one of 20 eager students 
                who had the incredible opportunity to learn from <strong>Trainee Pratap from Nepal</strong>, 
                who came all the way to Bhutan to teach us. This was at <strong>Athang Private Limited</strong>, 
                where my coding adventure would unfold over the next three months.
              </p>
            </CardContent>
          </Card>

          {/* Learning Experience */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-6 h-6 text-green-600" />
                The Learning Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-6">
                Over the course of <strong>3 intensive months</strong>, I dove deep into the world of web development. 
                The curriculum was comprehensive and hands-on, covering everything from the basics to advanced concepts.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Technologies I Mastered:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">HTML</Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">CSS</Badge>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">JavaScript</Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">MongoDB</Badge>
                  <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200">React</Badge>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Each technology built upon the previous one, creating a solid foundation for my development skills. 
                From structuring web pages with HTML to creating dynamic user interfaces with React, every lesson 
                was a stepping stone toward becoming a competent developer.
              </p>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-purple-600" />
                Projects That Shaped Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Calculator App</h3>
                  <p className="text-gray-700">
                    My first major project was building a calculator application. This project taught me the 
                    fundamentals of JavaScript logic, event handling, and user interface design. It was amazing 
                    to see numbers and operations come to life on the screen!
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Todo App</h3>
                  <p className="text-gray-700">
                    Working together as a class, we built a todo application that helped us understand state 
                    management, data persistence, and collaborative coding. This project showed me the power 
                    of working as a team and sharing knowledge.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Watch Buddy - Group Project</h3>
                  <p className="text-gray-700">
                    Our capstone project was <strong>Watch Buddy</strong>, a group collaboration that brought 
                    together everything we had learned. This project challenged us to work with databases, 
                    create complex user interfaces, and deploy a real-world application. It was the perfect 
                    culmination of our learning journey.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Deployment */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-indigo-600" />
                Taking It Live
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                The final step in our journey was <strong>deployment</strong> - making our applications available 
                to the world. Learning how to deploy applications taught me that development is not just about 
                writing code, but also about sharing your creations with others. Seeing my projects live on the 
                internet for the first time was an incredible feeling!
              </p>
            </CardContent>
          </Card>

          {/* Reflection */}
          <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-gray-900">
                Looking Back, Moving Forward
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-center">
                These three months at Athang Private Limited transformed me from a complete beginner to a 
                confident web developer. The guidance from Trainee Pratap, the support of my 19 fellow students, 
                and the hands-on learning approach made all the difference. This journey has opened up a world 
                of possibilities, and I'm excited to continue growing as a developer.
              </p>
              <div className="mt-6 text-center">
                <Badge className="bg-indigo-600 text-white px-4 py-2 text-sm">
                  From Student to Developer 🚀
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;