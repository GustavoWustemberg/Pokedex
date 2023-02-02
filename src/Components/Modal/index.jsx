import React, { useState } from "react";
import Modal from "react-modal";
import './style.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Index({ isOpen, dataPokemon }) {
  const [modalIsopen, setIsopen] = useState(isOpen);
  const [image, setImage] = useState(dataPokemon.data.sprites.front_default);
  const [verify, setVerify] = useState(false);

  console.log(dataPokemon);
  function closeModal() {
    setIsopen(false);
  }

  let num = dataPokemon.data.height;
  let numString = num.toString();
  let numFormatted = numString.slice(0, -1) + '.' + numString.slice(-1);
  console.log(numFormatted);

  let num2 = dataPokemon.data.weight;
  let numString2 = num2.toString();
  let numFormatted2 = numString2.slice(0, -1) + '.' + numString2.slice(-1);
  console.log(numFormatted2);


  const typeHandler = () => {
    if (dataPokemon.data.types[1]) {
      return dataPokemon.data.types[0].type.name + " | " + dataPokemon.data.types[1].type.name
    }
    return dataPokemon.data.types[0].type.name
  }

  const images = [dataPokemon.data.sprites.front_default, dataPokemon.data.sprites.back_default];

  function alterImageV() {
    if (verify == true) {
      setVerify(false);
      setImage(images[0]);
    }
  }
  function alterImageI() {
    if (verify == false) {
      setVerify(true);
      setImage(images[1]);
    }
  }

  return (
    <div>
      <Modal
        isOpen={modalIsopen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="d-flex">
          <h2>#{dataPokemon.data.id} -</h2>
          <h2 className="name-pokemon">{dataPokemon.data.name}</h2>
        </div>
        <div className="d-flex img-pokemon">
          <img src={image} alt={dataPokemon.data.name} title={dataPokemon.data.name} />
        </div>
        <div className="d-flex prev-next btn-modal btn-modal--prev-next">
          <button onClick={alterImageV}> {'<'} </button>
          <button onClick={alterImageI}> {'>'} </button>
        </div>
        <div className="d-flex wh-margin">
          <h3>Tipo:</h3>
          <p className="t-capitalize">{typeHandler()}</p>
        </div>
        <div className="d-flex wh-margin">
          <h3>Altura:</h3>
          <p>{numFormatted} m</p>
          <h3>Peso:</h3>
          <p>{numFormatted2} kg</p>
        </div>
        <div className="d-flex btn-modal btn-modal--voltar"><button onClick={() => { window.location.reload(true) }}>Voltar</button></div>
      </Modal >
    </div >
  )
}

export default Index;