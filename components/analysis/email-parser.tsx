'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mail, User, Calendar, Link2, Hash, FileText } from 'lucide-react';
import { EmailParsedData } from '@/types';
import { useLocale } from '@/hooks/use-locale';

interface EmailParserProps {
  parsedData: EmailParsedData;
}

export function EmailParser({ parsedData }: EmailParserProps) {
  const { locale } = useLocale();
  const [selectedTab, setSelectedTab] = useState<'headers' | 'body' | 'attachments' | 'iocs'>('headers');

  const tabs = [
    { id: 'headers' as const, label: locale === 'az' ? 'Başlıqlar' : 'Headers', icon: Mail },
    { id: 'body' as const, label: locale === 'az' ? 'Məzmun' : 'Body', icon: FileText },
    { id: 'attachments' as const, label: locale === 'az' ? 'Əlavələr' : 'Attachments', icon: Link2 },
    { id: 'iocs' as const, label: 'IOCs', icon: Hash },
  ];

  return (
    <div className="space-y-6">
      {/* Email Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            {locale === 'az' ? 'Email məlumatları' : 'Email Overview'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {locale === 'az' ? 'Göndərən' : 'From'}:
                </span>
                <span className="text-sm">{parsedData.from}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {locale === 'az' ? 'Alan' : 'To'}:
                </span>
                <span className="text-sm">{parsedData.to.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {locale === 'az' ? 'Tarix' : 'Date'}:
                </span>
                <span className="text-sm">{new Date(parsedData.date).toLocaleString()}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-sm font-medium">
                  {locale === 'az' ? 'Mövzu' : 'Subject'}:
                </span>
                <p className="text-sm mt-1 p-2 bg-muted rounded">{parsedData.subject}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analysis Tabs */}
      <Card>
        <CardHeader>
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
                {tab.id === 'attachments' && parsedData.attachments.length > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {parsedData.attachments.length}
                  </Badge>
                )}
                {tab.id === 'iocs' && parsedData.extracted_iocs.length > 0 && (
                  <Badge variant="destructive" className="ml-1">
                    {parsedData.extracted_iocs.length}
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-80">
            {selectedTab === 'headers' && (
              <div className="space-y-2">
                {Object.entries(parsedData.headers).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-2 hover:bg-muted rounded">
                    <span className="font-medium text-sm">{key}:</span>
                    <span className="text-sm lg:col-span-2 break-all">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'body' && (
              <div className="space-y-4">
                {parsedData.body_text && (
                  <div>
                    <h4 className="font-medium mb-2">
                      {locale === 'az' ? 'Mətn məzmunu' : 'Text Content'}
                    </h4>
                    <pre className="whitespace-pre-wrap text-sm p-3 bg-muted rounded">
                      {parsedData.body_text}
                    </pre>
                  </div>
                )}
                {parsedData.body_html && (
                  <div>
                    <h4 className="font-medium mb-2">
                      {locale === 'az' ? 'HTML məzmunu' : 'HTML Content'}
                    </h4>
                    <pre className="whitespace-pre-wrap text-sm p-3 bg-muted rounded">
                      {parsedData.body_html}
                    </pre>
                  </div>
                )}
              </div>
            )}

            {selectedTab === 'attachments' && (
              <div className="space-y-3">
                {parsedData.attachments.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">
                    {locale === 'az' ? 'Əlavə tapılmadı' : 'No attachments found'}
                  </p>
                ) : (
                  parsedData.attachments.map((attachment, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{attachment.filename}</p>
                            <p className="text-sm text-muted-foreground">
                              {attachment.content_type} • {(attachment.size / 1024).toFixed(1)} KB
                            </p>
                          </div>
                          <div className="text-right text-xs space-y-1">
                            <div>MD5: <code className="bg-muted px-1 rounded">{attachment.hash_md5}</code></div>
                            <div>SHA256: <code className="bg-muted px-1 rounded">{attachment.hash_sha256.substring(0, 16)}...</code></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            )}

            {selectedTab === 'iocs' && (
              <div className="space-y-3">
                {parsedData.extracted_iocs.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">
                    {locale === 'az' ? 'IOC tapılmadı' : 'No IOCs found'}
                  </p>
                ) : (
                  parsedData.extracted_iocs.map((ioc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded">
                      <div className="flex items-center gap-3">
                        <Badge variant={ioc.type === 'ip' ? 'destructive' : 'secondary'}>
                          {ioc.type.toUpperCase()}
                        </Badge>
                        <code className="text-sm">{ioc.value}</code>
                      </div>
                      <span className="text-xs text-muted-foreground">{ioc.source}</span>
                    </div>
                  ))
                )}
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}