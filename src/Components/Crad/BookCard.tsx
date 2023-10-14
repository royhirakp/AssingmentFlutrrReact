import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, Box, Divider } from "@mui/material/";
import ProductRate from "./Ratting";

export default function BookCard({ item }: { item: any }) {
  // console.log(item);
  return (
    <Card sx={{ maxWidth: 205, padding: "5px", cursor: "pointer" }}>
      <CardMedia
        sx={{ height: 340 }}
        image={item.imageUrl}
        title="green iguana"
      />
      <CardContent sx={{ padding: "3%" }}>
        <Typography variant="body1">Titele: {item?.title}</Typography>
        <Typography variant="body1">Author:{item?.author}</Typography>
      </CardContent>
      <Divider />
      <Box sx={{ width: "30%" }}>
        <ProductRate count="0" rate={item?.ratting} />
      </Box>
    </Card>
  );
}
