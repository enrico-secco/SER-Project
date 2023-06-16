import { IExtractorObject, ITableProps } from "../defaultSettings";

export const Body = <T extends IExtractorObject>({
  columns,
  rows,
  rowsProps,
}: ITableProps<T>) => {
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={rowsProps.keyExtractor(row)}>
          {columns.map((column) => (
            <td>{row[column.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
