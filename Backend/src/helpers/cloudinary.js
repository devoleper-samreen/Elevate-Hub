import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.CLOUD_NAME);
console.log(process.env.API_KEY);
console.log(process.env.API_SECRET);




// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null
        }

        //upload file on cloudinay
        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        //file uploaded seccessfully
        console.log("file upload on cloudinary")
        return result;

    } catch (error) {
        //fs.unlinkSync(localFilePath)
        console.error("Error uploading to Cloudinary:", error);
        return null
    }
}

const deleteOnCloudinary = async (publicId) => {

    try {
        if (!publicId) {
            return null
        }

        console.log(publicId)

        const result = await cloudinary.uploader.destroy(publicId, { resource_type: "video" });

        console.log("file delete on cloudinary")

        return result;
    } catch (error) {
        throw new Error(`Failed to delete file: ${error.message}`);
    }
}


export { uploadOnCloudinary, deleteOnCloudinary }