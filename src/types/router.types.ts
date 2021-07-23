export type Location = {
  pathname: string;
  search: string;
  hash: string;
  state: {
    from: string | null;
  };
};
