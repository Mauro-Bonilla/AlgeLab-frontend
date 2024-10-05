import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Row = ({ row, columns, expandedColumns, onNavigate }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ 
              '&:hover': { 
                backgroundColor: theme.palette.action.hover 
              } 
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {columns.map((column) => (
          <TableCell key={column.id} sx={{ width: column.width }}>
            {column.render ? column.render(row[column.id], row) : row[column.id]}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={columns.length + 1}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Subtemas
              </Typography>
              <Table size="small" aria-label="subtemas">
                <TableHead>
                  <TableRow>
                    {expandedColumns.map((column) => (
                      <TableCell key={column.id} sx={{ width: column.width }}>
                        <Typography fontWeight="bold">{column.label}</Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.subtemas.map((subtemaRow) => (
                    <TableRow key={subtemaRow.id}>
                      {expandedColumns.map((column) => (
                        <TableCell key={column.id}>
                          {column.render 
                            ? column.render(subtemaRow[column.id], subtemaRow, onNavigate) 
                            : subtemaRow[column.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

Row.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      width: PropTypes.string,
      render: PropTypes.func,
    })
  ).isRequired,
  expandedColumns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      width: PropTypes.string,
      render: PropTypes.func,
    })
  ).isRequired,
  onNavigate: PropTypes.func.isRequired,
};

const CollapsibleTable = ({ data, columns, expandedColumns, onNavigate }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '5%' }} />
            {columns.map((column) => (
              <TableCell key={column.id} sx={{ width: column.width }}>
                <Typography fontWeight="bold">{column.label}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row 
              key={row.id} 
              row={row} 
              columns={columns} 
              expandedColumns={expandedColumns}
              onNavigate={onNavigate}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CollapsibleTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      width: PropTypes.string,
      render: PropTypes.func,
    })
  ).isRequired,
  expandedColumns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      width: PropTypes.string,
      render: PropTypes.func,
    })
  ).isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default CollapsibleTable;