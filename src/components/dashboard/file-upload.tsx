'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Upload, File as FileIcon, X, Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      if (files[0].size > 10 * 1024 * 1024) { // 10MB limit
        toast({
            variant: "destructive",
            title: "File too large",
            description: "Please upload a file smaller than 10MB.",
        });
        return;
      }
      setFile(files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    const input = document.getElementById('file-upload') as HTMLInputElement;
    if(input) input.value = '';
  }

  const handleUpload = async () => {
    if (!file) {
      toast({
        variant: "destructive",
        title: "No File Selected",
        description: "Please select a file to upload.",
      });
      return;
    }

    setIsLoading(true);
    // Placeholder for actual upload logic
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);

    toast({
      title: "Upload Successful",
      description: `"${file.name}" has been uploaded.`,
    });
    // handleRemoveFile(); // Uncomment to clear file after successful upload
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Upload className="text-primary"/> File Upload
        </CardTitle>
        <CardDescription>Upload a file for processing or analysis. Max file size: 10MB.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
            <Input id="file-upload" type="file" onChange={handleFileChange} className="w-full" disabled={isLoading}/>
            <label htmlFor="file-upload" className="sr-only">Choose a file</label>
        </div>

        {file && (
          <Alert className="animate-in fade-in-50">
            <AlertDescription className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">{file.name}</span>
                <span className="text-xs text-muted-foreground">({(file.size / 1024).toFixed(2)} KB)</span>
              </div>
              <Button variant="ghost" size="icon" onClick={handleRemoveFile} className="h-6 w-6" disabled={isLoading}>
                <X className="h-4 w-4" />
                <span className="sr-only">Remove file</span>
              </Button>
            </AlertDescription>
          </Alert>
        )}

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button onClick={handleUpload} disabled={isLoading || !file}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
            {isLoading ? 'Uploading...' : 'Upload File'}
          </Button>
          {isLoading && <p className="text-sm text-muted-foreground animate-pulse">Processing your file...</p>}
        </div>
      </CardContent>
    </Card>
  );
}
