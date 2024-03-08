import Jimp from 'jimp';

export const imageResize = async (image, targetWidth, quality) => {
    try {
        const resizedImage = await Jimp.read(Buffer.from(image, 'base64'));

        const currentWidth = resizedImage.getWidth();
        const currentHeight = resizedImage.getHeight();

        const targetHeight = (currentHeight / currentWidth) * targetWidth;

        resizedImage.resize(targetWidth, targetHeight);

        if ((targetHeight / targetWidth) > 1.2) {
            resizedImage.crop(0, 0, targetWidth, targetWidth);
        } else {
            resizedImage.cover(targetWidth, targetWidth);
        }

        resizedImage.quality(quality);

        const newBase64 = await resizedImage.getBase64Async(Jimp.MIME_JPEG);

        return newBase64;

    } catch (err) {
        console.error('Произошла ошибка:', err);
    }
};

export const imageResizePost = async (image) => {
    try {
        const originalImage = await Jimp.read(Buffer.from(image, 'base64'));

        const maxWidth = 500;
        const maxHeight = 400;
        const targetSize = 60 * 1024; // 60 кБ в байтах
        let quality = 100;

        const currentWidth = originalImage.getWidth();
        const currentHeight = originalImage.getHeight();

        let newWidth, newHeight;

        if (currentWidth / maxWidth > currentHeight / maxHeight) {
            newWidth = maxWidth;
            newHeight = (currentHeight / currentWidth) * maxWidth;
        } else {
            newHeight = maxHeight;
            newWidth = (currentWidth / currentHeight) * maxHeight;
        }

        originalImage.resize(newWidth, newHeight);

        while (quality >= 10) {
            const buffer = await originalImage.getBufferAsync(Jimp.MIME_JPEG);
            const currentSize = buffer.length;
            if (currentSize <= targetSize) {
                break;
            }
            originalImage.quality(quality);
            quality -= 10;
        }

        const newBase64 = await originalImage.getBase64Async(Jimp.MIME_JPEG);

        return newBase64;

    } catch (err) {
        console.error('Произошла ошибка:', err);
    }
};





