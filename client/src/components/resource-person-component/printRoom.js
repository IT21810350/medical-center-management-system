import jsPDF from 'jspdf';
import 'jspdf-autotable';

const handlePrintAllRooms = (rooms) => {
    const doc = new jsPDF();

    // Create a header for the table
    const headers = [['Room', 'Room Name', 'Room Type', 'Rent per day', 'Description', 'Image URLs']];

    // Flatten the room data and create a single row for each room
    const data = rooms.map((room, index) => {
        return [
            index + 1,  // Room number
            room.name,
            room.type,
            room.rentPerDay,
            room.description,
            room.imageUrls.join(', ')
        ];
    });

    // Set font style and size
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);

    // Add the table to the PDF
    doc.autoTable({
        head: headers,
        body: data,
        startY: 10,  // Start position for the table
        margin: { top: 15 },  // Margin from the top
        styles: { font: 'helvetica', fontStyle: 'normal', fontSize: 12 },
        headStyles: { fillColor: [0, 0, 255], textColor: [255, 255, 255] }, // Header styles
        columnStyles: { 0: { cellWidth: 10 } } // Adjust column width if needed
    });

    // Save the PDF
    doc.save('AllRoomDetails.pdf');
};

export default handlePrintAllRooms;