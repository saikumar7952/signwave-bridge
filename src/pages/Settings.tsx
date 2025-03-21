
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Bell, 
  User, 
  Shield, 
  Globe, 
  MonitorSmartphone, 
  Volume2, 
  Eye, 
  Mic, 
  Camera, 
  Menu
} from "lucide-react";

const Settings: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [highContrastMode, setHighContrastMode] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [textSpeed, setTextSpeed] = useState([1]);
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Customize your experience and manage your account preferences.
      </p>
      
      <Tabs defaultValue="account" className="mb-8">
        <TabsList className="mb-6 grid w-full grid-cols-5">
          <TabsTrigger value="account">
            <User className="h-4 w-4 mr-2" />
            Account
          </TabsTrigger>
          <TabsTrigger value="accessibility">
            <Eye className="h-4 w-4 mr-2" />
            Accessibility
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy">
            <Shield className="h-4 w-4 mr-2" />
            Privacy
          </TabsTrigger>
          <TabsTrigger value="devices">
            <MonitorSmartphone className="h-4 w-4 mr-2" />
            Devices
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Manage your account details and personal information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="johndoe" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" defaultValue="I'm a user of SignSpeak who loves technology and accessibility." />
                  </div>
                </div>
                
                <div className="md:w-1/3 flex flex-col items-center">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=JD" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" className="mb-2">Change Photo</Button>
                  <Button variant="ghost" size="sm">Remove</Button>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Communication Preferences</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="language">Preferred Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sign-dialect">Sign Language Dialect</Label>
                  <Select defaultValue="asl">
                    <SelectTrigger id="sign-dialect">
                      <SelectValue placeholder="Select dialect" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asl">American Sign Language (ASL)</SelectItem>
                      <SelectItem value="bsl">British Sign Language (BSL)</SelectItem>
                      <SelectItem value="auslan">Auslan (Australian Sign Language)</SelectItem>
                      <SelectItem value="lsf">French Sign Language (LSF)</SelectItem>
                      <SelectItem value="jsl">Japanese Sign Language</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="accessibility">
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Settings</CardTitle>
              <CardDescription>
                Customize the app interface for your specific needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Visual Settings</h3>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="high-contrast">High Contrast Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Increases contrast for better visibility
                    </p>
                  </div>
                  <Switch 
                    id="high-contrast" 
                    checked={highContrastMode}
                    onCheckedChange={setHighContrastMode}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="large-text">Large Text</Label>
                    <p className="text-sm text-muted-foreground">
                      Increases text size throughout the application
                    </p>
                  </div>
                  <Switch 
                    id="large-text" 
                    checked={largeText}
                    onCheckedChange={setLargeText}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="text-size">Text Size</Label>
                    <span className="text-sm text-muted-foreground">100%</span>
                  </div>
                  <Slider defaultValue={[100]} min={75} max={200} step={25} />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Sign Language Recognition</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="recognition-speed">Recognition Speed</Label>
                  <Select defaultValue="balanced">
                    <SelectTrigger id="recognition-speed">
                      <SelectValue placeholder="Select speed" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="slow">Slow (More Accurate)</SelectItem>
                      <SelectItem value="balanced">Balanced</SelectItem>
                      <SelectItem value="fast">Fast (More Responsive)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="text-speed">Text-to-Speech Speed</Label>
                  <div className="flex items-center gap-4">
                    <Slider 
                      id="text-speed" 
                      value={textSpeed} 
                      onValueChange={setTextSpeed} 
                      max={2} 
                      min={0.5} 
                      step={0.1} 
                      className="flex-1"
                    />
                    <span className="text-sm font-medium w-12">{textSpeed[0]}x</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Input & Output Settings</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="py-4">
                      <div className="flex items-center">
                        <Camera className="h-5 w-5 mr-2 text-muted-foreground" />
                        <CardTitle className="text-base">Camera Settings</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="camera-device">Camera Device</Label>
                          <Select defaultValue="default">
                            <SelectTrigger id="camera-device">
                              <SelectValue placeholder="Select camera" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="default">Default Camera</SelectItem>
                              <SelectItem value="front">Front Camera</SelectItem>
                              <SelectItem value="rear">Rear Camera</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="camera-resolution">Resolution</Label>
                          <Select defaultValue="720p">
                            <SelectTrigger id="camera-resolution">
                              <SelectValue placeholder="Select resolution" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="480p">480p</SelectItem>
                              <SelectItem value="720p">720p (HD)</SelectItem>
                              <SelectItem value="1080p">1080p (Full HD)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="py-4">
                      <div className="flex items-center">
                        <Volume2 className="h-5 w-5 mr-2 text-muted-foreground" />
                        <CardTitle className="text-base">Audio Settings</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="speech-voice">Text-to-Speech Voice</Label>
                          <Select defaultValue="female">
                            <SelectTrigger id="speech-voice">
                              <SelectValue placeholder="Select voice" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="female">Female Voice</SelectItem>
                              <SelectItem value="male">Male Voice</SelectItem>
                              <SelectItem value="neutral">Gender Neutral Voice</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between mb-1">
                            <Label htmlFor="volume-level">Volume Level</Label>
                            <span className="text-sm text-muted-foreground">80%</span>
                          </div>
                          <Slider id="volume-level" defaultValue={[80]} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-end gap-2">
                <Button variant="outline">Reset to Defaults</Button>
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose when and how you want to be notified.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-notifications">Enable Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Master toggle for all notifications
                  </p>
                </div>
                <Switch 
                  id="enable-notifications" 
                  checked={notificationsEnabled}
                  onCheckedChange={setNotificationsEnabled}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enable-sounds">Notification Sounds</Label>
                  <p className="text-sm text-muted-foreground">
                    Play sounds for notifications
                  </p>
                </div>
                <Switch 
                  id="enable-sounds" 
                  checked={soundEnabled}
                  onCheckedChange={setSoundEnabled}
                  disabled={!notificationsEnabled}
                />
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Categories</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Community Updates</p>
                      <p className="text-sm text-muted-foreground">
                        New posts, replies to your comments
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Email</Badge>
                      <Badge variant="outline">In-app</Badge>
                      <Switch defaultChecked disabled={!notificationsEnabled} />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Learning Reminders</p>
                      <p className="text-sm text-muted-foreground">
                        Course updates, practice reminders
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Email</Badge>
                      <Badge variant="outline">In-app</Badge>
                      <Switch defaultChecked disabled={!notificationsEnabled} />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Event Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Upcoming events and webinars
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Email</Badge>
                      <Badge variant="outline">In-app</Badge>
                      <Switch defaultChecked disabled={!notificationsEnabled} />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">System Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Account updates, security alerts
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Email</Badge>
                      <Badge variant="outline">In-app</Badge>
                      <Switch defaultChecked disabled={!notificationsEnabled} />
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-end gap-2">
                <Button variant="outline">Reset to Defaults</Button>
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
              <CardDescription>
                Manage your data and security preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Account Security</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
                
                <Button variant="outline">Change Password</Button>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Data & Privacy</h3>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-medium">Usage Data Collection</p>
                    <p className="text-sm text-muted-foreground">
                      Allow us to collect anonymous usage data to improve our service
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-medium">Sign Language Data</p>
                    <p className="text-sm text-muted-foreground">
                      Store sign language data to improve recognition accuracy
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="font-medium">Profile Visibility</p>
                    <p className="text-sm text-muted-foreground">
                      Make your profile visible to other community members
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Data Management</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-dashed">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center space-y-2">
                        <Button variant="outline" className="mt-2">Download My Data</Button>
                        <p className="text-xs text-muted-foreground">
                          Export all your personal data in a readable format
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-dashed border-destructive/50">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center space-y-2">
                        <Button variant="destructive" className="mt-2">Delete Account</Button>
                        <p className="text-xs text-muted-foreground">
                          Permanently remove your account and all data
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-end gap-2">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="devices">
          <Card>
            <CardHeader>
              <CardTitle>Connected Devices</CardTitle>
              <CardDescription>
                Manage devices and connections to SignSpeak.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Currently Active Session</h3>
                
                <Card className="border-primary bg-primary/5">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <MonitorSmartphone className="h-8 w-8 text-primary mt-1" />
                        <div>
                          <p className="font-medium">Chrome on Windows</p>
                          <p className="text-sm text-muted-foreground">
                            Current session • Last active: Just now
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            192.168.1.1 • Los Angeles, CA
                          </p>
                        </div>
                      </div>
                      <Badge>Current</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-2">
                  <h3 className="text-base font-medium">Other Active Sessions</h3>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <Menu className="h-8 w-8 text-muted-foreground mt-1" />
                          <div>
                            <p className="font-medium">Safari on iPhone</p>
                            <p className="text-sm text-muted-foreground">
                              Last active: 2 hours ago
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              107.22.143.21 • San Francisco, CA
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Log Out</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <Globe className="h-8 w-8 text-muted-foreground mt-1" />
                          <div>
                            <p className="font-medium">Firefox on macOS</p>
                            <p className="text-sm text-muted-foreground">
                              Last active: Yesterday
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              191.234.72.15 • New York, NY
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Log Out</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Linked Accounts</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#1877F2] text-white rounded-full p-1.5">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Facebook</p>
                        <p className="text-sm text-muted-foreground">Not connected</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#1DA1F2] text-white rounded-full p-1.5">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 5.89722C21.2641 6.21692 20.4733 6.43018 19.6436 6.52952C20.4908 6.02268 21.141 5.2291 21.4475 4.2999C20.6548 4.75756 19.7765 5.09599 18.8419 5.2886C18.0934 4.50337 17.0276 4 15.8472 4C13.5819 4 11.7433 5.80233 11.7433 8.03955C11.7433 8.35784 11.7794 8.66787 11.8487 8.96487C8.43962 8.79462 5.41611 7.18566 3.3924 4.73863C3.03909 5.33651 2.83813 6.02278 2.83813 6.75969C2.83813 8.15037 3.56271 9.36283 4.66108 10.0994C3.98964 10.0778 3.35752 9.89453 2.80402 9.58899C2.80372 9.6062 2.80372 9.62315 2.80372 9.64128C2.80372 11.6015 4.2174 13.2527 6.09577 13.6342C5.75058 13.7255 5.38812 13.7739 5.01405 13.7739C4.74878 13.7739 4.49219 13.7488 4.24091 13.7024C4.76428 15.327 6.27858 16.4852 8.07405 16.5171C6.67055 17.5958 4.9006 18.2421 2.97944 18.2421C2.64769 18.2421 2.31993 18.223 2 18.1855C3.81453 19.3303 5.97308 20 8.29088 20C15.8375 20 19.9644 13.8425 19.9644 8.50872C19.9644 8.33243 19.9603 8.15661 19.9521 7.98184C20.7542 7.4121 21.4499 6.70276 22 5.89722Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Twitter</p>
                        <p className="text-sm text-muted-foreground">Connected as @johndoe</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#DB4437] text-white rounded-full p-1.5">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Google</p>
                        <p className="text-sm text-muted-foreground">Connected as john.doe@gmail.com</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-between">
                <Button variant="destructive" size="sm">Log Out All Devices</Button>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
