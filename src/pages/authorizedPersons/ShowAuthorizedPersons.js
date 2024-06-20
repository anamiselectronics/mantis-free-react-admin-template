import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
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

// Style
const headStyle = (theme) => ({
  backgroundColor: theme.palette.primary[200],
  textAlign: 'center'
});

const columns = [
  { id: 'id', label: 'ردیف', minWidth: 90, align: 'center' },
  { id: 'name', label: 'نام', minWidth: 150, align: 'center' },
  { id: 'family', label: 'نام خانوادگی', minWidth: 150, align: 'center' },
  { id: 'level', label: 'سطح دسترسی', minWidth: 150, align: 'center' },
  { id: 'sitution', label: 'وضعیت', minWidth: 150, align: 'center' },
  { id: 'edit', label: 'ویرایش', minWidth: 90, align: 'center' },
  { id: 'del', label: 'حذف', minWidth: 150, align: 'center' }
];

function createData(id, name, family, level, sitution) {
  return { id, name, family, level, sitution };
}

const rows = [
  createData('1', 'امیر', 'محبی', 'مدیر', 'فعال'),
  createData('2', 'سحر', 'رفیعی', 'مشاهده کننده', 'فعال'),
  createData('3', 'اکبر', 'پژوهش', 'گزارش گیرنده', 'غیرفعال'),
  createData('4', 'روناک', 'احمدی', 'گزارش گیرنده', 'فعال'),
  createData('5', 'مریم', 'قاسمی', 'مشاهده کننده', 'غیرفعال')
];

export default function Users() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [filteredRows, setRows] = useState(rows);
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

  const handleDelete = (id) => {
    console.log(`Delete row with id: ${id}`);
    // Add your delete logic here
  };

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
    <Paper sx={{ minWidth: 'auto', overflow: 'auto' }}>
      <Box display="flex" justifyContent="flex-start" alignItems="center" p={2}>
        <EnhancedSearch setRows={setRows} originalRows={rows} setRowsPerPage={setRowsPerPage} setPage={setPage} sx={{ width: '300px' }} />
        <Button variant="contained" onClick={handleClick} endIcon={<AddIcon sx={{ mr: 1 }} />} sx={{ mr: 2 }}>
          افزودن فرد مجاز جدید
        </Button>
      </Box>
      <TableContainer sx={{ maxHeight: 500, maxWidth: 960 }}>
        <Table stickyHeader aria-label="sticky table">
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
                          <IconButton aria-label="delete" onClick={() => handleDelete(row.id)}>
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
    </Paper>
  );
}
