export class Log {
  boarded: number;
  stop: string;
  timestamp: string;
  loop: string;
  driver: string;
  leftBehind: number;
  busNumber:   string;
  id?:   number;
  constructor(
    boarded: number,
    stop: string,
    timestamp: string,
    loop: string,
    driver: string,
    leftBehind: number,
    busNumber?:   string,
    id?:   number) {}
}
