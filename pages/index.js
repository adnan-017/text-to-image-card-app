import React, { useState, useRef } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const TextToImageCard = () => {
  const [text, setText] = useState('Sample Text');
  const [selectedTemplate, setSelectedTemplate] = useState('1');
  const cardRef = useRef(null);

  const templates = [
    'https://picsum.photos/300/200?random=1',
    'https://source.unsplash.com/300x200/?nature,water',
    'https://placekitten.com/300/200',
    'https://placeimg.com/300/200/arch',
    'https://placebeard.it/300x200',
    'https://picsum.photos/300/200?random=2',
    'https://source.unsplash.com/300x200/?city,night',
    'https://placebear.com/300/200',
    'https://placeimg.com/300/200/tech',
    'https://picsum.photos/300/200?random=3'
  ];

  const handleTextChange = (e) => setText(e.target.value);
  const handleTemplateChange = (value) => setSelectedTemplate(value);

  const handleShare = () => {
    alert('Sharing functionality would be implemented here.');
  };

  const handleDownload = () => {
    const card = cardRef.current;
    if (!card) return;

    alert('In a full implementation, this would download the image.');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-4">Text to Image Card</h1>
      <Input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here"
        className="mb-4"
      />
      <Select onValueChange={handleTemplateChange} value={selectedTemplate}>
        <SelectTrigger className="mb-4">
          <SelectValue placeholder="Select a template" />
        </SelectTrigger>
        <SelectContent>
          {templates.map((_, index) => (
            <SelectItem key={index + 1} value={String(index + 1)}>
              Template {index + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Card className="mb-4" ref={cardRef}>
        <CardContent className="p-4">
          <div className="relative">
            <img
              src={templates[parseInt(selectedTemplate) - 1]}
              alt={`Template ${selectedTemplate}`}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-xl font-bold text-center shadow-sm">{text}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex space-x-2">
        <Button onClick={handleShare} className="flex-1">Share</Button>
        <Button onClick={handleDownload} className="flex-1">
          Download
        </Button>
      </div>
    </div>
  );
};

export default TextToImageCard;
