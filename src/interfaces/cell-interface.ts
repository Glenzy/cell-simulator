export interface ICell {
  ClickHandler?: (event: React.MouseEvent<HTMLElement>) => void,
  x: number,
  y: number,
  isActive?: boolean | undefined,
  id: string | undefined
}