import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download } from 'lucide-react';

const TextToImageCard = () => {
  const [text, setText] = useState('Sample Text');
  const [selectedTemplate, setSelectedTemplate] = useState('1');
  const cardRef = useRef(null);

  const templates = [
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
    '/api/placeholder/300/200',
  ];

  const handleTextChange = (e) => setText(e.target.value);
  const handleTemplateChange = (value) => setSelectedTemplate(value);

  const handleShare = () => {
    alert('Sharing functionality would be implemented here.');
  };

  const handleDownload = () => {
    const card = cardRef.current;
    if (!card) return;

    // In a real-world scenario, you'd use a library like html2canvas
    // to convert the DOM element to an image. For this example,
    // we'll simulate the download with a data URL.
    const dummyDataUrl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8qqKKK/ZD8LP/2Q==';

    const link = document.createElement('a');
    link.href = dummyDataUrl;
    link.download = 'image-card.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              <p className="text-white text-xl font-bold text-center">{text}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex space-x-2">
        <Button onClick={handleShare} className="flex-1">Share</Button>
        <Button onClick={handleDownload} className="flex-1">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  );
};

export default TextToImageCard;
