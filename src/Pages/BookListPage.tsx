import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Box, Typography, Stack } from "@mui/material";
import BookCard from "../Components/Crad/BookCard";
import MuiPagination from "../Components/MuiPagination";
import FilterOptions from "../Components/FilterOptions";
import { useNavigate } from "react-router-dom";
import { useBooksQuery } from "../Redux/api/LoginRegister";

const BookListPage = ({}: {}) => {
  //pagination
  const [page, setPage] = React.useState(1);
  const { data: reduxdata, error, isLoading, refetch } = useBooksQuery({});
  const [refestFetchDataAfterUplodeBook, setRefresh] = useState(false);
  const [booksData, setBooksData] = useState<any[]>([]);
  // const [paginationArray, setPaginationArray] = useState<any[]>([]);
  const [Loginopen, setLoginOpen] = useState(false);

  useEffect(() => {
    fetch("https://flturr.onrender.com/book")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBooksData(data?.books);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [refestFetchDataAfterUplodeBook]);

  const handlePageChange = (event: any, value: any) => {
    setPage(value);
  };

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
      <HeaderAndNavBar />
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
            <FilterOptions
              setRefresh={setRefresh}
              Loginopen={Loginopen}
              setLoginOpen={setLoginOpen}
            />
          </Box>
          <Box flex={5}>
            {" "}
            <ListOfBooks booksData={booksData} pageNo={page} />
          </Box>
        </Stack>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <MuiPagination
          handlePageChange={handlePageChange}
          totalNoofDta={booksData.length}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#80c8df",
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

const ListOfBooks = ({
  booksData,
  pageNo,
}: {
  booksData: any;
  pageNo: any;
}) => {
  const [data, setData] = useState<any[]>([]);
  const itemsPerPage = 6;

  const navigate = useNavigate();

  console.log("booksData====", booksData, pageNo, data);

  useEffect(() => {
    const handelpagination = () => {
      const startIndex = (pageNo - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const d = booksData.slice(startIndex, endIndex);
      setData(d);
    };
    handelpagination();
  }, [pageNo, booksData]);
  // console.log("booksData==", booksData);
  return (
    <>
      <Stack direction="row" flexWrap="wrap" gap={2}>
        {data?.map((item: any, i: any) => {
          return (
            <div
              key={i}
              onClick={() => {
                // let id = "123456";
                navigate(`/book/${item._id}`);
              }}
            >
              <BookCard item={item} />
            </div>
          );
        })}
      </Stack>
    </>
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
        background: "#80c8df",
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
