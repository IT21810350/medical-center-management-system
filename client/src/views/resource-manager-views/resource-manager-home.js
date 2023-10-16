import { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/resource-person-component/resource-person-nav-bar';
import Room from '../../components/resource-person-component/room';
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
// import handlePrintAllRooms from '../../components/resource-person-component/printRoom';

function Rooms() {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/room/')
            .then(rooms => setRooms(rooms.data))
            .catch(err => console.log(err))
    }, [])

    const handlePrintAllRooms = () => {
        const doc = new jsPDF();
        let yPos = 10;  // Initial y position for content
        const pageHeight = doc.internal.pageSize.height;  // Page height

        rooms.forEach((room, index) => {
            // Set font style and size
            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);

            // Generate content for the PDF with styles
            const content = `
                Room ${index + 1} Details
                Room Name: ${room.name}
                Room Type: ${room.type}
                Rent per day: ${room.rentPerDay}
                Description: ${room.description}
                Image URLs: ${room.imageUrls.join(', ')}
            `;

            // Check if content fits on the current page
            const splitContent = doc.splitTextToSize(content, 180);
            const requiredHeight = doc.getTextDimensions(splitContent).h;

            // Check if content fits on the current page
            if (yPos + requiredHeight > pageHeight) {
                doc.addPage();  // Add a new page if content doesn't fit
                yPos = 10;  // Reset y position for new page
            }

            // Add content to the PDF with styles at the current y position
            doc.text(10, yPos, splitContent);
            yPos += requiredHeight + 10;  // Increment y position for the next room
        });

        // Save the PDF
        doc.save("AllRoomDetails.pdf");
    };


    return (
        <div>
            <Navbar />
            <div>
                <div className="row">
                    {rooms.map(room => {
                        return (
                            <Room room={room} />
                        )
                    })}
                    <div className="text-right">
                        <button className="btn btn-primary m-5" onClick={() => handlePrintAllRooms(rooms)}>
                            Generate Report
                        </button>
                        <Link to={`/addRoom`}>
                            <button className="btn btn-primary">Add New Room</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rooms;