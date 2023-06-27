import { usePagination } from "../../../hook/usePagination";
import { Container, PageItem } from "./styles";

interface IPaginationProps {
  total?: number;
  range?: number[];
}

const rangeLimit = [5, 10, 15, 20];

const Pagination = ({ total = 0, range = rangeLimit }: IPaginationProps) => {
  const { nextPage, page, pages, prevPage, setLimit, setSkip, limit } =
    usePagination(total);

  return (
    <Container>
      <li>
        <select
          name="select-limit"
          onChange={(e) => setLimit(Number(e.currentTarget.value))}
          defaultValue={limit}
        >
          {range ? (
            range?.map((limit) => (
              <option key={limit} value={limit}>
                {limit}
              </option>
            ))
          ) : (
            <>
              <option value={5}>{5}</option>
              <option value={10}>{10}</option>
              <option value={15}>{15}</option>
              <option value={20}>{20}</option>
            </>
          )}
        </select>
      </li>
      {page !== 1 && <PageItem onClick={prevPage}>Voltar</PageItem>}
      {page > 1 && <PageItem onClick={() => setSkip(1)}>1</PageItem>}
      {page > 2 && <span>...</span>}
      <strong>{page}</strong>
      {page + 1 < pages && <span>...</span>}
      {page < pages && (
        <PageItem onClick={() => setSkip(pages)}>{pages}</PageItem>
      )}
      {page < pages && <PageItem onClick={nextPage}>Próximo</PageItem>}
    </Container>
  );
};

export default Pagination;
