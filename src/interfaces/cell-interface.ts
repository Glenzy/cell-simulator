export interface ICell {
  ClickHandler: (event: React.MouseEvent<HTMLElement>) => void,
  id: string,
  active: boolean,
  rowId: string
}