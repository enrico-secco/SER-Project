import { IExtractorObject, ITableProps } from "../defaultSettings";
import { Container, ContainerRow, ContainerRowColumn } from "./styles";

export const Body = <T extends IExtractorObject>({
  columns,
  rows,
  rowsProps,
}: ITableProps<T>) => {
  return (
    <Container>
      {rows.map((row) => (
        <ContainerRow key={rowsProps.keyExtractor(row)}>
          {columns.map((column) => (
            <ContainerRowColumn
              hasAction={!!rowsProps.rowAction}
              key={`col-${String(column.key)}-row-${rowsProps.keyExtractor(
                row
              )}`}
              onClick={() =>
                column.key !== "actions" && rowsProps.rowAction?.(row)
              }
            >
              {row[column.key]}
            </ContainerRowColumn>
          ))}
        </ContainerRow>
      ))}
    </Container>
  );
};
