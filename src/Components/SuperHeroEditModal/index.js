import React from 'react';
import Modal from 'react-modal';
import SuperHeroEditSection from '../SuperHeroEditSection';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const SuperHeroEditModal = (props) => {
    if (!props.isShow) return <></>;
    return (
        <div>
            <Modal
                isOpen={props.isShow}
                onRequestClose={props.onClose}
                style={customStyles}
                ariaHideApp={false}
            >
                <SuperHeroEditSection onEditSuccess={props.onEditSuccess} id={props.id} />
            </Modal>
        </div>
    );
};

export default SuperHeroEditModal;