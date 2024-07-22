import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, IconButton, Modal, Box, TextField, Button
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/system';

const columns = [
  'ردیف', 'پلاک', 'عکس', 'تاریخ', 'دوربین', 'ویرایش'
];

const initialRows = [
  { id: 1, plate: '12345', image: 'https://via.placeholder.com/100', date: '2024-07-22', camera: ' 1' },
  { id: 2, plate: '67890', image: 'https://via.placeholder.com/100', date: '2024-07-21', camera: ' 2' },
  { id: 3, plate: '11223', image: 'https://via.placeholder.com/100', date: '2024-07-20', camera: ' 3' },
  { id: 4, plate: '44556', image: 'https://via.placeholder.com/100', date: '2024-07-19', camera: ' 4' },
  { id: 5, plate: '77889', image: 'https://via.placeholder.com/100', date: '2024-07-18', camera: ' 5' },
  // Add more rows as needed
];

const StyledTableContainer = styled(TableContainer)({
  width: '100%',
  fontSize: '0.8rem',
  textAlign: 'center',
  border: '1px solid #ddd',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   borderRadius: '8px',
  overflow: 'hidden',
});

const StyledTableCell = styled(TableCell)({
  fontSize: '0.8rem',
  padding: '5.8px',
  textAlign: 'center',
//   border: '1px solid #ddd',
});

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(even)': {
    backgroundColor: '#f9f9f9',
  },
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
});

const App = () => {
  const [rows, setRows] = useState(initialRows);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [editingRow, setEditingRow] = useState(null);

  const handleEditClick = (row) => {
    setEditingRow(row);
  };

  const handleSave = () => {
    if (editingRow) {
      setRows(rows.map(row => row.id === editingRow.id ? editingRow : row));
      setEditingRow(null);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ height: '72px', background: '#91caff' }}>
            {columns.map((column, index) => (
              <StyledTableCell key={index}>{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{index + 1}</StyledTableCell>
              <StyledTableCell>
                {editingRow?.id === row.id ? (
                  <TextField
                    value={editingRow.plate}
                    onChange={(e) => setEditingRow({ ...editingRow, plate: e.target.value })}
                    size="small"
                    variant="standard"
                  />
                ) : (
                  row.plate
                )}
              </StyledTableCell>
              <StyledTableCell>
                <Button onClick={() => handleImageClick(row.image)}>
                  <img src={row.image} alt="car" style={{ width: 50, cursor: 'pointer' }} />
                </Button>
              </StyledTableCell>
              <StyledTableCell>
                {editingRow?.id === row.id ? (
                  <TextField
                    value={editingRow.date}
                    onChange={(e) => setEditingRow({ ...editingRow, date: e.target.value })}
                    size="small"
                    variant="standard"
                  />
                ) : (
                  row.date
                )}
              </StyledTableCell>
              <StyledTableCell>
                {editingRow?.id === row.id ? (
                  <TextField
                    value={editingRow.camera}
                    onChange={(e) => setEditingRow({ ...editingRow, camera: e.target.value })}
                    size="small"
                    variant="standard"
                  />
                ) : (
                  row.camera
                )}
              </StyledTableCell>
              <StyledTableCell>
                {editingRow?.id === row.id ? (
                  <IconButton onClick={handleSave}>
                    <EditIcon sx={{ color: 'green' }} />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => handleEditClick(row)}>
                    <EditIcon sx={{ color: 'blue' }} />
                  </IconButton>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <img src={selectedImage} alt="selected" style={{ width: '100%' }} />
        </Box>
      </Modal>
    </StyledTableContainer>
  );
};

export default App;
