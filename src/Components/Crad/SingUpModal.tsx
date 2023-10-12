import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,

  p: 4,
};

export default function SingUpModal({
  open,
  handleClose,
  handleOpen,
}: {
  open: any;
  handleClose: any;
  handleOpen: any;
}) {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    condirmPassword: "",
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ border: "10px solid" }}
      >
        <Box sx={{ ...style, borderRadius: "5px" }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Singup Modal
            </Typography>
            <Stack>
              <Button color="error" onClick={handleClose}>
                <CloseIcon />
              </Button>
            </Stack>
          </Stack>
          <Box>
            <form action="" style={{ border: "1px solid" }}>
              <Box
                border="1px solid"
                justifyContent="center"
                display="flex"
                flexDirection="column"
                gap={2}
                marginBottom="10PX"
              >
                <TextField
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <TextField
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <TextField
                  name="condirmPassword"
                  placeholder="Confirm Password"
                  value={formData.condirmPassword}
                  onChange={handleInputChange}
                />
              </Box>
              <Stack direction="row" justifyContent="center">
                <Button
                  onClick={() => {
                    console.log(formData);
                  }}
                  variant="contained"
                >
                  Sing Up
                </Button>
              </Stack>
              <Box pt={2}></Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
