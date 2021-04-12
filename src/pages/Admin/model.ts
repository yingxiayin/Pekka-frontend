export interface dataProp {
  nodeUser: {
    base: number;
    min: number;
    max: number;
  };
  nodeAmount: {
    base: number;
    min: number;
    max: number;
  };
  hashrate: {
    base: number;
    min: number;
    max: number;
  };
  provider: {
    base: number;
    min: number;
    max: number;
  };
  fan: {
    base: number;
    min: number;
    max: number;
  };
  visit: {
    base: number;
    min: number;
    max: number;
  };
  proportion: pieOneProp[];
  pc: {
    start: number;
    end: number;
  };
  low: {
    start: number;
    end: number;
  };
  mid: {
    start: number;
    end: number;
  };
  high: {
    start: number;
    end: number;
  };
  distribute: {
    start: number;
    end: number;
  };
}

export interface pieOneProp {
  name: string;
  proportion: number;
}

export interface pieListProp {
  proportion: pieOneProp[];
}
