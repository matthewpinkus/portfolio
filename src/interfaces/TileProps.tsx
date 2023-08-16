export interface TileProps {
  id: number;
  title: string;
  company?: string | undefined;
  description: string;
  technology?: string[] | undefined;
  link: string;
  ref?: HTMLDivElement;
  img?: string;
}
