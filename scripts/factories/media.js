class Media {
    constructor(data) {
        if (data.image !== undefined) {
            return new MediaImage(data);
        } else if (data.video !== undefined) {
            return new MediaVideo(data);
        } else {
            throw new Error("Media format not supported");
        }
    }
}