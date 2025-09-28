import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const RequestQuote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pluginThemeName: "",
    whatYouNeed: "",
    moreDetails: "",
    urgent: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent! ✨",
      description: "Our expert team will get back to you soon.",
    });
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gpl-dark via-background to-gpl-darker"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gpl-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gpl-accent/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gpl-green via-white to-gpl-accent bg-clip-text text-transparent">
            Request a Quote
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Need a plugin or theme? Missing file? Want license? Or need custom plugin and setup help?<br />
            <span className="text-gpl-green font-semibold">Tell us what you need — our expert team will help you.</span>
          </p>
        </div>

        {/* Form Card */}
        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-xl border-gpl-green/20 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl text-gpl-green">Get Your Custom Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-foreground font-medium">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="bg-background/50 border-gpl-green/30 focus:border-gpl-green focus:ring-gpl-green/20 transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-foreground font-medium">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="bg-background/50 border-gpl-green/30 focus:border-gpl-green focus:ring-gpl-green/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Plugin/Theme Name */}
              <div className="space-y-3">
                <Label htmlFor="pluginTheme" className="text-foreground font-medium">Plugin / Theme Name</Label>
                <Input
                  id="pluginTheme"
                  value={formData.pluginThemeName}
                  onChange={(e) => handleInputChange("pluginThemeName", e.target.value)}
                  placeholder="Enter the specific plugin or theme name"
                  className="bg-background/50 border-gpl-green/30 focus:border-gpl-green focus:ring-gpl-green/20 transition-all duration-300"
                />
              </div>

              {/* What You Need */}
              <div className="space-y-3">
                <Label className="text-foreground font-medium">What You Need</Label>
                <Select onValueChange={(value) => handleInputChange("whatYouNeed", value)}>
                  <SelectTrigger className="bg-background/50 border-gpl-green/30 focus:border-gpl-green focus:ring-gpl-green/20 transition-all duration-300">
                    <SelectValue placeholder="Choose what you need" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-gpl-green/20">
                    <SelectItem value="file-not-found" className="focus:bg-gpl-green/10 focus:text-gpl-green">
                      🔍 File Not Found
                    </SelectItem>
                    <SelectItem value="license-request" className="focus:bg-gpl-green/10 focus:text-gpl-green">
                      📜 License Request
                    </SelectItem>
                    <SelectItem value="update-needed" className="focus:bg-gpl-green/10 focus:text-gpl-green">
                      🔄 Update Needed
                    </SelectItem>
                    <SelectItem value="custom-plugin" className="focus:bg-gpl-green/10 focus:text-gpl-green">
                      ⚡ Custom Plugin
                    </SelectItem>
                    <SelectItem value="install-setup" className="focus:bg-gpl-green/10 focus:text-gpl-green">
                      🛠️ Install / Setup Help
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* More Details */}
              <div className="space-y-3">
                <Label htmlFor="details" className="text-foreground font-medium">More Details</Label>
                <Textarea
                  id="details"
                  value={formData.moreDetails}
                  onChange={(e) => handleInputChange("moreDetails", e.target.value)}
                  placeholder="Write your message with detailed requirements..."
                  className="min-h-[120px] bg-background/50 border-gpl-green/30 focus:border-gpl-green focus:ring-gpl-green/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Urgent */}
              <div className="space-y-4">
                <Label className="text-foreground font-medium">Urgent?</Label>
                <RadioGroup 
                  value={formData.urgent} 
                  onValueChange={(value) => handleInputChange("urgent", value)}
                  className="flex gap-8"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value="yes" 
                      id="urgent-yes" 
                      className="border-gpl-green/50 text-gpl-green focus:ring-gpl-green/20" 
                    />
                    <Label htmlFor="urgent-yes" className="text-foreground cursor-pointer">
                      ⚡ Yes, it's urgent
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value="no" 
                      id="urgent-no" 
                      className="border-gpl-green/50 text-gpl-green focus:ring-gpl-green/20" 
                    />
                    <Label htmlFor="urgent-no" className="text-foreground cursor-pointer">
                      📅 No, standard timing
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-gpl-green to-gpl-accent hover:from-gpl-accent hover:to-gpl-green text-black font-bold py-4 text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-gpl-green/25"
                >
                  🚀 Send Quote Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Closing Message */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-card/30 backdrop-blur-lg border border-gpl-green/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed">
              <span className="text-gpl-green font-semibold">No matter what you need</span> — missing file, license, or full custom work — 
              <span className="text-white font-medium"> our team will manage everything for you.</span>
              <br />
              <span className="text-gpl-accent font-semibold">Just send your request now.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;