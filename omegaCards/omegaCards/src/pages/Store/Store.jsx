import React, { useState } from 'react';
import { useCart } from './../../layout/AppParams/AppParams';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCartPlus } from 'react-icons/bs';
import data from './../../components/data.js';
import { Modal } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importar ícones de seta

export default function Store() {
    const { addProductToCart } = useCart();
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [currentShirt, setCurrentShirt] = useState(null); // Para rastrear a camisa atual exibida na modal

    const handleAddToCart = (id) => {
        addProductToCart(id);
    };

    const handleImageClick = (shirt) => {
        setModalImage(shirt.imageUrl);
        setCurrentShirt(shirt);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setModalImage('');
        setCurrentShirt(null);
    };

    const handleNextImage = () => {
        if (!currentShirt) return;

        const isFrontImage = modalImage === currentShirt.imageUrl;
        setModalImage(isFrontImage ? currentShirt.frontImageUrl : currentShirt.imageUrl);
    };

    const handlePreviousImage = () => {
        if (!currentShirt) return;

        const isFrontImage = modalImage === currentShirt.imageUrl;
        setModalImage(isFrontImage ? currentShirt.frontImageUrl : currentShirt.imageUrl);
    };

    const shirts = data.shirts.map(service => ({
        id: service.id,
        name: service.name,
        price: service.price,
        carouselName: service.carouselName,
        frontImage: service.frontImage,
        imageUrl: `/img/shirts/${service.carouselName}`,
        frontImageUrl: `/img/shirts/${service.frontImage}`,
    }));

    return (
        <div className="pageStore mt-4">
            <h3>*clique na imagem do card para ver em tamanho aumentado*</h3>
            <div className="row">
                {shirts.map((shirt) => (
                    <div key={shirt.id} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div className="card">
                            <div className="image-container">
                                <img
                                    src={shirt.imageUrl}
                                    alt={shirt.name}
                                    className="carousel-image"
                                    onClick={() => handleImageClick(shirt)}
                                />
                                <img
                                    src={shirt.frontImageUrl}
                                    alt={`${shirt.name} - Front`}
                                    className="front-image"
                                    onClick={() => handleImageClick(shirt)}
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{shirt.name}</h5>
                                <p className="card-text">{shirt.price}</p>
                            </div>
                            <div className="card-footer text-center">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleAddToCart(shirt.id)}
                                >
                                    <BsCartPlus /> Adicionar ao Carrinho
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal para exibir a imagem em tamanho maior */}
            <Modal show={showModal} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{modalImage === currentShirt?.imageUrl ? 'Verso' : 'Frente'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-navigation d-flex justify-content-center">
                        <button className="btn btn-light" onClick={handlePreviousImage}>
                            <FaArrowLeft />
                        </button>
                        <button className="btn btn-light" onClick={handleNextImage}>
                            <FaArrowRight />
                        </button>
                    </div>
                    <div className="modal-image-container">
                        <img
                            src={modalImage}
                            alt="Imagem em tamanho maior"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>
                        Fechar
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}