// import React, { useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import EnhancedSearch from './PlateSearch'; // Replace with your search component path
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Switch from '@mui/material/Switch';
// import Modal from '@mui/material/Modal';
// import TextField from '@mui/material/TextField';
// import PlatePattern from './PlatePattern';

// // Style
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #959595',
//   boxShadow: 24,
//   p: 4
// };

// const headStyle = (theme) => ({
//   backgroundColor: theme.palette.primary[200],
//   textAlign: 'center'
// });

// const columns = [
//   { id: 'id', label: 'ردیف', minWidth: 90, align: 'center' },
//   { id: 'plateNumber', label: 'شماره پلاک', minWidth: 150, align: 'center' },
//   { id: 'switch', label: 'وضعیت', minWidth: 150, align: 'center' },
//   { id: 'edit', label: 'ویرایش', minWidth: 90, align: 'center' },
//   { id: 'del', label: 'حذف', minWidth: 150, align: 'center' }
// ];

// function createData(id, plateNumber, description) {
//   return { id, plateNumber, description };
// }

// const rowsData = [
//   createData('1', '262656', 'فعال'),
//   createData('2', '895623', 'فعال'),
//   createData('3', '748596', 'غیرفعال'),
//   createData('4', '123652', 'فعال'),
//   createData('5', '125463', 'غیرفعال')
// ];

// export default function AuthorizedPlates() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [order, setOrder] = useState('asc');
//   const [orderBy, setOrderBy] = useState('id'); // Change default orderBy to 'id'
//   const [rows, setRows] = useState(rowsData);
//   const [filteredRows, setFilteredRows] = useState(rowsData);
//   const [openEdit, setOpenEdit] = useState(false);
//   const [openDelete, setOpenDelete] = useState(false);
//   const [openAdd, setOpenAdd] = useState(false); // State for add modal
//   const [editRow, setEditRow] = useState(null);
//   const [deleteRow, setDeleteRow] = useState(null);
//   const [newPlateNumber, setNewPlateNumber] = useState('');
//   const [plateNumber, setPlateNumber] = useState(''); // State for new plate number from child component
  
//   const theme = useTheme();

//   // const handlePlateChange = (newPlateNumber) => {
//   //   console.log("newPlateNumber", newPlateNumber)
//   //   console.log("plateNumber", plateNumber);
//   //   setPlateNumber(newPlateNumber.split('*'));
//   // };

//   const handlePlateChange = (newPlateNumber) => {
//     console.log("newPlateNumber", newPlateNumber);
//     const separatedPlateNumbers = newPlateNumber.split('*');
//     console.log("separatedPlateNumbers", separatedPlateNumbers);
//     setPlateNumber(separatedPlateNumbers);
//   };

//   const handleOpenEdit = (row) => {
//     setEditRow(row);
//     setNewPlateNumber(row.plateNumber);
//     setOpenEdit(true);
//   };

//   const handleCloseEdit = () => {
//     setOpenEdit(false);
//   };

//   const handleOpenDelete = (row) => {
//     setDeleteRow(row);
//     setOpenDelete(true);
//   };

