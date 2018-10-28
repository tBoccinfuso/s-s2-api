const api = require('../api/factions.json');

// Get all factions
exports.getAllFactions = (req, res) => {
  res.json( api.factions );
}

// Faction Controllers
exports.getFactionByName = (req, res) => {
  res.json( api.factions[req.params.faction] );
}

exports.getFactionDesc = (req, res) => {
  res.json( api.factions[req.params.faction].description );
}

exports.getFactionSplashArt = (req, res) => {
  res.json( api.factions[req.params.faction].splash );
}

exports.getFactionUnits = (req, res) => {
  res.json( api.factions[req.params.faction].units );
}

exports.getFactionUnitByName = (req, res) => {
  res.json( api.factions[req.params.faction].units[req.params.unit] );
}

exports.getFactionUnitName = (req, res) => {
  res.json( api.factions[req.params.faction].units[req.params.unit].name );
}

exports.getFactionUnitDesc = (req, res) => {
  res.json( api.factions[req.params.faction].units[req.params.unit].description );
}

exports.getFactionUnitVideo = (req, res) => {
  res.json( api.factions[req.params.faction].units[req.params.unit].video );
}

exports.getFactionSpecialUnits = (req, res) => {
  res.json( api.factions[req.params.faction].special_units );
}

exports.getFactionSpecialUnit = (req, res) => {
  res.json( api.factions[req.params.faction].special_units[req.params.special_unit] );
}

exports.getFactionSpecialUnitName = (req, res) => {
  res.json( api.factions[req.params.faction].special_units[req.params.special_unit].name );
}

exports.getFactionSpecialUnitDesc = (req, res) => {
  res.json( api.factions[req.params.faction].special_units[req.params.special_unit].description );
}

exports.getFactionSpecialUnitVideo = (req, res) => {
  res.json( api.factions[req.params.faction].special_units[req.params.special_unit].video );
}

exports.getFactionSpecialUnit = (req, res) => {
  res.json( api.factions[req.params.faction].special_units[req.params.special_unit] );
}

exports.getFactionSpells = (req, res) => {
  res.json( api.factions[req.params.faction].spells );
}

exports.getFactionSpellByName = (req, res) => {
  res.json( api.factions[req.params.faction].spells[req.params.spell] );
}

exports.getFactionSpellName = (req, res) => {
  res.json( api.factions[req.params.faction].spells[req.params.spell].name );
}

exports.getFactionSpellDesc = (req, res) => {
  res.json( api.factions[req.params.faction].spells[req.params.spell].description );
}

exports.getFactionSpellVideo = (req, res) => {
  res.json( api.factions[req.params.faction].spells[req.params.spell].video );
}

exports.getFactionTowers = (req, res) => {
  res.json( api.factions[req.params.faction].towers );
}

exports.getFactionTowerByName = (req, res) => {
  res.json( api.factions[req.params.faction].towers[req.params.tower] );
}

exports.getFactionTowerName = (req, res) => {
  res.json( api.factions[req.params.faction].towers[req.params.tower].name );
}

exports.getFactionTowerDesc = (req, res) => {
  res.json( api.factions[req.params.faction].towers[req.params.tower].description );
}

exports.getFactionTowerVideo = (req, res) => {
  res.json( api.factions[req.params.faction].towers[req.params.tower].video );
}