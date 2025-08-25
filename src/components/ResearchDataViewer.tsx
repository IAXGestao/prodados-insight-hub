import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown, Minus, Calendar, MapPin, ExternalLink } from "lucide-react";

interface ResearchDataItem {
  region: string;
  name: string;
  value: string;
  unit: string;
  period: string;
  metadata?: {
    target?: string;
    previous_year?: string;
    trend?: string;
    source_url?: string;
    estimated?: boolean;
    placeholder?: boolean;
  };
}

interface ResearchDataViewerProps {
  data: ResearchDataItem[];
  title: string;
  source: string;
  sourceUrl?: string;
}

export const ResearchDataViewer = ({ data, title, source, sourceUrl }: ResearchDataViewerProps) => {
  const getTrendIcon = (value: string, previousValue?: string) => {
    if (!previousValue) return <Minus className="h-4 w-4 text-muted-foreground" />;
    
    const current = parseFloat(value.replace(/[^\d.-]/g, ''));
    const previous = parseFloat(previousValue.replace(/[^\d.-]/g, ''));
    
    if (current > previous) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (current < previous) return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  const formatValue = (value: string, unit: string) => {
    // Format large numbers
    const numValue = parseFloat(value.replace(/[^\d.-]/g, ''));
    if (!isNaN(numValue) && numValue >= 1000000) {
      if (numValue >= 1000000000) {
        return `${(numValue / 1000000000).toFixed(1)}B ${unit}`;
      } else if (numValue >= 1000000) {
        return `${(numValue / 1000000).toFixed(1)}M ${unit}`;
      }
    }
    return `${value} ${unit}`.trim();
  };

  if (!data || data.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">Nenhum dado disponível</p>
      </div>
    );
  }

  const mainData = data[0];
  const hasMultipleRegions = data.length > 1;

  return (
    <div className="space-y-6">
      {/* Header with metadata */}
      <div className="flex items-start justify-between p-4 bg-accent/50 rounded-lg">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{title}</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Período: {mainData.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Região: {mainData.region}</span>
            </div>
          </div>
        </div>
        <div className="text-right space-y-1">
          <Badge variant="outline">{source}</Badge>
          {sourceUrl && (
            <a 
              href={sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              Ver fonte
            </a>
          )}
        </div>
      </div>

      {/* Summary cards for key indicators */}
      {data.length <= 4 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <Card key={index} className="relative">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {item.name}
                  </CardTitle>
                  {item.metadata?.previous_year && (
                    <div className="flex items-center gap-1">
                      {getTrendIcon(item.value, item.metadata.previous_year)}
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="text-2xl font-bold">
                    {formatValue(item.value, item.unit)}
                  </div>
                  
                  {item.metadata && (
                    <div className="space-y-1 text-xs text-muted-foreground">
                      {item.metadata.previous_year && (
                        <div>Anterior: {formatValue(item.metadata.previous_year, item.unit)}</div>
                      )}
                      {item.metadata.target && (
                        <div>Meta: {formatValue(item.metadata.target, item.unit)}</div>
                      )}
                      {item.metadata.estimated && (
                        <Badge variant="outline" className="text-xs">Estimativa</Badge>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Separator />

      {/* Detailed table view */}
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Indicador</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Unidade</TableHead>
              <TableHead>Região</TableHead>
              <TableHead>Período</TableHead>
              {data.some(item => item.metadata?.previous_year) && (
                <TableHead>Tendência</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium max-w-xs">
                  <div>
                    {item.name}
                    {item.metadata?.estimated && (
                      <Badge variant="outline" className="ml-2 text-xs">Est.</Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell className="font-mono text-right">
                  {item.value}
                </TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.period}</TableCell>
                {data.some(d => d.metadata?.previous_year) && (
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getTrendIcon(item.value, item.metadata?.previous_year)}
                      {item.metadata?.previous_year && (
                        <span className="text-xs text-muted-foreground">
                          {item.metadata.previous_year}
                        </span>
                      )}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Data quality info */}
      {data.some(item => item.metadata?.estimated || item.metadata?.placeholder) && (
        <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Nota:</strong> Alguns dados podem ser estimativas ou dados de exemplo. 
            Verifique a fonte oficial para informações mais precisas.
          </p>
        </div>
      )}
    </div>
  );
};

export default ResearchDataViewer;