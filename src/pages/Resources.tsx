
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { FileText, Download, ExternalLink, Heart, BookOpen, Calendar, Search } from "lucide-react";

const ArticleCard = ({
  title,
  excerpt,
  author,
  date,
  category,
  readTime,
  thumbnail
}: {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  thumbnail?: string;
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 h-full">
        <div className="md:col-span-1 bg-muted min-h-40 md:min-h-full relative">
          {thumbnail ? (
            <img src={thumbnail} alt={title} className="object-cover w-full h-full" />
          ) : (
            <div className="flex items-center justify-center h-full">
              <FileText className="h-12 w-12 text-muted-foreground opacity-30" />
            </div>
          )}
        </div>
        <div className="md:col-span-2 flex flex-col">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <Badge className="mb-2">{category}</Badge>
                <CardTitle className="text-lg">{title}</CardTitle>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className={isLiked ? "text-red-500" : ""}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500" : ""}`} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="py-2 flex-grow">
            <p className="text-sm text-muted-foreground mb-4">{excerpt}</p>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${author}`} />
                <AvatarFallback>{author.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">{author} • {date}</span>
              <span className="text-xs bg-muted px-2 py-0.5 rounded-full">{readTime}</span>
            </div>
          </CardContent>
          <CardFooter className="border-t bg-muted/20 p-4">
            <Button variant="outline" className="w-full">Read Article</Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

const ResourceCard = ({
  title,
  description,
  type,
  fileSize
}: {
  title: string;
  description: string;
  type: "PDF" | "Video" | "Guide" | "Dataset";
  fileSize?: string;
}) => {
  const typeIcons = {
    PDF: <FileText className="h-5 w-5" />,
    Video: <BookOpen className="h-5 w-5" />,
    Guide: <BookOpen className="h-5 w-5" />,
    Dataset: <FileText className="h-5 w-5" />
  };

  const typeBadgeColors = {
    PDF: "bg-red-100 text-red-800",
    Video: "bg-blue-100 text-blue-800",
    Guide: "bg-green-100 text-green-800",
    Dataset: "bg-purple-100 text-purple-800"
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base">{title}</CardTitle>
          <Badge className={typeBadgeColors[type]}>
            {typeIcons[type]}
            <span className="ml-1">{type}</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="py-2">
        <p className="text-sm text-muted-foreground">{description}</p>
        {fileSize && (
          <p className="text-xs text-muted-foreground mt-2">Size: {fileSize}</p>
        )}
      </CardContent>
      <CardFooter className="border-t bg-muted/20 flex justify-between p-4">
        <Button variant="ghost" size="sm">Preview</Button>
        <Button size="sm">
          {type === "Video" ? <ExternalLink className="h-4 w-4 mr-1" /> : <Download className="h-4 w-4 mr-1" />}
          {type === "Video" ? "Watch" : "Download"}
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
  isVirtual
}: {
  title: string;
  date: string;
  location: string;
  description: string;
  isVirtual?: boolean;
}) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base">{title}</CardTitle>
          {isVirtual && <Badge variant="outline">Virtual</Badge>}
        </div>
      </CardHeader>
      <CardContent className="py-2">
        <div className="flex items-center text-sm mb-2">
          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
          {date}
        </div>
        <div className="flex items-start">
          <div className="bg-muted p-2 rounded mr-3 mt-0.5">
            <FileText className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-sm">{location}</p>
        </div>
        <p className="text-sm text-muted-foreground mt-3">{description}</p>
      </CardContent>
      <CardFooter className="border-t bg-muted/20 p-4">
        <Button className="w-full">Register</Button>
      </CardFooter>
    </Card>
  );
};

const Resources: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Resources & Events</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Discover articles, events, and resources to support the deaf and mute community.
      </p>
      
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search all resources..." className="pl-10" />
      </div>
      
      <Tabs defaultValue="articles" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="downloadables">Downloadables</TabsTrigger>
          <TabsTrigger value="events">Events & Webinars</TabsTrigger>
        </TabsList>
        
        <TabsContent value="articles">
          <div className="space-y-6">
            <ArticleCard
              title="The Evolution of Sign Language Technology"
              excerpt="Explore how AI and computer vision are transforming sign language recognition and making communication more accessible than ever before."
              author="Dr. James Wilson"
              date="May 15, 2023"
              category="Technology"
              readTime="8 min read"
            />
            
            <ArticleCard
              title="Raising a Deaf Child: A Parent's Guide"
              excerpt="Practical advice and emotional support for parents navigating the journey of raising children with hearing impairments."
              author="Maria Rodriguez"
              date="April 28, 2023"
              category="Parenting"
              readTime="12 min read"
            />
            
            <ArticleCard
              title="Sign Language in the Workplace: Creating Inclusive Environments"
              excerpt="How businesses can foster inclusion and accessibility for deaf and hard of hearing employees and customers."
              author="Alex Thompson"
              date="April 10, 2023"
              category="Workplace"
              readTime="10 min read"
            />
            
            <ArticleCard
              title="The History and Cultural Significance of American Sign Language"
              excerpt="Delve into the rich history of ASL and its importance as a cornerstone of Deaf culture and identity."
              author="Dr. Sarah Johnson"
              date="March 22, 2023"
              category="Culture"
              readTime="15 min read"
            />
            
            <ArticleCard
              title="Breaking Sound Barriers: Technological Innovations for the Deaf Community"
              excerpt="From smart doorbells to AI translators, discover the latest technologies making life more accessible."
              author="Michael Chen"
              date="March 5, 2023"
              category="Technology"
              readTime="7 min read"
            />
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="downloadables">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard
              title="ASL Alphabet Flashcards"
              description="Printable flashcards featuring all letters of the American Sign Language alphabet with clear illustrations."
              type="PDF"
              fileSize="3.2 MB"
            />
            
            <ResourceCard
              title="Beginner's Guide to Sign Language"
              description="A comprehensive guide for beginners learning sign language, including common phrases and tips for practice."
              type="PDF"
              fileSize="8.5 MB"
            />
            
            <ResourceCard
              title="SignSpeak User Manual"
              description="Detailed instructions for using all features of the SignSpeak platform, with troubleshooting tips."
              type="PDF"
              fileSize="4.7 MB"
            />
            
            <ResourceCard
              title="Introduction to Deaf Culture"
              description="Learn about the rich history, traditions, and important aspects of Deaf culture and community."
              type="Video"
            />
            
            <ResourceCard
              title="Common Medical Signs"
              description="Essential signs for medical situations and healthcare settings, organized by category."
              type="Guide"
              fileSize="5.1 MB"
            />
            
            <ResourceCard
              title="Emergency Communication Card"
              description="A printable card with essential phrases in sign language for emergency situations."
              type="PDF"
              fileSize="1.3 MB"
            />
            
            <ResourceCard
              title="ASL Practice Dataset"
              description="A collection of sign language videos with annotations for practicing recognition and interpretation."
              type="Dataset"
              fileSize="650 MB"
            />
            
            <ResourceCard
              title="Fingerspelling Practice Guide"
              description="Exercises and activities to improve your fingerspelling skills in American Sign Language."
              type="Guide"
              fileSize="2.8 MB"
            />
            
            <ResourceCard
              title="Sign Language for Parents"
              description="A special guide for parents to teach basic sign language to young children, with activities."
              type="PDF"
              fileSize="6.2 MB"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="events">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Introduction to SignSpeak"
              date="June 15, 2023 • 3:00 PM EST"
              location="Online Webinar"
              description="Learn how to use all the features of SignSpeak for effective communication and accessibility."
              isVirtual
            />
            
            <EventCard
              title="ASL for Beginners Workshop"
              date="June 20, 2023 • 10:00 AM EST"
              location="Community Center, 123 Main St"
              description="A hands-on workshop for beginners to learn the basics of American Sign Language in a supportive environment."
            />
            
            <EventCard
              title="Deaf Awareness Panel Discussion"
              date="July 8, 2023 • 2:00 PM EST"
              location="Online Event"
              description="Join our panel of deaf advocates and experts for a discussion on current issues and advancements."
              isVirtual
            />
            
            <EventCard
              title="Sign Language in Healthcare"
              date="July 15, 2023 • 9:00 AM EST"
              location="City Hospital Conference Room"
              description="A specialized workshop for healthcare professionals to learn essential medical signs and communication strategies."
            />
            
            <EventCard
              title="Children's Story Time (ASL)"
              date="July 22, 2023 • 11:00 AM EST"
              location="Public Library, 456 Park Ave"
              description="Interactive storytelling session for children, presented in both spoken language and ASL."
            />
            
            <EventCard
              title="Technology for Access Webinar"
              date="August 5, 2023 • 1:00 PM EST"
              location="Online Event"
              description="Discover the latest assistive technologies and digital tools for the deaf and hard of hearing community."
              isVirtual
            />
          </div>
          
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Submit an Event</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Have an event related to sign language, deaf awareness, or accessibility? Share it with our community.
              </p>
              <Button>Submit Event Details</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Support Organizations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>National Association of the Deaf</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The nation's premier civil rights organization of, by, and for deaf and hard of hearing individuals.
              </p>
              <Button variant="outline">Visit Website</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>American Society for Deaf Children</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Supporting and educating families of deaf and hard of hearing children.
              </p>
              <Button variant="outline">Visit Website</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Hearing Loss Association of America</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The nation's leading organization representing people with hearing loss.
              </p>
              <Button variant="outline">Visit Website</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;
