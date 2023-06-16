import { IExtractorObject, ITableProps } from "../defaultSettings";
import { ContainerHeader, ContainerRow } from "./styles";

interface IHeaderProps<T extends IExtractorObject>
  extends Pick<ITableProps<T>, "columns"> {}

export const Header = <T extends IExtractorObject>({
  columns,
}: IHeaderProps<T>) => {
  return (
    <ContainerHeader>
      {columns.map((column) => (
        <ContainerRow key={String(column.key)}>{column.label}</ContainerRow>
      ))}
    </ContainerHeader>
  );
};
