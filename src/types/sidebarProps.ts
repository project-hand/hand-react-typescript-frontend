export interface SidebarProps {
  handleSidbar: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  state: boolean;
  xPosition: number;
  children: React.ReactNode;
}
export interface SidebarStyleProps { xPosition: number; }

