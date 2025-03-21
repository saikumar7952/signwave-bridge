
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MessageSquare, ThumbsUp, User, Calendar, MapPin, Search, Flag, Heart, Share2 } from "lucide-react";

const CommunityPost = ({
  author,
  authorRole,
  timeAgo,
  content,
  likes,
  comments,
  liked = false
}: {
  author: string;
  authorRole: string;
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
  liked?: boolean;
}) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${author}`} />
              <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{author}</p>
                <Badge variant="outline" className="text-xs">{authorRole}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">{timeAgo}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Flag className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{content}</p>
      </CardContent>
      <CardFooter className="border-t bg-muted/20 flex justify-between py-2">
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className={isLiked ? "text-primary" : ""}
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 mr-1 ${isLiked ? "fill-primary" : ""}`} />
            {likeCount}
          </Button>
          <Button variant="ghost" size="sm">
            <MessageSquare className="h-4 w-4 mr-1" />
            {comments}
          </Button>
        </div>
        <Button variant="ghost" size="sm">
          <Share2 className="h-4 w-4 mr-1" />
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

const EventCard = ({
  title,
  date,
  location,
  description,
  attendees
}: {
  title: string;
  date: string;
  location: string;
  description: string;
  attendees: number;
}) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            {date}
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            {location}
          </div>
          <div className="flex items-center text-sm">
            <User className="h-4 w-4 mr-2 text-muted-foreground" />
            {attendees} attending
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="bg-muted/50 py-4">
        <Button className="w-full">Register</Button>
      </CardFooter>
    </Card>
  );
};

const Community: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Community Forum</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Connect with others, share experiences, and get support from our vibrant community.
      </p>
      
      <div className="mb-8">
        <Card>
          <CardContent className="pt-6">
            <Textarea placeholder="Share something with the community..." className="resize-none mb-4" />
            <div className="flex justify-end">
              <Button>Post to Community</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="discussions" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="find-help">Find Help</TabsTrigger>
        </TabsList>
        
        <TabsContent value="discussions">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Discussions</h2>
            <div className="flex items-center">
              <div className="relative mr-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search discussions..." className="pl-9 w-[200px]" />
              </div>
              <Button variant="outline">Filter</Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <CommunityPost
              author="Sarah Johnson"
              authorRole="Deaf Advocate"
              timeAgo="2 hours ago"
              content="I'm excited to share that my local library has started offering sign language classes every Saturday! It's been amazing seeing so many people interested in learning. Have any of you participated in community sign language classes before?"
              likes={24}
              comments={7}
            />
            
            <CommunityPost
              author="Michael Chen"
              authorRole="ASL Interpreter"
              timeAgo="Yesterday"
              content="I've been using SignSpeak in my work as an interpreter, and it's been a game-changer for quick interactions where I'm not available. Has anyone else used technology alongside traditional interpreting services? I'd love to hear about your experiences."
              likes={42}
              comments={15}
              liked={true}
            />
            
            <CommunityPost
              author="Lisa Rodriguez"
              authorRole="Parent"
              timeAgo="3 days ago"
              content="My daughter (7) was recently diagnosed with hearing loss, and I'm learning sign language alongside her. The visualization tools in this app have made it so much easier for us to practice together. Any other parents here on a similar journey?"
              likes={67}
              comments={23}
            />
            
            <CommunityPost
              author="James Wilson"
              authorRole="New Member"
              timeAgo="1 week ago"
              content="Hi everyone! I'm new to the deaf community and just starting to learn sign language. I've found the Learning Hub incredibly helpful, but I'd love some advice on how to practice with others. Are there any online groups or Discord servers you'd recommend for beginners?"
              likes={18}
              comments={9}
            />
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="events">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Upcoming Events</h2>
            <Button variant="outline">+ Add Event</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Virtual Sign Language Workshop"
              date="June 15, 2023 • 3:00 PM"
              location="Online (Zoom)"
              description="Learn the basics of ASL in this beginner-friendly workshop led by certified instructors."
              attendees={42}
            />
            
            <EventCard
              title="Deaf Culture Awareness Day"
              date="July 8, 2023 • 10:00 AM"
              location="City Community Center"
              description="A celebration of deaf culture with performances, art exhibitions, and interactive activities."
              attendees={127}
            />
            
            <EventCard
              title="SignSpeak Technology Seminar"
              date="July 22, 2023 • 2:00 PM"
              location="Tech Innovation Hub"
              description="Learn how to use the latest assistive technologies for the deaf and hard of hearing community."
              attendees={36}
            />
            
            <EventCard
              title="Movie Night: Closed Captioning Advocacy"
              date="August 5, 2023 • 7:00 PM"
              location="City Library Auditorium"
              description="Film screening and discussion about the importance of accessible media for the deaf community."
              attendees={54}
            />
            
            <EventCard
              title="Interpreting Services Workshop"
              date="August 12, 2023 • 1:00 PM"
              location="Online (Zoom)"
              description="Information session about how to request and work with sign language interpreters."
              attendees={29}
            />
            
            <EventCard
              title="Sign Language Storytelling for Kids"
              date="August 19, 2023 • 11:00 AM"
              location="Children's Library"
              description="Interactive storytelling session for children ages 3-10 in both spoken and sign language."
              attendees={68}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="find-help">
          <Card>
            <CardHeader>
              <CardTitle>Get Support from the Community</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <Textarea 
                  placeholder="Ask a question or request help from the community..." 
                  className="resize-none mb-4"
                />
                <div className="flex justify-end">
                  <Button>Post Question</Button>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <h3 className="text-lg font-medium">Support Resources</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Professional Interpreters</h4>
                        <p className="text-sm text-muted-foreground">
                          Connect with certified sign language interpreters for important meetings and events.
                        </p>
                        <Button variant="link" className="px-0 h-auto py-1">Find Interpreters</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4">
                        <ThumbsUp className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Peer Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Connect with others who share similar experiences for emotional support.
                        </p>
                        <Button variant="link" className="px-0 h-auto py-1">Join Support Groups</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Live Chat Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Get real-time help with technical questions about SignSpeak features.
                        </p>
                        <Button variant="link" className="px-0 h-auto py-1">Start Chat</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Virtual Office Hours</h4>
                        <p className="text-sm text-muted-foreground">
                          Schedule one-on-one time with our sign language experts and technologists.
                        </p>
                        <Button variant="link" className="px-0 h-auto py-1">Book Appointment</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Community Guidelines</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">1</div>
                <div>
                  <p className="font-medium">Respect All Members</p>
                  <p className="text-sm text-muted-foreground">Treat everyone with dignity and respect, regardless of background or ability.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">2</div>
                <div>
                  <p className="font-medium">Be Supportive</p>
                  <p className="text-sm text-muted-foreground">Offer encouragement and constructive feedback to fellow community members.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">3</div>
                <div>
                  <p className="font-medium">Share Knowledge</p>
                  <p className="text-sm text-muted-foreground">Contribute your experiences and insights to help others on their journey.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">4</div>
                <div>
                  <p className="font-medium">Protect Privacy</p>
                  <p className="text-sm text-muted-foreground">Respect others' privacy and avoid sharing personal information without consent.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;
