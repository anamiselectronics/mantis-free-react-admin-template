import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EnhancedSearch from './Search';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// Style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #959595',
  boxShadow: 24,
  p: 4
};

const headStyle = (theme) => ({
  backgroundColor: theme.palette.primary[200],
  textAlign: 'center'
});

const columns = [
  { id: 'id', label: 'ردیف', minWidth: 90, align: 'center' },
  { id: 'plateNumber', label: 'شماره پلاک', minWidth: 150, align: 'center' },
  { id: 'sitution', label: 'وضعیت', minWidth: 150, align: 'center' },
  { id: 'edit', label: 'ویرایش', minWidth: 90, align: 'center' },
  { id: 'del', label: 'حذف', minWidth: 150, align: 'center' }
];

function createData(id, plateNumber, sitution, description) {
  return { id, plateNumber, sitution, description };
}

const rows = [
  createData('1', '262656', 'فعال'),
  createData('2', '895623', 'فعال'),
  createData('3', '748596', 'غیرفعال'),
  createData('4', '123652', 'فعال'),
  createData('5', '125463', 'غیرفعال')
];

export default function AuthorizedPlates() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [filteredRows, setRows] = useState(rows);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // const handleDelete = (id) => {
  //   console.log(`Delete row with id: ${id}`);

  // };

  const handleEdit = (id) => {
    console.log(`Edit row with id: ${id}`);
    navigate('/authorizedPersons/edit-memberInfo');
  };

  const handleClick = () => {
    navigate('/authorizedPersons/add-member');
  };

  const sortComparator = (a, b, orderBy) => {
    if (a[orderBy] < b[orderBy]) {
      return -1;
    }
    if (a[orderBy] > b[orderBy]) {
      return 1;
    }
    return 0;
  };

  const sortedRows = filteredRows.sort((a, b) => {
    return order === 'asc' ? sortComparator(a, b, orderBy) : -sortComparator(a, b, orderBy);
  });

  return (
    <>
      {/* <Paper sx={{ minWidth: 'auto', overflow: 'auto' }}> */}
      <Box display="flex" justifyContent="flex-start" alignItems="center" p={2}>
        <EnhancedSearch setRows={setRows} originalRows={rows} setRowsPerPage={setRowsPerPage} setPage={setPage} sx={{ width: '300px' }} />
        <Button variant="contained" size="small" onClick={handleClick} endIcon={<AddIcon sx={{ mr: 1 }} />} sx={{ mr: 2 }}>
          پلاک جدید
        </Button>
      </Box>
      <TableContainer sx={{ maxHeight: 500, maxWidth: 600 }}>
        <Table stickyHeader aria-label="sticky table" sx={{ height: '300px' }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, ...headStyle(theme) }}
                  sortDirection={orderBy === column.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={(event) => handleRequestSort(event, column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    if (column.id === 'edit') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <IconButton aria-label="edit" onClick={() => handleEdit(row.id)}>
                            <EditIcon color="primary" />
                          </IconButton>
                        </TableCell>
                      );
                    }
                    if (column.id === 'del') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <IconButton aria-label="delete" onClick={() => handleOpen(row.id)}>
                            <DeleteIcon color="error" />
                          </IconButton>
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {/* </Paper> */}

      <div style={{ margin: '25%' }}>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ direction: 'rtl' }}>
              آیا از حذف کردن عضو مجاز مطمئن هستید؟
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button>حذف</Button>
              <Button>انصراف</Button>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
