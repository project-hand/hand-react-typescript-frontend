interface SidebarProps {
  index: number,
  item: 'CAL' | 'TODO' | 'MEMO' | 'WEATHER';
}

interface ItemProps extends SidebarProps {
  x: number,
  y: number;
}

export interface ItemStateProps {
  usingItem: ItemProps[],
  sidebarItem: SidebarProps[];
}