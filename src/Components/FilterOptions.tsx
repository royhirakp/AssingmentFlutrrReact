import * as React from "react";
import { Box, Button, Typography, Stack, Paper } from "@mui/material";
import AddBooksModal from "./Crad/AddBooksModal";
const FilterOptions = ({
  setLoginOpen,
  Loginopen,
  setRefresh,
}: {
  Loginopen: any;
  setLoginOpen: any;
  setRefresh: any;
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "50px",
          height: "100%",
        }}
      >
        <Typography>Features</Typography>
        <AddBooksModal
          handleOpen={handleOpen}
          open={open}
          handleClose={handleClose}
          setLoginOpen={setLoginOpen}
          Loginopen={Loginopen}
          setRefresh={setRefresh}
        />
        <Stack direction="column">
          <Button variant="contained" onClick={handleOpen}>
            Add Book
          </Button>
        </Stack>
      </Paper>
    </>
  );
};

export default FilterOptions;
