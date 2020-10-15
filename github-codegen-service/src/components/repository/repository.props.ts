import { Repository } from "../../github/repo/repo.graphql.schema";

export interface IRepositoryListProps {
  searchTerm: string;
}

export interface IRepositoryProps {
  repo: Repository;
  key: string;
}
