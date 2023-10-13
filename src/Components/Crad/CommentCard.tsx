import { Box, Stack, Typography, Paper } from "@mui/material";
import ProductRate from "./Ratting";

const CommentCard = () => {
  return (
    <div>
      <Paper sx={{ padding: "1%" }}>
        <Stack direction="row" gap={1} sx={{}}>
          {/* <Box
        flex={1}
        sx={{
          border: "1px solid",
          borderRadius: "5px",
          maxWidth: "200px",
        }}
      >
        <img
          style={{ width: "100%" }}
          src="https://i.stack.imgur.com/BQGLu.jpg"
          alt="####"
        />
      </Box> */}
          <Box
            flex={3}
            gap={0.5}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography variant="body1" flex={5}>
              <b> Comment: </b> Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Delectus accusamus perferendis alias temporibus
              unde architecto. Quibusdam
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <ProductRate count="5" rate={5} />
              </Box>
              <Typography pr={3}>
                <b>user:</b> hirak
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </div>
  );
};

export default CommentCard;
