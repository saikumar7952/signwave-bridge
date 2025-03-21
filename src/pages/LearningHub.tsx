import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Book, 
  Play, 
  Award, 
  CheckCircle, 
  User, 
  Clock,
  Search 
} from "lucide-react";

const LessonCard = ({ 
  title, 
  description, 
  level, 
  duration, 
  progress,
  completed
}: { 
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  progress: number;
  completed?: boolean;
}) => {
  const levelColor = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-purple-100 text-purple-800"
  }[level];

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge className={levelColor}>{level}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {duration}
          </div>
          {completed && (
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-3 w-3 mr-1" />
              Completed
            </div>
          )}
        </div>
        <Progress value={progress} className="h-2" />
      </CardContent>
      <CardFooter className="bg-muted/50 pt-4">
        <Button className="w-full">
          <Play className="h-4 w-4 mr-2" />
          {progress > 0 && progress < 100 ? "Continue" : "Start"} Lesson
        </Button>
      </CardFooter>
    </Card>
  );
};

const LearningHub: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Sign Language Learning Hub</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Interactive lessons and practice tools to learn sign language at your own pace.
      </p>
      
      <Tabs defaultValue="lessons" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="practice">Practice Area</TabsTrigger>
          <TabsTrigger value="dictionary">Dictionary</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
        </TabsList>
        
        <TabsContent value="lessons">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LessonCard
              title="Sign Language Basics"
              description="Learn the fundamental hand signs and gestures for everyday communication."
              level="Beginner"
              duration="45 min"
              progress={100}
              completed
            />
            
            <LessonCard
              title="Common Phrases & Greetings"
              description="Master essential phrases for introducing yourself and basic conversations."
              level="Beginner"
              duration="30 min"
              progress={65}
            />
            
            <LessonCard
              title="Numbers & Time Expressions"
              description="Learn to express numbers, tell time, and discuss dates in sign language."
              level="Beginner"
              duration="40 min"
              progress={0}
            />
            
            <LessonCard
              title="Home & Family Vocabulary"
              description="Learn signs related to home, family members, and daily routines."
              level="Intermediate"
              duration="50 min"
              progress={0}
            />
            
            <LessonCard
              title="Emotions & Feelings"
              description="Express a wide range of emotions and feelings through sign language."
              level="Intermediate"
              duration="35 min"
              progress={0}
            />
            
            <LessonCard
              title="Medical & Emergency Signs"
              description="Critical signs for communicating in healthcare and emergency situations."
              level="Advanced"
              duration="60 min"
              progress={0}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="practice">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Practice Area</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">AI-Powered Sign Recognition</h3>
                  <p className="text-muted-foreground mb-6">
                    Practice your signing skills and get real-time feedback from our AI system.
                  </p>
                  
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <p className="text-sm text-muted-foreground">Camera feed will appear here</p>
                  </div>
                  
                  <Button className="w-full">
                    Start Practice Session
                  </Button>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Guided Exercises</h3>
                  <p className="text-muted-foreground mb-4">
                    Follow along with these structured practice activities:
                  </p>
                  
                  <div className="space-y-3">
                    <Card>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Alphabet Practice</h4>
                          <p className="text-xs text-muted-foreground">Master the ASL alphabet</p>
                        </div>
                        <Button size="sm">Start</Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Conversation Drills</h4>
                          <p className="text-xs text-muted-foreground">Practice common dialogues</p>
                        </div>
                        <Button size="sm">Start</Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Speed Challenge</h4>
                          <p className="text-xs text-muted-foreground">Test your signing speed</p>
                        </div>
                        <Button size="sm">Start</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="dictionary">
          <Card>
            <CardHeader>
              <CardTitle>Sign Language Dictionary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search for a sign..." 
                    className="w-full rounded-lg border border-input px-4 py-2 pr-10"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {/* Sample dictionary entries - in a real app these would be dynamically generated */}
                {["Hello", "Thank you", "Please", "Sorry", "Yes", "No", "Help", "Water", "Food", "Family", "Friend", "Love"].map((word, index) => (
                  <Card key={index} className="overflow-hidden hover:border-primary transition-colors cursor-pointer">
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <span className="text-2xl">👋</span>
                    </div>
                    <div className="p-2 text-center">
                      <p className="font-medium text-sm">{word}</p>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center mt-6">
                <Button variant="outline">
                  Load More Signs
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="certificates">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <div className="flex items-center mb-3">
                      <Award className="h-6 w-6 text-yellow-500 mr-2" />
                      <h3 className="font-medium">Sign Language Basics</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Completed on: June 15, 2023
                    </p>
                    <Button variant="outline" size="sm">
                      View Certificate
                    </Button>
                  </div>
                  
                  <div className="border border-dashed rounded-lg p-6 text-center">
                    <Book className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                    <h3 className="font-medium mb-2">Continue Learning</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete more courses to earn certificates and track your progress.
                    </p>
                    <Button>
                      Explore Courses
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <h3 className="text-sm font-medium">Profile Completion</h3>
                      </div>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <Book className="h-4 w-4 mr-2" />
                        <h3 className="text-sm font-medium">Lessons Completed</h3>
                      </div>
                      <span className="text-sm font-medium">2/12</span>
                    </div>
                    <Progress value={16.6} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        <h3 className="text-sm font-medium">Certificates Earned</h3>
                      </div>
                      <span className="text-sm font-medium">1/6</span>
                    </div>
                    <Progress value={16.6} className="h-2" />
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="text-sm font-medium mb-2">Learning Streak</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold">5 days</p>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Video Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Watch detailed video explanations from professional sign language instructors.
              </p>
              <Button variant="outline">Browse Videos</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Community Workshops</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Join live sessions and connect with other learners to practice sign language.
              </p>
              <Button variant="outline">Upcoming Workshops</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Downloadable Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Access PDFs, flashcards, and printable guides to help with your learning.
              </p>
              <Button variant="outline">Access Library</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LearningHub;
