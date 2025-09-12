import axios from 'axios';

//axios.defaults.baseURL = "http://localhost:8080/mindtek_backend/";
//axios.defaults.baseURL = "http://mindtek.seataxi.in/mindtek_backend/";
axios.defaults.baseURL = "https://mindtek.seataxi.in/mindtek_backend/";



const REGISTER_URL_MINDTEK_LOGIN ="login";
const CONTACT_API_MINDTEK_URL ="add_contactus";
const UPDATE_PASSWORD_MINDTEK_URL ="update_password";
const VIEW_URL_VIEW_MINDTEK_DETAILS ="View_details";
const DELETE_DETAIL_MINDTEK_API_URL ="contact_delete";
const UPDATE_CONTACT_MINDTEK_API_URL ="update_rewrite";
const UPDATE_READED_MINDTEK_API_URL ="update_read_status";


   export const SignInApi= async (data)=>{
    
    try {
        const response = await axios.post(REGISTER_URL_MINDTEK_LOGIN, data);
        return response.data; 
      } catch (error) {
        throw error;
      }
  }

  
  export const ContactusApi= async (data)=>{
    try {
        const response = await axios.post(CONTACT_API_MINDTEK_URL, data);
        return response.data; 
      } catch (error) {
        throw error;
      }
  }



    export const updateConfirmPasswordApi = async (data) => {
    try {
      const response = await axios.post(UPDATE_PASSWORD_MINDTEK_URL, data, {    
      });
      console.log('data',response);
      return response.data; 
    } catch (error) {
      throw error;   
    }
  };


   export const ViewDetailsMindtekApi = async () => {
    try {
      const response = await axios.get(VIEW_URL_VIEW_MINDTEK_DETAILS);
      return response.data;
    } catch (error) {
      throw error;
    }
  };


    export const deleteDetailMindtekApi = async (detailId) => {
    console.log("Detail ID: " + detailId); 
    try {
      const response = await axios.delete(`${DELETE_DETAIL_MINDTEK_API_URL}/${detailId}`, {     
      });
      console.log('Delete detail response:', response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  

  export const updateContactMindtekApi = async (id, rewrite) => {
  try {
    const response = await axios.put(`${UPDATE_CONTACT_MINDTEK_API_URL}/${id}`, { rewrite });
    return response.data; // Should return { status: true, message: "Message updated successfully" }
  } catch (error) {
    console.error("Error updating contact rewrite:", error);
    return null;
  }
};


export const updateReadStatusMindtekApi = async (id, newStatus) => {
    console.log("Updating Read Status for ID:", id);
  
    try {
      const response = await axios.put(`${UPDATE_READED_MINDTEK_API_URL}/${id}`, {
        readed: newStatus, // You can include the desired status change here
      });
      console.log("Update read status response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating read status:", error);
      throw error;
    }
  };
