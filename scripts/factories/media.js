class MediaFactory {
    constructor(data, photographerName) {
        if (data.image !== undefined) {
            return new MediaImage(data, photographerName);
        } else if (data.video !== undefined) {
            return new MediaVideo(data, photographerName);
        } else {
            throw new Error("Media format not supported");
        }
    }
}