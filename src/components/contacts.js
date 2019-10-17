import React from 'react'

const Contacts = ({ contacts }) => {

  return (
    <div>
      <center><h1>Dominion Card Randomizer</h1></center>
      <h6 className="subtitle">Play a game of Dominion with these 10 random cards!</h6>
      <div className="box">
      {contacts.map((contact, index) => (
        <div className={"card type-" + contact.type} key={index}>
          <div className="card-body">
            <h4 className="card-title">{contact.card_name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{contact.cost} - {contact.type}</h6>
            <p>{contact.card_text.replace("\\d", '\\n\\n').split('\\n').map((item, key) => {
              return (key === 0) ? <span key={key}>{item}</span> : <span key={key}><br/>{item}</span>
            })}</p>
            <div className="text-muted small-text"><em>from {contact.set_name}</em></div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
};

export default Contacts