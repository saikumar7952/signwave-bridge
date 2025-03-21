
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Mic, Play, Video, Volume2 } from "lucide-react";

const DeafAccessibility: React.FC = () => {
  const [captionsEnabled, setCaptionsEnabled] = useState(true);
  const [visualAlertsEnabled, setVisualAlertsEnabled] = useState(true);
  const [isRecognizing, setIsRecognizing] = useState(false);

  const handleStartRecognition = () => {
    setIsRecognizing(true);
    // In a real implementation, this would start speech recognition
    setTimeout(() => {
      setIsRecognizing(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Deaf Accessibility Features</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Tools and features designed specifically for the deaf and hard of hearing community.
      </p>

      <Tabs defaultValue="live-captions" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="live-captions">Live Captions</TabsTrigger>
          <TabsTrigger value="sign-to-text">Sign Language to Text</TabsTrigger>
          <TabsTrigger value="visual-alerts">Visual Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="live-captions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Live Captions</CardTitle>
              <CardDescription>
                Real-time speech-to-text conversion for audio and video content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-6">
                <Switch 
                  id="captions-mode" 
                  checked={captionsEnabled}
                  onCheckedChange={setCaptionsEnabled}
                />
                <Label htmlFor="captions-mode">Enable Live Captions</Label>
              </div>

              <div className="bg-muted rounded-lg p-6 text-center relative overflow-hidden">
                <div className="absolute top-2 right-2 text-xs bg-primary text-white px-2 py-1 rounded-full">
                  {captionsEnabled ? "Captions ON" : "Captions OFF"}
                </div>
                
                <Video className="mx-auto mb-4 text-muted-foreground h-16 w-16" />
                
                <p className="text-sm mb-4">Video content will appear here</p>
                
                {captionsEnabled && (
                  <div className="bg-background border p-3 rounded-md shadow-sm mt-4 max-w-md mx-auto">
                    <p className="text-sm font-medium">
                      {isRecognizing 
                        ? "Processing speech..." 
                        : "Captions will appear here when speech is detected."}
                    </p>
                  </div>
                )}
                
                <Button 
                  onClick={handleStartRecognition} 
                  disabled={isRecognizing || !captionsEnabled} 
                  className="mt-4"
                >
                  <Mic className="mr-2 h-4 w-4" />
                  {isRecognizing ? "Listening..." : "Simulate Speech"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sign-to-text" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sign Language to Text</CardTitle>
              <CardDescription>
                AI-powered sign language recognition that converts signs to text.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-6 flex flex-col items-center">
                <div className="relative mb-6 w-full max-w-md aspect-video bg-black rounded-lg flex items-center justify-center">
                  <p className="text-white">Camera feed will appear here</p>
                  <div className="absolute bottom-4 left-0 right-0 bg-background/80 mx-4 p-2 rounded text-center">
                    <p className="text-sm font-medium">Position your hands in the frame and sign</p>
                  </div>
                </div>

                <div className="bg-background border w-full max-w-md p-4 rounded-md shadow-sm">
                  <p className="text-center text-muted-foreground">
                    Recognized text will appear here...
                  </p>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button variant="outline">
                    <Play className="mr-2 h-4 w-4" />
                    Start Recognition
                  </Button>
                  <Button>
                    <Volume2 className="mr-2 h-4 w-4" />
                    Speak Text
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visual-alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Visual Alerts</CardTitle>
              <CardDescription>
                Convert audio alerts to visual notifications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-6">
                <Switch 
                  id="alerts-mode" 
                  checked={visualAlertsEnabled}
                  onCheckedChange={setVisualAlertsEnabled}
                />
                <Label htmlFor="alerts-mode">Enable Visual Alerts</Label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-dashed">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Doorbell</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Flash room lights when someone is at the door.
                    </p>
                    <Switch id="doorbell-alert" defaultChecked disabled={!visualAlertsEnabled} />
                  </CardContent>
                </Card>
                
                <Card className="border-dashed">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Phone Calls</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Flash notification and vibration for calls.
                    </p>
                    <Switch id="phone-alert" defaultChecked disabled={!visualAlertsEnabled} />
                  </CardContent>
                </Card>
                
                <Card className="border-dashed">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Alarms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Visual cues for alarms and timers.
                    </p>
                    <Switch id="alarm-alert" defaultChecked disabled={!visualAlertsEnabled} />
                  </CardContent>
                </Card>
                
                <Card className="border-dashed">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Emergency Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Full screen visual alert for emergencies.
                    </p>
                    <Switch id="emergency-alert" defaultChecked disabled={!visualAlertsEnabled} />
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg text-center">
                <p className="text-sm font-medium mb-2">Test Visual Alert</p>
                <Button variant="outline" disabled={!visualAlertsEnabled}>
                  Simulate Alert
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sign Language Dictionary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Access a comprehensive dictionary of sign language gestures with video demonstrations.
              </p>
              <Button variant="outline">Browse Dictionary</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Connect with Interpreters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Connect with live sign language interpreters for important meetings or appointments.
              </p>
              <Button variant="outline">Find Interpreter</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeafAccessibility;
