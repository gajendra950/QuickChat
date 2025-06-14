import { axiosInstance } from "./axios";

export const markMessagesAsRead = async (senderId) => {
  try {
    await axiosInstance.patch(`/messages/read/${senderId}`);
  } catch (error) {
    console.error("Error marking messages as read:", error.message);
  }
};
