export interface dataTableProps {
  title?: string;
  num: string;
  addFrom: number;
  addTo: number;
}

export interface lineDataType {
  time: string;
  value: number;
}

export interface pieDataType {
  name: string;
  value: number;
}

export interface lineDataProps {
  dataList: lineDataType[];
}

export interface lineDataGroupProps {
  day: lineDataType[];
  week: lineDataType[];
  month: lineDataType[];
  year: lineDataType[];
}
