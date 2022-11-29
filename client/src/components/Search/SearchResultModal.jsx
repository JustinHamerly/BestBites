import React from 'react'
import { Button, Image, Modal } from 'react-bootstrap'

const SearchResultModal = ({ show, hideResultModal, r }) => {
  return (
    <Modal show={show} onHide={hideResultModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{r.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Image src={r.img} fluid className='searchModalImage' />
        <ul id='categoryList'>
          {r.categories && r.categories.map((c, i) => {
            return <li key={i}>{c.title}</li>
          })}
        </ul>
        <p>Price: {r.price && r.price.split('').map(c=>{return '💲'}).join('')}</p>
        {console.log(r)}
      </Modal.Body>
      <Modal.Footer>
        <Button>Add Restaurant</Button>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SearchResultModal