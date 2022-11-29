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
        <div id='categories'>
          <h3>Restaurant Categories</h3>
          <ul id='categoryList'>
            {r.categories && r.categories.map((c, i) => {
              return <li key={i}>{c.title}</li>
            })}
          </ul>
        </div>
        {r.location &&
          <div id='address'>
            <h3>Address</h3>
            <p>{r.location.display_address[0]}</p>
            <p>{r.location.display_address[1]}</p>
          </div>
        }
        <h3>Price: {r.price && r.price.split('').map(c => '💲').join('')}</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button>Add Restaurant</Button>
        <Button onClick={() => window.open(r.url, '_blank')}>Yelp</Button>
        <Button onClick={hideResultModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SearchResultModal