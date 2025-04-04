import dotenv from "dotenv";
dotenv.config(); 
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: "da3inpfug",
    api_key: "417827411791727",
    api_secret: "vE10QkxKjTaYvpHvLf1tyy7JZxo",
});
export default cloudinary;
