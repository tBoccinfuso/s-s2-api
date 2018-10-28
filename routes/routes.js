const express = require('express');
const router = express.Router();

const factionsController = require('../controllers/FactionsController');

router.get('/', function (req, res) {
  res.end(`Swords & soldiers 2 API
By: T.Boccinfuso 
www.twitter.com/boccinfusoT`);
});

// Get all factions
router.get('/factions', factionsController.getAllFactions)

// Get a faction
router.get('/factions/:faction', factionsController.getFactionByName)

// Get faction details
router.get('/factions/:faction/description', factionsController.getFactionDesc)
router.get('/factions/:faction/splash', factionsController.getFactionSplashArt)
router.get('/factions/:faction/units', factionsController.getFactionUnits)

// Get faction unit details
router.get('/factions/:faction/units/:unit', factionsController.getFactionUnitByName)
router.get('/factions/:faction/units/:unit/name', factionsController.getFactionUnitName)
router.get('/factions/:faction/units/:unit/description', factionsController.getFactionUnitDesc)
router.get('/factions/:faction/units/:unit/video', factionsController.getFactionUnitVideo)

// Get faction special units
router.get('/factions/:faction/special_units', factionsController.getFactionSpecialUnits)
router.get('/factions/:faction/special_units/:special_unit', factionsController.getFactionSpecialUnit)
router.get('/factions/:faction/special_units/:special_unit/name', factionsController.getFactionSpecialUnitName)
router.get('/factions/:faction/special_units/:special_unit/description', factionsController.getFactionSpecialUnitDesc)
router.get('/factions/:faction/special_units/:special_unit/video', factionsController.getFactionSpecialUnitVideo)

// Get faction spells
router.get('/factions/:faction/spells', factionsController.getFactionSpells)
router.get('/factions/:faction/spells/:spell', factionsController.getFactionSpellByName)
router.get('/factions/:faction/spells/:spell/name', factionsController.getFactionSpellName)
router.get('/factions/:faction/spells/:spell/description', factionsController.getFactionSpellDesc)
router.get('/factions/:faction/spells/:spell/video', factionsController.getFactionSpellVideo)

// Get faction towers
router.get('/factions/:faction/towers', factionsController.getFactionTowers)
router.get('/factions/:faction/towers/:tower', factionsController.getFactionTowerByName)
router.get('/factions/:faction/towers/:tower/name', factionsController.getFactionTowerName)
router.get('/factions/:faction/towers/:tower/description', factionsController.getFactionTowerDesc)
router.get('/factions/:faction/towers/:tower/video', factionsController.getFactionTowerVideo)

module.exports = router;