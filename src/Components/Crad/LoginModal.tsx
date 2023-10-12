import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Stack } from "@mui/material";
import SingUpModal from "./SingUpModal";
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

export default function LoginModal({
  open,
  handleCloseLoginModal,
  handleOpenLoginModal,
}: {
  open: any;
  handleCloseLoginModal: any;
  handleOpenLoginModal: any;
}) {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const [singUpModalOpen, setOpen] = React.useState(false);
  const handleOpenSingModal = () => setOpen(true);
  const handleCloseSingUpModal = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseLoginModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ border: "10px solid" }}
      >
        <Box sx={{ ...style, borderRadius: "5px" }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Login Modal
            </Typography>
            <Stack>
              <Button color="error" onClick={handleCloseLoginModal}>
                <CloseIcon />
              </Button>
            </Stack>
          </Stack>
          <SingUpModal
            handleClose={handleCloseSingUpModal}
            open={singUpModalOpen}
            handleOpen={handleOpenSingModal}
          />
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
              </Box>
              <Stack direction="row" justifyContent="center">
                <Button
                  onClick={() => {
                    console.log(formData);
                  }}
                  variant="contained"
                >
                  Login
                </Button>
              </Stack>
              <Box pt={2}>
                <Typography>
                  don't haver an account{" "}
                  <span
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => {
                      console.log("a tag working");
                      handleOpenSingModal();
                    }}
                  >
                    <u>
                      <i>SingUp?</i>
                    </u>
                  </span>
                </Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
