'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLocale } from '@/hooks/use-locale';
import { t } from '@/lib/localization';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  accept?: Record<string, string[]>;
  maxSize?: number;
}

export function FileUpload({ onFileSelect, accept = { 'message/*': ['.eml', '.msg'] }, maxSize = 10 * 1024 * 1024 }: FileUploadProps) {
  const { locale } = useLocale();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setUploadedFile(file);
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept,
    maxSize,
    multiple: false,
  });

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className="space-y-4">
      {!uploadedFile ? (
        <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-colors">
          <div {...getRootProps()} className="cursor-pointer p-8">
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center space-y-4">
              <Upload className={`h-12 w-12 ${isDragActive ? 'text-primary' : 'text-muted-foreground'}`} />
              <div className="text-center">
                <p className="text-lg font-medium">
                  {isDragActive 
                    ? t('fileupload.dropHere', locale)
                    : t('fileupload.uploadFile', locale)
                  }
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('fileupload.fileDescription', locale)}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {t('fileupload.maxSize', locale)}
                </p>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <File className="h-8 w-8 text-blue-500" />
              <div>
                <p className="font-medium">{uploadedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(uploadedFile.size / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={removeFile}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}

      {fileRejections.length > 0 && (
        <div className="text-sm text-red-500">
          {fileRejections[0].errors.map((error) => (
            <p key={error.code}>
              {error.code === 'file-too-large' 
                ? t('fileupload.fileTooLarge', locale)
                : t('fileupload.unsupportedFormat', locale)
              }
            </p>
          ))}
        </div>
      )}
    </div>
  );
}