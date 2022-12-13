const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const uploadPicture = async (file) => {
    const randomName = Math.random().toString(36).substring(7);

    return new Promise((resolve, reject) => {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${randomName}.jpg`,
            Body: file,
            ContentEncoding: 'base64',
            ContentType: 'image/jpeg' || 'image/png',
            ACL: 'public-read'
        };

        s3.upload(params, (error, data) => {
            if (error) {
                reject(error);
            }

            resolve(data.Location);
        });
    });
}

module.exports = {
    uploadPicture
};