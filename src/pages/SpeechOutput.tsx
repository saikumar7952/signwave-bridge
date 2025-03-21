
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Volume2, Mic, PauseCircle, RefreshCw, Download } from "lucide-react";
import { Label } from "@/components/ui/label";

const SpeechOutput: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const [voice, setVoice] = useState("default");
  const [speed, setSpeed] = useState([1]);
  const [pitch, setPitch] = useState([1]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startRecording = () => {
    setIsRecording(true);
    // In a real implementation, this would access the camera and start sign recognition
    // Simulating recognition after 3 seconds
    setTimeout(() => {
      setIsRecording(false);
      setRecognizedText("Hello, how are you today? I'm using SignSpeak to communicate.");
    }, 3000);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const resetRecognition = () => {
    setRecognizedText("");
  };

  const speakText = () => {
    if (!recognizedText) return;
    
    // In a real implementation, this would use the Web Speech API with the selected voice/settings
    console.log(`Speaking text with voice: ${voice}, speed: ${speed}, pitch: ${pitch}`);
    
    // For demo purposes, we'll just log this
    // In reality, you would use the SpeechSynthesis API:
    /*
    const utterance = new SpeechSynthesisUtterance(recognizedText);
    utterance.voice = speechSynthesis.getVoices().find(v => v.name === voice);
    utterance.rate = speed[0];
    utterance.pitch = pitch[0];
    speechSynthesis.speak(utterance);
    */
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Speech Output</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Convert sign language to spoken words with our AI-powered translation engine.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Sign Language Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                {isRecording ? (
                  <>
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      Recording
                    </div>
                    <p className="text-center text-muted-foreground">
                      Camera active. Please sign clearly.
                    </p>
                  </>
                ) : (
                  <p className="text-center text-muted-foreground">
                    Camera feed will appear here
                  </p>
                )}
              </div>

              <div className="flex gap-3 mb-6">
                {!isRecording ? (
                  <Button onClick={startRecording} className="flex-1">
                    <Mic className="mr-2 h-4 w-4" />
                    Start Recognition
                  </Button>
                ) : (
                  <Button onClick={stopRecording} variant="outline" className="flex-1">
                    <PauseCircle className="mr-2 h-4 w-4" />
                    Stop Recognition
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  onClick={resetRecognition}
                  disabled={!recognizedText}
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>

              <div className="bg-muted p-4 rounded-lg min-h-24">
                <h3 className="text-sm font-medium mb-2">Recognized Text:</h3>
                {recognizedText ? (
                  <p>{recognizedText}</p>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    {isRecording 
                      ? "Recognizing sign language..." 
                      : "Sign language translations will appear here"}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Speech Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="voice">
                <TabsList className="mb-4 grid w-full grid-cols-2">
                  <TabsTrigger value="voice">Voice Options</TabsTrigger>
                  <TabsTrigger value="history">Speech History</TabsTrigger>
                </TabsList>

                <TabsContent value="voice" className="space-y-4">
                  <div>
                    <Label htmlFor="voice-select" className="mb-2 block">Select Voice</Label>
                    <Select value={voice} onValueChange={setVoice}>
                      <SelectTrigger id="voice-select">
                        <SelectValue placeholder="Select a voice" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default Voice</SelectItem>
                        <SelectItem value="male">Male Voice</SelectItem>
                        <SelectItem value="female">Female Voice</SelectItem>
                        <SelectItem value="child">Child Voice</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="speech-speed">Speaking Speed</Label>
                      <span className="text-sm">{speed[0]}x</span>
                    </div>
                    <Slider 
                      id="speech-speed"
                      value={speed} 
                      onValueChange={setSpeed}
                      min={0.5}
                      max={2} 
                      step={0.1}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="speech-pitch">Voice Pitch</Label>
                      <span className="text-sm">{pitch[0]}x</span>
                    </div>
                    <Slider 
                      id="speech-pitch"
                      value={pitch} 
                      onValueChange={setPitch}
                      min={0.5}
                      max={2} 
                      step={0.1}
                    />
                  </div>

                  <Button 
                    onClick={speakText} 
                    disabled={!recognizedText}
                    className="w-full"
                  >
                    <Volume2 className="mr-2 h-4 w-4" />
                    Speak Text
                  </Button>
                </TabsContent>

                <TabsContent value="history">
                  <p className="text-sm text-muted-foreground mb-4">
                    Your recent speech outputs will be saved here for easy access.
                  </p>
                  
                  <div className="space-y-2">
                    {/* This would be populated from a history array in a real app */}
                    <div className="border rounded-md p-3">
                      <p className="text-sm mb-2">Hello, how are you today?</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Volume2 className="h-3 w-3 mr-1" />
                          Speak
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Download className="h-3 w-3 mr-1" />
                          Save
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3">
                      <p className="text-sm mb-2">I need some assistance, please.</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Volume2 className="h-3 w-3 mr-1" />
                          Speak
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Download className="h-3 w-3 mr-1" />
                          Save
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted rounded-lg p-3">
                  <h3 className="text-sm font-medium mb-1">1. Capture Sign Language</h3>
                  <p className="text-xs text-muted-foreground">
                    Our AI-powered camera recognizes your hand gestures and sign language movements.
                  </p>
                </div>
                
                <div className="bg-muted rounded-lg p-3">
                  <h3 className="text-sm font-medium mb-1">2. Translate to Text</h3>
                  <p className="text-xs text-muted-foreground">
                    The AI model interprets these gestures and converts them to written text.
                  </p>
                </div>
                
                <div className="bg-muted rounded-lg p-3">
                  <h3 className="text-sm font-medium mb-1">3. Convert to Speech</h3>
                  <p className="text-xs text-muted-foreground">
                    Text is converted to natural-sounding speech using advanced text-to-speech technology.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <audio ref={audioRef} className="hidden" controls />
                <h3 className="text-sm font-medium mb-2">Tips for Best Results:</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Sign in a well-lit area</li>
                  <li>• Keep your hands within the camera frame</li>
                  <li>• Sign at a moderate pace</li>
                  <li>• Use clear, distinct gestures</li>
                  <li>• Position yourself 2-3 feet from the camera</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SpeechOutput;
