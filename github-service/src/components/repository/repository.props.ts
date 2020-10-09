export interface IRepositoryListProps {
  searchTerm: string;
}

export interface IRepositoryProps {
  repo: any;
  expanded: boolean;
  onToggled: (event: React.ChangeEvent<{}>, expanded: boolean) => void;
}
