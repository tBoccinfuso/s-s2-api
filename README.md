# s-s2-api
Swords & Soldiers 2 Community API. Make your requests to: https://awesomenauts-api.herokuapp.com/. Keep in mind the API will currently return a json object, and you may have to see what was returned and use `.keyName` on the variable to get the value you are looking for out of the object!

## What routes give me data?

1. https://s-s2-api.herokuapp.com/factions
    - Return 1 big json object with all factions (also objects).

2. /factions/:faction
    - Example: https://s-s2-api.herokuapp.com/vikings
    - Where `:faction` is the key of the naut you want to search for. This will return a json object with all info related to the faction.

3. /factions/:faction/description
    - Example: https://s-s2-api.herokuapp.com/factions/vikings/description
    - Get the Description of the faction.

3. /factions/:faction/splash
    - Example: https://s-s2-api.herokuapp.com/factions/vikings/splash
    - Get the Splash art of the faction.

4. /factions/:faction/units/:unit
    - Example: https://s-s2-api.herokuapp.com/factions/vikings/units/berserkers
    - Get a specific unit of the faction.

5. /factions/:faction/units/:unit/name
    - Example: https://s-s2-api.herokuapp.com/factions/vikings/units/berserkers/name
    - Get a specific unit's name of the faction.

6. /factions/:faction/units/:unit/description
    - Example: https://s-s2-api.herokuapp.com/factions/vikings/units/berserkers/description
    - Get a specific unit's decription of the faction.

7. /factions/:faction/units/:unit/video
    - Example: https://s-s2-api.herokuapp.com/factions/vikings/units/berserkers/video
    - Get a specific unit's video of the faction. This is pulled from the S&S2 website.

8. /factions/:faction/special_units
    - Example: https://s-s2-api.herokuapp.com/factions/demons/special_units
    - Get all special units related to the faction.

9. /factions/:faction/special_units/:unit
    - Example: https://s-s2-api.herokuapp.com/factions/demons/special_units/seige_troll
    - Get a specific special unit.

10. /factions/:faction/special_units/:unit/name
    - Example: https://s-s2-api.herokuapp.com/factions/demons/special_units/seige_troll/name
    - Get a specific special unit's name.

11. /factions/:faction/special_units/:unit/description
    - Example: https://s-s2-api.herokuapp.com/factions/demons/special_units/seige_troll/description
    - Get a specific special unit's description.

12. /factions/:faction/special_units/:unit/video
    - Example: https://s-s2-api.herokuapp.com/factions/demons/special_units/seige_troll/video
    - Get a specific special unit's video.

13. /factions/:faction/spells
    - Example: https://s-s2-api.herokuapp.com/factions/persians/spells
    - Get all spells for the faction.

14. /factions/:faction/spells/:spell
    - Example: https://s-s2-api.herokuapp.com/factions/persians/spells/bribe
    - Get specific spell for the faction.

15. /factions/:faction/spells/:spell/name
    - Example: https://s-s2-api.herokuapp.com/factions/persians/spells/bribe/name
    - Get specific spell's name.

16. /factions/:faction/spells/:spell/description
    - Example: https://s-s2-api.herokuapp.com/factions/persians/spells/bribe/description
    - Get specific spell's description.

17. /factions/:faction/spells/:spell/video
    - Example: https://s-s2-api.herokuapp.com/factions/persians/spells/bribe/video
    - Get specific spell's video.

18. /factions/:faction/towers
    - Example: https://s-s2-api.herokuapp.com/factions/persians/towers
    - Get all towers for the faction.

19. /factions/:faction/towers/:tower
    - Example: https://s-s2-api.herokuapp.com/factions/persians/towers/djinn_cannon
    - Get specific tower.

20. /factions/:faction/towers/:tower/name
    - Example: https://s-s2-api.herokuapp.com/factions/persians/towers/djinn_cannon/name
    - Get specific tower's name.
    
21. /factions/:faction/towers/:tower/description
    - Example: https://s-s2-api.herokuapp.com/factions/persians/towers/djinn_cannon/description
    - Get specific tower's description.
    
22. /factions/:faction/towers/:tower/video
    - Example: https://s-s2-api.herokuapp.com/factions/persians/towers/djinn_cannon/video
    - Get specific tower's video.
