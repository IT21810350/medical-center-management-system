import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@mui/material';
import NavBar from '../../components/LA-component/la-nav-bar';

const styles = {
  labInventoryPage: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  contentContainer: {
    flexGrow: 1,
    padding: '20px',
  },
  tableContainer: {
    maxHeight: '400px',
    overflowY: 'auto',
  },
};

function LabInventoryPage() {
  const [labInventoryItems, setLabInventoryItems] = useState([
    {
      equipment_id: 1,
      name: 'Microscope',
      manufacturer: 'Brand A',
      purchase_date: '2022-01-15',
      maintenance_schedule: '2023-02-10',
      status: 'Operational',
    },
    {
      equipment_id: 2,
      name: 'Chemical Reagents',
      manufacturer: 'Supplier X',
      purchase_date: '2022-03-20',
      maintenance_schedule: '2023-04-05',
      status: 'In Use',
    },
  ]);

  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [newItemEquipmentId, setNewItemEquipmentId] = useState('');
  const [newItemName, setNewItemName] = useState('');
  const [newItemManufacturer, setNewItemManufacturer] = useState('');
  const [newItemPurchaseDate, setNewItemPurchaseDate] = useState('');
  const [newItemMaintenanceSchedule, setNewItemMaintenanceSchedule] = useState('');
  const [newItemStatus, setNewItemStatus] = useState('');
  const [openItemDialog, setOpenItemDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Store the selected item for viewing

  const handleCreateItem = () => {
    const newItem = {
      equipment_id: newItemEquipmentId,
      name: newItemName,
      manufacturer: newItemManufacturer,
      purchase_date: newItemPurchaseDate,
      maintenance_schedule: newItemMaintenanceSchedule,
      status: newItemStatus,
    };

    setLabInventoryItems([...labInventoryItems, newItem]);
    setOpenCreateDialog(false);
  };

  const handleDeleteItem = (equipment_id) => {
    const updatedInventory = labInventoryItems.filter((item) => item.equipment_id !== equipment_id);
    setLabInventoryItems(updatedInventory);
  };

  const handleViewItem = (item) => {
    setSelectedItem(item);
    setOpenItemDialog(true);
  };

  const handleUpdateItem = () => {
    // Redirect to the update page for the selected item
    if (selectedItem) {
      window.location.href = `/lab-inventory/update`;
    }
  };

  return (
    <div style={styles.labInventoryPage}>
      <NavBar />
      <Container style={styles.contentContainer}>
        <Typography variant="h4" gutterBottom>
          Lab Inventory
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => setOpenCreateDialog(true)}
        >
          Create New Item
        </Button>

        <TableContainer component={Paper} style={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Equipment ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Manufacturer</TableCell>
                <TableCell>Purchase Date</TableCell>
                <TableCell>Maintenance Schedule</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {labInventoryItems.map((item) => (
                <TableRow key={item.equipment_id}>
                  <TableCell>{item.equipment_id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.manufacturer}</TableCell>
                  <TableCell>{item.purchase_date}</TableCell>
                  <TableCell>{item.maintenance_schedule}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleViewItem(item)}
                    >
                      View
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDeleteItem(item.equipment_id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {/* Create Item Dialog */}
      <Dialog open={openCreateDialog} onClose={() => setOpenCreateDialog(false)}>
        <DialogTitle>Create New Inventory Item</DialogTitle>
        <DialogContent>
          <TextField
            label="Equipment ID"
            value={newItemEquipmentId}
            onChange={(e) => setNewItemEquipmentId(e.target.value)}
            fullWidth
          />
          <TextField
            label="Name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Manufacturer"
            value={newItemManufacturer}
            onChange={(e) => setNewItemManufacturer(e.target.value)}
            fullWidth
          />
          <TextField
            label="Purchase Date"
            type="date"
            value={newItemPurchaseDate}
            onChange={(e) => setNewItemPurchaseDate(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Maintenance Schedule"
            type="date"
            value={newItemMaintenanceSchedule}
            onChange={(e) => setNewItemMaintenanceSchedule(e.target.value)}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Status"
            value={newItemStatus}
            onChange={(e) => setNewItemStatus(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCreateDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateItem} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* View Item Dialog */}
      <Dialog open={openItemDialog} onClose={() => setOpenItemDialog(false)}>
        <DialogTitle>Item Details</DialogTitle>
        {selectedItem && (
          <DialogContent>
            <Typography variant="h6">Equipment ID: {selectedItem.equipment_id}</Typography>
            <Typography>Name: {selectedItem.name}</Typography>
            <Typography>Manufacturer: {selectedItem.manufacturer}</Typography>
            <Typography>Purchase Date: {selectedItem.purchase_date}</Typography>
            <Typography>Maintenance Schedule: {selectedItem.maintenance_schedule}</Typography>
            <Typography>Status: {selectedItem.status}</Typography>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={() => setOpenItemDialog(false)} color="primary">
            Close
          </Button>
          <Button onClick={handleUpdateItem} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LabInventoryPage;
