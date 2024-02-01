document.addEventListener('DOMContentLoaded', () => {
    let mediaRecorder;
    let recordedChunks = [];

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: { mediaSource: 'screen', cursor: 'never' }
        });

        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };

        mediaRecorder.onstop = () => {
            const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
            const videoURL = URL.createObjectURL(recordedBlob);
            document.getElementById('recordedVideo').src = videoURL;

            // Update UI
            document.getElementById('startRecording').disabled = false;
            document.getElementById('stopRecording').disabled = true;
        };

        mediaRecorder.start();
        document.getElementById('startRecording').disabled = true;
        document.getElementById('stopRecording').disabled = false;
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();

            // Reset mediaRecorder and clear recordedChunks
            mediaRecorder = null;
            recordedChunks = [];

            // Update UI
            document.getElementById('startRecording').disabled = false;
            document.getElementById('stopRecording').disabled = true;
        }
    };

    document.getElementById('startRecording').addEventListener('click', startRecording);
    document.getElementById('stopRecording').addEventListener('click', stopRecording);
});
