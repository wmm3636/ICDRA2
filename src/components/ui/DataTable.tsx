import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

export interface Action {
  label: string;
  onClick: (row: any) => void;
  variant?: 'default' | 'destructive';
}

interface DataTableProps {
  title: string;
  data: any[];
  columns: Column[];
  actions?: Action[] | ((row: any) => Action[]);
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: any) => void;
}

const DataTable = ({ 
  title, 
  data, 
  columns, 
  actions, 
  loading = false,
  emptyMessage = "No data available"
}: DataTableProps) => {
  const renderCellValue = (column: Column, row: any) => {
    const value = row[column.key];
    
    if (column.render) {
      return column.render(value, row);
    }
    
    return value;
  };

  const getActionsForRow = (row: any): Action[] => {
    if (!actions) return [];
    
    if (typeof actions === 'function') {
      return actions(row);
    }
    
    return actions;
  };

  const hasAnyActions = data.some(row => getActionsForRow(row).length > 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
          </div>
        ) : data.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {emptyMessage}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  {columns.map((column) => (
                    <th key={column.key} className="text-left py-3 px-4 font-medium text-gray-900">
                      {column.label}
                    </th>
                  ))}
                  {hasAnyActions && (
                    <th className="text-right py-3 px-4 font-medium text-gray-900">
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => {
                  const rowActions = getActionsForRow(row);
                  
                  return (
                    <tr key={row.id || index} className="border-b border-gray-100 hover:bg-gray-50">
                      {columns.map((column) => (
                        <td key={column.key} className="py-3 px-4 text-gray-600">
                          {renderCellValue(column, row)}
                        </td>
                      ))}
                      {hasAnyActions && (
                        <td className="py-3 px-4 text-right">
                          {rowActions.length > 0 ? (
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                {rowActions.map((action, actionIndex) => (
                                  <DropdownMenuItem
                                    key={actionIndex}
                                    onClick={() => action.onClick(row)}
                                    className={action.variant === 'destructive' ? 'text-red-600' : ''}
                                  >
                                    {action.label}
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          ) : (
                            <span className="text-gray-400 text-sm">No actions</span>
                          )}
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DataTable;