import Stack from "@mui/material/Stack";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

export const UnitSwitch = ({ onClick }: { onClick: Function }) => {
  return (
    <Stack alignItems="center">
      <FormGroup onClick={() => onClick()}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            variant="h6"
            sx={{ color: "#4a6fa1", fontWeight: "bold" }}
          >
            F
          </Typography>
          <sup>&deg;</sup>
          <Switch defaultChecked />
          <Typography
            variant="h6"
            sx={{ color: "#4a6fa1", fontWeight: "bold" }}
          >
            C
          </Typography>
          <sup>&deg;</sup>
        </Stack>
      </FormGroup>
    </Stack>
  );
};
