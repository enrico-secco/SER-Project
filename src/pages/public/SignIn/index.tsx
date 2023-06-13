import { Box } from "@/components/atoms/Box";
import { Grid } from "@/components/atoms/grid";
import { Button } from "@/components/molecules/buttons";
import { Inputs } from "@/components/molecules/inputs";
import { ISignInProps, useAuth } from "@/stores/hook/useAuth";
import { useForm } from "react-hook-form";

export const SignIn = () => {
  const { signIn } = useAuth();

  const form = useForm<ISignInProps>();

  const handleSignIn = (data: ISignInProps) => {
    signIn(data);
  }

  return (
    <Box>
      <Grid.Container columns={1} columnGap={20}>
        <Inputs.Text type="email" form={form} name="email" label="E-mail" />
        <Inputs.Text type="text" form={form} name="password" label="Password" />
        <Button.Default text="Sign in" onClick={form.handleSubmit(handleSignIn)}/>
      </Grid.Container>
    </Box>
  );
}