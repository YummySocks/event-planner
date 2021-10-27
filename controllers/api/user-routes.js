
const router = require('express').Router();
const { Event } = require('../../models');



// get all events
router.get('/', (req, res) => {
    Event.findAll({
      include: [
        Host,
        EventInfo,
        {
          model: something,
          through: somethingelse,
        },
      ],
    })
      .then((events) => res.json(events))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // get one event
  router.get('/:id', (req, res) => {
    Event.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        Host,
        EventInfo,
        {
          model: something,
          through: somethingelse,
        },
      ],
    })
      .then((events) => res.json(events))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  //create new event
  router.post('/', (req, res) => {
    /* req.body template
      {
        event_name: "Party",
        host: Pitbull,
        summary: GOAT,
        event ID: 1234
      }
    */
    Event.create(req.body)
      .then((product) => {
        // if there's product tags, we need to create pairings to bulk create in the ProductTag model
        if (req.body.eventId && req.body.eventId.length) {
          const productTagIdArr = req.body.tagIds.map((tag_id) => {
            return {
              product_id: product.id,
              tag_id,
            };
          });
          return ProductTag.bulkCreate(productTagIdArr);
        }
        // if no product tags, just respond
        res.status(200).json(product);
      })
      .then((productTagIds) => res.status(200).json(productTagIds))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  

  // update event
router.put('/:id', (req, res) => {
    // update event details 
    Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((product) => {
        // find all associated tags from ProductTag
        return ProductTag.findAll({ where: { product_id: req.params.id } });
      })
      .then((productTags) => {
        // get list of current tag_ids
        const productTagIds = productTags.map(({ tag_id }) => tag_id);
        // create filtered list of new tag_ids
        const newProductTags = req.body.tagIds
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });
        // figure out which ones to remove
        const productTagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);
  
        // run both actions
        return Promise.all([
          ProductTag.destroy({ where: { id: productTagsToRemove } }),
          ProductTag.bulkCreate(newProductTags),
        ]);
      })
      .then((updatedProductTags) => res.json(updatedProductTags))
      .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
      });
  });