//   const handleCloseDelete = () => {
//     setOpenDelete(false);
//   };

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const handleEditChange = (event) => {
//     setNewPlateNumber(event.target.value);
//   };

//   const handleSaveEdit = () => {
//     const updatedRows = rows.map((row) => (row.id === editRow.id ? { ...row, plateNumber: newPlateNumber } : row));
//     setRows(updatedRows);
//     setFilteredRows(updatedRows);
//     handleCloseEdit();
//   };

//   const handleDelete = () => {
//     const updatedRows = rows.filter((row) => row.id !== deleteRow.id);
//     setRows(updatedRows);
//     setFilteredRows(updatedRows);
//     handleCloseDelete();
//   };

//   const handleOpenAdd = () => {
//     setOpenAdd(true);
//   };

//   const handleCloseAdd = () => {
//     setOpenAdd(false);
//   };

//   const handleAddPlate = () => {
//     const id = (rows.length + 1).toString();
//     const newPlateEntry = { id, plateNumber: [plateNumber], description: 'فعال' };
//     setFilteredRows([...rows, newPlateEntry]);
//     setRows([...rows, newPlateEntry]);
//     setPlateNumber(''); // Reset the plate number state
//     handleCloseAdd();
//   };

//   const sortComparator = (a, b, orderBy) => {
//     if (a[orderBy] < b[orderBy]) {
//       return -1;
//     }
//     if (a[orderBy] > b[orderBy]) {
//       return 1;
//     }
//     return 0;
//   };

//   const sortedRows = filteredRows.sort((a, b) => {
//     return order === 'asc' ? sortComparator(a, b, orderBy) : -sortComparator(a, b, orderBy);
//   });

//   return (
//     <>
//       <Box display="flex" justifyContent="flex-start" alignItems="center" p={2}>
//         <EnhancedSearch
//           setRows={setFilteredRows}
//           originalRows={rows}
//           setRowsPerPage={setRowsPerPage}
//           setPage={setPage}
//           sx={{ width: '200px' }}
//         />
//         <Button variant="contained" size="small" endIcon={<AddIcon sx={{ mr: 1 }} />} sx={{ mr: 2 }} onClick={handleOpenAdd}>
//           پلاک جدید
//         </Button>
//       </Box>
//       <TableContainer sx={{ maxHeight: 500, maxWidth: 600}}>
//         <Table stickyHeader aria-label="sticky table" >
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: '2vw', ...headStyle(theme) }}
//                   sortDirection={orderBy === column.id ? order : false}
//                 >
//                   <TableSortLabel
//                     active={orderBy === column.id}
//                     direction={orderBy === column.id ? order : 'asc'}
//                     onClick={(event) => handleRequestSort(event, column.id)}
//                   >
//                     {column.label}
//                   </TableSortLabel>
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
//                   {columns.map((column) => {
//                     const value = row[column.id];
//                     if (column.id === 'edit') {
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           <IconButton aria-label="edit" onClick={() => handleOpenEdit(row)}>
//                             <EditIcon color="primary" />
//                           </IconButton>
//                         </TableCell>
//                       );
//                     }
//                     if (column.id === 'del') {
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           <IconButton aria-label="delete" onClick={() => handleOpenDelete(row)}>
//                             <DeleteIcon color="error" />
//                           </IconButton>
//                         </TableCell>
//                       );
//                     }
//                     if (column.id === 'switch') {
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           <Switch defaultChecked={row.description === 'فعال'} size="small" />
//                         </TableCell>
//                       );
//                     }
//                     return (
//                       <TableCell key={column.id} align={column.align} style={{unicodeBidi: 'bidi-override', direction:'ltr'}}>
//                         {column.format && typeof value === 'number' ? column.format(value) : value}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={filteredRows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />

//       {/* Add Modal */}
//       <Modal open={openAdd} onClose={handleCloseAdd} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ direction: 'rtl' }}>
//             اضافه کردن شماره پلاک جدید
//           </Typography>
//           <PlatePattern value={newPlateNumber} onChange={handlePlateChange} />
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//             <Button variant="contained" color="primary" onClick={handleAddPlate}>
//               افزودن
//             </Button>
//             <Button variant="outlined" color="secondary" onClick={handleCloseAdd}>
//               لغو
//             </Button>
//           </Box>
//         </Box>
//       </Modal>

//       {/* Edit Modal */}
//       <Modal open={openEdit} onClose={handleCloseEdit} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ direction: 'rtl' }}>
//             ویرایش شماره پلاک
//           </Typography>
//           <TextField
//             id="edit-plate-number"
//             label="شماره پلاک"
//             variant="outlined"
//             value={newPlateNumber}
//             onChange={handleEditChange}
//             fullWidth
//             sx={{ mt: 2, mb: 2 }}
//           />
//           <Button variant="contained" color="primary" onClick={handleSaveEdit} sx={{ mr: 1 }}>
//             ذخیره
//           </Button>
//           <Button variant="contained" color="secondary" onClick={handleCloseEdit}>
//             انصراف
//           </Button>
//         </Box>
//       </Modal>

//       {/* Delete Modal */}
//       <Modal open={openDelete} onClose={handleCloseDelete} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ direction: 'rtl' }}>
//             آیا از حذف کردن عضو مجاز مطمئن هستید؟
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//             <Button variant="contained" color="error" onClick={handleDelete}>
//               حذف
//             </Button>
//             <Button variant="contained" color="secondary" onClick={handleCloseDelete}>
//               انصراف
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//     </>
//   );
// }

import React, { useState } from 'react';
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
import EnhancedSearch from './PlateSearch'; // Replace with your search component path
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import PlatePattern from './PlatePattern'; // Replace with your component path

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
  { id: 'switch', label: 'وضعیت', minWidth: 150, align: 'center' },
  { id: 'edit', label: 'ویرایش', minWidth: 90, align: 'center' },
  { id: 'del', label: 'حذف', minWidth: 150, align: 'center' }
];

function createData(id, plateNumber, description) {
  return { id, plateNumber, description };
}

