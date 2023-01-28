import { Box, Container, Skeleton } from "@mui/material";
import React from "react";

function Skeletons() {
  return (
    <Container maxWidth="xl">
      <Skeleton variant="rounded" width="100%" height={100} sx={{margin: "1rem 0"}} />
      <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "1rem"}} />
      <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "1rem"}} />
      <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "1rem"}} />
      <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "1rem"}} />
      <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "1rem"}} />
    </Container>
  );
}

export default Skeletons;
