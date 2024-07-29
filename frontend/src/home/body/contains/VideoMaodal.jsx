import React, {useEffect} from 'react';
import Modal from 'react-modal';
import "../../../style/body/contains/VideoModal.css"
Modal.setAppElement('#root'); // Make sure this is your root element

// eslint-disable-next-line react/prop-types
const VideoModal = ({isOpen, onRequestClose }) => {
    const youtubeUrl = `https://www.youtube.com/shorts/RQL9za9Z-xI`;


    useEffect(() => {
        window.open(youtubeUrl);
    }, []);


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Coffee Making Video"
            className="video-modal"
            overlayClassName="video-overlay"
        >
            <button onClick={onRequestClose} className="close-button">Close</button>
        </Modal>
    );
};

export default VideoModal;
