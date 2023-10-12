import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Stack, Paper } from "@mui/material";
import BookCard from "../Components/Crad/BookCard";
import MuiPagination from "../Components/MuiPagination";
import FilterOptions from "../Components/FilterOptions";
import { useNavigate } from "react-router-dom";
const BookListPage = () => {
  //pagination
  const [page, setPage] = React.useState(1);

  // Define a function to handle page changes
  const handlePageChange = (event: any, value: any) => {
    setPage(value);
    console.log("value", page);
  };
  let [booksData, setBooksData] = useState<string[]>([]);
  let arr = ["1", "2,", "3", "4", "5", "6", "7", "8", "9", "10"];

  function handelpagination() {
    let result = [];
    let itemPerPage = 6;
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    let paginatearr = arr.slice(startIndex, endIndex);
    console.log(typeof paginatearr);
    for (let i in paginatearr) {
      result.push(paginatearr[i]);
    }
    setBooksData(result);
  }
  useEffect(() => {
    handelpagination();
  }, [page]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#dbdeee",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "#fffff",
          border: "1px solid",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "sticky",
          top: 0,
          background: "#dbdeee",
          zIndex: 99,
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
          background: "#dbdeee",
          zIndex: 99,
        }}
      >
        <Typography>navbar</Typography>
      </Box>
      <Box
        sx={{
          // height: "700px",
          margin: {
            xs: "0 10px",
            sm: "0 100px",
          },
        }}
      >
        <Typography variant="h5" p={1}>
          Book List
        </Typography>

        <Stack direction="row" gap={2}>
          <Box
            flex={2}
            sx={{
              position: "sticky",
              top: 150,
              height: "50vh",
              maxWidth: 250,
            }}
          >
            <FilterOptions />
          </Box>
          <Box flex={5}>
            <ListOfBooks booksData={booksData} />
          </Box>
        </Stack>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <MuiPagination
          handlePageChange={handlePageChange}
          totalNoofDta={arr.length}
        />
      </Box>
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
    </Box>
  );
};

export default BookListPage;

const ListOfBooks = ({ booksData }: { booksData: any }) => {
  const navigate = useNavigate();
  return (
    <>
      <Stack direction="row" flexWrap="wrap" gap={2}>
        {booksData.map((item: any, i: any) => {
          return (
            <div
              key={i}
              onClick={() => {
                let id = "123456";
                navigate("/book/id");
              }}
            >
              <BookCard />
            </div>
          );
        })}
      </Stack>
    </>
  );
};
