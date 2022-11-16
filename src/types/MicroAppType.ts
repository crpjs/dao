export type MicroApp = MicroAppItem[];

export interface MicroAppItem {
  name: string;
  entry: string | 'https://www.baidu.com';
  container: string;
  activeRule: string;
}
