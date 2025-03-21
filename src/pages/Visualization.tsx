
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Volume2, Send, Search, Grid2X2, Type, Smile, Coffee, Home, UtensilsCrossed, Phone, Car } from "lucide-react";

const CategoryItem = ({ icon: Icon, label, onClick }: { icon: React.ElementType, label: string, onClick: () => void }) => (
  <Button 
    variant="outline" 
    className="flex flex-col items-center justify-center h-24 aspect-square"
    onClick={onClick}
  >
    <Icon className="h-8 w-8 mb-2" />
    <span className="text-xs">{label}</span>
  </Button>
);

const PhraseItem = ({ text, onClick }: { text: string, onClick: () => void }) => (
  <Button 
    variant="outline" 
    className="justify-start h-auto py-3 px-4 w-full overflow-hidden"
    onClick={onClick}
  >
    <span className="truncate">{text}</span>
  </Button>
);

const Visualization: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageHistory, setMessageHistory] = useState<string[]>([]);

  const commonCategories = [
    { icon: Coffee, label: "Food & Drink" },
    { icon: Home, label: "Home" },
    { icon: UtensilsCrossed, label: "Restaurant" },
    { icon: Phone, label: "Communication" },
    { icon: Car, label: "Transportation" },
    { icon: Smile, label: "Feelings" },
  ];

  const commonPhrases = [
    "I need help, please.",
    "Can you please speak slower?",
    "I don't understand.",
    "Thank you for your patience.",
    "I am deaf/mute and use this app to communicate.",
    "Could you write it down?",
    "Can I have some water?",
    "Where is the bathroom?",
    "I need medical assistance.",
    "I'm looking for the nearest bus stop."
  ];

  const addToMessage = (text: string) => {
    setCurrentMessage(prev => prev ? `${prev} ${text}` : text);
  };

  const sendMessage = () => {
    if (currentMessage.trim()) {
      setMessageHistory(prev => [...prev, currentMessage]);
      setCurrentMessage("");
    }
  };

  const speakMessage = (text: string) => {
    // In a real implementation, this would use the Web Speech API
    console.log(`Speaking: ${text}`);
    // Speech synthesis would be implemented here
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Visualization Tools</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Symbol-based communication tools for mute users to express themselves effectively.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Message Builder</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <Input 
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type or build your message here..."
                  className="flex-1"
                />
                <Button variant="outline" onClick={() => setCurrentMessage("")}>
                  Clear
                </Button>
              </div>

              <div className="flex gap-2 mb-6">
                <Button onClick={sendMessage} className="flex-1">
                  <Send className="mr-2 h-4 w-4" />
                  Send
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => speakMessage(currentMessage)}
                  disabled={!currentMessage.trim()}
                  className="flex-1"
                >
                  <Volume2 className="mr-2 h-4 w-4" />
                  Speak
                </Button>
              </div>

              <Tabs defaultValue="categories">
                <TabsList className="mb-4 w-full grid grid-cols-3">
                  <TabsTrigger value="categories">
                    <Grid2X2 className="h-4 w-4 mr-2" />
                    Categories
                  </TabsTrigger>
                  <TabsTrigger value="phrases">
                    <Type className="h-4 w-4 mr-2" />
                    Common Phrases
                  </TabsTrigger>
                  <TabsTrigger value="recent">
                    <Search className="h-4 w-4 mr-2" />
                    Recent
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="categories">
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {commonCategories.map((category, index) => (
                      <CategoryItem 
                        key={index} 
                        icon={category.icon} 
                        label={category.label} 
                        onClick={() => addToMessage(category.label)}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="phrases">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {commonPhrases.map((phrase, index) => (
                      <PhraseItem 
                        key={index} 
                        text={phrase} 
                        onClick={() => setCurrentMessage(phrase)}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="recent">
                  {messageHistory.length > 0 ? (
                    <div className="grid grid-cols-1 gap-2">
                      {messageHistory.slice().reverse().map((message, index) => (
                        <PhraseItem 
                          key={index} 
                          text={message} 
                          onClick={() => setCurrentMessage(message)}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-center py-6 text-muted-foreground">
                      Your recent messages will appear here.
                    </p>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Communication History</CardTitle>
            </CardHeader>
            <CardContent>
              {messageHistory.length > 0 ? (
                <div className="space-y-3">
                  {messageHistory.map((message, index) => (
                    <div key={index} className="flex justify-between items-start border-b pb-2">
                      <p className="text-sm">{message}</p>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        onClick={() => speakMessage(message)}
                        className="h-8 w-8"
                      >
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">
                    Your sent messages will appear here.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Quick Help</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Use this visualization tool to communicate with others:
              </p>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">1</span>
                  Type your message or select from categories/phrases
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">2</span>
                  Press "Send" to add to conversation history
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary font-bold rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">3</span>
                  Use "Speak" button to have your message spoken aloud
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Visualization;
