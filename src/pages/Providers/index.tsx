import { Grid } from "@components/atoms/grid";
import { Button } from "@components/molecules/buttons";
import { Inputs } from "@components/molecules/inputs";
import { Box } from "@components/atoms/Box";
import { Table } from "@components/molecules/table";
import { useNavigate } from "react-router-dom";

export const Providers = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid.Container columns={12}>
        <Grid.Item column={4}>
          <Button.Default
            text="Novo prestador"
            size="md"
            endIcon="person_add_alt"
            onClick={() => navigate('/providers/new')}
          />
        </Grid.Item>
        <Grid.Item column={8}>
          <Inputs.Search type="text" placeholder="Pesquise por um usuario" />
        </Grid.Item>
      </Grid.Container>
      <Box marginTop="20px">
        {/* <Table.Header></Table.Header> */}
        {/* <Table.Body></Table.Body> */}
      </Box>
    </>
  );
};
