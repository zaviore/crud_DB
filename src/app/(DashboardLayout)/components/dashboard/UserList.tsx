import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
  Button,
  IconButton,
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";
import { blue, red } from "@mui/material/colors";
import { IconEdit, IconTrash, IconTrashFilled } from "@tabler/icons-react";

interface DataInterface {
  data: [];
  loading: boolean;
  error?: any;
}
const initStateMember:any = {
  modal:false,
 
}

const ProductPerfomance = ({ data, loading, error }: DataInterface) => {
  const [addMember, setAddMember] = useState(initStateMember)
  return (
    <BaseCard
      title="Product Perfomance"
      action={
        <Button variant="contained" color="primary">
          Add Data
        </Button>
      }
    >
      <TableContainer
        sx={{
          width: {
            xs: "274px",
            sm: "100%",
          },
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Phone
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  username
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{ValidateData(data, loading, error)}</TableBody>
        </Table>
      </TableContainer>
    </BaseCard>
  );
};

export default ProductPerfomance;

const ValidateData = (data: Array<[]>, loading: boolean, error: any) => {
  if (loading) {
    return (
      <TableRow>
        <TableCell rowSpan={12}>
          <Typography fontSize="15px" fontWeight={500}>
            Loading ...
          </Typography>
        </TableCell>
      </TableRow>
    );
  } else if (!loading && error) {
    return (
      <TableRow>
        <TableCell rowSpan={12}>
          <Typography fontSize="15px" fontWeight={500}>
            Error Dispatch
          </Typography>
        </TableCell>
      </TableRow>
    );
  }
  return (
    <>
      {data.map((product: any) => (
        <TableRow key={product.name}>
          <TableCell>
            <Typography fontSize="15px" fontWeight={500}>
              {product.id}
            </Typography>
          </TableCell>
          <TableCell>
            <Box display="flex" alignItems="center">
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  {product.name}
                </Typography>
                <Typography color="textSecondary" fontSize="13px">
                  {product.website}
                </Typography>
              </Box>
            </Box>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              {product.phone}
            </Typography>
          </TableCell>
          <TableCell>
            <Chip
              sx={{
                pl: "4px",
                pr: "4px",
                backgroundColor: red,
                color: "#fff",
              }}
              size="small"
              label={"Lokal"}
            ></Chip>
          </TableCell>
          <TableCell align="center">
            <Box alignItems="center" display="flex" gap="2px" justifyContent="right">
              <IconButton><IconEdit /></IconButton> <IconButton ><IconTrash/></IconButton>
            </Box>
           
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
