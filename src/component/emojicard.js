import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './emoji.css'
const EmojiCard = ({emojiData}) => {

    return (
        <div className='contain'>
            {emojiData.map((list) => { 
                return (
                    <>
                        <Card className='main' key={list.id} style={{ width: '18rem'}} >
                       
                            <Card.Body className='main-body' >
                                <Card.Title className='emo ' style={{fontSize:"large"}}> {list.unicode}</Card.Title>
                                <hr/>
                                <Card.Text>
                                    {list.name} 
                                    <hr/>
                                    <Card.Text style={{fontWeight:"bold"}}> {list.meaning}</Card.Text>
                                </Card.Text>
                                {/* <Button variant="primary">copy</Button> */}
                            </Card.Body>
                        </Card>
                    </>
                )
            })}

        </div>
    )
}

export default EmojiCard
