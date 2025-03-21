
import React from "react";

const SpeechOutput: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Speech Output</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Convert sign language to spoken words with our AI-powered translation engine.
      </p>
      <div className="bg-signspeak-accent p-12 rounded-lg text-center">
        <p className="text-xl">Speech output features coming soon...</p>
      </div>
    </div>
  );
};

export default SpeechOutput;
