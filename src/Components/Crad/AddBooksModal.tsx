import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, Stack } from "@mui/material";
import LoginModal from "./LoginModal";
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

export default function AddBooksModal({
  open,
  handleClose,
  handleOpen,
}: {
  open: any;
  handleClose: any;
  handleOpen: any;
}) {
  const [formData, setFormData] = React.useState({
    title: "",
    author: "",
    imageUrl: "",
    description: "",
  });

  const [urlError, setUrlError] = React.useState(false);
  const [errorTitelStatus, setTitelerror] = React.useState(false);
  const [errorAutherStatus, setAuthererror] = React.useState(false);

  // logiin popup
  const [Loginopen, setOpen] = React.useState(false);
  const handleOpenLoginModal = () => setOpen(true);
  const handleCloseLoginModal = () => setOpen(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const urlPattern = /^https?:\/\/[^\s$.?#].[^\s]*$/;

    if (value.length > 11) {
      if (name === "imageUrl" && !urlPattern.test(value)) {
        // alert("Please enter a valid URL.");
        setUrlError(true);
        // return; // Prevent setting invalid URL
      } else setUrlError(false);
    } else setUrlError(false);

    // handel error of title and auther
    if (name === "title") {
      if (formData.title == "") {
        setTitelerror(true);
      } else setTitelerror(false);
    }

    if (name === "author") {
      if (formData.author === "") {
        setAuthererror(true);
      } else {
        console.log("autheorrrrr if conditiponnnn", formData.author);

        setAuthererror(false);
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // error handel titel and auther

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
          <LoginModal
            open={Loginopen}
            handleOpenLoginModal={handleOpenLoginModal}
            handleCloseLoginModal={handleCloseLoginModal}
          />

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" component="h2">
              Add Books
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
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleInputChange}
                  error={errorTitelStatus}
                  helperText={`${
                    errorTitelStatus ? "Title can't be empty" : ""
                  }`}
                />
                <TextField
                  id="time"
                  name="author"
                  placeholder="Author"
                  value={formData.author}
                  onChange={handleInputChange}
                  error={errorAutherStatus}
                  helperText={`${
                    errorAutherStatus ? "Auther can't be empty" : ""
                  }`}
                />
                <TextField
                  id="time"
                  name="imageUrl"
                  placeholder="Image URL"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  error={urlError}
                  helperText={`${urlError ? "Invalid url" : ""}`}
                />
                <TextField
                  id="time"
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </Box>
              <Stack direction="row" justifyContent="center">
                <Button
                  onClick={() => {
                    console.log(formData);

                    if (formData.title == "") {
                      setTitelerror(true);
                    } else setTitelerror(false);
                    if (formData.author == "") {
                      setAuthererror(true);
                    } else setAuthererror(false);

                    alert(
                      "you have to login first. ckick ok to go to the login modal"
                    );

                    if (1) {
                      handleOpenLoginModal();
                    }
                  }}
                  variant="contained"
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
