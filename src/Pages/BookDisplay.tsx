import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "../Components/Crad/CommentCard";
const BookDisplay = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      {/* book dispaly {id} */}
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#dbdeee",
            minHeight: "100vh",
          }}
        >
          <HeaderAndNavBar />
          <Box
            sx={{
              margin: {
                xs: "2px 10px",
                sm: "10px 100px",
              },
            }}
          >
            <BookDetails />
            <CommnetForm />
            <DisplayComment />
          </Box>

          <FooterC />
        </Box>
      </Box>
    </div>
  );
};

export default BookDisplay;

const DisplayComment = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 1, paddingTop: 5 }}
      >
        <Typography variant="h6">comments</Typography>
        <CommentCard />

        <CommentCard />

        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </Box>
    </>
  );
};

const CommnetForm = () => {
  const [formData, setFormData] = React.useState({
    comment: "",
    ratting: "",
  });
  const [rattingError, setRattingError] = useState(false);
  const [commentError, setCommentError] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <>
      <Paper>
        <form
          action=""
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20px",
            paddingTop: "10px",
          }}
        >
          <Box
            justifyContent="center"
            display="flex"
            flexDirection="row"
            gap={2}
            marginBottom="10px"
          >
            <TextField
              name="comment"
              placeholder="Comment"
              value={formData.comment}
              onChange={handleInputChange}
              helperText={commentError ? "CantBe empty" : ""}
              error={commentError}
            />
            <TextField
              name="ratting"
              placeholder="Ratting"
              value={formData.ratting}
              onChange={handleInputChange}
              error={rattingError}
              helperText={rattingError ? "Should be 1 to 5 only" : ""}
            />
          </Box>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="50px"
            marginLeft="1%"
          >
            <Button
              onClick={() => {
                // console.log(formData);
                if (formData.comment === "") {
                  setCommentError(true);
                } else setCommentError(false);
                let rattingDta: any = formData.ratting;
                rattingDta = rattingDta * 1;
                // console.log(rattingDta);

                if (rattingDta) {
                  if (rattingDta < 6 && rattingDta > 0) {
                    // console.log("write formatttttttttttt");
                    setRattingError(false);
                  } else setRattingError(true);
                } else setRattingError(false);
              }}
              variant="contained"
              sx={{ height: "40px" }}
            >
              Post
            </Button>
          </Stack>
        </form>
      </Paper>
    </>
  );
};

const BookDetails = () => {
  return (
    <Paper sx={{ padding: "2%" }}>
      <Stack direction="row" gap={2} sx={{}}>
        <Box
          flex={1}
          sx={{
            borderRadius: "5px",
            maxWidth: "200px",
          }}
        >
          <img
            style={{ width: "100%" }}
            src="https://i.stack.imgur.com/BQGLu.jpg"
            alt="####"
          />
        </Box>
        <Box
          flex={3}
          gap={0.5}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="subtitle1" flex={1}>
            Title
          </Typography>
          <Typography variant="body2" flex={1}>
            Auther
          </Typography>
          <Typography variant="body1" flex={5}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            accusamus perferendis alias temporibus unde architecto. Quibusdam
            culpa totam eos tenetur, aliquid perspiciatis, consectetur quisquam
            impedit sed libero minus nisi. Accusamus! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Repellat maiores, optio
            reprehenderit, quae tempora eligendi eveniet odio tempore a
            perspiciatis placeat deserunt minima, ducimus inventore neque fugit
            pariatur mollitia dolores.
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

const FooterC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#fffff",
        border: "1px solid",
        height: "100px",
        alignContent: "end",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography>Footer</Typography>
    </Box>
  );
};
const HeaderAndNavBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#fffff",
        border: "1px solid",
        height: "110px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        top: 0,
        background: "#dbdeee",
        zIndex: 99,
        flexDirection: "column",
      }}
    >
      {/* header and nav bar */}

      <Box
        sx={{
          width: "100%",
          bgcolor: "#fffff",
          border: "1px solid",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // position: "sticky",
          top: 0,
          // background: "#dbdeee",
          // zIndex: 99,
        }}
      >
        <Typography>Header</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#fffff",
          border: "1px solid",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "sticky",
          top: 90,
          background: "#6e6ca6",
          zIndex: 99,
        }}
      >
        <Typography>navbar</Typography>
      </Box>
    </Box>
  );
};
