import React, { useState, useEffect } from 'react';
import Adminheader from "./Adminheader";
import "../admin/assete/css/deatils.css";
import { ViewDetailsMindtekApi, deleteDetailMindtekApi, updateContactMindtekApi, updateReadStatusMindtekApi  } from "../service/api";

const Contactdeatils = () =>{
     const [details, setDetails] = useState([]);
        const [showPopup, setShowPopup] = useState(false);
         const [detailToDelete, setDetailToDelete] = useState(null);
     const [editMessages, setEditMessages] = useState({});
          const [editMode, setEditMode] = useState({});
          useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await ViewDetailsMindtekApi(); 
                    if (response && response.contact_details) {
                        setDetails(response.contact_details.reverse());
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
        }, []);
    
        const handleDelete = async () => {
            try {
                await deleteDetailMindtekApi(detailToDelete);
                setDetails(details.filter(detail => detail.id !== detailToDelete));
                setShowPopup(false);
            } catch (error) {
                console.error('Error deleting detail:', error);
            }
        };
    
        const openDeletePopup = (id) => {
            setDetailToDelete(id);
            setShowPopup(true);
        };
    
        const closeDeletePopup = () => {
            setShowPopup(false);
        };

        
const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date';
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const day = String(date.getDate()).padStart(2, '0');
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day}-${month}-${year}`;
};


const handleEditClick = (id) => {
  setEditMode(prev => ({ ...prev, [id]: true }));

  setEditMessages(prev => ({ ...prev, [id]: details.find(d => d.id === id)?.rewrite || "" }));
};

   const handleEditChange = (id, value) => {
        setEditMessages(prev => ({ ...prev, [id]: value }));
    };

    const handleSave = async (id) => {
        try {
            const newMessage = editMessages[id];
            if (!newMessage || newMessage.trim() === "") {
                alert("rewrite cannot be empty");
                return;
            }

            const response = await updateContactMindtekApi(id, newMessage);
            if (response && response.status) {
                
                setDetails(prevDetails =>
                    prevDetails.map(item =>
                        item.id === id ? { ...item, message: newMessage } : item
                    )
                );
                 setEditMode(prev => ({ ...prev, [id]: false }));
                 setEditMessages(prev => ({ ...prev, [id]: "" }));
                alert("rewrit updated successfully!");
            } else {
                alert("Failed to update message");
            }
        } catch (error) {
            console.error("Error updating message:", error);
        }
    };

     const markAsRead = async (id, currentStatus) => {
          try {
            const newStatus = currentStatus === "read" ? "unread" : "read";
            const response = await updateReadStatusMindtekApi(id, newStatus);
            if (response && response.status) {
        
              setDetails((prevDetails) =>
                prevDetails.map((item) =>
                  item.id === id ? { ...item, readed: newStatus  } : item
                )
              );
            } else {
              console.error("Failed to update read status");
            }
          } catch (error) {
            console.error("Error marking as read:", error);
          }
        };



    return(
        <>
        <Adminheader/>
          <div className="contact-container">
        <h2>Contact Details</h2>
        <table className="contact-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
               <th>Remark</th>
              {/* <th>Time</th> */}
              <th>View</th>
            <th>Delete</th> 
            </tr>
          </thead>
          <tbody>
            
              {details.length > 0 ? (
  details.map((item, index) => (
    <tr key={item.id}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.email}</td>
     
      <td style={{ maxWidth: '300px', maxHeight: '100px', overflow: 'auto' }}>{item.message}</td>
      <td>{formatDate(item.date)}</td>
      {/* <td>{formatTime(item.time)}</td> */}
              <td>
                             {editMode[item.id] ? (
                              <>
                                  <textarea
                                            value={editMessages[item.id] || ""}
                                            onChange={(e) => handleEditChange(item.id, e.target.value)}
                                            placeholder="Rewrite message"
                                            style={{ width: '100px', height: '60px',resize: 'none',overflow: 'auto' }}
                                        />
                                         <br />
                                        <button type="button"
                                            onClick={() => handleSave(item.id)}
                                            style={{ backgroundColor: 'blue', color: 'white', padding: '4px 4px', marginTop: '5px' }}
                                        >
                                            Save
                                        </button>
                                        
                                    </>
                                ) : (
                                  <>
                                  <div
                                      style={{
                                        width: '100px',
                                        height: '50px',
                                        overflow: 'auto',       
                                        whiteSpace: 'pre-wrap',  
                                        wordBreak: 'break-word', 
                                        border: '1px solid #ddd', 
                                        padding: '2px', fontSize:"12px"
                                      }}
                                    >
                                      {item.rewrite || "N/A"}
                                    </div>
                                    <br />
                                    <button type="button"
                                      onClick={() => handleEditClick(item.id)}
                                      style={{ backgroundColor: 'orange', color: 'white', padding: '4px 8px', marginTop: '5px' }}
                                    >
                                      Edit
                                    </button>
                                  </>
                                )}
                              </td>
                              <td>  <button 
    onClick={() => markAsRead(item.id, item.readed)}
    style={{
      backgroundColor: item.readed === "read" ? "green" : "orange",
      color: "white",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer"
    }}
  >
    {item.readed === "read" ? "Read" : "Unread"}
  </button></td>
                                    <td><button onClick={() => openDeletePopup(item.id)}>Delete</button></td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td colSpan="9">No contact details found.</td>
                                </tr>
                              )}
                                        </tbody>
                                      </table>
                                    </div>
                                    {showPopup && (
                                              <div className="popup-container">
                                                  <div className="popup">
                                                      <h3>Are you sure you want to delete?</h3>
                                                      <div className="popup-buttons">
                                                          <button onClick={handleDelete}>Delete</button>
                                                          <button onClick={closeDeletePopup}>Cancel</button>
                                                      </div>
                                                  </div>
                                              </div>
                                          )}
        </>
    )
}
export default Contactdeatils