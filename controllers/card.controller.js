import { Card } from '../models/card.js'



export const addCard = ((req, res) => {

const cards = new Card({
    code: req.body.code, 
    image: req.body.image, 
    value: req.body.value, 
    suit: req.body.suit 
})
console.log(cards)
cards.save() //save method is provided by Mongoose
res.json(cards)


})

export const getAllCards = ((req, res) => {
    Card.find()
    .then(thecards => {
        res.json(thecards)
    })
    .catch(err => console.log(err))
})

export const getCards = async (req, res) => {
    const cards = await Card.find()
    res.json(cards)
}

export const getCardById = async (req, res) => {
    const cardId = req.body.code
    console.log(cardId)
    try{
    const card = await Card.findById(prodId)
    if (!card) {
        return res.status(404).json({Message: 'Product Not Found'})
    }
    res.json(card)
} catch(err) {
    res.status(400).json({Message: `Invalid ID: ${err}`})
}
}

export const putEditCard = async (req, res) => {
    const cardId = req.body.code
    const updatedObj = {
        image: req.body.image, 
        value: req.body.value, 
        suit: req.body.suit 
    } 
    try {
    const card = await Card.findByIdAndUpdate(cardId, updatedObj, {new: true})
        res.json(card)
    } catch(err) {
        res.status(400).json({Message: `Could not update: ${err}`})
    }


}

export const deleteCard = async (req, res) => {
    const cardId = req.body.code 
    try {
        const deletedCard = await Card.findByIdAndRemove(cardId)
            if (!deletedCard) {
               return res.status(400).json({Message: `Product to Delete Not Found.`})
            }
            console.log(`Deleted the product ${deletedCard}`)
            res.redirect(`/product`)
        } catch (err) {
            res.status(400).json({Message: `Invalid ID: ${err}`})
        }

    }
    