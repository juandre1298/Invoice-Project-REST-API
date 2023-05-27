import { generateUploadURL } from "./../AWS/s3.js";

export const getUrlForS3 = async (req, res) => {
  try {
    const url = await generateUploadURL();
    res.send({ url });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
