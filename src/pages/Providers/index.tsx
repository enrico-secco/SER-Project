import { Grid } from "@components/atoms/grid";
import { Button } from "@components/molecules/buttons";
import { Inputs } from "@components/molecules/inputs";
import { Box } from "@components/atoms/Box";
import { Table } from "@components/molecules/table";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

export const Providers = () => {
  const navigate = useNavigate();
  const form = useForm();

  const { data } = useQuery(["get_all_users"], () => {
    return ["a", "b", "c"];
  });

  return (
    <>
      <Grid.Container columns={12}>
        <Grid.Item column={4}>
          <Button.Default
            text="Novo prestador"
            size="md"
            endIcon="person_add_alt"
            onClick={() => navigate("/providers/new")}
          />
        </Grid.Item>
        <Grid.Item column={8}>
          <Inputs.Search type="text" form={form} name="filter" placeholder="Pesquise por um usuario" />
        </Grid.Item>
      </Grid.Container>
      <Grid.Container columns={12}>
        {data?.map((item) => (
          <Grid.Item key={item} column={4}>
            <Box>
              <h1>{item}</h1>
            </Box>
          </Grid.Item>
        ))}
      </Grid.Container>
      <Box marginTop="20px">
        {/* <Table.Header></Table.Header> */}
        {/* <Table.Body></Table.Body> */}
      </Box>
    </>
  );
};
