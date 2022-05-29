import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

// Set configuration for cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (file, options) => {
	try {
		const result = await cloudinary.uploader.upload(file, {
			transformation: {
				width: options.width,
				height: options.height,
				crop: options.crop,
			},
		});
		return result;
	} catch (error) {
		console.log(error);
	}
};