const rowsData = [
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
  const [orderBy, setOrderBy] = useState('id');
  const [rows, setRows] = useState(rowsData);
  const [filteredRows, setFilteredRows] = useState(rowsData);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [deleteRow, setDeleteRow] = useState(null);
  const [newPlateNumber, setNewPlateNumber] = useState('');
  const [plateNumbers, setPlateNumbers] = useState([]); // State for plate numbers as array
  
  const theme = useTheme();

  const handlePlateChange = (newPlateNumber) => {
    console.log("newPlateNumber", newPlateNumber);
    const separatedPlateNumbers = newPlateNumber.split('*');
    console.log("separatedPlateNumbers", separatedPlateNumbers);
    setPlateNumbers(separatedPlateNumbers);
  };

  const handleOpenEdit = (row) => {
    setEditRow(row);
    setNewPlateNumber(row.plateNumber);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleOpenDelete = (row) => {
    setDeleteRow(row);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

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

  const handleEditChange = (event) => {
    setNewPlateNumber(event.target.value);
  };

  const handleSaveEdit = () => {
    const updatedRows = rows.map((row) => (row.id === editRow.id ? { ...row, plateNumber: newPlateNumber } : row));
    setRows(updatedRows);
    setFilteredRows(updatedRows);
    handleCloseEdit();
  };

  const handleDelete = () => {
    const updatedRows = rows.filter((row) => row.id !== deleteRow.id);
    setRows(updatedRows);
    setFilteredRows(updatedRows);
    handleCloseDelete();
  };

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleAddPlate = () => {
    const id = (rows.length + 1).toString();
    const newPlateEntries = plateNumbers.map((plateNumberPart, index) => ({
      id: (id + index).toString(),
      plateNumber: plateNumberPart,
      description: 'فعال'
    }));
    setRows([...rows, ...newPlateEntries]);
    setFilteredRows([...rows, ...newPlateEntries]);
    setPlateNumbers([]); // Reset the plate number state
    handleCloseAdd();
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
      <Box display="flex" justifyContent="flex-start" alignItems="center" p={2}>
        <EnhancedSearch
          setRows={setFilteredRows}
          originalRows={rows}
          setRowsPerPage={setRowsPerPage}
          setPage={setPage}
          sx={{ width: '200px' }}
        />
        <Button variant="contained" size="small" endIcon={<AddIcon sx={{ mr: 1 }} />} sx={{ mr: 2 }} onClick={handleOpenAdd}>
          پلاک جدید
        </Button>
      </Box>
      <TableContainer sx={{ maxHeight: 500, maxWidth: 600 }}>
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
                          <IconButton aria-label="edit" onClick={() => handleOpenEdit(row)}>
                            <EditIcon color="primary" />
                          </IconButton>
                        </TableCell>
                      );
                    }
                    if (column.id === 'del') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <IconButton aria-label="delete" onClick={() => handleOpenDelete(row)}>
                            <DeleteIcon color="error" />
                          </IconButton>
                        </TableCell>
                      );
                    }
                    if (column.id === 'switch') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Switch defaultChecked={row.description === 'فعال'} size="small" />
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell key={column.id} align={column.align} style={{ unicodeBidi: 'bidi-override', direction: 'ltr' }}>
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

      {/* Add Modal */}
      <Modal open={openAdd} onClose={handleCloseAdd} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ direction: 'rtl' }}>
            اضافه کردن شماره پلاک جدید
          </Typography>
          <PlatePattern value={newPlateNumber} onChange={handlePlateChange} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleAddPlate}>
              افزودن
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCloseAdd}>
              لغو
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Edit Modal */}
      <Modal open={openEdit} onClose={handleCloseEdit} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ direction: 'rtl' }}>
            ویرایش شماره پلاک
          </Typography>
          <TextField
            id="edit-plate-number"
            label="شماره پلاک"
            variant="outlined"
            value={newPlateNumber}
            onChange={handleEditChange}
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          />
          <Button variant="contained" color="primary" onClick={handleSaveEdit} sx={{ mr: 1 }}>
            ذخیره
          </Button>
          <Button variant="contained" color="secondary" onClick={handleCloseEdit}>
            انصراف
          </Button>
        </Box>
      </Modal>

      {/* Delete Modal */}
      <Modal open={openDelete} onClose={handleCloseDelete} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ direction: 'rtl' }}>
            آیا از حذف کردن عضو مجاز مطمئن هستید؟
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" color="error" onClick={handleDelete}>
              حذف
            </Button>
            <Button variant="contained" color="secondary" onClick={handleCloseDelete}>
              انصراف
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
