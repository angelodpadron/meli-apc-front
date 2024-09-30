import { FilterValue } from "./filter-value";

export interface SearchFilter {
  id: string;
  name: string;
  type: string;
  values: FilterValue[];
}
