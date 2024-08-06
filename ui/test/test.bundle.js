/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./resources/netlog_defs.ts
// Specifies a fieldName key with one or more possible values and a `canAnonyize` override
// if that field and value are present on the log line. See 'GameLog' for an example.
// Options for including these lines in a filtered log via the log splitter's analysis option.
// `include:` specifies the level of inclusion:
//   - 'all' will include all lines with no filtering.
//   - 'filter' will include only those lines that match at least one of the specified `filters`.
//   - 'never' is an override; just like if the property were omitted, no log lines will be included
//      in the filter; however, if 'never' is used, the automated workflow will not attempt to
//      change it to 'all' upon finding active triggers using this line type.
// `filters:` contains Netregex-style filter criteria. Lines satisfying at least one filter will be
//   included. If `include:` = 'filter', `filters` must be present; otherwise, it must be omitted.
// `combatantIdFields:` are field indices containing combatantIds. If specified, these fields
//   will be checked for ignored combatants (e.g. pets) during log filtering.
// TODO: Maybe bring in a helper library that can compile-time extract these keys instead?
const combatantMemoryKeys = ['CurrentWorldID', 'WorldID', 'WorldName', 'BNpcID', 'BNpcNameID', 'PartyType', 'ID', 'OwnerID', 'WeaponId', 'Type', 'Job', 'Level', 'Name', 'CurrentHP', 'MaxHP', 'CurrentMP', 'MaxMP', 'PosX', 'PosY', 'PosZ', 'Heading', 'MonsterType', 'Status', 'ModelStatus', 'AggressionStatus', 'TargetID', 'IsTargetable', 'Radius', 'Distance', 'EffectiveDistance', 'NPCTargetID', 'CurrentGP', 'MaxGP', 'CurrentCP', 'MaxCP', 'PCTargetID', 'IsCasting1', 'IsCasting2', 'CastBuffID', 'CastTargetID', 'CastGroundTargetX', 'CastGroundTargetY', 'CastGroundTargetZ', 'CastDurationCurrent', 'CastDurationMax', 'TransformationId'];
const latestLogDefinitions = {
  GameLog: {
    type: '00',
    name: 'GameLog',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChatLog',
    fields: {
      type: 0,
      timestamp: 1,
      code: 2,
      name: 3,
      line: 4
    },
    subFields: {
      code: {
        '0039': {
          name: 'message',
          canAnonymize: true
        },
        '0038': {
          name: 'echo',
          canAnonymize: true
        },
        '0044': {
          name: 'dialog',
          canAnonymize: true
        },
        '0839': {
          name: 'message',
          canAnonymize: true
        }
      }
    },
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        code: ['0044', '0839']
      }
    }
  },
  ChangeZone: {
    type: '01',
    name: 'ChangeZone',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Territory',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
    },
    lastInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all'
    }
  },
  ChangedPlayer: {
    type: '02',
    name: 'ChangedPlayer',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChangePrimaryPlayer',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
    },
    playerIds: {
      2: 3
    },
    lastInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  AddedCombatant: {
    type: '03',
    name: 'AddedCombatant',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'AddCombatant',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      job: 4,
      level: 5,
      ownerId: 6,
      worldId: 7,
      world: 8,
      npcNameId: 9,
      npcBaseId: 10,
      currentHp: 11,
      hp: 12,
      currentMp: 13,
      mp: 14,
      // maxTp: 15,
      // tp: 16,
      x: 17,
      y: 18,
      z: 19,
      heading: 20
    },
    playerIds: {
      2: 3,
      6: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        id: '4.{7}'
      },
      // NPC combatants only
      combatantIdFields: 2
    }
  },
  RemovedCombatant: {
    type: '04',
    name: 'RemovedCombatant',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'RemoveCombatant',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      job: 4,
      level: 5,
      owner: 6,
      world: 8,
      npcNameId: 9,
      npcBaseId: 10,
      currentHp: 11,
      hp: 12,
      currentMp: 13,
      mp: 14,
      // currentTp: 15,
      // maxTp: 16,
      x: 17,
      y: 18,
      z: 19,
      heading: 20
    },
    playerIds: {
      2: 3,
      6: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        id: '4.{7}'
      },
      // NPC combatants only
      combatantIdFields: 2
    }
  },
  PartyList: {
    type: '11',
    name: 'PartyList',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PartyList',
    fields: {
      type: 0,
      timestamp: 1,
      partyCount: 2,
      id0: 3,
      id1: 4,
      id2: 5,
      id3: 6,
      id4: 7,
      id5: 8,
      id6: 9,
      id7: 10,
      id8: 11,
      id9: 12,
      id10: 13,
      id11: 14,
      id12: 15,
      id13: 16,
      id14: 17,
      id15: 18,
      id16: 19,
      id17: 20,
      id18: 21,
      id19: 22,
      id20: 23,
      id21: 24,
      id22: 25,
      id23: 26
    },
    playerIds: {
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
      13: null,
      14: null,
      15: null,
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
      21: null,
      22: null,
      23: null,
      24: null,
      25: null,
      26: null
    },
    firstOptionalField: 3,
    canAnonymize: true,
    lastInclude: true
  },
  PlayerStats: {
    type: '12',
    name: 'PlayerStats',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PlayerStats',
    fields: {
      type: 0,
      timestamp: 1,
      job: 2,
      strength: 3,
      dexterity: 4,
      vitality: 5,
      intelligence: 6,
      mind: 7,
      piety: 8,
      attackPower: 9,
      directHit: 10,
      criticalHit: 11,
      attackMagicPotency: 12,
      healMagicPotency: 13,
      determination: 14,
      skillSpeed: 15,
      spellSpeed: 16,
      tenacity: 18,
      localContentId: 19
    },
    canAnonymize: true,
    lastInclude: true,
    firstOptionalField: undefined
  },
  StartsUsing: {
    type: '20',
    name: 'StartsUsing',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StartsCasting',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      castTime: 8,
      x: 9,
      y: 10,
      z: 11,
      heading: 12
    },
    possibleRsvFields: 5,
    blankFields: [6],
    playerIds: {
      2: 3,
      6: 7
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC casts only
      combatantIdFields: [2, 6]
    }
  },
  Ability: {
    type: '21',
    name: 'Ability',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ActionEffect',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      flags: 8,
      damage: 9,
      targetCurrentHp: 24,
      targetMaxHp: 25,
      targetCurrentMp: 26,
      targetMaxMp: 27,
      // targetCurrentTp: 28,
      // targetMaxTp: 29,
      targetX: 30,
      targetY: 31,
      targetZ: 32,
      targetHeading: 33,
      currentHp: 34,
      maxHp: 35,
      currentMp: 36,
      maxMp: 37,
      // currentTp: 38;
      // maxTp: 39;
      x: 40,
      y: 41,
      z: 42,
      heading: 43,
      sequence: 44,
      targetIndex: 45,
      targetCount: 46,
      ownerId: 47,
      ownerName: 48,
      effectDisplayType: 49,
      actionId: 50,
      actionAnimationId: 51,
      animationLockTime: 52,
      rotationHex: 53
    },
    possibleRsvFields: 5,
    playerIds: {
      2: 3,
      6: 7,
      47: 48
    },
    blankFields: [6, 47, 48],
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC abilities only
      combatantIdFields: [2, 6]
    }
  },
  NetworkAOEAbility: {
    type: '22',
    name: 'NetworkAOEAbility',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'AOEActionEffect',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      ability: 5,
      targetId: 6,
      target: 7,
      flags: 8,
      damage: 9,
      targetCurrentHp: 24,
      targetMaxHp: 25,
      targetCurrentMp: 26,
      targetMaxMp: 27,
      // targetCurrentTp: 28,
      // targetMaxTp: 29,
      targetX: 30,
      targetY: 31,
      targetZ: 32,
      targetHeading: 33,
      currentHp: 34,
      maxHp: 35,
      currentMp: 36,
      maxMp: 37,
      // currentTp: 38;
      // maxTp: 39;
      x: 40,
      y: 41,
      z: 42,
      heading: 43,
      sequence: 44,
      targetIndex: 45,
      targetCount: 46,
      ownerId: 47,
      ownerName: 48,
      effectDisplayType: 49,
      actionId: 50,
      actionAnimationId: 51,
      animationLockTime: 52,
      rotationHex: 53
    },
    possibleRsvFields: 5,
    playerIds: {
      2: 3,
      6: 7,
      47: 48
    },
    blankFields: [6, 47, 48],
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC abilities only
      combatantIdFields: [2, 6]
    }
  },
  NetworkCancelAbility: {
    type: '23',
    name: 'NetworkCancelAbility',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'CancelAction',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      id: 4,
      name: 5,
      reason: 6
    },
    possibleRsvFields: 5,
    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC combatants only
      combatantIdFields: 2
    }
  },
  NetworkDoT: {
    type: '24',
    name: 'NetworkDoT',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'DoTHoT',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      which: 4,
      effectId: 5,
      damage: 6,
      currentHp: 7,
      maxHp: 8,
      currentMp: 9,
      maxMp: 10,
      // currentTp: 11,
      // maxTp: 12,
      x: 13,
      y: 14,
      z: 15,
      heading: 16,
      sourceId: 17,
      source: 18,
      // An id number lookup into the AttackType table
      damageType: 19,
      sourceCurrentHp: 20,
      sourceMaxHp: 21,
      sourceCurrentMp: 22,
      sourceMaxMp: 23,
      // sourceCurrentTp: 24,
      // sourceMaxTp: 25,
      sourceX: 26,
      sourceY: 27,
      sourceZ: 28,
      sourceHeading: 29
    },
    playerIds: {
      2: 3,
      17: 18
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        // DoT on player with valid effectId
        id: '1.{7}',
        which: 'DoT',
        effectId: '0*?[1-9A-F][0-9A-F]*' // non-zero, non-empty, possibly-padded value
      },

      combatantIdFields: [2, 17]
    }
  },
  WasDefeated: {
    type: '25',
    name: 'WasDefeated',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Death',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      sourceId: 4,
      source: 5
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        targetId: '4.{7}'
      },
      // NPC combatants only
      combatantIdFields: 2 // don't apply to sourceId; an ignored combatant is a valid source
    }
  },

  GainsEffect: {
    type: '26',
    name: 'GainsEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusAdd',
    fields: {
      type: 0,
      timestamp: 1,
      effectId: 2,
      effect: 3,
      duration: 4,
      sourceId: 5,
      source: 6,
      targetId: 7,
      target: 8,
      count: 9,
      targetMaxHp: 10,
      sourceMaxHp: 11
    },
    possibleRsvFields: 3,
    playerIds: {
      5: 6,
      7: 8
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: [{
        // effect from environment/NPC applied to player
        sourceId: '[E4].{7}',
        targetId: '1.{7}'
      }, {
        // known effectIds of interest
        effectId: ['B9A', '808']
      }],
      combatantIdFields: [5, 7]
    }
  },
  HeadMarker: {
    type: '27',
    name: 'HeadMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'TargetIcon',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      id: 6,
      data0: 7
    },
    playerIds: {
      2: 3
    },
    possiblePlayerIds: [7],
    canAnonymize: true,
    firstOptionalField: 7,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  },
  NetworkRaidMarker: {
    type: '28',
    name: 'NetworkRaidMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'WaymarkMarker',
    fields: {
      type: 0,
      timestamp: 1,
      operation: 2,
      waymark: 3,
      id: 4,
      name: 5,
      x: 6,
      y: 7,
      z: 8
    },
    playerIds: {
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkTargetMarker: {
    type: '29',
    name: 'NetworkTargetMarker',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'SignMarker',
    fields: {
      type: 0,
      timestamp: 1,
      operation: 2,
      // Add, Update, Delete
      waymark: 3,
      id: 4,
      name: 5,
      targetId: 6,
      targetName: 7
    },
    playerIds: {
      4: 5,
      6: 7
    },
    firstOptionalField: undefined
  },
  LosesEffect: {
    type: '30',
    name: 'LosesEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusRemove',
    fields: {
      type: 0,
      timestamp: 1,
      effectId: 2,
      effect: 3,
      sourceId: 5,
      source: 6,
      targetId: 7,
      target: 8,
      count: 9
    },
    possibleRsvFields: 3,
    playerIds: {
      5: 6,
      7: 8
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: [{
        // effect from environment/NPC applied to player
        sourceId: '[E4].{7}',
        targetId: '1.{7}'
      }, {
        // known effectIds of interest
        effectId: ['B9A', '808']
      }],
      combatantIdFields: [5, 7]
    }
  },
  NetworkGauge: {
    type: '31',
    name: 'NetworkGauge',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Gauge',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      data0: 3,
      data1: 4,
      data2: 5,
      data3: 6
    },
    playerIds: {
      2: null
    },
    // Sometimes this last field looks like a player id.
    // For safety, anonymize all of the gauge data.
    firstUnknownField: 3,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkWorld: {
    type: '32',
    name: 'NetworkWorld',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'World',
    fields: {
      type: 0,
      timestamp: 1
    },
    isUnknown: true,
    firstOptionalField: undefined
  },
  ActorControl: {
    type: '33',
    name: 'ActorControl',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Director',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      command: 3,
      data0: 4,
      data1: 5,
      data2: 6,
      data3: 7
    },
    possiblePlayerIds: [4, 5, 6, 7],
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  NameToggle: {
    type: '34',
    name: 'NameToggle',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'NameToggle',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      targetId: 4,
      targetName: 5,
      toggle: 6
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  Tether: {
    type: '35',
    name: 'Tether',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Tether',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      source: 3,
      targetId: 4,
      target: 5,
      id: 8
    },
    playerIds: {
      2: 3,
      4: 5
    },
    canAnonymize: true,
    firstUnknownField: 9,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: [2, 4]
    }
  },
  LimitBreak: {
    type: '36',
    name: 'LimitBreak',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'LimitBreak',
    fields: {
      type: 0,
      timestamp: 1,
      valueHex: 2,
      bars: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NetworkEffectResult: {
    type: '37',
    name: 'NetworkEffectResult',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'EffectResult',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      sequenceId: 4,
      currentHp: 5,
      maxHp: 6,
      currentMp: 7,
      maxMp: 8,
      currentShield: 9,
      // Field index 10 is always `0`
      x: 11,
      y: 12,
      z: 13,
      heading: 14
    },
    playerIds: {
      2: 3
    },
    firstUnknownField: 22,
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  StatusEffect: {
    type: '38',
    name: 'StatusEffect',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusList',
    fields: {
      type: 0,
      timestamp: 1,
      targetId: 2,
      target: 3,
      jobLevelData: 4,
      hp: 5,
      maxHp: 6,
      mp: 7,
      maxMp: 8,
      currentShield: 9,
      // Field index 10 is always `0`
      x: 11,
      y: 12,
      z: 13,
      heading: 14,
      data0: 15,
      data1: 16,
      data2: 17,
      data3: 18,
      data4: 19,
      data5: 20
      // Variable number of triplets here, but at least one.
    },

    playerIds: {
      2: 3
    },
    firstUnknownField: 18,
    canAnonymize: true,
    firstOptionalField: 18
  },
  NetworkUpdateHP: {
    type: '39',
    name: 'NetworkUpdateHP',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'UpdateHp',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3,
      currentHp: 4,
      maxHp: 5,
      currentMp: 6,
      maxMp: 7,
      // currentTp: 8,
      // maxTp: 9,
      x: 10,
      y: 11,
      z: 12,
      heading: 13
    },
    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Map: {
    type: '40',
    name: 'Map',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'ChangeMap',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      regionName: 3,
      placeName: 4,
      placeNameSub: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    lastInclude: true,
    analysisOptions: {
      include: 'all'
    }
  },
  SystemLogMessage: {
    type: '41',
    name: 'SystemLogMessage',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'SystemLogMessage',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      id: 3,
      param0: 4,
      param1: 5,
      param2: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all'
    }
  },
  StatusList3: {
    type: '42',
    name: 'StatusList3',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'StatusList3',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      name: 3
      // triplets of fields from here (effectId, data, playerId)?
    },

    playerIds: {
      2: 3
    },
    canAnonymize: true,
    firstOptionalField: 4,
    firstUnknownField: 4
  },
  ParserInfo: {
    type: '249',
    name: 'ParserInfo',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Settings',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  ProcessInfo: {
    type: '250',
    name: 'ProcessInfo',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Process',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Debug: {
    type: '251',
    name: 'Debug',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Debug',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: false,
    firstOptionalField: undefined
  },
  PacketDump: {
    type: '252',
    name: 'PacketDump',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'PacketDump',
    fields: {
      type: 0,
      timestamp: 1
    },
    canAnonymize: false,
    firstOptionalField: undefined
  },
  Version: {
    type: '253',
    name: 'Version',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Version',
    fields: {
      type: 0,
      timestamp: 1
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  Error: {
    type: '254',
    name: 'Error',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'Error',
    fields: {
      type: 0,
      timestamp: 1
    },
    canAnonymize: false,
    firstOptionalField: undefined
  },
  None: {
    type: '[0-9]+',
    name: 'None',
    source: 'FFXIV_ACT_Plugin',
    messageType: 'None',
    fields: {
      type: 0,
      timestamp: 1
    },
    isUnknown: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  // OverlayPlugin log lines
  LineRegistration: {
    type: '256',
    name: 'LineRegistration',
    source: 'OverlayPlugin',
    messageType: '256',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      source: 3,
      name: 4,
      version: 5
    },
    globalInclude: true,
    canAnonymize: true,
    firstOptionalField: undefined
  },
  MapEffect: {
    type: '257',
    name: 'MapEffect',
    source: 'OverlayPlugin',
    messageType: '257',
    fields: {
      type: 0,
      timestamp: 1,
      instance: 2,
      flags: 3,
      // values for the location field seem to vary between instances
      // (e.g. a location of '08' in P5S does not appear to be the same location in P5S as in P6S)
      // but this field does appear to consistently contain position info for the effect rendering
      location: 4,
      data0: 5,
      data1: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all'
    }
  },
  FateDirector: {
    type: '258',
    name: 'FateDirector',
    source: 'OverlayPlugin',
    messageType: '258',
    // fateId and progress are in hex.
    fields: {
      type: 0,
      timestamp: 1,
      category: 2,
      // padding0: 3,
      fateId: 4,
      progress: 5
      // param3: 6,
      // param4: 7,
      // param5: 8,
      // param6: 9,
      // padding1: 10,
    },

    canAnonymize: true,
    firstOptionalField: undefined
  },
  CEDirector: {
    type: '259',
    name: 'CEDirector',
    source: 'OverlayPlugin',
    messageType: '259',
    // all fields are in hex
    fields: {
      type: 0,
      timestamp: 1,
      popTime: 2,
      timeRemaining: 3,
      // unknown0: 4,
      ceKey: 5,
      numPlayers: 6,
      status: 7,
      // unknown1: 8,
      progress: 9
      // unknown2: 10,
      // unknown3: 11,
      // unknown4: 12,
    },

    canAnonymize: true,
    firstOptionalField: undefined
  },
  InCombat: {
    type: '260',
    name: 'InCombat',
    source: 'OverlayPlugin',
    messageType: '260',
    fields: {
      type: 0,
      timestamp: 1,
      inACTCombat: 2,
      inGameCombat: 3,
      isACTChanged: 4,
      isGameChanged: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all'
    }
  },
  CombatantMemory: {
    type: '261',
    name: 'CombatantMemory',
    source: 'OverlayPlugin',
    messageType: '261',
    fields: {
      type: 0,
      timestamp: 1,
      change: 2,
      id: 3
      // from here, pairs of field name/values
    },

    canAnonymize: true,
    firstOptionalField: 5,
    // doesn't use `playerIds`, as the `id` field must be handled with the 'Name' repeating field
    repeatingFields: {
      startingIndex: 4,
      label: 'pair',
      names: ['key', 'value'],
      sortKeys: true,
      primaryKey: 'key',
      possibleKeys: combatantMemoryKeys,
      keysToAnonymize: {
        // eslint-disable-next-line quote-props
        3: 'Name',
        // 'ID' repeating field not used? need to use non-repeating `id` (3) field
        'OwnerID': null,
        'TargetID': null,
        'PCTargetID': null,
        'NPCTargetID': null,
        'CastTargetID': null
      }
    },
    analysisOptions: {
      include: 'filter',
      // TODO: This is an initial attempt to capture field changes that are relevant to analysis,
      // but this will likely need to be refined over time
      filters: [{
        // TODO: ModelStatus can be a little spammy. Should try to refine this further.
        id: '4.{7}',
        change: 'Change',
        pair: [{
          key: 'ModelStatus',
          value: '.*'
        }]
      }, {
        id: '4.{7}',
        change: 'Change',
        pair: [{
          key: 'WeaponId',
          value: '.*'
        }]
      }, {
        id: '4.{7}',
        change: 'Change',
        pair: [{
          key: 'TransformationId',
          value: '.*'
        }]
      }],
      combatantIdFields: 3
    }
  },
  RSVData: {
    type: '262',
    name: 'RSVData',
    source: 'OverlayPlugin',
    messageType: '262',
    fields: {
      type: 0,
      timestamp: 1,
      locale: 2,
      // unknown0: 3,
      key: 4,
      value: 5
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      // RSV substitutions are performed automatically by the filter
      include: 'never'
    }
  },
  StartsUsingExtra: {
    type: '263',
    name: 'StartsUsingExtra',
    source: 'OverlayPlugin',
    messageType: '263',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      id: 3,
      x: 4,
      y: 5,
      z: 6,
      heading: 7
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        sourceId: '4.{7}'
      },
      // NPC casts only
      combatantIdFields: 2
    }
  },
  AbilityExtra: {
    type: '264',
    name: 'AbilityExtra',
    source: 'OverlayPlugin',
    messageType: '264',
    fields: {
      type: 0,
      timestamp: 1,
      sourceId: 2,
      id: 3,
      globalEffectCounter: 4,
      dataFlag: 5,
      x: 6,
      y: 7,
      z: 8,
      heading: 9
    },
    blankFields: [6],
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  ContentFinderSettings: {
    type: '265',
    name: 'ContentFinderSettings',
    source: 'OverlayPlugin',
    messageType: '265',
    fields: {
      type: 0,
      timestamp: 1,
      zoneId: 2,
      zoneName: 3,
      inContentFinderContent: 4,
      unrestrictedParty: 5,
      minimalItemLevel: 6,
      silenceEcho: 7,
      explorerMode: 8,
      levelSync: 9
    },
    canAnonymize: true,
    firstOptionalField: undefined
  },
  NpcYell: {
    type: '266',
    name: 'NpcYell',
    source: 'OverlayPlugin',
    messageType: '266',
    fields: {
      type: 0,
      timestamp: 1,
      npcId: 2,
      npcNameId: 3,
      npcYellId: 4
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  },
  BattleTalk2: {
    type: '267',
    name: 'BattleTalk2',
    source: 'OverlayPlugin',
    messageType: '267',
    fields: {
      type: 0,
      timestamp: 1,
      npcId: 2,
      instance: 3,
      npcNameId: 4,
      instanceContentTextId: 5,
      displayMs: 6
      // unknown1: 7,
      // unknown2: 8,
      // unknown3: 9,
      // unknown4: 10,
    },

    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  },
  Countdown: {
    type: '268',
    name: 'Countdown',
    source: 'OverlayPlugin',
    messageType: '268',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      worldId: 3,
      countdownTime: 4,
      result: 5,
      name: 6
    },
    playerIds: {
      2: 6
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  CountdownCancel: {
    type: '269',
    name: 'CountdownCancel',
    source: 'OverlayPlugin',
    messageType: '269',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      worldId: 3,
      name: 4
    },
    playerIds: {
      2: 4
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'never'
    }
  },
  ActorMove: {
    type: '270',
    name: 'ActorMove',
    source: 'OverlayPlugin',
    messageType: '270',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      heading: 3,
      // OP calls this 'rotation', but cactbot consistently uses 'heading'
      // unknown1: 4,
      // unknown2: 5,
      x: 6,
      y: 7,
      z: 8
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      // no real way to filter noise, even if (infrequently) used for triggers
      include: 'never'
    }
  },
  ActorSetPos: {
    type: '271',
    name: 'ActorSetPos',
    source: 'OverlayPlugin',
    messageType: '271',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      heading: 3,
      // OP calls this 'rotation', but cactbot consistently uses 'heading'
      // unknown1: 4,
      // unknown2: 5,
      x: 6,
      y: 7,
      z: 8
    },
    playerIds: {
      2: null
    },
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'filter',
      filters: {
        id: '4.{7}'
      },
      // NPCs only
      combatantIdFields: 2
    }
  },
  SpawnNpcExtra: {
    type: '272',
    name: 'SpawnNpcExtra',
    source: 'OverlayPlugin',
    messageType: '272',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      parentId: 3,
      tetherId: 4,
      animationState: 5
    },
    playerIds: {
      3: null // `id` is an npc, but parentId could be a tethered player?
    },

    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: [2, 3]
    }
  },
  ActorControlExtra: {
    type: '273',
    name: 'ActorControlExtra',
    source: 'OverlayPlugin',
    messageType: '273',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      category: 3,
      param1: 4,
      param2: 5,
      param3: 6,
      param4: 7
    },
    playerIds: {
      2: null
    },
    possiblePlayerIds: [4, 5, 6, 7],
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  },
  ActorControlSelfExtra: {
    type: '274',
    name: 'ActorControlSelfExtra',
    source: 'OverlayPlugin',
    messageType: '274',
    fields: {
      type: 0,
      timestamp: 1,
      id: 2,
      category: 3,
      param1: 4,
      param2: 5,
      param3: 6,
      param4: 7,
      param5: 8,
      param6: 9
    },
    playerIds: {
      2: null
    },
    possiblePlayerIds: [4, 5, 6, 7, 8, 9],
    canAnonymize: true,
    firstOptionalField: undefined,
    analysisOptions: {
      include: 'all',
      combatantIdFields: 2
    }
  }
};
const logDefinitionsVersions = {
  'latest': latestLogDefinitions
};

// Verify that this has the right type, but export `as const`.
const assertLogDefinitions = latestLogDefinitions;
console.assert(assertLogDefinitions);
/* harmony default export */ const netlog_defs = (logDefinitionsVersions['latest']);
;// CONCATENATED MODULE: ./resources/not_reached.ts
// Helper Error for TypeScript situations where the programmer thinks they
// know better than TypeScript that some situation will never occur.

// The intention here is that the programmer does not expect a particular
// bit of code to happen, and so has not written careful error handling.
// If it does occur, at least there will be an error and we can figure out why.
// This is preferable to casting or disabling TypeScript altogether in order to
// avoid syntax errors.

// One common example is a regex, where if the regex matches then all of the
// (non-optional) regex groups will also be valid, but TypeScript doesn't know.
class UnreachableCode extends Error {
  constructor() {
    super('This code shouldn\'t be reached');
  }
}
;// CONCATENATED MODULE: ./resources/regexes.ts


const separator = ':';
const matchDefault = '[^:]*';
const matchWithColonsDefault = '(?:[^:]|: )*?';
const fieldsWithPotentialColons = ['effect', 'ability'];
const defaultParams = (type, version, include) => {
  const logType = logDefinitionsVersions[version][type];
  if (include === undefined) {
    include = Object.keys(logType.fields);
    if ('repeatingFields' in logType) {
      include.push(logType.repeatingFields.label);
    }
  }
  const params = {};
  const firstOptionalField = logType.firstOptionalField;
  for (const [prop, index] of Object.entries(logType.fields)) {
    if (!include.includes(prop)) continue;
    const param = {
      field: prop,
      optional: firstOptionalField !== undefined && index >= firstOptionalField
    };
    if (prop === 'type') param.value = logType.type;
    params[index] = param;
  }
  if ('repeatingFields' in logType && include.includes(logType.repeatingFields.label)) {
    params[logType.repeatingFields.startingIndex] = {
      field: logType.repeatingFields.label,
      optional: firstOptionalField !== undefined && logType.repeatingFields.startingIndex >= firstOptionalField,
      repeating: true,
      repeatingKeys: [...logType.repeatingFields.names],
      sortKeys: logType.repeatingFields.sortKeys,
      primaryKey: logType.repeatingFields.primaryKey,
      possibleKeys: [...logType.repeatingFields.possibleKeys]
    };
  }
  return params;
};
const isRepeatingField = (repeating, value) => {
  if (repeating !== true) return false;
  // Allow excluding the field to match for extraction
  if (value === undefined) return true;
  if (!Array.isArray(value)) return false;
  for (const e of value) {
    if (typeof e !== 'object') return false;
  }
  return true;
};
const parseHelper = (params, defKey, fields) => {
  params = params ?? {};
  const validFields = [];
  for (const index in fields) {
    const field = fields[index];
    if (field) validFields.push(field.field);
  }
  Regexes.validateParams(params, defKey, ['capture', ...validFields]);

  // Find the last key we care about, so we can shorten the regex if needed.
  const capture = Regexes.trueIfUndefined(params.capture);
  const fieldKeys = Object.keys(fields).sort((a, b) => parseInt(a) - parseInt(b));
  let maxKeyStr;
  if (capture) {
    const keys = [];
    for (const key in fields) keys.push(key);
    let tmpKey = keys.pop();
    if (tmpKey === undefined) {
      maxKeyStr = fieldKeys[fieldKeys.length - 1] ?? '0';
    } else {
      while (fields[tmpKey]?.optional && !((fields[tmpKey]?.field ?? '') in params)) tmpKey = keys.pop();
      maxKeyStr = tmpKey ?? '0';
    }
  } else {
    maxKeyStr = '0';
    for (const key in fields) {
      const value = fields[key] ?? {};
      if (typeof value !== 'object') continue;
      const fieldName = fields[key]?.field;
      if (fieldName !== undefined && fieldName in params) maxKeyStr = key;
    }
  }
  const maxKey = parseInt(maxKeyStr);

  // Special case for Ability to handle aoe and non-aoe.
  const abilityMessageType = `(?:${netlog_defs.Ability.messageType}|${netlog_defs.NetworkAOEAbility.messageType})`;
  const abilityHexCode = '(?:15|16)';

  // Build the regex from the fields.
  const prefix = defKey !== 'Ability' ? netlog_defs[defKey].messageType : abilityMessageType;

  // Hex codes are a minimum of two characters.  Abilities are special because
  // they need to support both 0x15 and 0x16.
  const typeAsHex = parseInt(netlog_defs[defKey].type).toString(16).toUpperCase();
  const defaultHexCode = typeAsHex.length < 2 ? `00${typeAsHex}`.slice(-2) : typeAsHex;
  const hexCode = defKey !== 'Ability' ? defaultHexCode : abilityHexCode;
  let str = '';
  if (capture) str += `(?<timestamp>\\y{Timestamp}) ${prefix} (?<type>${hexCode})`;else str += `\\y{Timestamp} ${prefix} ${hexCode}`;
  let lastKey = 1;
  for (const keyStr in fields) {
    const parseField = fields[keyStr];
    if (parseField === undefined) continue;
    const fieldName = parseField.field;

    // Regex handles these manually above in the `str` initialization.
    if (fieldName === 'timestamp' || fieldName === 'type') continue;
    const key = parseInt(keyStr);
    // Fill in blanks.
    const missingFields = key - lastKey - 1;
    if (missingFields === 1) str += `${separator}${matchDefault}`;else if (missingFields > 1) str += `(?:${separator}${matchDefault}){${missingFields}}`;
    lastKey = key;
    str += separator;
    if (typeof parseField !== 'object') throw new Error(`${defKey}: invalid value: ${JSON.stringify(parseField)}`);
    const fieldDefault = fieldName !== undefined && fieldsWithPotentialColons.includes(fieldName) ? matchWithColonsDefault : matchDefault;
    const defaultFieldValue = parseField.value?.toString() ?? fieldDefault;
    const fieldValue = params[fieldName];
    if (isRepeatingField(fields[keyStr]?.repeating, fieldValue)) {
      const repeatingFieldsSeparator = '(?:$|:)';
      let repeatingArray = fieldValue;
      const sortKeys = fields[keyStr]?.sortKeys;
      const primaryKey = fields[keyStr]?.primaryKey;
      const possibleKeys = fields[keyStr]?.possibleKeys;

      // primaryKey is required if this is a repeating field per typedef in netlog_defs.ts
      // Same with possibleKeys
      if (primaryKey === undefined || possibleKeys === undefined) throw new UnreachableCode();

      // Allow sorting if needed
      if (sortKeys) {
        // Also sort our valid keys list
        possibleKeys.sort((left, right) => left.toLowerCase().localeCompare(right.toLowerCase()));
        if (repeatingArray !== undefined) {
          repeatingArray = [...repeatingArray].sort((left, right) => {
            // We check the validity of left/right because they're user-supplied
            if (typeof left !== 'object' || left[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            const leftValue = left[primaryKey];
            if (typeof leftValue !== 'string' || !possibleKeys?.includes(leftValue)) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            if (typeof right !== 'object' || right[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            const rightValue = right[primaryKey];
            if (typeof rightValue !== 'string' || !possibleKeys?.includes(rightValue)) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            return leftValue.toLowerCase().localeCompare(rightValue.toLowerCase());
          });
        }
      }
      const anonReps = repeatingArray;
      // Loop over our possible keys
      // Build a regex that can match any possible key with required values substituted in
      possibleKeys.forEach(possibleKey => {
        const rep = anonReps?.find(rep => primaryKey in rep && rep[primaryKey] === possibleKey);
        let fieldRegex = '';
        // Rather than looping over the keys defined on the object,
        // loop over the base type def's keys. This enforces the correct order.
        fields[keyStr]?.repeatingKeys?.forEach(key => {
          let val = rep?.[key];
          if (rep === undefined || !(key in rep)) {
            // If we don't have a value for this key
            // insert a placeholder, unless it's the primary key
            if (key === primaryKey) val = possibleKey;else val = matchDefault;
          }
          if (typeof val !== 'string') {
            if (!Array.isArray(val)) val = matchDefault;else if (val.length < 1) val = matchDefault;else if (val.some(v => typeof v !== 'string')) val = matchDefault;
          }
          fieldRegex += Regexes.maybeCapture(key === primaryKey ? false : capture,
          // All capturing groups are `fieldName` + `possibleKey`, e.g. `pairIsCasting1`
          fieldName + possibleKey, val, defaultFieldValue) + repeatingFieldsSeparator;
        });
        if (fieldRegex.length > 0) {
          str += `(?:${fieldRegex})${rep !== undefined ? '' : '?'}`;
        }
      });
    } else if (fields[keyStr]?.repeating) {
      // If this is a repeating field but the actual value is empty or otherwise invalid,
      // don't process further. We can't use `continue` in the above block because that
      // would skip the early-out break at the end of the loop.
    } else {
      if (fieldName !== undefined) {
        str += Regexes.maybeCapture(
        // more accurate type instead of `as` cast
        // maybe this function needs a refactoring
        capture, fieldName, fieldValue, defaultFieldValue);
      } else {
        // FIXME: handle lint error here
        // ref: https://github.com/OverlayPlugin/cactbot/pull/274#discussion_r1692439720
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        str += fieldValue;
      }
    }

    // Stop if we're not capturing and don't care about future fields.
    if (key >= maxKey) break;
  }
  str += '(?:$|:)';
  return Regexes.parse(str);
};
const buildRegex = (type, params) => {
  return parseHelper(params, type, defaultParams(type, Regexes.logVersion));
};
class Regexes {
  static logVersion = 'latest';

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-20-0x14-networkstartscasting
   */
  static startsUsing(params) {
    return buildRegex('StartsUsing', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   */
  static ability(params) {
    return buildRegex('Ability', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   *
   * @deprecated Use `ability` instead
   */
  static abilityFull(params) {
    return this.ability(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-27-0x1b-networktargeticon-head-marker
   */
  static headMarker(params) {
    return buildRegex('HeadMarker', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatant(params) {
    return buildRegex('AddedCombatant', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatantFull(params) {
    return this.addedCombatant(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-04-0x04-removecombatant
   */
  static removingCombatant(params) {
    return buildRegex('RemovedCombatant', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-26-0x1a-networkbuff
   */
  static gainsEffect(params) {
    return buildRegex('GainsEffect', params);
  }

  /**
   * Prefer gainsEffect over this function unless you really need extra data.
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-38-0x26-networkstatuseffects
   */
  static statusEffectExplicit(params) {
    return buildRegex('StatusEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-30-0x1e-networkbuffremove
   */
  static losesEffect(params) {
    return buildRegex('LosesEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-35-0x23-networktether
   */
  static tether(params) {
    return buildRegex('Tether', params);
  }

  /**
   * 'target' was defeated by 'source'
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-25-0x19-networkdeath
   */
  static wasDefeated(params) {
    return buildRegex('WasDefeated', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-24-0x18-networkdot
   */
  static networkDoT(params) {
    return buildRegex('NetworkDoT', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static echo(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'echo', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0038';
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static dialog(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'dialog', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0044';
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static message(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'message', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    params.code = '0839';
    return Regexes.gameLog(params);
  }

  /**
   * fields: code, name, line, capture
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameLog(params) {
    return buildRegex('GameLog', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameNameLog(params) {
    // Backwards compatability.
    return Regexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-12-0x0c-playerstats
   */
  static statChange(params) {
    return buildRegex('PlayerStats', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-01-0x01-changezone
   */
  static changeZone(params) {
    return buildRegex('ChangeZone', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-33-0x21-network6d-actor-control
   */
  static network6d(params) {
    return buildRegex('ActorControl', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-34-0x22-networknametoggle
   */
  static nameToggle(params) {
    return buildRegex('NameToggle', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-40-0x28-map
   */
  static map(params) {
    return buildRegex('Map', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-41-0x29-systemlogmessage
   */
  static systemLogMessage(params) {
    return buildRegex('SystemLogMessage', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-257-0x101-mapeffect
   */
  static mapEffect(params) {
    return buildRegex('MapEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-258-0x102-fatedirector
   */
  static fateDirector(params) {
    return buildRegex('FateDirector', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-259-0x103-cedirector
   */
  static ceDirector(params) {
    return buildRegex('CEDirector', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-260-0x104-incombat
   */
  static inCombat(params) {
    return buildRegex('InCombat', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-261-0x105-combatantmemory
   */
  static combatantMemory(params) {
    return buildRegex('CombatantMemory', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-263-0x107-startsusingextra
   */
  static startsUsingExtra(params) {
    return buildRegex('StartsUsingExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-264-0x108-abilityextra
   */
  static abilityExtra(params) {
    return buildRegex('AbilityExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-265-0x109-contentfindersettings
   */
  static contentFinderSettings(params) {
    return buildRegex('ContentFinderSettings', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-266-0x10a-npcyell
   */
  static npcYell(params) {
    return buildRegex('NpcYell', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-267-0x10b-battletalk2
   */
  static battleTalk2(params) {
    return buildRegex('BattleTalk2', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-268-0x10c-countdown
   */
  static countdown(params) {
    return buildRegex('Countdown', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-269-0x10d-countdowncancel
   */
  static countdownCancel(params) {
    return buildRegex('CountdownCancel', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-270-0x10e-actormove
   */
  static actorMove(params) {
    return buildRegex('ActorMove', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-271-0x10f-actorsetpos
   */
  static actorSetPos(params) {
    return buildRegex('ActorSetPos', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-272-0x110-spawnnpcextra
   */
  static spawnNpcExtra(params) {
    return buildRegex('SpawnNpcExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-273-0x111-actorcontrolextra
   */
  static actorControlExtra(params) {
    return buildRegex('ActorControlExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-274-0x112-actorcontrolselfextra
   */
  static actorControlSelfExtra(params) {
    return buildRegex('ActorControlSelfExtra', params);
  }

  /**
   * Helper function for building named capture group
   */
  static maybeCapture(capture, name, value, defaultValue) {
    if (value === undefined) value = defaultValue ?? matchDefault;
    value = Regexes.anyOf(value);
    return capture ? Regexes.namedCapture(name, value) : value;
  }
  static optional(str) {
    return `(?:${str})?`;
  }

  // Creates a named regex capture group named |name| for the match |value|.
  static namedCapture(name, value) {
    if (name.includes('>')) console.error(`"${name}" contains ">".`);
    if (name.includes('<')) console.error(`"${name}" contains ">".`);
    return `(?<${name}>${value})`;
  }

  /**
   * Convenience for turning multiple args into a unioned regular expression.
   * anyOf(x, y, z) or anyOf([x, y, z]) do the same thing, and return (?:x|y|z).
   * anyOf(x) or anyOf(x) on its own simplifies to just x.
   * args may be strings or RegExp, although any additional markers to RegExp
   * like /insensitive/i are dropped.
   */
  static anyOf(...args) {
    const anyOfArray = array => {
      const [elem] = array;
      if (elem !== undefined && array.length === 1) return `${elem instanceof RegExp ? elem.source : elem}`;
      return `(?:${array.map(elem => elem instanceof RegExp ? elem.source : elem).join('|')})`;
    };
    let array = [];
    const [firstArg] = args;
    if (args.length === 1) {
      if (typeof firstArg === 'string' || firstArg instanceof RegExp) array = [firstArg];else if (Array.isArray(firstArg)) array = firstArg;else array = [];
    } else {
      // TODO: more accurate type instead of `as` cast
      array = args;
    }
    return anyOfArray(array);
  }
  static parse(regexpString) {
    const kCactbotCategories = {
      Timestamp: '^.{14}',
      NetTimestamp: '.{33}',
      NetField: '(?:[^|]*\\|)',
      LogType: '[0-9A-Fa-f]{2}',
      AbilityCode: '[0-9A-Fa-f]{1,8}',
      ObjectId: '[0-9A-F]{8}',
      // Matches any character name (including empty strings which the FFXIV
      // ACT plugin can generate when unknown).
      Name: '(?:[^\\s:|]+(?: [^\\s:|]+)?|)',
      // Floats can have comma as separator in FFXIV plugin output: https://github.com/ravahn/FFXIV_ACT_Plugin/issues/137
      Float: '-?[0-9]+(?:[.,][0-9]+)?(?:E-?[0-9]+)?'
    };

    // All regexes in cactbot are case insensitive.
    // This avoids headaches as things like `Vice and Vanity` turns into
    // `Vice And Vanity`, especially for French and German.  It appears to
    // have a ~20% regex parsing overhead, but at least they work.
    let modifiers = 'i';
    if (regexpString instanceof RegExp) {
      modifiers += (regexpString.global ? 'g' : '') + (regexpString.multiline ? 'm' : '');
      regexpString = regexpString.source;
    }
    regexpString = regexpString.replace(/\\y\{(.*?)\}/g, (match, group) => {
      return kCactbotCategories[group] || match;
    });
    return new RegExp(regexpString, modifiers);
  }

  // Like Regex.Regexes.parse, but force global flag.
  static parseGlobal(regexpString) {
    const regex = Regexes.parse(regexpString);
    let modifiers = 'gi';
    if (regexpString instanceof RegExp) modifiers += regexpString.multiline ? 'm' : '';
    return new RegExp(regex.source, modifiers);
  }
  static trueIfUndefined(value) {
    if (typeof value === 'undefined') return true;
    return !!value;
  }
  static validateParams(f, funcName, params) {
    if (f === null) return;
    if (typeof f !== 'object') return;
    const keys = Object.keys(f);
    for (const key of keys) {
      if (!params.includes(key)) {
        throw new Error(`${funcName}: invalid parameter '${key}'.  ` + `Valid params: ${JSON.stringify(params)}`);
      }
    }
  }
}
;// CONCATENATED MODULE: ./resources/netregexes.ts



const netregexes_separator = '\\|';
const netregexes_matchDefault = '[^|]*';

// If NetRegexes.setFlagTranslationsNeeded is set to true, then any
// regex created that requires a translation will begin with this string
// and match the magicStringRegex.  This is maybe a bit goofy, but is
// a pretty straightforward way to mark regexes for translations.
// If issue #1306 is ever resolved, we can remove this.
const magicTranslationString = `^^`;
const magicStringRegex = /^\^\^/;

// can't simply export this, see https://github.com/OverlayPlugin/cactbot/pull/4957#discussion_r1002590589
const keysThatRequireTranslationAsConst = ['ability', 'name', 'source', 'target', 'line'];
const keysThatRequireTranslation = keysThatRequireTranslationAsConst;
const gameLogCodes = {
  echo: '0038',
  dialog: '0044',
  message: '0839'
};

// See docs/LogGuide.md for more info about these categories
const actorControlType = {
  setAnimState: '003E',
  publicContentText: '0834',
  logMsg: '020F',
  logMsgParams: '0210'
};
const netregexes_defaultParams = (type, version, include) => {
  const logType = logDefinitionsVersions[version][type];
  if (include === undefined) {
    include = Object.keys(logType.fields);
    if ('repeatingFields' in logType) {
      include.push(logType.repeatingFields.label);
    }
  }
  const params = {};
  const firstOptionalField = logType.firstOptionalField;
  for (const [prop, index] of Object.entries(logType.fields)) {
    if (!include.includes(prop)) continue;
    const param = {
      field: prop,
      optional: firstOptionalField !== undefined && index >= firstOptionalField
    };
    if (prop === 'type') param.value = logType.type;
    params[index] = param;
  }
  if ('repeatingFields' in logType && include.includes(logType.repeatingFields.label)) {
    params[logType.repeatingFields.startingIndex] = {
      field: logType.repeatingFields.label,
      optional: firstOptionalField !== undefined && logType.repeatingFields.startingIndex >= firstOptionalField,
      repeating: true,
      repeatingKeys: [...logType.repeatingFields.names],
      sortKeys: logType.repeatingFields.sortKeys,
      primaryKey: logType.repeatingFields.primaryKey,
      possibleKeys: [...logType.repeatingFields.possibleKeys]
    };
  }
  return params;
};
const netregexes_isRepeatingField = (repeating, value) => {
  if (repeating !== true) return false;
  // Allow excluding the field to match for extraction
  if (value === undefined) return true;
  if (!Array.isArray(value)) return false;
  for (const e of value) {
    if (typeof e !== 'object') return false;
  }
  return true;
};
const netregexes_parseHelper = (params, funcName, fields) => {
  params = params ?? {};
  const validFields = [];
  for (const index in fields) {
    const field = fields[index];
    if (field) validFields.push(field.field);
  }
  Regexes.validateParams(params, funcName, ['capture', ...validFields]);

  // Find the last key we care about, so we can shorten the regex if needed.
  const capture = Regexes.trueIfUndefined(params.capture);
  const fieldKeys = Object.keys(fields).sort((a, b) => parseInt(a) - parseInt(b));
  let maxKeyStr;
  if (capture) {
    const keys = [];
    for (const key in fields) keys.push(key);
    let tmpKey = keys.pop();
    if (tmpKey === undefined) {
      maxKeyStr = fieldKeys[fieldKeys.length - 1] ?? '0';
    } else {
      while (fields[tmpKey]?.optional && !((fields[tmpKey]?.field ?? '') in params)) tmpKey = keys.pop();
      maxKeyStr = tmpKey ?? '0';
    }
  } else {
    maxKeyStr = '0';
    for (const key in fields) {
      const value = fields[key] ?? {};
      if (typeof value !== 'object') continue;
      const fieldName = fields[key]?.field;
      if (fieldName !== undefined && fieldName in params) maxKeyStr = key;
    }
  }
  const maxKey = parseInt(maxKeyStr);

  // For testing, it's useful to know if this is a regex that requires
  // translation.  We test this by seeing if there are any specified
  // fields, and if so, inserting a magic string that we can detect.
  // This lets us differentiate between "regex that should be translated"
  // e.g. a regex with `target` specified, and "regex that shouldn't"
  // e.g. a gains effect with just effectId specified.
  const transParams = Object.keys(params).filter(k => keysThatRequireTranslation.includes(k));
  const needsTranslations = NetRegexes.flagTranslationsNeeded && transParams.length > 0;

  // Build the regex from the fields.
  let str = needsTranslations ? magicTranslationString : '^';
  let lastKey = -1;
  for (const keyStr in fields) {
    const key = parseInt(keyStr);
    // Fill in blanks.
    const missingFields = key - lastKey - 1;
    if (missingFields === 1) str += '\\y{NetField}';else if (missingFields > 1) str += `\\y{NetField}{${missingFields}}`;
    lastKey = key;
    const value = fields[keyStr];
    if (typeof value !== 'object') throw new Error(`${funcName}: invalid value: ${JSON.stringify(value)}`);
    const fieldName = value.field;
    const defaultFieldValue = value.value?.toString() ?? netregexes_matchDefault;
    const fieldValue = params[fieldName];
    if (netregexes_isRepeatingField(fields[keyStr]?.repeating, fieldValue)) {
      let repeatingArray = fieldValue;
      const sortKeys = fields[keyStr]?.sortKeys;
      const primaryKey = fields[keyStr]?.primaryKey;
      const possibleKeys = fields[keyStr]?.possibleKeys;

      // primaryKey is required if this is a repeating field per typedef in netlog_defs.ts
      // Same with possibleKeys
      if (primaryKey === undefined || possibleKeys === undefined) throw new UnreachableCode();

      // Allow sorting if needed
      if (sortKeys) {
        // Also sort our valid keys list
        possibleKeys.sort((left, right) => left.toLowerCase().localeCompare(right.toLowerCase()));
        if (repeatingArray !== undefined) {
          repeatingArray = [...repeatingArray].sort((left, right) => {
            // We check the validity of left/right because they're user-supplied
            if (typeof left !== 'object' || left[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            const leftValue = left[primaryKey];
            if (typeof leftValue !== 'string' || !possibleKeys?.includes(leftValue)) {
              console.warn('Invalid argument passed to trigger:', left);
              return 0;
            }
            if (typeof right !== 'object' || right[primaryKey] === undefined) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            const rightValue = right[primaryKey];
            if (typeof rightValue !== 'string' || !possibleKeys?.includes(rightValue)) {
              console.warn('Invalid argument passed to trigger:', right);
              return 0;
            }
            return leftValue.toLowerCase().localeCompare(rightValue.toLowerCase());
          });
        }
      }
      const anonReps = repeatingArray;
      // Loop over our possible keys
      // Build a regex that can match any possible key with required values substituted in
      possibleKeys.forEach(possibleKey => {
        const rep = anonReps?.find(rep => primaryKey in rep && rep[primaryKey] === possibleKey);
        let fieldRegex = '';
        // Rather than looping over the keys defined on the object,
        // loop over the base type def's keys. This enforces the correct order.
        fields[keyStr]?.repeatingKeys?.forEach(key => {
          let val = rep?.[key];
          if (rep === undefined || !(key in rep)) {
            // If we don't have a value for this key
            // insert a placeholder, unless it's the primary key
            if (key === primaryKey) val = possibleKey;else val = netregexes_matchDefault;
          }
          if (typeof val !== 'string') {
            if (!Array.isArray(val)) val = netregexes_matchDefault;else if (val.length < 1) val = netregexes_matchDefault;else if (val.some(v => typeof v !== 'string')) val = netregexes_matchDefault;
          }
          fieldRegex += Regexes.maybeCapture(key === primaryKey ? false : capture,
          // All capturing groups are `fieldName` + `possibleKey`, e.g. `pairIsCasting1`
          fieldName + possibleKey, val, defaultFieldValue) + netregexes_separator;
        });
        if (fieldRegex.length > 0) {
          str += `(?:${fieldRegex})${rep !== undefined ? '' : '?'}`;
        }
      });
    } else if (fields[keyStr]?.repeating) {
      // If this is a repeating field but the actual value is empty or otherwise invalid,
      // don't process further. We can't use `continue` in the above block because that
      // would skip the early-out break at the end of the loop.
    } else {
      if (fieldName !== undefined) {
        str += Regexes.maybeCapture(
        // more accurate type instead of `as` cast
        // maybe this function needs a refactoring
        capture, fieldName, fieldValue, defaultFieldValue) + netregexes_separator;
      } else {
        str += defaultFieldValue + netregexes_separator;
      }
    }

    // Stop if we're not capturing and don't care about future fields.
    if (key >= maxKey) break;
  }
  return Regexes.parse(str);
};
const netregexes_buildRegex = (type, params) => {
  return netregexes_parseHelper(params, type, netregexes_defaultParams(type, NetRegexes.logVersion));
};
class NetRegexes {
  static logVersion = 'latest';
  static flagTranslationsNeeded = false;
  static setFlagTranslationsNeeded(value) {
    NetRegexes.flagTranslationsNeeded = value;
  }
  static doesNetRegexNeedTranslation(regex) {
    // Need to `setFlagTranslationsNeeded` before calling this function.
    console.assert(NetRegexes.flagTranslationsNeeded);
    const str = typeof regex === 'string' ? regex : regex.source;
    return !!magicStringRegex.exec(str);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-20-0x14-networkstartscasting
   */
  static startsUsing(params) {
    return netregexes_buildRegex('StartsUsing', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   */
  static ability(params) {
    return netregexes_parseHelper(params, 'Ability', {
      ...netregexes_defaultParams('Ability', NetRegexes.logVersion),
      // Override type
      0: {
        field: 'type',
        value: '2[12]',
        optional: false
      }
    });
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-21-0x15-networkability
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-22-0x16-networkaoeability
   *
   * @deprecated Use `ability` instead
   */
  static abilityFull(params) {
    return this.ability(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-27-0x1b-networktargeticon-head-marker
   */
  static headMarker(params) {
    return netregexes_buildRegex('HeadMarker', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   */
  static addedCombatant(params) {
    return netregexes_parseHelper(params, 'AddedCombatant', netregexes_defaultParams('AddedCombatant', NetRegexes.logVersion));
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-03-0x03-addcombatant
   * @deprecated Use `addedCombatant` instead
   */
  static addedCombatantFull(params) {
    return NetRegexes.addedCombatant(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-04-0x04-removecombatant
   */
  static removingCombatant(params) {
    return netregexes_buildRegex('RemovedCombatant', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-26-0x1a-networkbuff
   */
  static gainsEffect(params) {
    return netregexes_buildRegex('GainsEffect', params);
  }

  /**
   * Prefer gainsEffect over this function unless you really need extra data.
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-38-0x26-networkstatuseffects
   */
  static statusEffectExplicit(params) {
    return netregexes_buildRegex('StatusEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-30-0x1e-networkbuffremove
   */
  static losesEffect(params) {
    return netregexes_buildRegex('LosesEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-35-0x23-networktether
   */
  static tether(params) {
    return netregexes_buildRegex('Tether', params);
  }

  /**
   * 'target' was defeated by 'source'
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-25-0x19-networkdeath
   */
  static wasDefeated(params) {
    return netregexes_buildRegex('WasDefeated', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-24-0x18-networkdot
   */
  static networkDoT(params) {
    return netregexes_buildRegex('NetworkDoT', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static echo(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'Echo', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.echo
    });
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static dialog(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'Dialog', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.dialog
    });
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static message(params) {
    if (typeof params === 'undefined') params = {};
    Regexes.validateParams(params, 'Message', ['type', 'timestamp', 'code', 'name', 'line', 'capture']);
    return NetRegexes.gameLog({
      ...params,
      code: gameLogCodes.message
    });
  }

  /**
   * fields: code, name, line, capture
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameLog(params) {
    return netregexes_buildRegex('GameLog', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-00-0x00-logline
   */
  static gameNameLog(params) {
    // Backwards compatability.
    return NetRegexes.gameLog(params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-12-0x0c-playerstats
   */
  static statChange(params) {
    return netregexes_buildRegex('PlayerStats', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-01-0x01-changezone
   */
  static changeZone(params) {
    return netregexes_buildRegex('ChangeZone', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-33-0x21-network6d-actor-control
   */
  static network6d(params) {
    return netregexes_buildRegex('ActorControl', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-34-0x22-networknametoggle
   */
  static nameToggle(params) {
    return netregexes_buildRegex('NameToggle', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-40-0x28-map
   */
  static map(params) {
    return netregexes_buildRegex('Map', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-41-0x29-systemlogmessage
   */
  static systemLogMessage(params) {
    return netregexes_buildRegex('SystemLogMessage', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-257-0x101-mapeffect
   */
  static mapEffect(params) {
    return netregexes_buildRegex('MapEffect', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-258-0x102-fatedirector
   */
  static fateDirector(params) {
    return netregexes_buildRegex('FateDirector', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-259-0x103-cedirector
   */
  static ceDirector(params) {
    return netregexes_buildRegex('CEDirector', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-260-0x104-incombat
   */
  static inCombat(params) {
    return netregexes_buildRegex('InCombat', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-261-0x105-combatantmemory
   */
  static combatantMemory(params) {
    return netregexes_buildRegex('CombatantMemory', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-263-0x107-startsusingextra
   */
  static startsUsingExtra(params) {
    return netregexes_buildRegex('StartsUsingExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-264-0x108-abilityextra
   */
  static abilityExtra(params) {
    return netregexes_buildRegex('AbilityExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-265-0x109-contentfindersettings
   */
  static contentFinderSettings(params) {
    return netregexes_buildRegex('ContentFinderSettings', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-266-0x10a-npcyell
   */
  static npcYell(params) {
    return netregexes_buildRegex('NpcYell', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-267-0x10b-battletalk2
   */
  static battleTalk2(params) {
    return netregexes_buildRegex('BattleTalk2', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-268-0x10c-countdown
   */
  static countdown(params) {
    return netregexes_buildRegex('Countdown', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-269-0x10d-countdowncancel
   */
  static countdownCancel(params) {
    return netregexes_buildRegex('CountdownCancel', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-270-0x10e-actormove
   */
  static actorMove(params) {
    return netregexes_buildRegex('ActorMove', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-271-0x10f-actorsetpos
   */
  static actorSetPos(params) {
    return netregexes_buildRegex('ActorSetPos', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-272-0x110-spawnnpcextra
   */
  static spawnNpcExtra(params) {
    return netregexes_buildRegex('SpawnNpcExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-273-0x111-actorcontrolextra
   */
  static actorControlExtra(params) {
    return netregexes_buildRegex('ActorControlExtra', params);
  }

  /**
   * matches: https://github.com/OverlayPlugin/cactbot/blob/main/docs/LogGuide.md#line-274-0x112-actorcontrolselfextra
   */
  static actorControlSelfExtra(params) {
    return netregexes_buildRegex('ActorControlSelfExtra', params);
  }
}
const commonNetRegex = {
  // TODO(6.2): remove 40000010 after everybody is on 6.2.
  // TODO: or maybe keep around for playing old log files??
  wipe: NetRegexes.network6d({
    command: ['40000010', '4000000F']
  }),
  cactbotWipeEcho: NetRegexes.echo({
    line: 'cactbot wipe.*?'
  }),
  userWipeEcho: NetRegexes.echo({
    line: 'end'
  })
};
const buildNetRegexForTrigger = (type, params) => {
  if (type === 'Ability')
    // ts can't narrow T to `Ability` here, need casting.
    return NetRegexes.ability(params);
  return netregexes_buildRegex(type, params);
};
;// CONCATENATED MODULE: ./resources/overlay_plugin_api.ts
// OverlayPlugin API setup

let inited = false;
let wsUrl = null;
let ws = null;
let queue = [];
let rseqCounter = 0;
const responsePromises = {};
const subscribers = {};
const sendMessage = (msg, cb) => {
  if (ws) {
    if (queue) queue.push(msg);else ws.send(JSON.stringify(msg));
  } else {
    if (queue) queue.push([msg, cb]);else window.OverlayPluginApi.callHandler(JSON.stringify(msg), cb);
  }
};
const processEvent = msg => {
  init();
  const subs = subscribers[msg.type];
  subs?.forEach(sub => {
    try {
      sub(msg);
    } catch (e) {
      console.error(e);
    }
  });
};
const dispatchOverlayEvent = processEvent;
const addOverlayListener = (event, cb) => {
  init();
  if (!subscribers[event]) {
    subscribers[event] = [];
    if (!queue) {
      sendMessage({
        call: 'subscribe',
        events: [event]
      });
    }
  }
  subscribers[event]?.push(cb);
};
const removeOverlayListener = (event, cb) => {
  init();
  if (subscribers[event]) {
    const list = subscribers[event];
    const pos = list?.indexOf(cb);
    if (pos !== undefined && pos > -1) list?.splice(pos, 1);
  }
};
const callOverlayHandlerInternal = (_msg
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
  init();
  const msg = {
    ..._msg,
    rseq: 0
  };
  let p;
  if (ws) {
    msg.rseq = rseqCounter++;
    p = new Promise((resolve, reject) => {
      responsePromises[msg.rseq] = {
        resolve: resolve,
        reject: reject
      };
    });
    sendMessage(msg);
  } else {
    p = new Promise((resolve, reject) => {
      sendMessage(msg, data => {
        if (data === null) {
          resolve(data);
          return;
        }
        const parsed = JSON.parse(data);
        if (parsed['$error']) reject(parsed);else resolve(parsed);
      });
    });
  }
  return p;
};
const callOverlayHandlerOverrideMap = {};
const callOverlayHandler = (_msg
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
  init();

  // If this `as` is incorrect, then it will not find an override.
  // TODO: we could also replace this with a type guard.
  const type = _msg.call;
  const callFunc = callOverlayHandlerOverrideMap[type] ?? callOverlayHandlerInternal;

  // The `IOverlayHandler` type guarantees that parameters/return type match
  // one of the overlay handlers.  The OverrideMap also only stores functions
  // that match by the discriminating `call` field, and so any overrides
  // should be correct here.
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument
  return callFunc(_msg);
};
const setOverlayHandlerOverride = (type, override) => {
  if (!override) {
    delete callOverlayHandlerOverrideMap[type];
    return;
  }
  callOverlayHandlerOverrideMap[type] = override;
};
const init = () => {
  if (inited) return;
  if (typeof window !== 'undefined') {
    wsUrl = new URLSearchParams(window.location.search).get('OVERLAY_WS');
    if (wsUrl !== null) {
      const connectWs = function (wsUrl) {
        ws = new WebSocket(wsUrl);
        ws.addEventListener('error', e => {
          console.error(e);
        });
        ws.addEventListener('open', () => {
          console.log('Connected!');
          const q = queue ?? [];
          queue = null;
          sendMessage({
            call: 'subscribe',
            events: Object.keys(subscribers)
          });
          for (const msg of q) {
            if (!Array.isArray(msg)) sendMessage(msg);
          }
        });
        ws.addEventListener('message', _msg => {
          try {
            if (typeof _msg.data !== 'string') {
              console.error('Invalid message data received: ', _msg);
              return;
            }
            const msg = JSON.parse(_msg.data);
            const promiseFuncs = msg?.rseq !== undefined ? responsePromises[msg.rseq] : undefined;
            if (msg.rseq !== undefined && promiseFuncs) {
              if (msg['$error']) promiseFuncs.reject(msg);else promiseFuncs.resolve(msg);
              delete responsePromises[msg.rseq];
            } else {
              processEvent(msg);
            }
          } catch (e) {
            console.error('Invalid message received: ', _msg);
            return;
          }
        });
        ws.addEventListener('close', () => {
          queue = null;
          console.log('Trying to reconnect...');
          // Don't spam the server with retries.
          window.setTimeout(() => {
            connectWs(wsUrl);
          }, 300);
        });
      };
      connectWs(wsUrl);
    } else {
      const waitForApi = function () {
        if (!window.OverlayPluginApi?.ready) {
          window.setTimeout(waitForApi, 300);
          return;
        }
        const q = queue ?? [];
        queue = null;
        window.__OverlayCallback = processEvent;
        sendMessage({
          call: 'subscribe',
          events: Object.keys(subscribers)
        });
        for (const item of q) {
          if (Array.isArray(item)) sendMessage(item[0], item[1]);
        }
      };
      waitForApi();
    }

    // Here the OverlayPlugin API is registered to the window object,
    // but this is mainly for backwards compatibility. For cactbot's built-in files,
    // it is recommended to use the various functions exported in resources/overlay_plugin_api.ts.

    /* eslint-disable deprecation/deprecation */
    window.addOverlayListener = addOverlayListener;
    window.removeOverlayListener = removeOverlayListener;
    window.callOverlayHandler = callOverlayHandler;
    window.dispatchOverlayEvent = dispatchOverlayEvent;
    /* eslint-enable deprecation/deprecation */
  }

  inited = true;
};
;// CONCATENATED MODULE: ./ui/test/test.ts



addOverlayListener('ChangeZone', e => {
  const currentZone = document.getElementById('currentZone');
  if (currentZone) currentZone.innerText = `currentZone: ${e.zoneName} (${e.zoneID})`;
});
addOverlayListener('onInCombatChangedEvent', e => {
  const inCombat = document.getElementById('inCombat');
  if (inCombat) {
    inCombat.innerText = `inCombat: act: ${e.detail.inACTCombat ? 'yes' : 'no'} game: ${e.detail.inGameCombat ? 'yes' : 'no'}`;
  }
});
addOverlayListener('onPlayerChangedEvent', e => {
  const name = document.getElementById('name');
  if (name) name.innerText = e.detail.name;
  const playerId = document.getElementById('playerId');
  if (playerId) playerId.innerText = e.detail.id.toString(16);
  const hp = document.getElementById('hp');
  if (hp) hp.innerText = `${e.detail.currentHP}/${e.detail.maxHP} (${e.detail.currentShield})`;
  const mp = document.getElementById('mp');
  if (mp) mp.innerText = `${e.detail.currentMP}/${e.detail.maxMP}`;
  const cp = document.getElementById('cp');
  if (cp) cp.innerText = `${e.detail.currentCP}/${e.detail.maxCP}`;
  const gp = document.getElementById('gp');
  if (gp) gp.innerText = `${e.detail.currentGP}/${e.detail.maxGP}`;
  const job = document.getElementById('job');
  if (job) job.innerText = `${e.detail.level} ${e.detail.job}`;
  const debug = document.getElementById('debug');
  if (debug) debug.innerText = e.detail.debugJob;
  const jobInfo = document.getElementById('jobinfo');
  if (jobInfo) {
    const detail = e.detail;
    if (detail.job === 'RDM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.whiteMana} | ${detail.jobDetail.blackMana} | ${detail.jobDetail.manaStacks}`;
    } else if (detail.job === 'WAR' && detail.jobDetail) {
      jobInfo.innerText = detail.jobDetail.beast.toString();
    } else if (detail.job === 'DRK' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.blood} | ${detail.jobDetail.darksideMilliseconds} | ${detail.jobDetail.darkArts.toString()} | ${detail.jobDetail.livingShadowMilliseconds}`;
    } else if (detail.job === 'GNB' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.cartridges} | ${detail.jobDetail.continuationState}`;
    } else if (detail.job === 'PLD' && detail.jobDetail) {
      jobInfo.innerText = detail.jobDetail.oath.toString();
    } else if (detail.job === 'BRD' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.songName} | ${detail.jobDetail.lastPlayed} | ${detail.jobDetail.songProcs} | ${detail.jobDetail.soulGauge} | ${detail.jobDetail.songMilliseconds} | [${detail.jobDetail.coda.join(', ')}]`;
    } else if (detail.job === 'DNC' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.feathers} | ${detail.jobDetail.esprit} | [${detail.jobDetail.steps.join(', ')}] | ${detail.jobDetail.currentStep}`;
    } else if (detail.job === 'NIN' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.ninkiAmount} | ${detail.jobDetail.kazematoi}`;
    } else if (detail.job === 'DRG' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.bloodMilliseconds} | ${detail.jobDetail.lifeMilliseconds} | ${detail.jobDetail.eyesAmount} | ${detail.jobDetail.firstmindsFocus}`;
    } else if (detail.job === 'BLM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.umbralStacks} (${detail.jobDetail.umbralMilliseconds}) | ${detail.jobDetail.umbralHearts} | ${detail.jobDetail.polyglot} ${detail.jobDetail.enochian.toString()} (${detail.jobDetail.nextPolyglotMilliseconds}) | ${detail.jobDetail.paradox.toString()} | ${detail.jobDetail.astralSoulStacks}`;
    } else if (detail.job === 'THM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.umbralStacks} (${detail.jobDetail.umbralMilliseconds})`;
    } else if (detail.job === 'WHM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.lilyStacks} (${detail.jobDetail.lilyMilliseconds}) | ${detail.jobDetail.bloodlilyStacks}`;
    } else if (detail.job === 'SMN' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.aetherflowStacks} | ${detail.jobDetail.tranceMilliseconds} | ${detail.jobDetail.attunement} | ${detail.jobDetail.attunementMilliseconds} | ${detail.jobDetail.activePrimal ?? '-'} | [${detail.jobDetail.usableArcanum.join(', ')}] | ${detail.jobDetail.nextSummoned} | ${detail.jobDetail.summonStatus.toString()}`;
    } else if (detail.job === 'SCH' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.aetherflowStacks} | ${detail.jobDetail.fairyGauge} | ${detail.jobDetail.fairyStatus} (${detail.jobDetail.fairyMilliseconds})`;
    } else if (detail.job === 'ACN' && detail.jobDetail) {
      jobInfo.innerText = detail.jobDetail.aetherflowStacks.toString();
    } else if (detail.job === 'AST' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.card1} | ${detail.jobDetail.card2} | ${detail.jobDetail.card3} | ${detail.jobDetail.card4} | ${detail.jobDetail.nextdraw}`;
    } else if (detail.job === 'MNK' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.chakraStacks} | ${detail.jobDetail.lunarNadi.toString()} | ${detail.jobDetail.solarNadi.toString()} | [${detail.jobDetail.beastChakra.join(', ')}] | ${detail.jobDetail.opoopoFury} | ${detail.jobDetail.raptorFury} | ${detail.jobDetail.coeurlFury}`;
    } else if (detail.job === 'MCH' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.heat} (${detail.jobDetail.overheatMilliseconds}) | ${detail.jobDetail.battery} (${detail.jobDetail.batteryMilliseconds}) | last: ${detail.jobDetail.lastBatteryAmount} | ${detail.jobDetail.overheatActive.toString()} | ${detail.jobDetail.robotActive.toString()}`;
    } else if (detail.job === 'SAM' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.kenki} | ${detail.jobDetail.meditationStacks}(${detail.jobDetail.setsu.toString()},${detail.jobDetail.getsu.toString()},${detail.jobDetail.ka.toString()})`;
    } else if (detail.job === 'SGE' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.addersgall} (${detail.jobDetail.addersgallMilliseconds}) | ${detail.jobDetail.addersting} | ${detail.jobDetail.eukrasia.toString()}`;
    } else if (detail.job === 'RPR' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.soul} | ${detail.jobDetail.shroud} | ${detail.jobDetail.enshroudMilliseconds} | ${detail.jobDetail.lemureShroud} | ${detail.jobDetail.voidShroud}`;
    } else if (detail.job === 'VPR' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.rattlingCoilStacks} | ${detail.jobDetail.anguineTribute} | ${detail.jobDetail.serpentOffering} | ${detail.jobDetail.advancedCombo} | ${detail.jobDetail.reawakenedTimer}`;
    } else if (detail.job === 'PCT' && detail.jobDetail) {
      jobInfo.innerText = `${detail.jobDetail.paletteGauge} | ${detail.jobDetail.paint} | (${detail.jobDetail.creatureMotif} | ${detail.jobDetail.weaponMotif ? 'Weapon' : 'None'} | ${detail.jobDetail.landscapeMotif ? 'Landscape' : 'None'}) | (${detail.jobDetail.depictions.join('+') || 'None'}) | ${detail.jobDetail.mooglePortrait ? 'Moogle' : detail.jobDetail.madeenPortrait ? 'Madeen' : 'None'}`;
    } else {
      jobInfo.innerText = '';
    }
  }
  const pos = document.getElementById('pos');
  if (pos) {
    pos.innerText = `${e.detail.pos.x.toFixed(2)},${e.detail.pos.y.toFixed(2)},${e.detail.pos.z.toFixed(2)}`;
  }
  const rotation = document.getElementById('rotation');
  if (rotation) rotation.innerText = e.detail.rotation.toString();
});
addOverlayListener('EnmityTargetData', e => {
  const target = document.getElementById('target');
  if (target) target.innerText = e.Target ? e.Target.Name : '--';
  const tid = document.getElementById('tid');
  if (tid) tid.innerText = e.Target ? e.Target.ID.toString(16) : '';
  const tdistance = document.getElementById('tdistance');
  if (tdistance) tdistance.innerText = e.Target ? e.Target.Distance.toString() : '';
});
addOverlayListener('onGameExistsEvent', _e => {
  // console.log("Game exists: " + e.detail.exists);
});
addOverlayListener('onGameActiveChangedEvent', _e => {
  // console.log("Game active: " + e.detail.active);
});
const ttsEchoRegex = NetRegexes.echo({
  line: 'tts:.*?'
});
addOverlayListener('LogLine', e => {
  // Match "/echo tts:<stuff>"
  const line = ttsEchoRegex.exec(e.rawLine)?.groups?.line;
  if (line === undefined) return;
  const colon = line.indexOf(':');
  if (colon === -1) return;
  const text = line.slice(colon);
  if (text !== undefined) {
    void callOverlayHandler({
      call: 'cactbotSay',
      text: text
    });
  }
});
addOverlayListener('onUserFileChanged', e => {
  console.log(`User file ${e.file} changed!`);
});
void callOverlayHandler({
  call: 'cactbotRequestState'
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsRUFBRSxXQUFXO0lBQ3hCQyxNQUFNLEVBQUU7TUFDTkosSUFBSSxFQUFFLENBQUM7TUFDUEssU0FBUyxFQUFFLENBQUM7TUFDWm1DLFVBQVUsRUFBRSxDQUFDO01BQ2JDLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxDQUFDO01BQ05DLEdBQUcsRUFBRSxFQUFFO01BQ1BDLEdBQUcsRUFBRSxFQUFFO01BQ1BDLEdBQUcsRUFBRSxFQUFFO01BQ1BDLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRSxFQUFFO01BQ1JDLElBQUksRUFBRTtJQUNSLENBQUM7SUFDRDdDLFNBQVMsRUFBRTtNQUNULENBQUMsRUFBRSxJQUFJO01BQ1AsQ0FBQyxFQUFFLElBQUk7TUFDUCxDQUFDLEVBQUUsSUFBSTtNQUNQLENBQUMsRUFBRSxJQUFJO01BQ1AsQ0FBQyxFQUFFLElBQUk7TUFDUCxDQUFDLEVBQUUsSUFBSTtNQUNQLENBQUMsRUFBRSxJQUFJO01BQ1AsRUFBRSxFQUFFLElBQUk7TUFDUixFQUFFLEVBQUUsSUFBSTtNQUNSLEVBQUUsRUFBRSxJQUFJO01BQ1IsRUFBRSxFQUFFLElBQUk7TUFDUixFQUFFLEVBQUUsSUFBSTtNQUNSLEVBQUUsRUFBRSxJQUFJO01BQ1IsRUFBRSxFQUFFLElB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LENBQ0QsQ0FBQztBQUVGLE1BQU1DLFlBQVksR0FBRzlMLGVBQWUsQ0FBQztFQUFFbGEsSUFBSSxFQUFFO0FBQVUsQ0FBQyxDQUFDO0FBQ3pEK2Isa0JBQWtCLENBQUMsU0FBUyxFQUFHOUssQ0FBQyxJQUFLO0VBQ25DO0VBQ0EsTUFBTWpSLElBQUksR0FBR2dtQixZQUFZLENBQUMxTCxJQUFJLENBQUNySixDQUFDLENBQUNnVixPQUFPLENBQUMsRUFBRUMsTUFBTSxFQUFFbG1CLElBQUk7RUFDdkQsSUFBSUEsSUFBSSxLQUFLSSxTQUFTLEVBQ3BCO0VBQ0YsTUFBTStsQixLQUFLLEdBQUdubUIsSUFBSSxDQUFDc2MsT0FBTyxDQUFDLEdBQUcsQ0FBQztFQUMvQixJQUFJNkosS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUNkO0VBQ0YsTUFBTUMsSUFBSSxHQUFHcG1CLElBQUksQ0FBQzJTLEtBQUssQ0FBQ3dULEtBQUssQ0FBQztFQUM5QixJQUFJQyxJQUFJLEtBQUtobUIsU0FBUyxFQUFFO0lBQ3RCLEtBQUs4YyxrQkFBa0IsQ0FBQztNQUN0QmpCLElBQUksRUFBRSxZQUFZO01BQ2xCbUssSUFBSSxFQUFFQTtJQUNSLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDO0FBRUZySyxrQkFBa0IsQ0FBQyxtQkFBbUIsRUFBRzlLLENBQUMsSUFBSztFQUM3QzNCLE9BQU8sQ0FBQ3NPLEdBQUcsQ0FBRSxhQUFZM00sQ0FBQyxDQUFDb1YsSUFBSyxXQUFVLENBQUM7QUFDN0MsQ0FBQyxDQUFDO0FBRUYsS0FBS25KLGtCQUFrQixDQUFDO0VBQUVqQixJQUFJLEVBQUU7QUFBc0IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWN0Ym90Ly4vcmVzb3VyY2VzL25ldGxvZ19kZWZzLnRzIiwid2VicGFjazovL2NhY3Rib3QvLi9yZXNvdXJjZXMvbm90X3JlYWNoZWQudHMiLCJ3ZWJwYWNrOi8vY2FjdGJvdC8uL3Jlc291cmNlcy9yZWdleGVzLnRzIiwid2VicGFjazovL2NhY3Rib3QvLi9yZXNvdXJjZXMvbmV0cmVnZXhlcy50cyIsIndlYnBhY2s6Ly9jYWN0Ym90Ly4vcmVzb3VyY2VzL292ZXJsYXlfcGx1Z2luX2FwaS50cyIsIndlYnBhY2s6Ly9jYWN0Ym90Ly4vdWkvdGVzdC90ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsdWdpbkNvbWJhdGFudFN0YXRlIH0gZnJvbSAnLi4vdHlwZXMvZXZlbnQnO1xyXG5pbXBvcnQgeyBOZXRGaWVsZHNSZXZlcnNlIH0gZnJvbSAnLi4vdHlwZXMvbmV0X2ZpZWxkcyc7XHJcbmltcG9ydCB7IE5ldFBhcmFtcyB9IGZyb20gJy4uL3R5cGVzL25ldF9wcm9wcyc7XHJcblxyXG5leHBvcnQgdHlwZSBMb2dEZWZpbml0aW9uPEsgZXh0ZW5kcyBMb2dEZWZpbml0aW9uTmFtZT4gPSB7XHJcbiAgLy8gVGhlIGxvZyBsaW5lIGlkLCBhcyBhIGRlY2ltYWwgc3RyaW5nLCBtaW5pbXVtIHR3byBjaGFyYWN0ZXJzLlxyXG4gIHR5cGU6IExvZ0RlZmluaXRpb25zW0tdWyd0eXBlJ107XHJcbiAgLy8gVGhlIGluZm9ybWFsIG5hbWUgb2YgdGhpcyBsb2cgbGluZSAobXVzdCBtYXRjaCB0aGUga2V5IHRoYXQgdGhlIExvZ0RlZmluaXRpb24gaXMgYSB2YWx1ZSBmb3IpLlxyXG4gIG5hbWU6IEs7XHJcbiAgLy8gVGhlIHBsdWdpbiB0aGF0IGdlbmVyYXRlcyB0aGlzIGxvZyBsaW5lLlxyXG4gIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nIHwgJ092ZXJsYXlQbHVnaW4nO1xyXG4gIC8vIFBhcnNlZCBBQ1QgbG9nIGxpbmUgdHlwZS4gIE92ZXJsYXlQbHVnaW4gbGluZXMgdXNlIHRoZSBgdHlwZWAgYXMgYSBzdHJpbmcuXHJcbiAgbWVzc2FnZVR5cGU6IExvZ0RlZmluaXRpb25zW0tdWydtZXNzYWdlVHlwZSddO1xyXG4gIC8vIElmIHRydWUsIGFsd2F5cyBpbmNsdWRlIHRoaXMgbGluZSB3aGVuIHNwbGl0dGluZyBsb2dzIChlLmcuIEZGWElWIHBsdWdpbiB2ZXJzaW9uKS5cclxuICBnbG9iYWxJbmNsdWRlPzogYm9vbGVhbjtcclxuICAvLyBJZiB0cnVlLCBhbHdheXMgaW5jbHVkZSB0aGUgbGFzdCBpbnN0YW5jZSBvZiB0aGlzIGxpbmUgd2hlbiBzcGxpdHRpbmcgbG9ncyAoZS5nLiBDaGFuZ2Vab25lKS5cclxuICBsYXN0SW5jbHVkZT86IGJvb2xlYW47XHJcbiAgLy8gVHJ1ZSBpZiB0aGUgbGluZSBjYW4gYmUgYW5vbnltaXplZCAoaS5lLiByZW1vdmluZyBwbGF5ZXIgaWRzIGFuZCBuYW1lcykuXHJcbiAgY2FuQW5vbnltaXplPzogYm9vbGVhbjtcclxuICAvLyBJZiB0cnVlLCB0aGlzIGxvZyBsaW5lIGhhcyBub3QgYmVlbiBzZWVuIGJlZm9yZSBhbmQgbmVlZHMgbW9yZSBpbmZvcm1hdGlvbi5cclxuICBpc1Vua25vd24/OiBib29sZWFuO1xyXG4gIC8vIEZpZWxkcyBhdCB0aGlzIGluZGV4IGFuZCBiZXlvbmQgYXJlIGNsZWFyZWQsIHdoZW4gYW5vbnltaXppbmcuXHJcbiAgZmlyc3RVbmtub3duRmllbGQ/OiBudW1iZXI7XHJcbiAgLy8gQSBtYXAgb2YgYWxsIG9mIHRoZSBmaWVsZHMsIHVuaXF1ZSBmaWVsZCBuYW1lIHRvIGZpZWxkIGluZGV4LlxyXG4gIGZpZWxkczogTG9nRGVmaW5pdGlvbnNbS11bJ2ZpZWxkcyddO1xyXG4gIC8vIEZpZWxkIGluZGljZXMgdGhhdCAqbWF5KiBjb250YWluIFJTViBwbGFjZWhvbGRlcnMgKGZvciBkZWNvZGluZylcclxuICBwb3NzaWJsZVJzdkZpZWxkcz86IExvZ0RlZkZpZWxkSWR4PEs+IHwgcmVhZG9ubHkgTG9nRGVmRmllbGRJZHg8Sz5bXTtcclxuICAvLyBGaWVsZCBuYW1lcyBhbmQgdmFsdWVzIHRoYXQgY2FuIG92ZXJyaWRlIGBjYW5Bbm9ueW1pemVgLiBTZWUgYExvZ0RlZlN1YkZpZWxkc2AgdHlwZSBiZWxvdy5cclxuICBzdWJGaWVsZHM/OiBMb2dEZWZTdWJGaWVsZHM8Sz47XHJcbiAgLy8gTWFwIG9mIGZpZWxkIGluZGljZXMgdG8gYW5vbnltaXplLCBpbiB0aGUgZm9ybWF0OiBwbGF5ZXJJZDogKG9wdGlvbmFsKSBwbGF5ZXJOYW1lLlxyXG4gIHBsYXllcklkcz86IFBsYXllcklkTWFwPEs+O1xyXG4gIC8vIEEgbGlzdCBvZiBmaWVsZCBpbmRpY2VzIHRoYXQgbWF5IGNvbnRhaW5zIHBsYXllciBpZHMgYW5kLCBpZiBzbywgd2lsbCBiZSBhbm9ueW1pemVkLlxyXG4gIC8vIElmIGFuIGluZGV4IGlzIGxpc3RlZCBoZXJlIGFuZCBpbiBgcGxheWVySWRzYCwgaXQgd2lsbCBiZSB0cmVhdGVkIGFzIGEgcG9zc2libGUgaWQgZmllbGQuXHJcbiAgcG9zc2libGVQbGF5ZXJJZHM/OiByZWFkb25seSBMb2dEZWZGaWVsZElkeDxLPltdO1xyXG4gIC8vIEEgbGlzdCBvZiBmaWVsZCBpbmRpY2VzIHRoYXQgYXJlIG9rIHRvIGJlIGJsYW5rIChvciBoYXZlIGludmFsaWQgaWRzKS5cclxuICBibGFua0ZpZWxkcz86IHJlYWRvbmx5IExvZ0RlZkZpZWxkSWR4PEs+W107XHJcbiAgLy8gVGhpcyBmaWVsZCBpbmRleCAoYW5kIGFsbCBhZnRlcikgd2lsbCBiZSB0cmVhdGVkIGFzIG9wdGlvbmFsIHdoZW4gY3JlYXRpbmcgY2FwdHVyaW5nIHJlZ2V4ZXMuXHJcbiAgZmlyc3RPcHRpb25hbEZpZWxkOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgLy8gVGhlc2UgZmllbGRzIGFyZSB0cmVhdGVkIGFzIHJlcGVhdGFibGUgZmllbGRzXHJcbiAgcmVwZWF0aW5nRmllbGRzPzoge1xyXG4gICAgc3RhcnRpbmdJbmRleDogbnVtYmVyO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIG5hbWVzOiByZWFkb25seSBzdHJpbmdbXTtcclxuICAgIHNvcnRLZXlzPzogYm9vbGVhbjtcclxuICAgIHByaW1hcnlLZXk6IHN0cmluZztcclxuICAgIHBvc3NpYmxlS2V5czogcmVhZG9ubHkgc3RyaW5nW107XHJcbiAgICAvLyBSZXBlYXRpbmcgZmllbGRzIHRoYXQgd2lsbCBiZSBhbm9ueW1pemVkIGlmIHByZXNlbnQuIFNhbWUgc3RydWN0dXJlIGFzIGBwbGF5ZXJJZHNgLFxyXG4gICAgLy8gYnV0IHVzZXMgcmVwZWF0aW5nIGZpZWxkIGtleXMgKG5hbWVzKSBpbiBwbGFjZSBvZiBmaWVsZCBpbmRpY2VzLiBIb3dldmVyLCB0aGUgJ2lkJyBmaWVsZFxyXG4gICAgLy8gb2YgYW4gaWQvbmFtZSBwYWlyIGNhbiBiZSBhIGZpeGVkIGZpZWxkIGluZGV4LiBTZWUgYENvbWJhdGFudE1lbW9yeWAgZXhhbXBsZS5cclxuICAgIGtleXNUb0Fub255bWl6ZT86IEsgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA/IHsgW2lkRmllbGQ6IHN0cmluZyB8IG51bWJlcl06IHN0cmluZyB8IG51bGwgfVxyXG4gICAgICA6IG5ldmVyO1xyXG4gIH07XHJcbiAgLy8gU2VlIGBBbmFseXNpc09wdGlvbnNgIHR5cGUuIE9taXR0aW5nIHRoaXMgcHJvcGVydHkgbWVhbnMgbm8gbG9nIGxpbmVzIHdpbGwgYmUgaW5jbHVkZWQ7XHJcbiAgLy8gaG93ZXZlciwgaWYgcmFpZGJvc3MgdHJpZ2dlcnMgYXJlIGZvdW5kIHVzaW5nIHRoaXMgbGluZSB0eXBlLCBhbiBhdXRvbWF0ZWQgd29ya2Zsb3cgd2lsbFxyXG4gIC8vIGNyZWF0ZSB0aGlzIHByb3BlcnR5IGFuZCBzZXQgYGluY2x1ZGU6ICdhbGwnYC4gVG8gc3VwcHJlc3MgdGhpcywgdXNlIGBpbmNsdWRlOiAnbmV2ZXJgYC5cclxuICBhbmFseXNpc09wdGlvbnM/OiBBbmFseXNpc09wdGlvbnM8Sz47XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBMb2dEZWZGaWVsZElkeDxcclxuICBLIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWUsXHJcbj4gPSBFeHRyYWN0PExvZ0RlZmluaXRpb25zW0tdWydmaWVsZHMnXVtrZXlvZiBMb2dEZWZpbml0aW9uc1tLXVsnZmllbGRzJ11dLCBudW1iZXI+O1xyXG5cclxudHlwZSBQbGF5ZXJJZE1hcDxLIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWU+ID0ge1xyXG4gIFtQIGluIExvZ0RlZkZpZWxkSWR4PEs+IGFzIG51bWJlcl0/OiBMb2dEZWZGaWVsZElkeDxLPiB8IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBMb2dEZWZGaWVsZE5hbWU8SyBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lPiA9IEV4dHJhY3Q8XHJcbiAga2V5b2YgTG9nRGVmaW5pdGlvbnNbS11bJ2ZpZWxkcyddLFxyXG4gIHN0cmluZ1xyXG4+O1xyXG5cclxuLy8gU3BlY2lmaWVzIGEgZmllbGROYW1lIGtleSB3aXRoIG9uZSBvciBtb3JlIHBvc3NpYmxlIHZhbHVlcyBhbmQgYSBgY2FuQW5vbnlpemVgIG92ZXJyaWRlXHJcbi8vIGlmIHRoYXQgZmllbGQgYW5kIHZhbHVlIGFyZSBwcmVzZW50IG9uIHRoZSBsb2cgbGluZS4gU2VlICdHYW1lTG9nJyBmb3IgYW4gZXhhbXBsZS5cclxudHlwZSBMb2dEZWZTdWJGaWVsZHM8SyBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lPiA9IHtcclxuICBbUCBpbiBMb2dEZWZGaWVsZE5hbWU8Sz5dPzoge1xyXG4gICAgW2ZpZWxkVmFsdWU6IHN0cmluZ106IHtcclxuICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICBjYW5Bbm9ueW1pemU6IGJvb2xlYW47XHJcbiAgICB9O1xyXG4gIH07XHJcbn07XHJcblxyXG4vLyBPcHRpb25zIGZvciBpbmNsdWRpbmcgdGhlc2UgbGluZXMgaW4gYSBmaWx0ZXJlZCBsb2cgdmlhIHRoZSBsb2cgc3BsaXR0ZXIncyBhbmFseXNpcyBvcHRpb24uXHJcbi8vIGBpbmNsdWRlOmAgc3BlY2lmaWVzIHRoZSBsZXZlbCBvZiBpbmNsdXNpb246XHJcbi8vICAgLSAnYWxsJyB3aWxsIGluY2x1ZGUgYWxsIGxpbmVzIHdpdGggbm8gZmlsdGVyaW5nLlxyXG4vLyAgIC0gJ2ZpbHRlcicgd2lsbCBpbmNsdWRlIG9ubHkgdGhvc2UgbGluZXMgdGhhdCBtYXRjaCBhdCBsZWFzdCBvbmUgb2YgdGhlIHNwZWNpZmllZCBgZmlsdGVyc2AuXHJcbi8vICAgLSAnbmV2ZXInIGlzIGFuIG92ZXJyaWRlOyBqdXN0IGxpa2UgaWYgdGhlIHByb3BlcnR5IHdlcmUgb21pdHRlZCwgbm8gbG9nIGxpbmVzIHdpbGwgYmUgaW5jbHVkZWRcclxuLy8gICAgICBpbiB0aGUgZmlsdGVyOyBob3dldmVyLCBpZiAnbmV2ZXInIGlzIHVzZWQsIHRoZSBhdXRvbWF0ZWQgd29ya2Zsb3cgd2lsbCBub3QgYXR0ZW1wdCB0b1xyXG4vLyAgICAgIGNoYW5nZSBpdCB0byAnYWxsJyB1cG9uIGZpbmRpbmcgYWN0aXZlIHRyaWdnZXJzIHVzaW5nIHRoaXMgbGluZSB0eXBlLlxyXG4vLyBgZmlsdGVyczpgIGNvbnRhaW5zIE5ldHJlZ2V4LXN0eWxlIGZpbHRlciBjcml0ZXJpYS4gTGluZXMgc2F0aXNmeWluZyBhdCBsZWFzdCBvbmUgZmlsdGVyIHdpbGwgYmVcclxuLy8gICBpbmNsdWRlZC4gSWYgYGluY2x1ZGU6YCA9ICdmaWx0ZXInLCBgZmlsdGVyc2AgbXVzdCBiZSBwcmVzZW50OyBvdGhlcndpc2UsIGl0IG11c3QgYmUgb21pdHRlZC5cclxuLy8gYGNvbWJhdGFudElkRmllbGRzOmAgYXJlIGZpZWxkIGluZGljZXMgY29udGFpbmluZyBjb21iYXRhbnRJZHMuIElmIHNwZWNpZmllZCwgdGhlc2UgZmllbGRzXHJcbi8vICAgd2lsbCBiZSBjaGVja2VkIGZvciBpZ25vcmVkIGNvbWJhdGFudHMgKGUuZy4gcGV0cykgZHVyaW5nIGxvZyBmaWx0ZXJpbmcuXHJcbmV4cG9ydCB0eXBlIEFuYWx5c2lzT3B0aW9uczxLIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWU+ID0ge1xyXG4gIGluY2x1ZGU6ICduZXZlcic7XHJcbiAgZmlsdGVycz86IHVuZGVmaW5lZDtcclxuICBjb21iYXRhbnRJZEZpZWxkcz86IHVuZGVmaW5lZDtcclxufSB8IHtcclxuICBpbmNsdWRlOiAnZmlsdGVyJztcclxuICBmaWx0ZXJzOiBOZXRQYXJhbXNbS10gfCByZWFkb25seSBOZXRQYXJhbXNbS11bXTtcclxuICBjb21iYXRhbnRJZEZpZWxkcz86IExvZ0RlZkZpZWxkSWR4PEs+IHwgcmVhZG9ubHkgTG9nRGVmRmllbGRJZHg8Sz5bXTtcclxufSB8IHtcclxuICBpbmNsdWRlOiAnYWxsJztcclxuICBmaWx0ZXJzPzogdW5kZWZpbmVkO1xyXG4gIGNvbWJhdGFudElkRmllbGRzPzogTG9nRGVmRmllbGRJZHg8Sz4gfCByZWFkb25seSBMb2dEZWZGaWVsZElkeDxLPltdO1xyXG59O1xyXG5cclxuLy8gVE9ETzogTWF5YmUgYnJpbmcgaW4gYSBoZWxwZXIgbGlicmFyeSB0aGF0IGNhbiBjb21waWxlLXRpbWUgZXh0cmFjdCB0aGVzZSBrZXlzIGluc3RlYWQ/XHJcbmNvbnN0IGNvbWJhdGFudE1lbW9yeUtleXM6IHJlYWRvbmx5IChFeHRyYWN0PGtleW9mIFBsdWdpbkNvbWJhdGFudFN0YXRlLCBzdHJpbmc+KVtdID0gW1xyXG4gICdDdXJyZW50V29ybGRJRCcsXHJcbiAgJ1dvcmxkSUQnLFxyXG4gICdXb3JsZE5hbWUnLFxyXG4gICdCTnBjSUQnLFxyXG4gICdCTnBjTmFtZUlEJyxcclxuICAnUGFydHlUeXBlJyxcclxuICAnSUQnLFxyXG4gICdPd25lcklEJyxcclxuICAnV2VhcG9uSWQnLFxyXG4gICdUeXBlJyxcclxuICAnSm9iJyxcclxuICAnTGV2ZWwnLFxyXG4gICdOYW1lJyxcclxuICAnQ3VycmVudEhQJyxcclxuICAnTWF4SFAnLFxyXG4gICdDdXJyZW50TVAnLFxyXG4gICdNYXhNUCcsXHJcbiAgJ1Bvc1gnLFxyXG4gICdQb3NZJyxcclxuICAnUG9zWicsXHJcbiAgJ0hlYWRpbmcnLFxyXG4gICdNb25zdGVyVHlwZScsXHJcbiAgJ1N0YXR1cycsXHJcbiAgJ01vZGVsU3RhdHVzJyxcclxuICAnQWdncmVzc2lvblN0YXR1cycsXHJcbiAgJ1RhcmdldElEJyxcclxuICAnSXNUYXJnZXRhYmxlJyxcclxuICAnUmFkaXVzJyxcclxuICAnRGlzdGFuY2UnLFxyXG4gICdFZmZlY3RpdmVEaXN0YW5jZScsXHJcbiAgJ05QQ1RhcmdldElEJyxcclxuICAnQ3VycmVudEdQJyxcclxuICAnTWF4R1AnLFxyXG4gICdDdXJyZW50Q1AnLFxyXG4gICdNYXhDUCcsXHJcbiAgJ1BDVGFyZ2V0SUQnLFxyXG4gICdJc0Nhc3RpbmcxJyxcclxuICAnSXNDYXN0aW5nMicsXHJcbiAgJ0Nhc3RCdWZmSUQnLFxyXG4gICdDYXN0VGFyZ2V0SUQnLFxyXG4gICdDYXN0R3JvdW5kVGFyZ2V0WCcsXHJcbiAgJ0Nhc3RHcm91bmRUYXJnZXRZJyxcclxuICAnQ2FzdEdyb3VuZFRhcmdldFonLFxyXG4gICdDYXN0RHVyYXRpb25DdXJyZW50JyxcclxuICAnQ2FzdER1cmF0aW9uTWF4JyxcclxuICAnVHJhbnNmb3JtYXRpb25JZCcsXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBsYXRlc3RMb2dEZWZpbml0aW9ucyA9IHtcclxuICBHYW1lTG9nOiB7XHJcbiAgICB0eXBlOiAnMDAnLFxyXG4gICAgbmFtZTogJ0dhbWVMb2cnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0NoYXRMb2cnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgY29kZTogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgICAgbGluZTogNCxcclxuICAgIH0sXHJcbiAgICBzdWJGaWVsZHM6IHtcclxuICAgICAgY29kZToge1xyXG4gICAgICAgICcwMDM5Jzoge1xyXG4gICAgICAgICAgbmFtZTogJ21lc3NhZ2UnLFxyXG4gICAgICAgICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzAwMzgnOiB7XHJcbiAgICAgICAgICBuYW1lOiAnZWNobycsXHJcbiAgICAgICAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnMDA0NCc6IHtcclxuICAgICAgICAgIG5hbWU6ICdkaWFsb2cnLFxyXG4gICAgICAgICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzA4MzknOiB7XHJcbiAgICAgICAgICBuYW1lOiAnbWVzc2FnZScsXHJcbiAgICAgICAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnZmlsdGVyJyxcclxuICAgICAgZmlsdGVyczogeyBjb2RlOiBbJzAwNDQnLCAnMDgzOSddIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgQ2hhbmdlWm9uZToge1xyXG4gICAgdHlwZTogJzAxJyxcclxuICAgIG5hbWU6ICdDaGFuZ2Vab25lJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdUZXJyaXRvcnknLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IDMsXHJcbiAgICB9LFxyXG4gICAgbGFzdEluY2x1ZGU6IHRydWUsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnYWxsJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBDaGFuZ2VkUGxheWVyOiB7XHJcbiAgICB0eXBlOiAnMDInLFxyXG4gICAgbmFtZTogJ0NoYW5nZWRQbGF5ZXInLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0NoYW5nZVByaW1hcnlQbGF5ZXInLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IDMsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICB9LFxyXG4gICAgbGFzdEluY2x1ZGU6IHRydWUsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIEFkZGVkQ29tYmF0YW50OiB7XHJcbiAgICB0eXBlOiAnMDMnLFxyXG4gICAgbmFtZTogJ0FkZGVkQ29tYmF0YW50JyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdBZGRDb21iYXRhbnQnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IDMsXHJcbiAgICAgIGpvYjogNCxcclxuICAgICAgbGV2ZWw6IDUsXHJcbiAgICAgIG93bmVySWQ6IDYsXHJcbiAgICAgIHdvcmxkSWQ6IDcsXHJcbiAgICAgIHdvcmxkOiA4LFxyXG4gICAgICBucGNOYW1lSWQ6IDksXHJcbiAgICAgIG5wY0Jhc2VJZDogMTAsXHJcbiAgICAgIGN1cnJlbnRIcDogMTEsXHJcbiAgICAgIGhwOiAxMixcclxuICAgICAgY3VycmVudE1wOiAxMyxcclxuICAgICAgbXA6IDE0LFxyXG4gICAgICAvLyBtYXhUcDogMTUsXHJcbiAgICAgIC8vIHRwOiAxNixcclxuICAgICAgeDogMTcsXHJcbiAgICAgIHk6IDE4LFxyXG4gICAgICB6OiAxOSxcclxuICAgICAgaGVhZGluZzogMjAsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICAgIDY6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ2ZpbHRlcicsXHJcbiAgICAgIGZpbHRlcnM6IHsgaWQ6ICc0Lns3fScgfSwgLy8gTlBDIGNvbWJhdGFudHMgb25seVxyXG4gICAgICBjb21iYXRhbnRJZEZpZWxkczogMixcclxuICAgIH0sXHJcbiAgfSxcclxuICBSZW1vdmVkQ29tYmF0YW50OiB7XHJcbiAgICB0eXBlOiAnMDQnLFxyXG4gICAgbmFtZTogJ1JlbW92ZWRDb21iYXRhbnQnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1JlbW92ZUNvbWJhdGFudCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgICAgam9iOiA0LFxyXG4gICAgICBsZXZlbDogNSxcclxuICAgICAgb3duZXI6IDYsXHJcbiAgICAgIHdvcmxkOiA4LFxyXG4gICAgICBucGNOYW1lSWQ6IDksXHJcbiAgICAgIG5wY0Jhc2VJZDogMTAsXHJcbiAgICAgIGN1cnJlbnRIcDogMTEsXHJcbiAgICAgIGhwOiAxMixcclxuICAgICAgY3VycmVudE1wOiAxMyxcclxuICAgICAgbXA6IDE0LFxyXG4gICAgICAvLyBjdXJyZW50VHA6IDE1LFxyXG4gICAgICAvLyBtYXhUcDogMTYsXHJcbiAgICAgIHg6IDE3LFxyXG4gICAgICB5OiAxOCxcclxuICAgICAgejogMTksXHJcbiAgICAgIGhlYWRpbmc6IDIwLFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgICA2OiBudWxsLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdmaWx0ZXInLFxyXG4gICAgICBmaWx0ZXJzOiB7IGlkOiAnNC57N30nIH0sIC8vIE5QQyBjb21iYXRhbnRzIG9ubHlcclxuICAgICAgY29tYmF0YW50SWRGaWVsZHM6IDIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgUGFydHlMaXN0OiB7XHJcbiAgICB0eXBlOiAnMTEnLFxyXG4gICAgbmFtZTogJ1BhcnR5TGlzdCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnUGFydHlMaXN0JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHBhcnR5Q291bnQ6IDIsXHJcbiAgICAgIGlkMDogMyxcclxuICAgICAgaWQxOiA0LFxyXG4gICAgICBpZDI6IDUsXHJcbiAgICAgIGlkMzogNixcclxuICAgICAgaWQ0OiA3LFxyXG4gICAgICBpZDU6IDgsXHJcbiAgICAgIGlkNjogOSxcclxuICAgICAgaWQ3OiAxMCxcclxuICAgICAgaWQ4OiAxMSxcclxuICAgICAgaWQ5OiAxMixcclxuICAgICAgaWQxMDogMTMsXHJcbiAgICAgIGlkMTE6IDE0LFxyXG4gICAgICBpZDEyOiAxNSxcclxuICAgICAgaWQxMzogMTYsXHJcbiAgICAgIGlkMTQ6IDE3LFxyXG4gICAgICBpZDE1OiAxOCxcclxuICAgICAgaWQxNjogMTksXHJcbiAgICAgIGlkMTc6IDIwLFxyXG4gICAgICBpZDE4OiAyMSxcclxuICAgICAgaWQxOTogMjIsXHJcbiAgICAgIGlkMjA6IDIzLFxyXG4gICAgICBpZDIxOiAyNCxcclxuICAgICAgaWQyMjogMjUsXHJcbiAgICAgIGlkMjM6IDI2LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAzOiBudWxsLFxyXG4gICAgICA0OiBudWxsLFxyXG4gICAgICA1OiBudWxsLFxyXG4gICAgICA2OiBudWxsLFxyXG4gICAgICA3OiBudWxsLFxyXG4gICAgICA4OiBudWxsLFxyXG4gICAgICA5OiBudWxsLFxyXG4gICAgICAxMDogbnVsbCxcclxuICAgICAgMTE6IG51bGwsXHJcbiAgICAgIDEyOiBudWxsLFxyXG4gICAgICAxMzogbnVsbCxcclxuICAgICAgMTQ6IG51bGwsXHJcbiAgICAgIDE1OiBudWxsLFxyXG4gICAgICAxNjogbnVsbCxcclxuICAgICAgMTc6IG51bGwsXHJcbiAgICAgIDE4OiBudWxsLFxyXG4gICAgICAxOTogbnVsbCxcclxuICAgICAgMjA6IG51bGwsXHJcbiAgICAgIDIxOiBudWxsLFxyXG4gICAgICAyMjogbnVsbCxcclxuICAgICAgMjM6IG51bGwsXHJcbiAgICAgIDI0OiBudWxsLFxyXG4gICAgICAyNTogbnVsbCxcclxuICAgICAgMjY6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiAzLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgbGFzdEluY2x1ZGU6IHRydWUsXHJcbiAgfSxcclxuICBQbGF5ZXJTdGF0czoge1xyXG4gICAgdHlwZTogJzEyJyxcclxuICAgIG5hbWU6ICdQbGF5ZXJTdGF0cycsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnUGxheWVyU3RhdHMnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgam9iOiAyLFxyXG4gICAgICBzdHJlbmd0aDogMyxcclxuICAgICAgZGV4dGVyaXR5OiA0LFxyXG4gICAgICB2aXRhbGl0eTogNSxcclxuICAgICAgaW50ZWxsaWdlbmNlOiA2LFxyXG4gICAgICBtaW5kOiA3LFxyXG4gICAgICBwaWV0eTogOCxcclxuICAgICAgYXR0YWNrUG93ZXI6IDksXHJcbiAgICAgIGRpcmVjdEhpdDogMTAsXHJcbiAgICAgIGNyaXRpY2FsSGl0OiAxMSxcclxuICAgICAgYXR0YWNrTWFnaWNQb3RlbmN5OiAxMixcclxuICAgICAgaGVhbE1hZ2ljUG90ZW5jeTogMTMsXHJcbiAgICAgIGRldGVybWluYXRpb246IDE0LFxyXG4gICAgICBza2lsbFNwZWVkOiAxNSxcclxuICAgICAgc3BlbGxTcGVlZDogMTYsXHJcbiAgICAgIHRlbmFjaXR5OiAxOCxcclxuICAgICAgbG9jYWxDb250ZW50SWQ6IDE5LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGxhc3RJbmNsdWRlOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBTdGFydHNVc2luZzoge1xyXG4gICAgdHlwZTogJzIwJyxcclxuICAgIG5hbWU6ICdTdGFydHNVc2luZycsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnU3RhcnRzQ2FzdGluZycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBzb3VyY2VJZDogMixcclxuICAgICAgc291cmNlOiAzLFxyXG4gICAgICBpZDogNCxcclxuICAgICAgYWJpbGl0eTogNSxcclxuICAgICAgdGFyZ2V0SWQ6IDYsXHJcbiAgICAgIHRhcmdldDogNyxcclxuICAgICAgY2FzdFRpbWU6IDgsXHJcbiAgICAgIHg6IDksXHJcbiAgICAgIHk6IDEwLFxyXG4gICAgICB6OiAxMSxcclxuICAgICAgaGVhZGluZzogMTIsXHJcbiAgICB9LFxyXG4gICAgcG9zc2libGVSc3ZGaWVsZHM6IDUsXHJcbiAgICBibGFua0ZpZWxkczogWzZdLFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICAgIDY6IDcsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ2ZpbHRlcicsXHJcbiAgICAgIGZpbHRlcnM6IHsgc291cmNlSWQ6ICc0Lns3fScgfSwgLy8gTlBDIGNhc3RzIG9ubHlcclxuICAgICAgY29tYmF0YW50SWRGaWVsZHM6IFsyLCA2XSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBBYmlsaXR5OiB7XHJcbiAgICB0eXBlOiAnMjEnLFxyXG4gICAgbmFtZTogJ0FiaWxpdHknLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0FjdGlvbkVmZmVjdCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBzb3VyY2VJZDogMixcclxuICAgICAgc291cmNlOiAzLFxyXG4gICAgICBpZDogNCxcclxuICAgICAgYWJpbGl0eTogNSxcclxuICAgICAgdGFyZ2V0SWQ6IDYsXHJcbiAgICAgIHRhcmdldDogNyxcclxuICAgICAgZmxhZ3M6IDgsXHJcbiAgICAgIGRhbWFnZTogOSxcclxuICAgICAgdGFyZ2V0Q3VycmVudEhwOiAyNCxcclxuICAgICAgdGFyZ2V0TWF4SHA6IDI1LFxyXG4gICAgICB0YXJnZXRDdXJyZW50TXA6IDI2LFxyXG4gICAgICB0YXJnZXRNYXhNcDogMjcsXHJcbiAgICAgIC8vIHRhcmdldEN1cnJlbnRUcDogMjgsXHJcbiAgICAgIC8vIHRhcmdldE1heFRwOiAyOSxcclxuICAgICAgdGFyZ2V0WDogMzAsXHJcbiAgICAgIHRhcmdldFk6IDMxLFxyXG4gICAgICB0YXJnZXRaOiAzMixcclxuICAgICAgdGFyZ2V0SGVhZGluZzogMzMsXHJcbiAgICAgIGN1cnJlbnRIcDogMzQsXHJcbiAgICAgIG1heEhwOiAzNSxcclxuICAgICAgY3VycmVudE1wOiAzNixcclxuICAgICAgbWF4TXA6IDM3LFxyXG4gICAgICAvLyBjdXJyZW50VHA6IDM4O1xyXG4gICAgICAvLyBtYXhUcDogMzk7XHJcbiAgICAgIHg6IDQwLFxyXG4gICAgICB5OiA0MSxcclxuICAgICAgejogNDIsXHJcbiAgICAgIGhlYWRpbmc6IDQzLFxyXG4gICAgICBzZXF1ZW5jZTogNDQsXHJcbiAgICAgIHRhcmdldEluZGV4OiA0NSxcclxuICAgICAgdGFyZ2V0Q291bnQ6IDQ2LFxyXG4gICAgICBvd25lcklkOiA0NyxcclxuICAgICAgb3duZXJOYW1lOiA0OCxcclxuICAgICAgZWZmZWN0RGlzcGxheVR5cGU6IDQ5LFxyXG4gICAgICBhY3Rpb25JZDogNTAsXHJcbiAgICAgIGFjdGlvbkFuaW1hdGlvbklkOiA1MSxcclxuICAgICAgYW5pbWF0aW9uTG9ja1RpbWU6IDUyLFxyXG4gICAgICByb3RhdGlvbkhleDogNTMsXHJcbiAgICB9LFxyXG4gICAgcG9zc2libGVSc3ZGaWVsZHM6IDUsXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgICAgNjogNyxcclxuICAgICAgNDc6IDQ4LFxyXG4gICAgfSxcclxuICAgIGJsYW5rRmllbGRzOiBbNiwgNDcsIDQ4XSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdmaWx0ZXInLFxyXG4gICAgICBmaWx0ZXJzOiB7IHNvdXJjZUlkOiAnNC57N30nIH0sIC8vIE5QQyBhYmlsaXRpZXMgb25seVxyXG4gICAgICBjb21iYXRhbnRJZEZpZWxkczogWzIsIDZdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIE5ldHdvcmtBT0VBYmlsaXR5OiB7XHJcbiAgICB0eXBlOiAnMjInLFxyXG4gICAgbmFtZTogJ05ldHdvcmtBT0VBYmlsaXR5JyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdBT0VBY3Rpb25FZmZlY3QnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgc291cmNlSWQ6IDIsXHJcbiAgICAgIHNvdXJjZTogMyxcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIGFiaWxpdHk6IDUsXHJcbiAgICAgIHRhcmdldElkOiA2LFxyXG4gICAgICB0YXJnZXQ6IDcsXHJcbiAgICAgIGZsYWdzOiA4LFxyXG4gICAgICBkYW1hZ2U6IDksXHJcbiAgICAgIHRhcmdldEN1cnJlbnRIcDogMjQsXHJcbiAgICAgIHRhcmdldE1heEhwOiAyNSxcclxuICAgICAgdGFyZ2V0Q3VycmVudE1wOiAyNixcclxuICAgICAgdGFyZ2V0TWF4TXA6IDI3LFxyXG4gICAgICAvLyB0YXJnZXRDdXJyZW50VHA6IDI4LFxyXG4gICAgICAvLyB0YXJnZXRNYXhUcDogMjksXHJcbiAgICAgIHRhcmdldFg6IDMwLFxyXG4gICAgICB0YXJnZXRZOiAzMSxcclxuICAgICAgdGFyZ2V0WjogMzIsXHJcbiAgICAgIHRhcmdldEhlYWRpbmc6IDMzLFxyXG4gICAgICBjdXJyZW50SHA6IDM0LFxyXG4gICAgICBtYXhIcDogMzUsXHJcbiAgICAgIGN1cnJlbnRNcDogMzYsXHJcbiAgICAgIG1heE1wOiAzNyxcclxuICAgICAgLy8gY3VycmVudFRwOiAzODtcclxuICAgICAgLy8gbWF4VHA6IDM5O1xyXG4gICAgICB4OiA0MCxcclxuICAgICAgeTogNDEsXHJcbiAgICAgIHo6IDQyLFxyXG4gICAgICBoZWFkaW5nOiA0MyxcclxuICAgICAgc2VxdWVuY2U6IDQ0LFxyXG4gICAgICB0YXJnZXRJbmRleDogNDUsXHJcbiAgICAgIHRhcmdldENvdW50OiA0NixcclxuICAgICAgb3duZXJJZDogNDcsXHJcbiAgICAgIG93bmVyTmFtZTogNDgsXHJcbiAgICAgIGVmZmVjdERpc3BsYXlUeXBlOiA0OSxcclxuICAgICAgYWN0aW9uSWQ6IDUwLFxyXG4gICAgICBhY3Rpb25BbmltYXRpb25JZDogNTEsXHJcbiAgICAgIGFuaW1hdGlvbkxvY2tUaW1lOiA1MixcclxuICAgICAgcm90YXRpb25IZXg6IDUzLFxyXG4gICAgfSxcclxuICAgIHBvc3NpYmxlUnN2RmllbGRzOiA1LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IDMsXHJcbiAgICAgIDY6IDcsXHJcbiAgICAgIDQ3OiA0OCxcclxuICAgIH0sXHJcbiAgICBibGFua0ZpZWxkczogWzYsIDQ3LCA0OF0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnZmlsdGVyJyxcclxuICAgICAgZmlsdGVyczogeyBzb3VyY2VJZDogJzQuezd9JyB9LCAvLyBOUEMgYWJpbGl0aWVzIG9ubHlcclxuICAgICAgY29tYmF0YW50SWRGaWVsZHM6IFsyLCA2XSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBOZXR3b3JrQ2FuY2VsQWJpbGl0eToge1xyXG4gICAgdHlwZTogJzIzJyxcclxuICAgIG5hbWU6ICdOZXR3b3JrQ2FuY2VsQWJpbGl0eScsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnQ2FuY2VsQWN0aW9uJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHNvdXJjZUlkOiAyLFxyXG4gICAgICBzb3VyY2U6IDMsXHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBuYW1lOiA1LFxyXG4gICAgICByZWFzb246IDYsXHJcbiAgICB9LFxyXG4gICAgcG9zc2libGVSc3ZGaWVsZHM6IDUsXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnZmlsdGVyJyxcclxuICAgICAgZmlsdGVyczogeyBzb3VyY2VJZDogJzQuezd9JyB9LCAvLyBOUEMgY29tYmF0YW50cyBvbmx5XHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiAyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIE5ldHdvcmtEb1Q6IHtcclxuICAgIHR5cGU6ICcyNCcsXHJcbiAgICBuYW1lOiAnTmV0d29ya0RvVCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnRG9USG9UJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAzLFxyXG4gICAgICB3aGljaDogNCxcclxuICAgICAgZWZmZWN0SWQ6IDUsXHJcbiAgICAgIGRhbWFnZTogNixcclxuICAgICAgY3VycmVudEhwOiA3LFxyXG4gICAgICBtYXhIcDogOCxcclxuICAgICAgY3VycmVudE1wOiA5LFxyXG4gICAgICBtYXhNcDogMTAsXHJcbiAgICAgIC8vIGN1cnJlbnRUcDogMTEsXHJcbiAgICAgIC8vIG1heFRwOiAxMixcclxuICAgICAgeDogMTMsXHJcbiAgICAgIHk6IDE0LFxyXG4gICAgICB6OiAxNSxcclxuICAgICAgaGVhZGluZzogMTYsXHJcbiAgICAgIHNvdXJjZUlkOiAxNyxcclxuICAgICAgc291cmNlOiAxOCxcclxuICAgICAgLy8gQW4gaWQgbnVtYmVyIGxvb2t1cCBpbnRvIHRoZSBBdHRhY2tUeXBlIHRhYmxlXHJcbiAgICAgIGRhbWFnZVR5cGU6IDE5LFxyXG4gICAgICBzb3VyY2VDdXJyZW50SHA6IDIwLFxyXG4gICAgICBzb3VyY2VNYXhIcDogMjEsXHJcbiAgICAgIHNvdXJjZUN1cnJlbnRNcDogMjIsXHJcbiAgICAgIHNvdXJjZU1heE1wOiAyMyxcclxuICAgICAgLy8gc291cmNlQ3VycmVudFRwOiAyNCxcclxuICAgICAgLy8gc291cmNlTWF4VHA6IDI1LFxyXG4gICAgICBzb3VyY2VYOiAyNixcclxuICAgICAgc291cmNlWTogMjcsXHJcbiAgICAgIHNvdXJjZVo6IDI4LFxyXG4gICAgICBzb3VyY2VIZWFkaW5nOiAyOSxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgICAgMTc6IDE4LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdmaWx0ZXInLFxyXG4gICAgICBmaWx0ZXJzOiB7IC8vIERvVCBvbiBwbGF5ZXIgd2l0aCB2YWxpZCBlZmZlY3RJZFxyXG4gICAgICAgIGlkOiAnMS57N30nLFxyXG4gICAgICAgIHdoaWNoOiAnRG9UJyxcclxuICAgICAgICBlZmZlY3RJZDogJzAqP1sxLTlBLUZdWzAtOUEtRl0qJywgLy8gbm9uLXplcm8sIG5vbi1lbXB0eSwgcG9zc2libHktcGFkZGVkIHZhbHVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiBbMiwgMTddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIFdhc0RlZmVhdGVkOiB7XHJcbiAgICB0eXBlOiAnMjUnLFxyXG4gICAgbmFtZTogJ1dhc0RlZmVhdGVkJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdEZWF0aCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICB0YXJnZXRJZDogMixcclxuICAgICAgdGFyZ2V0OiAzLFxyXG4gICAgICBzb3VyY2VJZDogNCxcclxuICAgICAgc291cmNlOiA1LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgICA0OiA1LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdmaWx0ZXInLFxyXG4gICAgICBmaWx0ZXJzOiB7IHRhcmdldElkOiAnNC57N30nIH0sIC8vIE5QQyBjb21iYXRhbnRzIG9ubHlcclxuICAgICAgY29tYmF0YW50SWRGaWVsZHM6IDIsIC8vIGRvbid0IGFwcGx5IHRvIHNvdXJjZUlkOyBhbiBpZ25vcmVkIGNvbWJhdGFudCBpcyBhIHZhbGlkIHNvdXJjZVxyXG4gICAgfSxcclxuICB9LFxyXG4gIEdhaW5zRWZmZWN0OiB7XHJcbiAgICB0eXBlOiAnMjYnLFxyXG4gICAgbmFtZTogJ0dhaW5zRWZmZWN0JyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdTdGF0dXNBZGQnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgZWZmZWN0SWQ6IDIsXHJcbiAgICAgIGVmZmVjdDogMyxcclxuICAgICAgZHVyYXRpb246IDQsXHJcbiAgICAgIHNvdXJjZUlkOiA1LFxyXG4gICAgICBzb3VyY2U6IDYsXHJcbiAgICAgIHRhcmdldElkOiA3LFxyXG4gICAgICB0YXJnZXQ6IDgsXHJcbiAgICAgIGNvdW50OiA5LFxyXG4gICAgICB0YXJnZXRNYXhIcDogMTAsXHJcbiAgICAgIHNvdXJjZU1heEhwOiAxMSxcclxuICAgIH0sXHJcbiAgICBwb3NzaWJsZVJzdkZpZWxkczogMyxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICA1OiA2LFxyXG4gICAgICA3OiA4LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdmaWx0ZXInLFxyXG4gICAgICBmaWx0ZXJzOiBbXHJcbiAgICAgICAgeyAvLyBlZmZlY3QgZnJvbSBlbnZpcm9ubWVudC9OUEMgYXBwbGllZCB0byBwbGF5ZXJcclxuICAgICAgICAgIHNvdXJjZUlkOiAnW0U0XS57N30nLFxyXG4gICAgICAgICAgdGFyZ2V0SWQ6ICcxLns3fScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IC8vIGtub3duIGVmZmVjdElkcyBvZiBpbnRlcmVzdFxyXG4gICAgICAgICAgZWZmZWN0SWQ6IFsnQjlBJywgJzgwOCddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiBbNSwgN10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgSGVhZE1hcmtlcjoge1xyXG4gICAgdHlwZTogJzI3JyxcclxuICAgIG5hbWU6ICdIZWFkTWFya2VyJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdUYXJnZXRJY29uJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHRhcmdldElkOiAyLFxyXG4gICAgICB0YXJnZXQ6IDMsXHJcbiAgICAgIGlkOiA2LFxyXG4gICAgICBkYXRhMDogNyxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgIH0sXHJcbiAgICBwb3NzaWJsZVBsYXllcklkczogWzddLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiA3LFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdhbGwnLFxyXG4gICAgICBjb21iYXRhbnRJZEZpZWxkczogMixcclxuICAgIH0sXHJcbiAgfSxcclxuICBOZXR3b3JrUmFpZE1hcmtlcjoge1xyXG4gICAgdHlwZTogJzI4JyxcclxuICAgIG5hbWU6ICdOZXR3b3JrUmFpZE1hcmtlcicsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnV2F5bWFya01hcmtlcicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBvcGVyYXRpb246IDIsXHJcbiAgICAgIHdheW1hcms6IDMsXHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBuYW1lOiA1LFxyXG4gICAgICB4OiA2LFxyXG4gICAgICB5OiA3LFxyXG4gICAgICB6OiA4LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICA0OiA1LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgTmV0d29ya1RhcmdldE1hcmtlcjoge1xyXG4gICAgdHlwZTogJzI5JyxcclxuICAgIG5hbWU6ICdOZXR3b3JrVGFyZ2V0TWFya2VyJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdTaWduTWFya2VyJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIG9wZXJhdGlvbjogMiwgLy8gQWRkLCBVcGRhdGUsIERlbGV0ZVxyXG4gICAgICB3YXltYXJrOiAzLFxyXG4gICAgICBpZDogNCxcclxuICAgICAgbmFtZTogNSxcclxuICAgICAgdGFyZ2V0SWQ6IDYsXHJcbiAgICAgIHRhcmdldE5hbWU6IDcsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDQ6IDUsXHJcbiAgICAgIDY6IDcsXHJcbiAgICB9LFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBMb3Nlc0VmZmVjdDoge1xyXG4gICAgdHlwZTogJzMwJyxcclxuICAgIG5hbWU6ICdMb3Nlc0VmZmVjdCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnU3RhdHVzUmVtb3ZlJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGVmZmVjdElkOiAyLFxyXG4gICAgICBlZmZlY3Q6IDMsXHJcbiAgICAgIHNvdXJjZUlkOiA1LFxyXG4gICAgICBzb3VyY2U6IDYsXHJcbiAgICAgIHRhcmdldElkOiA3LFxyXG4gICAgICB0YXJnZXQ6IDgsXHJcbiAgICAgIGNvdW50OiA5LFxyXG4gICAgfSxcclxuICAgIHBvc3NpYmxlUnN2RmllbGRzOiAzLFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDU6IDYsXHJcbiAgICAgIDc6IDgsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ2ZpbHRlcicsXHJcbiAgICAgIGZpbHRlcnM6IFtcclxuICAgICAgICB7IC8vIGVmZmVjdCBmcm9tIGVudmlyb25tZW50L05QQyBhcHBsaWVkIHRvIHBsYXllclxyXG4gICAgICAgICAgc291cmNlSWQ6ICdbRTRdLns3fScsXHJcbiAgICAgICAgICB0YXJnZXRJZDogJzEuezd9JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgLy8ga25vd24gZWZmZWN0SWRzIG9mIGludGVyZXN0XHJcbiAgICAgICAgICBlZmZlY3RJZDogWydCOUEnLCAnODA4J10sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgY29tYmF0YW50SWRGaWVsZHM6IFs1LCA3XSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBOZXR3b3JrR2F1Z2U6IHtcclxuICAgIHR5cGU6ICczMScsXHJcbiAgICBuYW1lOiAnTmV0d29ya0dhdWdlJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdHYXVnZScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgZGF0YTA6IDMsXHJcbiAgICAgIGRhdGExOiA0LFxyXG4gICAgICBkYXRhMjogNSxcclxuICAgICAgZGF0YTM6IDYsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgLy8gU29tZXRpbWVzIHRoaXMgbGFzdCBmaWVsZCBsb29rcyBsaWtlIGEgcGxheWVyIGlkLlxyXG4gICAgLy8gRm9yIHNhZmV0eSwgYW5vbnltaXplIGFsbCBvZiB0aGUgZ2F1Z2UgZGF0YS5cclxuICAgIGZpcnN0VW5rbm93bkZpZWxkOiAzLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOZXR3b3JrV29ybGQ6IHtcclxuICAgIHR5cGU6ICczMicsXHJcbiAgICBuYW1lOiAnTmV0d29ya1dvcmxkJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdXb3JsZCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgfSxcclxuICAgIGlzVW5rbm93bjogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgQWN0b3JDb250cm9sOiB7XHJcbiAgICB0eXBlOiAnMzMnLFxyXG4gICAgbmFtZTogJ0FjdG9yQ29udHJvbCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnRGlyZWN0b3InLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaW5zdGFuY2U6IDIsXHJcbiAgICAgIGNvbW1hbmQ6IDMsXHJcbiAgICAgIGRhdGEwOiA0LFxyXG4gICAgICBkYXRhMTogNSxcclxuICAgICAgZGF0YTI6IDYsXHJcbiAgICAgIGRhdGEzOiA3LFxyXG4gICAgfSxcclxuICAgIHBvc3NpYmxlUGxheWVySWRzOiBbNCwgNSwgNiwgN10sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnbmV2ZXInLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIE5hbWVUb2dnbGU6IHtcclxuICAgIHR5cGU6ICczNCcsXHJcbiAgICBuYW1lOiAnTmFtZVRvZ2dsZScsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnTmFtZVRvZ2dsZScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogMyxcclxuICAgICAgdGFyZ2V0SWQ6IDQsXHJcbiAgICAgIHRhcmdldE5hbWU6IDUsXHJcbiAgICAgIHRvZ2dsZTogNixcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgICAgNDogNSxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnbmV2ZXInLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIFRldGhlcjoge1xyXG4gICAgdHlwZTogJzM1JyxcclxuICAgIG5hbWU6ICdUZXRoZXInLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1RldGhlcicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBzb3VyY2VJZDogMixcclxuICAgICAgc291cmNlOiAzLFxyXG4gICAgICB0YXJnZXRJZDogNCxcclxuICAgICAgdGFyZ2V0OiA1LFxyXG4gICAgICBpZDogOCxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgICAgNDogNSxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdFVua25vd25GaWVsZDogOSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdhbGwnLFxyXG4gICAgICBjb21iYXRhbnRJZEZpZWxkczogWzIsIDRdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIExpbWl0QnJlYWs6IHtcclxuICAgIHR5cGU6ICczNicsXHJcbiAgICBuYW1lOiAnTGltaXRCcmVhaycsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnTGltaXRCcmVhaycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICB2YWx1ZUhleDogMixcclxuICAgICAgYmFyczogMyxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE5ldHdvcmtFZmZlY3RSZXN1bHQ6IHtcclxuICAgIHR5cGU6ICczNycsXHJcbiAgICBuYW1lOiAnTmV0d29ya0VmZmVjdFJlc3VsdCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnRWZmZWN0UmVzdWx0JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAzLFxyXG4gICAgICBzZXF1ZW5jZUlkOiA0LFxyXG4gICAgICBjdXJyZW50SHA6IDUsXHJcbiAgICAgIG1heEhwOiA2LFxyXG4gICAgICBjdXJyZW50TXA6IDcsXHJcbiAgICAgIG1heE1wOiA4LFxyXG4gICAgICBjdXJyZW50U2hpZWxkOiA5LFxyXG4gICAgICAvLyBGaWVsZCBpbmRleCAxMCBpcyBhbHdheXMgYDBgXHJcbiAgICAgIHg6IDExLFxyXG4gICAgICB5OiAxMixcclxuICAgICAgejogMTMsXHJcbiAgICAgIGhlYWRpbmc6IDE0LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgfSxcclxuICAgIGZpcnN0VW5rbm93bkZpZWxkOiAyMixcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICduZXZlcicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgU3RhdHVzRWZmZWN0OiB7XHJcbiAgICB0eXBlOiAnMzgnLFxyXG4gICAgbmFtZTogJ1N0YXR1c0VmZmVjdCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnU3RhdHVzTGlzdCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICB0YXJnZXRJZDogMixcclxuICAgICAgdGFyZ2V0OiAzLFxyXG4gICAgICBqb2JMZXZlbERhdGE6IDQsXHJcbiAgICAgIGhwOiA1LFxyXG4gICAgICBtYXhIcDogNixcclxuICAgICAgbXA6IDcsXHJcbiAgICAgIG1heE1wOiA4LFxyXG4gICAgICBjdXJyZW50U2hpZWxkOiA5LFxyXG4gICAgICAvLyBGaWVsZCBpbmRleCAxMCBpcyBhbHdheXMgYDBgXHJcbiAgICAgIHg6IDExLFxyXG4gICAgICB5OiAxMixcclxuICAgICAgejogMTMsXHJcbiAgICAgIGhlYWRpbmc6IDE0LFxyXG4gICAgICBkYXRhMDogMTUsXHJcbiAgICAgIGRhdGExOiAxNixcclxuICAgICAgZGF0YTI6IDE3LFxyXG4gICAgICBkYXRhMzogMTgsXHJcbiAgICAgIGRhdGE0OiAxOSxcclxuICAgICAgZGF0YTU6IDIwLFxyXG4gICAgICAvLyBWYXJpYWJsZSBudW1iZXIgb2YgdHJpcGxldHMgaGVyZSwgYnV0IGF0IGxlYXN0IG9uZS5cclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogMyxcclxuICAgIH0sXHJcbiAgICBmaXJzdFVua25vd25GaWVsZDogMTgsXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IDE4LFxyXG4gIH0sXHJcbiAgTmV0d29ya1VwZGF0ZUhQOiB7XHJcbiAgICB0eXBlOiAnMzknLFxyXG4gICAgbmFtZTogJ05ldHdvcmtVcGRhdGVIUCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnVXBkYXRlSHAnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6IDMsXHJcbiAgICAgIGN1cnJlbnRIcDogNCxcclxuICAgICAgbWF4SHA6IDUsXHJcbiAgICAgIGN1cnJlbnRNcDogNixcclxuICAgICAgbWF4TXA6IDcsXHJcbiAgICAgIC8vIGN1cnJlbnRUcDogOCxcclxuICAgICAgLy8gbWF4VHA6IDksXHJcbiAgICAgIHg6IDEwLFxyXG4gICAgICB5OiAxMSxcclxuICAgICAgejogMTIsXHJcbiAgICAgIGhlYWRpbmc6IDEzLFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgTWFwOiB7XHJcbiAgICB0eXBlOiAnNDAnLFxyXG4gICAgbmFtZTogJ01hcCcsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnQ2hhbmdlTWFwJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICByZWdpb25OYW1lOiAzLFxyXG4gICAgICBwbGFjZU5hbWU6IDQsXHJcbiAgICAgIHBsYWNlTmFtZVN1YjogNSxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGxhc3RJbmNsdWRlOiB0cnVlLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdhbGwnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIFN5c3RlbUxvZ01lc3NhZ2U6IHtcclxuICAgIHR5cGU6ICc0MScsXHJcbiAgICBuYW1lOiAnU3lzdGVtTG9nTWVzc2FnZScsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnU3lzdGVtTG9nTWVzc2FnZScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpbnN0YW5jZTogMixcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIHBhcmFtMDogNCxcclxuICAgICAgcGFyYW0xOiA1LFxyXG4gICAgICBwYXJhbTI6IDYsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ2FsbCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgU3RhdHVzTGlzdDM6IHtcclxuICAgIHR5cGU6ICc0MicsXHJcbiAgICBuYW1lOiAnU3RhdHVzTGlzdDMnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1N0YXR1c0xpc3QzJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiAzLFxyXG4gICAgICAvLyB0cmlwbGV0cyBvZiBmaWVsZHMgZnJvbSBoZXJlIChlZmZlY3RJZCwgZGF0YSwgcGxheWVySWQpP1xyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiAzLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogNCxcclxuICAgIGZpcnN0VW5rbm93bkZpZWxkOiA0LFxyXG4gIH0sXHJcbiAgUGFyc2VySW5mbzoge1xyXG4gICAgdHlwZTogJzI0OScsXHJcbiAgICBuYW1lOiAnUGFyc2VySW5mbycsXHJcbiAgICBzb3VyY2U6ICdGRlhJVl9BQ1RfUGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnU2V0dGluZ3MnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgIH0sXHJcbiAgICBnbG9iYWxJbmNsdWRlOiB0cnVlLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBQcm9jZXNzSW5mbzoge1xyXG4gICAgdHlwZTogJzI1MCcsXHJcbiAgICBuYW1lOiAnUHJvY2Vzc0luZm8nLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1Byb2Nlc3MnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgIH0sXHJcbiAgICBnbG9iYWxJbmNsdWRlOiB0cnVlLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBEZWJ1Zzoge1xyXG4gICAgdHlwZTogJzI1MScsXHJcbiAgICBuYW1lOiAnRGVidWcnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ0RlYnVnJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICB9LFxyXG4gICAgZ2xvYmFsSW5jbHVkZTogdHJ1ZSxcclxuICAgIGNhbkFub255bWl6ZTogZmFsc2UsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIFBhY2tldER1bXA6IHtcclxuICAgIHR5cGU6ICcyNTInLFxyXG4gICAgbmFtZTogJ1BhY2tldER1bXAnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ1BhY2tldER1bXAnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IGZhbHNlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBWZXJzaW9uOiB7XHJcbiAgICB0eXBlOiAnMjUzJyxcclxuICAgIG5hbWU6ICdWZXJzaW9uJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdWZXJzaW9uJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICB9LFxyXG4gICAgZ2xvYmFsSW5jbHVkZTogdHJ1ZSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgRXJyb3I6IHtcclxuICAgIHR5cGU6ICcyNTQnLFxyXG4gICAgbmFtZTogJ0Vycm9yJyxcclxuICAgIHNvdXJjZTogJ0ZGWElWX0FDVF9QbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICdFcnJvcicsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogZmFsc2UsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIE5vbmU6IHtcclxuICAgIHR5cGU6ICdbMC05XSsnLFxyXG4gICAgbmFtZTogJ05vbmUnLFxyXG4gICAgc291cmNlOiAnRkZYSVZfQUNUX1BsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJ05vbmUnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgIH0sXHJcbiAgICBpc1Vua25vd246IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnbmV2ZXInLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIE92ZXJsYXlQbHVnaW4gbG9nIGxpbmVzXHJcbiAgTGluZVJlZ2lzdHJhdGlvbjoge1xyXG4gICAgdHlwZTogJzI1NicsXHJcbiAgICBuYW1lOiAnTGluZVJlZ2lzdHJhdGlvbicsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjU2JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBzb3VyY2U6IDMsXHJcbiAgICAgIG5hbWU6IDQsXHJcbiAgICAgIHZlcnNpb246IDUsXHJcbiAgICB9LFxyXG4gICAgZ2xvYmFsSW5jbHVkZTogdHJ1ZSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gIH0sXHJcbiAgTWFwRWZmZWN0OiB7XHJcbiAgICB0eXBlOiAnMjU3JyxcclxuICAgIG5hbWU6ICdNYXBFZmZlY3QnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI1NycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpbnN0YW5jZTogMixcclxuICAgICAgZmxhZ3M6IDMsXHJcbiAgICAgIC8vIHZhbHVlcyBmb3IgdGhlIGxvY2F0aW9uIGZpZWxkIHNlZW0gdG8gdmFyeSBiZXR3ZWVuIGluc3RhbmNlc1xyXG4gICAgICAvLyAoZS5nLiBhIGxvY2F0aW9uIG9mICcwOCcgaW4gUDVTIGRvZXMgbm90IGFwcGVhciB0byBiZSB0aGUgc2FtZSBsb2NhdGlvbiBpbiBQNVMgYXMgaW4gUDZTKVxyXG4gICAgICAvLyBidXQgdGhpcyBmaWVsZCBkb2VzIGFwcGVhciB0byBjb25zaXN0ZW50bHkgY29udGFpbiBwb3NpdGlvbiBpbmZvIGZvciB0aGUgZWZmZWN0IHJlbmRlcmluZ1xyXG4gICAgICBsb2NhdGlvbjogNCxcclxuICAgICAgZGF0YTA6IDUsXHJcbiAgICAgIGRhdGExOiA2LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdhbGwnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIEZhdGVEaXJlY3Rvcjoge1xyXG4gICAgdHlwZTogJzI1OCcsXHJcbiAgICBuYW1lOiAnRmF0ZURpcmVjdG9yJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNTgnLFxyXG4gICAgLy8gZmF0ZUlkIGFuZCBwcm9ncmVzcyBhcmUgaW4gaGV4LlxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgY2F0ZWdvcnk6IDIsXHJcbiAgICAgIC8vIHBhZGRpbmcwOiAzLFxyXG4gICAgICBmYXRlSWQ6IDQsXHJcbiAgICAgIHByb2dyZXNzOiA1LFxyXG4gICAgICAvLyBwYXJhbTM6IDYsXHJcbiAgICAgIC8vIHBhcmFtNDogNyxcclxuICAgICAgLy8gcGFyYW01OiA4LFxyXG4gICAgICAvLyBwYXJhbTY6IDksXHJcbiAgICAgIC8vIHBhZGRpbmcxOiAxMCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIENFRGlyZWN0b3I6IHtcclxuICAgIHR5cGU6ICcyNTknLFxyXG4gICAgbmFtZTogJ0NFRGlyZWN0b3InLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI1OScsXHJcbiAgICAvLyBhbGwgZmllbGRzIGFyZSBpbiBoZXhcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHBvcFRpbWU6IDIsXHJcbiAgICAgIHRpbWVSZW1haW5pbmc6IDMsXHJcbiAgICAgIC8vIHVua25vd24wOiA0LFxyXG4gICAgICBjZUtleTogNSxcclxuICAgICAgbnVtUGxheWVyczogNixcclxuICAgICAgc3RhdHVzOiA3LFxyXG4gICAgICAvLyB1bmtub3duMTogOCxcclxuICAgICAgcHJvZ3Jlc3M6IDksXHJcbiAgICAgIC8vIHVua25vd24yOiAxMCxcclxuICAgICAgLy8gdW5rbm93bjM6IDExLFxyXG4gICAgICAvLyB1bmtub3duNDogMTIsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBJbkNvbWJhdDoge1xyXG4gICAgdHlwZTogJzI2MCcsXHJcbiAgICBuYW1lOiAnSW5Db21iYXQnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2MCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpbkFDVENvbWJhdDogMixcclxuICAgICAgaW5HYW1lQ29tYmF0OiAzLFxyXG4gICAgICBpc0FDVENoYW5nZWQ6IDQsXHJcbiAgICAgIGlzR2FtZUNoYW5nZWQ6IDUsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ2FsbCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgQ29tYmF0YW50TWVtb3J5OiB7XHJcbiAgICB0eXBlOiAnMjYxJyxcclxuICAgIG5hbWU6ICdDb21iYXRhbnRNZW1vcnknLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2MScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBjaGFuZ2U6IDIsXHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICAvLyBmcm9tIGhlcmUsIHBhaXJzIG9mIGZpZWxkIG5hbWUvdmFsdWVzXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiA1LFxyXG4gICAgLy8gZG9lc24ndCB1c2UgYHBsYXllcklkc2AsIGFzIHRoZSBgaWRgIGZpZWxkIG11c3QgYmUgaGFuZGxlZCB3aXRoIHRoZSAnTmFtZScgcmVwZWF0aW5nIGZpZWxkXHJcbiAgICByZXBlYXRpbmdGaWVsZHM6IHtcclxuICAgICAgc3RhcnRpbmdJbmRleDogNCxcclxuICAgICAgbGFiZWw6ICdwYWlyJyxcclxuICAgICAgbmFtZXM6IFsna2V5JywgJ3ZhbHVlJ10sXHJcbiAgICAgIHNvcnRLZXlzOiB0cnVlLFxyXG4gICAgICBwcmltYXJ5S2V5OiAna2V5JyxcclxuICAgICAgcG9zc2libGVLZXlzOiBjb21iYXRhbnRNZW1vcnlLZXlzLFxyXG4gICAgICBrZXlzVG9Bbm9ueW1pemU6IHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGUtcHJvcHNcclxuICAgICAgICAzOiAnTmFtZScsIC8vICdJRCcgcmVwZWF0aW5nIGZpZWxkIG5vdCB1c2VkPyBuZWVkIHRvIHVzZSBub24tcmVwZWF0aW5nIGBpZGAgKDMpIGZpZWxkXHJcbiAgICAgICAgJ093bmVySUQnOiBudWxsLFxyXG4gICAgICAgICdUYXJnZXRJRCc6IG51bGwsXHJcbiAgICAgICAgJ1BDVGFyZ2V0SUQnOiBudWxsLFxyXG4gICAgICAgICdOUENUYXJnZXRJRCc6IG51bGwsXHJcbiAgICAgICAgJ0Nhc3RUYXJnZXRJRCc6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdmaWx0ZXInLFxyXG4gICAgICAvLyBUT0RPOiBUaGlzIGlzIGFuIGluaXRpYWwgYXR0ZW1wdCB0byBjYXB0dXJlIGZpZWxkIGNoYW5nZXMgdGhhdCBhcmUgcmVsZXZhbnQgdG8gYW5hbHlzaXMsXHJcbiAgICAgIC8vIGJ1dCB0aGlzIHdpbGwgbGlrZWx5IG5lZWQgdG8gYmUgcmVmaW5lZCBvdmVyIHRpbWVcclxuICAgICAgZmlsdGVyczogW1xyXG4gICAgICAgIHsgLy8gVE9ETzogTW9kZWxTdGF0dXMgY2FuIGJlIGEgbGl0dGxlIHNwYW1teS4gU2hvdWxkIHRyeSB0byByZWZpbmUgdGhpcyBmdXJ0aGVyLlxyXG4gICAgICAgICAgaWQ6ICc0Lns3fScsXHJcbiAgICAgICAgICBjaGFuZ2U6ICdDaGFuZ2UnLFxyXG4gICAgICAgICAgcGFpcjogW3sga2V5OiAnTW9kZWxTdGF0dXMnLCB2YWx1ZTogJy4qJyB9XSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnNC57N30nLFxyXG4gICAgICAgICAgY2hhbmdlOiAnQ2hhbmdlJyxcclxuICAgICAgICAgIHBhaXI6IFt7IGtleTogJ1dlYXBvbklkJywgdmFsdWU6ICcuKicgfV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzQuezd9JyxcclxuICAgICAgICAgIGNoYW5nZTogJ0NoYW5nZScsXHJcbiAgICAgICAgICBwYWlyOiBbeyBrZXk6ICdUcmFuc2Zvcm1hdGlvbklkJywgdmFsdWU6ICcuKicgfV0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgY29tYmF0YW50SWRGaWVsZHM6IDMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgUlNWRGF0YToge1xyXG4gICAgdHlwZTogJzI2MicsXHJcbiAgICBuYW1lOiAnUlNWRGF0YScsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjYyJyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGxvY2FsZTogMixcclxuICAgICAgLy8gdW5rbm93bjA6IDMsXHJcbiAgICAgIGtleTogNCxcclxuICAgICAgdmFsdWU6IDUsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgLy8gUlNWIHN1YnN0aXR1dGlvbnMgYXJlIHBlcmZvcm1lZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZSBmaWx0ZXJcclxuICAgICAgaW5jbHVkZTogJ25ldmVyJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBTdGFydHNVc2luZ0V4dHJhOiB7XHJcbiAgICB0eXBlOiAnMjYzJyxcclxuICAgIG5hbWU6ICdTdGFydHNVc2luZ0V4dHJhJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNjMnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgc291cmNlSWQ6IDIsXHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICB4OiA0LFxyXG4gICAgICB5OiA1LFxyXG4gICAgICB6OiA2LFxyXG4gICAgICBoZWFkaW5nOiA3LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiBudWxsLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdmaWx0ZXInLFxyXG4gICAgICBmaWx0ZXJzOiB7IHNvdXJjZUlkOiAnNC57N30nIH0sIC8vIE5QQyBjYXN0cyBvbmx5XHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiAyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIEFiaWxpdHlFeHRyYToge1xyXG4gICAgdHlwZTogJzI2NCcsXHJcbiAgICBuYW1lOiAnQWJpbGl0eUV4dHJhJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNjQnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgc291cmNlSWQ6IDIsXHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBnbG9iYWxFZmZlY3RDb3VudGVyOiA0LFxyXG4gICAgICBkYXRhRmxhZzogNSxcclxuICAgICAgeDogNixcclxuICAgICAgeTogNyxcclxuICAgICAgejogOCxcclxuICAgICAgaGVhZGluZzogOSxcclxuICAgIH0sXHJcbiAgICBibGFua0ZpZWxkczogWzZdLFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBDb250ZW50RmluZGVyU2V0dGluZ3M6IHtcclxuICAgIHR5cGU6ICcyNjUnLFxyXG4gICAgbmFtZTogJ0NvbnRlbnRGaW5kZXJTZXR0aW5ncycsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjY1JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIHpvbmVJZDogMixcclxuICAgICAgem9uZU5hbWU6IDMsXHJcbiAgICAgIGluQ29udGVudEZpbmRlckNvbnRlbnQ6IDQsXHJcbiAgICAgIHVucmVzdHJpY3RlZFBhcnR5OiA1LFxyXG4gICAgICBtaW5pbWFsSXRlbUxldmVsOiA2LFxyXG4gICAgICBzaWxlbmNlRWNobzogNyxcclxuICAgICAgZXhwbG9yZXJNb2RlOiA4LFxyXG4gICAgICBsZXZlbFN5bmM6IDksXHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBOcGNZZWxsOiB7XHJcbiAgICB0eXBlOiAnMjY2JyxcclxuICAgIG5hbWU6ICdOcGNZZWxsJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNjYnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgbnBjSWQ6IDIsXHJcbiAgICAgIG5wY05hbWVJZDogMyxcclxuICAgICAgbnBjWWVsbElkOiA0LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdhbGwnLFxyXG4gICAgICBjb21iYXRhbnRJZEZpZWxkczogMixcclxuICAgIH0sXHJcbiAgfSxcclxuICBCYXR0bGVUYWxrMjoge1xyXG4gICAgdHlwZTogJzI2NycsXHJcbiAgICBuYW1lOiAnQmF0dGxlVGFsazInLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2NycsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBucGNJZDogMixcclxuICAgICAgaW5zdGFuY2U6IDMsXHJcbiAgICAgIG5wY05hbWVJZDogNCxcclxuICAgICAgaW5zdGFuY2VDb250ZW50VGV4dElkOiA1LFxyXG4gICAgICBkaXNwbGF5TXM6IDYsXHJcbiAgICAgIC8vIHVua25vd24xOiA3LFxyXG4gICAgICAvLyB1bmtub3duMjogOCxcclxuICAgICAgLy8gdW5rbm93bjM6IDksXHJcbiAgICAgIC8vIHVua25vd240OiAxMCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnYWxsJyxcclxuICAgICAgY29tYmF0YW50SWRGaWVsZHM6IDIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgQ291bnRkb3duOiB7XHJcbiAgICB0eXBlOiAnMjY4JyxcclxuICAgIG5hbWU6ICdDb3VudGRvd24nLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2OCcsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgd29ybGRJZDogMyxcclxuICAgICAgY291bnRkb3duVGltZTogNCxcclxuICAgICAgcmVzdWx0OiA1LFxyXG4gICAgICBuYW1lOiA2LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiA2LFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICduZXZlcicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgQ291bnRkb3duQ2FuY2VsOiB7XHJcbiAgICB0eXBlOiAnMjY5JyxcclxuICAgIG5hbWU6ICdDb3VudGRvd25DYW5jZWwnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI2OScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgd29ybGRJZDogMyxcclxuICAgICAgbmFtZTogNCxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogNCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICBpbmNsdWRlOiAnbmV2ZXInLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIEFjdG9yTW92ZToge1xyXG4gICAgdHlwZTogJzI3MCcsXHJcbiAgICBuYW1lOiAnQWN0b3JNb3ZlJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNzAnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGhlYWRpbmc6IDMsIC8vIE9QIGNhbGxzIHRoaXMgJ3JvdGF0aW9uJywgYnV0IGNhY3Rib3QgY29uc2lzdGVudGx5IHVzZXMgJ2hlYWRpbmcnXHJcbiAgICAgIC8vIHVua25vd24xOiA0LFxyXG4gICAgICAvLyB1bmtub3duMjogNSxcclxuICAgICAgeDogNixcclxuICAgICAgeTogNyxcclxuICAgICAgejogOCxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogbnVsbCxcclxuICAgIH0sXHJcbiAgICBjYW5Bbm9ueW1pemU6IHRydWUsXHJcbiAgICBmaXJzdE9wdGlvbmFsRmllbGQ6IHVuZGVmaW5lZCxcclxuICAgIGFuYWx5c2lzT3B0aW9uczoge1xyXG4gICAgICAvLyBubyByZWFsIHdheSB0byBmaWx0ZXIgbm9pc2UsIGV2ZW4gaWYgKGluZnJlcXVlbnRseSkgdXNlZCBmb3IgdHJpZ2dlcnNcclxuICAgICAgaW5jbHVkZTogJ25ldmVyJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBBY3RvclNldFBvczoge1xyXG4gICAgdHlwZTogJzI3MScsXHJcbiAgICBuYW1lOiAnQWN0b3JTZXRQb3MnLFxyXG4gICAgc291cmNlOiAnT3ZlcmxheVBsdWdpbicsXHJcbiAgICBtZXNzYWdlVHlwZTogJzI3MScsXHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogMCxcclxuICAgICAgdGltZXN0YW1wOiAxLFxyXG4gICAgICBpZDogMixcclxuICAgICAgaGVhZGluZzogMywgLy8gT1AgY2FsbHMgdGhpcyAncm90YXRpb24nLCBidXQgY2FjdGJvdCBjb25zaXN0ZW50bHkgdXNlcyAnaGVhZGluZydcclxuICAgICAgLy8gdW5rbm93bjE6IDQsXHJcbiAgICAgIC8vIHVua25vd24yOiA1LFxyXG4gICAgICB4OiA2LFxyXG4gICAgICB5OiA3LFxyXG4gICAgICB6OiA4LFxyXG4gICAgfSxcclxuICAgIHBsYXllcklkczoge1xyXG4gICAgICAyOiBudWxsLFxyXG4gICAgfSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdmaWx0ZXInLFxyXG4gICAgICBmaWx0ZXJzOiB7IGlkOiAnNC57N30nIH0sIC8vIE5QQ3Mgb25seVxyXG4gICAgICBjb21iYXRhbnRJZEZpZWxkczogMixcclxuICAgIH0sXHJcbiAgfSxcclxuICBTcGF3bk5wY0V4dHJhOiB7XHJcbiAgICB0eXBlOiAnMjcyJyxcclxuICAgIG5hbWU6ICdTcGF3bk5wY0V4dHJhJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNzInLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHBhcmVudElkOiAzLFxyXG4gICAgICB0ZXRoZXJJZDogNCxcclxuICAgICAgYW5pbWF0aW9uU3RhdGU6IDUsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDM6IG51bGwsIC8vIGBpZGAgaXMgYW4gbnBjLCBidXQgcGFyZW50SWQgY291bGQgYmUgYSB0ZXRoZXJlZCBwbGF5ZXI/XHJcbiAgICB9LFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ2FsbCcsXHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiBbMiwgM10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgQWN0b3JDb250cm9sRXh0cmE6IHtcclxuICAgIHR5cGU6ICcyNzMnLFxyXG4gICAgbmFtZTogJ0FjdG9yQ29udHJvbEV4dHJhJyxcclxuICAgIHNvdXJjZTogJ092ZXJsYXlQbHVnaW4nLFxyXG4gICAgbWVzc2FnZVR5cGU6ICcyNzMnLFxyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIHR5cGU6IDAsXHJcbiAgICAgIHRpbWVzdGFtcDogMSxcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIGNhdGVnb3J5OiAzLFxyXG4gICAgICBwYXJhbTE6IDQsXHJcbiAgICAgIHBhcmFtMjogNSxcclxuICAgICAgcGFyYW0zOiA2LFxyXG4gICAgICBwYXJhbTQ6IDcsXHJcbiAgICB9LFxyXG4gICAgcGxheWVySWRzOiB7XHJcbiAgICAgIDI6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgcG9zc2libGVQbGF5ZXJJZHM6IFs0LCA1LCA2LCA3XSxcclxuICAgIGNhbkFub255bWl6ZTogdHJ1ZSxcclxuICAgIGZpcnN0T3B0aW9uYWxGaWVsZDogdW5kZWZpbmVkLFxyXG4gICAgYW5hbHlzaXNPcHRpb25zOiB7XHJcbiAgICAgIGluY2x1ZGU6ICdhbGwnLFxyXG4gICAgICBjb21iYXRhbnRJZEZpZWxkczogMixcclxuICAgIH0sXHJcbiAgfSxcclxuICBBY3RvckNvbnRyb2xTZWxmRXh0cmE6IHtcclxuICAgIHR5cGU6ICcyNzQnLFxyXG4gICAgbmFtZTogJ0FjdG9yQ29udHJvbFNlbGZFeHRyYScsXHJcbiAgICBzb3VyY2U6ICdPdmVybGF5UGx1Z2luJyxcclxuICAgIG1lc3NhZ2VUeXBlOiAnMjc0JyxcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICB0aW1lc3RhbXA6IDEsXHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBjYXRlZ29yeTogMyxcclxuICAgICAgcGFyYW0xOiA0LFxyXG4gICAgICBwYXJhbTI6IDUsXHJcbiAgICAgIHBhcmFtMzogNixcclxuICAgICAgcGFyYW00OiA3LFxyXG4gICAgICBwYXJhbTU6IDgsXHJcbiAgICAgIHBhcmFtNjogOSxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXJJZHM6IHtcclxuICAgICAgMjogbnVsbCxcclxuICAgIH0sXHJcbiAgICBwb3NzaWJsZVBsYXllcklkczogWzQsIDUsIDYsIDcsIDgsIDldLFxyXG4gICAgY2FuQW5vbnltaXplOiB0cnVlLFxyXG4gICAgZmlyc3RPcHRpb25hbEZpZWxkOiB1bmRlZmluZWQsXHJcbiAgICBhbmFseXNpc09wdGlvbnM6IHtcclxuICAgICAgaW5jbHVkZTogJ2FsbCcsXHJcbiAgICAgIGNvbWJhdGFudElkRmllbGRzOiAyLFxyXG4gICAgfSxcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ0RlZmluaXRpb25zVmVyc2lvbnMgPSB7XHJcbiAgJ2xhdGVzdCc6IGxhdGVzdExvZ0RlZmluaXRpb25zLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gVmVyaWZ5IHRoYXQgdGhpcyBoYXMgdGhlIHJpZ2h0IHR5cGUsIGJ1dCBleHBvcnQgYGFzIGNvbnN0YC5cclxuY29uc3QgYXNzZXJ0TG9nRGVmaW5pdGlvbnM6IExvZ0RlZmluaXRpb25NYXAgPSBsYXRlc3RMb2dEZWZpbml0aW9ucztcclxuY29uc29sZS5hc3NlcnQoYXNzZXJ0TG9nRGVmaW5pdGlvbnMpO1xyXG5cclxuZXhwb3J0IHR5cGUgTG9nRGVmaW5pdGlvbnMgPSB0eXBlb2YgbGF0ZXN0TG9nRGVmaW5pdGlvbnM7XHJcbmV4cG9ydCB0eXBlIExvZ0RlZmluaXRpb25OYW1lID0ga2V5b2YgTG9nRGVmaW5pdGlvbnM7XHJcbmV4cG9ydCB0eXBlIExvZ0RlZmluaXRpb25UeXBlID0gTG9nRGVmaW5pdGlvbnNbTG9nRGVmaW5pdGlvbk5hbWVdWyd0eXBlJ107XHJcbmV4cG9ydCB0eXBlIExvZ0RlZmluaXRpb25NYXAgPSB7IFtLIGluIExvZ0RlZmluaXRpb25OYW1lXTogTG9nRGVmaW5pdGlvbjxLPiB9O1xyXG5leHBvcnQgdHlwZSBMb2dEZWZpbml0aW9uVmVyc2lvbnMgPSBrZXlvZiB0eXBlb2YgbG9nRGVmaW5pdGlvbnNWZXJzaW9ucztcclxuXHJcbnR5cGUgUmVwZWF0aW5nRmllbGRzTmFycm93aW5nVHlwZSA9IHsgcmVhZG9ubHkgcmVwZWF0aW5nRmllbGRzOiB1bmtub3duIH07XHJcblxyXG5leHBvcnQgdHlwZSBSZXBlYXRpbmdGaWVsZHNUeXBlcyA9IGtleW9mIHtcclxuICBbXHJcbiAgICB0eXBlIGluIExvZ0RlZmluaXRpb25OYW1lIGFzIExvZ0RlZmluaXRpb25zW3R5cGVdIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzTmFycm93aW5nVHlwZSA/IHR5cGVcclxuICAgICAgOiBuZXZlclxyXG4gIF06IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBSZXBlYXRpbmdGaWVsZHNEZWZpbml0aW9ucyA9IHtcclxuICBbdHlwZSBpbiBSZXBlYXRpbmdGaWVsZHNUeXBlc106IExvZ0RlZmluaXRpb25zW3R5cGVdICYge1xyXG4gICAgcmVhZG9ubHkgcmVwZWF0aW5nRmllbGRzOiBFeGNsdWRlPExvZ0RlZmluaXRpb25zW3R5cGVdWydyZXBlYXRpbmdGaWVsZHMnXSwgdW5kZWZpbmVkPjtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgUGFyc2VIZWxwZXJGaWVsZDxcclxuICBUeXBlIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWUsXHJcbiAgRmllbGRzIGV4dGVuZHMgTmV0RmllbGRzUmV2ZXJzZVtUeXBlXSxcclxuICBGaWVsZCBleHRlbmRzIGtleW9mIEZpZWxkcyxcclxuPiA9IHtcclxuICBmaWVsZDogRmllbGRzW0ZpZWxkXSBleHRlbmRzIHN0cmluZyA/IEZpZWxkc1tGaWVsZF0gOiBuZXZlcjtcclxuICB2YWx1ZT86IHN0cmluZztcclxuICBvcHRpb25hbD86IGJvb2xlYW47XHJcbiAgcmVwZWF0aW5nPzogYm9vbGVhbjtcclxuICByZXBlYXRpbmdLZXlzPzogc3RyaW5nW107XHJcbiAgc29ydEtleXM/OiBib29sZWFuO1xyXG4gIHByaW1hcnlLZXk/OiBzdHJpbmc7XHJcbiAgcG9zc2libGVLZXlzPzogc3RyaW5nW107XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBQYXJzZUhlbHBlckZpZWxkczxUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWU+ID0ge1xyXG4gIFtmaWVsZCBpbiBrZXlvZiBOZXRGaWVsZHNSZXZlcnNlW1RdXTogUGFyc2VIZWxwZXJGaWVsZDxULCBOZXRGaWVsZHNSZXZlcnNlW1RdLCBmaWVsZD47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dEZWZpbml0aW9uc1ZlcnNpb25zWydsYXRlc3QnXTtcclxuIiwiLy8gSGVscGVyIEVycm9yIGZvciBUeXBlU2NyaXB0IHNpdHVhdGlvbnMgd2hlcmUgdGhlIHByb2dyYW1tZXIgdGhpbmtzIHRoZXlcclxuLy8ga25vdyBiZXR0ZXIgdGhhbiBUeXBlU2NyaXB0IHRoYXQgc29tZSBzaXR1YXRpb24gd2lsbCBuZXZlciBvY2N1ci5cclxuXHJcbi8vIFRoZSBpbnRlbnRpb24gaGVyZSBpcyB0aGF0IHRoZSBwcm9ncmFtbWVyIGRvZXMgbm90IGV4cGVjdCBhIHBhcnRpY3VsYXJcclxuLy8gYml0IG9mIGNvZGUgdG8gaGFwcGVuLCBhbmQgc28gaGFzIG5vdCB3cml0dGVuIGNhcmVmdWwgZXJyb3IgaGFuZGxpbmcuXHJcbi8vIElmIGl0IGRvZXMgb2NjdXIsIGF0IGxlYXN0IHRoZXJlIHdpbGwgYmUgYW4gZXJyb3IgYW5kIHdlIGNhbiBmaWd1cmUgb3V0IHdoeS5cclxuLy8gVGhpcyBpcyBwcmVmZXJhYmxlIHRvIGNhc3Rpbmcgb3IgZGlzYWJsaW5nIFR5cGVTY3JpcHQgYWx0b2dldGhlciBpbiBvcmRlciB0b1xyXG4vLyBhdm9pZCBzeW50YXggZXJyb3JzLlxyXG5cclxuLy8gT25lIGNvbW1vbiBleGFtcGxlIGlzIGEgcmVnZXgsIHdoZXJlIGlmIHRoZSByZWdleCBtYXRjaGVzIHRoZW4gYWxsIG9mIHRoZVxyXG4vLyAobm9uLW9wdGlvbmFsKSByZWdleCBncm91cHMgd2lsbCBhbHNvIGJlIHZhbGlkLCBidXQgVHlwZVNjcmlwdCBkb2Vzbid0IGtub3cuXHJcbmV4cG9ydCBjbGFzcyBVbnJlYWNoYWJsZUNvZGUgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcignVGhpcyBjb2RlIHNob3VsZG5cXCd0IGJlIHJlYWNoZWQnKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmV0RmllbGRzLCBOZXRGaWVsZHNSZXZlcnNlIH0gZnJvbSAnLi4vdHlwZXMvbmV0X2ZpZWxkcyc7XHJcbmltcG9ydCB7IE5ldFBhcmFtcyB9IGZyb20gJy4uL3R5cGVzL25ldF9wcm9wcyc7XHJcbmltcG9ydCB7IENhY3Rib3RCYXNlUmVnRXhwIH0gZnJvbSAnLi4vdHlwZXMvbmV0X3RyaWdnZXInO1xyXG5cclxuaW1wb3J0IGxvZ0RlZmluaXRpb25zLCB7XHJcbiAgTG9nRGVmaW5pdGlvbk5hbWUsXHJcbiAgbG9nRGVmaW5pdGlvbnNWZXJzaW9ucyxcclxuICBMb2dEZWZpbml0aW9uVmVyc2lvbnMsXHJcbiAgUGFyc2VIZWxwZXJGaWVsZHMsXHJcbiAgUmVwZWF0aW5nRmllbGRzRGVmaW5pdGlvbnMsXHJcbiAgUmVwZWF0aW5nRmllbGRzVHlwZXMsXHJcbn0gZnJvbSAnLi9uZXRsb2dfZGVmcyc7XHJcbmltcG9ydCB7IFVucmVhY2hhYmxlQ29kZSB9IGZyb20gJy4vbm90X3JlYWNoZWQnO1xyXG5cclxuY29uc3Qgc2VwYXJhdG9yID0gJzonO1xyXG5jb25zdCBtYXRjaERlZmF1bHQgPSAnW146XSonO1xyXG5jb25zdCBtYXRjaFdpdGhDb2xvbnNEZWZhdWx0ID0gJyg/OlteOl18OiApKj8nO1xyXG5jb25zdCBmaWVsZHNXaXRoUG90ZW50aWFsQ29sb25zID0gWydlZmZlY3QnLCAnYWJpbGl0eSddO1xyXG5cclxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IDxcclxuICBUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWUsXHJcbiAgViBleHRlbmRzIExvZ0RlZmluaXRpb25WZXJzaW9ucyxcclxuPih0eXBlOiBULCB2ZXJzaW9uOiBWLCBpbmNsdWRlPzogc3RyaW5nW10pOiBQYXJ0aWFsPFBhcnNlSGVscGVyRmllbGRzPFQ+PiA9PiB7XHJcbiAgY29uc3QgbG9nVHlwZSA9IGxvZ0RlZmluaXRpb25zVmVyc2lvbnNbdmVyc2lvbl1bdHlwZV07XHJcbiAgaWYgKGluY2x1ZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgaW5jbHVkZSA9IE9iamVjdC5rZXlzKGxvZ1R5cGUuZmllbGRzKTtcclxuICAgIGlmICgncmVwZWF0aW5nRmllbGRzJyBpbiBsb2dUeXBlKSB7XHJcbiAgICAgIGluY2x1ZGUucHVzaChsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5sYWJlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJhbXM6IHtcclxuICAgIFtpbmRleDogbnVtYmVyXToge1xyXG4gICAgICBmaWVsZDogc3RyaW5nO1xyXG4gICAgICB2YWx1ZT86IHN0cmluZztcclxuICAgICAgb3B0aW9uYWw6IGJvb2xlYW47XHJcbiAgICAgIHJlcGVhdGluZz86IGJvb2xlYW47XHJcbiAgICAgIHJlcGVhdGluZ0tleXM/OiBzdHJpbmdbXTtcclxuICAgICAgc29ydEtleXM/OiBib29sZWFuO1xyXG4gICAgICBwcmltYXJ5S2V5Pzogc3RyaW5nO1xyXG4gICAgICBwb3NzaWJsZUtleXM/OiBzdHJpbmdbXTtcclxuICAgIH07XHJcbiAgfSA9IHt9O1xyXG4gIGNvbnN0IGZpcnN0T3B0aW9uYWxGaWVsZCA9IGxvZ1R5cGUuZmlyc3RPcHRpb25hbEZpZWxkO1xyXG5cclxuICBmb3IgKGNvbnN0IFtwcm9wLCBpbmRleF0gb2YgT2JqZWN0LmVudHJpZXMobG9nVHlwZS5maWVsZHMpKSB7XHJcbiAgICBpZiAoIWluY2x1ZGUuaW5jbHVkZXMocHJvcCkpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgY29uc3QgcGFyYW06IHsgZmllbGQ6IHN0cmluZzsgdmFsdWU/OiBzdHJpbmc7IG9wdGlvbmFsOiBib29sZWFuOyByZXBlYXRpbmc/OiBib29sZWFuIH0gPSB7XHJcbiAgICAgIGZpZWxkOiBwcm9wLFxyXG4gICAgICBvcHRpb25hbDogZmlyc3RPcHRpb25hbEZpZWxkICE9PSB1bmRlZmluZWQgJiYgaW5kZXggPj0gZmlyc3RPcHRpb25hbEZpZWxkLFxyXG4gICAgfTtcclxuICAgIGlmIChwcm9wID09PSAndHlwZScpXHJcbiAgICAgIHBhcmFtLnZhbHVlID0gbG9nVHlwZS50eXBlO1xyXG5cclxuICAgIHBhcmFtc1tpbmRleF0gPSBwYXJhbTtcclxuICB9XHJcblxyXG4gIGlmICgncmVwZWF0aW5nRmllbGRzJyBpbiBsb2dUeXBlICYmIGluY2x1ZGUuaW5jbHVkZXMobG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMubGFiZWwpKSB7XHJcbiAgICBwYXJhbXNbbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMuc3RhcnRpbmdJbmRleF0gPSB7XHJcbiAgICAgIGZpZWxkOiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5sYWJlbCxcclxuICAgICAgb3B0aW9uYWw6IGZpcnN0T3B0aW9uYWxGaWVsZCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMuc3RhcnRpbmdJbmRleCA+PSBmaXJzdE9wdGlvbmFsRmllbGQsXHJcbiAgICAgIHJlcGVhdGluZzogdHJ1ZSxcclxuICAgICAgcmVwZWF0aW5nS2V5czogWy4uLmxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLm5hbWVzXSxcclxuICAgICAgc29ydEtleXM6IGxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLnNvcnRLZXlzLFxyXG4gICAgICBwcmltYXJ5S2V5OiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5wcmltYXJ5S2V5LFxyXG4gICAgICBwb3NzaWJsZUtleXM6IFsuLi5sb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5wb3NzaWJsZUtleXNdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJhbXMgYXMgUGFydGlhbDxQYXJzZUhlbHBlckZpZWxkczxUPj47XHJcbn07XHJcblxyXG50eXBlIFJlcGVhdGluZ0ZpZWxkc01hcDxcclxuICBUQmFzZSBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lLFxyXG4gIFRLZXkgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA9IFRCYXNlIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPyBUQmFzZSA6IG5ldmVyLFxyXG4+ID0ge1xyXG4gIFtuYW1lIGluIFJlcGVhdGluZ0ZpZWxkc0RlZmluaXRpb25zW1RLZXldWydyZXBlYXRpbmdGaWVsZHMnXVsnbmFtZXMnXVtudW1iZXJdXTpcclxuICAgIHwgc3RyaW5nXHJcbiAgICB8IHN0cmluZ1tdO1xyXG59W107XHJcblxyXG50eXBlIFJlcGVhdGluZ0ZpZWxkc01hcFR5cGVDaGVjazxcclxuICBUQmFzZSBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lLFxyXG4gIEYgZXh0ZW5kcyBrZXlvZiBOZXRGaWVsZHNbVEJhc2VdLFxyXG4gIFRLZXkgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA9IFRCYXNlIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPyBUQmFzZSA6IG5ldmVyLFxyXG4+ID0gRiBleHRlbmRzIFJlcGVhdGluZ0ZpZWxkc0RlZmluaXRpb25zW1RLZXldWydyZXBlYXRpbmdGaWVsZHMnXVsnbGFiZWwnXVxyXG4gID8gUmVwZWF0aW5nRmllbGRzTWFwPFRLZXk+IDpcclxuICBuZXZlcjtcclxuXHJcbnR5cGUgUmVwZWF0aW5nRmllbGRzTWFwVHlwZTxcclxuICBUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWUsXHJcbiAgRiBleHRlbmRzIGtleW9mIE5ldEZpZWxkc1tUXSxcclxuPiA9IFQgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNUeXBlcyA/IFJlcGVhdGluZ0ZpZWxkc01hcFR5cGVDaGVjazxULCBGPlxyXG4gIDogbmV2ZXI7XHJcblxyXG50eXBlIFBhcnNlSGVscGVyVHlwZTxUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWU+ID1cclxuICAmIHtcclxuICAgIFtmaWVsZCBpbiBrZXlvZiBOZXRGaWVsZHNbVF1dPzogc3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW10gfCBSZXBlYXRpbmdGaWVsZHNNYXBUeXBlPFQsIGZpZWxkPjtcclxuICB9XHJcbiAgJiB7IGNhcHR1cmU/OiBib29sZWFuIH07XHJcblxyXG5jb25zdCBpc1JlcGVhdGluZ0ZpZWxkID0gPFxyXG4gIFQgZXh0ZW5kcyBMb2dEZWZpbml0aW9uTmFtZSxcclxuPihcclxuICByZXBlYXRpbmc6IGJvb2xlYW4gfCB1bmRlZmluZWQsXHJcbiAgdmFsdWU6IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgUmVwZWF0aW5nRmllbGRzTWFwPFQ+IHwgdW5kZWZpbmVkLFxyXG4pOiB2YWx1ZSBpcyBSZXBlYXRpbmdGaWVsZHNNYXA8VD4gPT4ge1xyXG4gIGlmIChyZXBlYXRpbmcgIT09IHRydWUpXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgLy8gQWxsb3cgZXhjbHVkaW5nIHRoZSBmaWVsZCB0byBtYXRjaCBmb3IgZXh0cmFjdGlvblxyXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSlcclxuICAgIHJldHVybiBmYWxzZTtcclxuICBmb3IgKGNvbnN0IGUgb2YgdmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgZSAhPT0gJ29iamVjdCcpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZUhlbHBlciA9IDxUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWU+KFxyXG4gIHBhcmFtczogUGFyc2VIZWxwZXJUeXBlPFQ+IHwgdW5kZWZpbmVkLFxyXG4gIGRlZktleTogVCxcclxuICBmaWVsZHM6IFBhcnRpYWw8UGFyc2VIZWxwZXJGaWVsZHM8VD4+LFxyXG4pOiBDYWN0Ym90QmFzZVJlZ0V4cDxUPiA9PiB7XHJcbiAgcGFyYW1zID0gcGFyYW1zID8/IHt9O1xyXG4gIGNvbnN0IHZhbGlkRmllbGRzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBmb3IgKGNvbnN0IGluZGV4IGluIGZpZWxkcykge1xyXG4gICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xyXG4gICAgaWYgKGZpZWxkKVxyXG4gICAgICB2YWxpZEZpZWxkcy5wdXNoKGZpZWxkLmZpZWxkKTtcclxuICB9XHJcblxyXG4gIFJlZ2V4ZXMudmFsaWRhdGVQYXJhbXMocGFyYW1zLCBkZWZLZXksIFsnY2FwdHVyZScsIC4uLnZhbGlkRmllbGRzXSk7XHJcblxyXG4gIC8vIEZpbmQgdGhlIGxhc3Qga2V5IHdlIGNhcmUgYWJvdXQsIHNvIHdlIGNhbiBzaG9ydGVuIHRoZSByZWdleCBpZiBuZWVkZWQuXHJcbiAgY29uc3QgY2FwdHVyZSA9IFJlZ2V4ZXMudHJ1ZUlmVW5kZWZpbmVkKHBhcmFtcy5jYXB0dXJlKTtcclxuICBjb25zdCBmaWVsZEtleXMgPSBPYmplY3Qua2V5cyhmaWVsZHMpLnNvcnQoKGEsIGIpID0+IHBhcnNlSW50KGEpIC0gcGFyc2VJbnQoYikpO1xyXG4gIGxldCBtYXhLZXlTdHI6IHN0cmluZztcclxuICBpZiAoY2FwdHVyZSkge1xyXG4gICAgY29uc3Qga2V5czogRXh0cmFjdDxrZXlvZiBOZXRGaWVsZHNSZXZlcnNlW1RdLCBzdHJpbmc+W10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcylcclxuICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICBsZXQgdG1wS2V5ID0ga2V5cy5wb3AoKTtcclxuICAgIGlmICh0bXBLZXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBtYXhLZXlTdHIgPSBmaWVsZEtleXNbZmllbGRLZXlzLmxlbmd0aCAtIDFdID8/ICcwJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdoaWxlIChcclxuICAgICAgICBmaWVsZHNbdG1wS2V5XT8ub3B0aW9uYWwgJiZcclxuICAgICAgICAhKChmaWVsZHNbdG1wS2V5XT8uZmllbGQgPz8gJycpIGluIHBhcmFtcylcclxuICAgICAgKVxyXG4gICAgICAgIHRtcEtleSA9IGtleXMucG9wKCk7XHJcbiAgICAgIG1heEtleVN0ciA9IHRtcEtleSA/PyAnMCc7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1heEtleVN0ciA9ICcwJztcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkc1trZXldID8/IHt9O1xyXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JylcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgY29uc3QgZmllbGROYW1lID0gZmllbGRzW2tleV0/LmZpZWxkO1xyXG4gICAgICBpZiAoZmllbGROYW1lICE9PSB1bmRlZmluZWQgJiYgZmllbGROYW1lIGluIHBhcmFtcylcclxuICAgICAgICBtYXhLZXlTdHIgPSBrZXk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IG1heEtleSA9IHBhcnNlSW50KG1heEtleVN0cik7XHJcblxyXG4gIC8vIFNwZWNpYWwgY2FzZSBmb3IgQWJpbGl0eSB0byBoYW5kbGUgYW9lIGFuZCBub24tYW9lLlxyXG4gIGNvbnN0IGFiaWxpdHlNZXNzYWdlVHlwZSA9XHJcbiAgICBgKD86JHtsb2dEZWZpbml0aW9ucy5BYmlsaXR5Lm1lc3NhZ2VUeXBlfXwke2xvZ0RlZmluaXRpb25zLk5ldHdvcmtBT0VBYmlsaXR5Lm1lc3NhZ2VUeXBlfSlgO1xyXG4gIGNvbnN0IGFiaWxpdHlIZXhDb2RlID0gJyg/OjE1fDE2KSc7XHJcblxyXG4gIC8vIEJ1aWxkIHRoZSByZWdleCBmcm9tIHRoZSBmaWVsZHMuXHJcbiAgY29uc3QgcHJlZml4ID0gZGVmS2V5ICE9PSAnQWJpbGl0eScgPyBsb2dEZWZpbml0aW9uc1tkZWZLZXldLm1lc3NhZ2VUeXBlIDogYWJpbGl0eU1lc3NhZ2VUeXBlO1xyXG5cclxuICAvLyBIZXggY29kZXMgYXJlIGEgbWluaW11bSBvZiB0d28gY2hhcmFjdGVycy4gIEFiaWxpdGllcyBhcmUgc3BlY2lhbCBiZWNhdXNlXHJcbiAgLy8gdGhleSBuZWVkIHRvIHN1cHBvcnQgYm90aCAweDE1IGFuZCAweDE2LlxyXG4gIGNvbnN0IHR5cGVBc0hleCA9IHBhcnNlSW50KGxvZ0RlZmluaXRpb25zW2RlZktleV0udHlwZSkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XHJcbiAgY29uc3QgZGVmYXVsdEhleENvZGUgPSB0eXBlQXNIZXgubGVuZ3RoIDwgMiA/IGAwMCR7dHlwZUFzSGV4fWAuc2xpY2UoLTIpIDogdHlwZUFzSGV4O1xyXG4gIGNvbnN0IGhleENvZGUgPSBkZWZLZXkgIT09ICdBYmlsaXR5JyA/IGRlZmF1bHRIZXhDb2RlIDogYWJpbGl0eUhleENvZGU7XHJcblxyXG4gIGxldCBzdHIgPSAnJztcclxuICBpZiAoY2FwdHVyZSlcclxuICAgIHN0ciArPSBgKD88dGltZXN0YW1wPlxcXFx5e1RpbWVzdGFtcH0pICR7cHJlZml4fSAoPzx0eXBlPiR7aGV4Q29kZX0pYDtcclxuICBlbHNlXHJcbiAgICBzdHIgKz0gYFxcXFx5e1RpbWVzdGFtcH0gJHtwcmVmaXh9ICR7aGV4Q29kZX1gO1xyXG5cclxuICBsZXQgbGFzdEtleSA9IDE7XHJcbiAgZm9yIChjb25zdCBrZXlTdHIgaW4gZmllbGRzKSB7XHJcbiAgICBjb25zdCBwYXJzZUZpZWxkID0gZmllbGRzW2tleVN0cl07XHJcbiAgICBpZiAocGFyc2VGaWVsZCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIGNvbnN0IGZpZWxkTmFtZSA9IHBhcnNlRmllbGQuZmllbGQ7XHJcblxyXG4gICAgLy8gUmVnZXggaGFuZGxlcyB0aGVzZSBtYW51YWxseSBhYm92ZSBpbiB0aGUgYHN0cmAgaW5pdGlhbGl6YXRpb24uXHJcbiAgICBpZiAoZmllbGROYW1lID09PSAndGltZXN0YW1wJyB8fCBmaWVsZE5hbWUgPT09ICd0eXBlJylcclxuICAgICAgY29udGludWU7XHJcblxyXG4gICAgY29uc3Qga2V5ID0gcGFyc2VJbnQoa2V5U3RyKTtcclxuICAgIC8vIEZpbGwgaW4gYmxhbmtzLlxyXG4gICAgY29uc3QgbWlzc2luZ0ZpZWxkcyA9IGtleSAtIGxhc3RLZXkgLSAxO1xyXG4gICAgaWYgKG1pc3NpbmdGaWVsZHMgPT09IDEpXHJcbiAgICAgIHN0ciArPSBgJHtzZXBhcmF0b3J9JHttYXRjaERlZmF1bHR9YDtcclxuICAgIGVsc2UgaWYgKG1pc3NpbmdGaWVsZHMgPiAxKVxyXG4gICAgICBzdHIgKz0gYCg/OiR7c2VwYXJhdG9yfSR7bWF0Y2hEZWZhdWx0fSl7JHttaXNzaW5nRmllbGRzfX1gO1xyXG4gICAgbGFzdEtleSA9IGtleTtcclxuXHJcbiAgICBzdHIgKz0gc2VwYXJhdG9yO1xyXG5cclxuICAgIGlmICh0eXBlb2YgcGFyc2VGaWVsZCAhPT0gJ29iamVjdCcpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtkZWZLZXl9OiBpbnZhbGlkIHZhbHVlOiAke0pTT04uc3RyaW5naWZ5KHBhcnNlRmllbGQpfWApO1xyXG5cclxuICAgIGNvbnN0IGZpZWxkRGVmYXVsdCA9IGZpZWxkTmFtZSAhPT0gdW5kZWZpbmVkICYmIGZpZWxkc1dpdGhQb3RlbnRpYWxDb2xvbnMuaW5jbHVkZXMoZmllbGROYW1lKVxyXG4gICAgICA/IG1hdGNoV2l0aENvbG9uc0RlZmF1bHRcclxuICAgICAgOiBtYXRjaERlZmF1bHQ7XHJcbiAgICBjb25zdCBkZWZhdWx0RmllbGRWYWx1ZSA9IHBhcnNlRmllbGQudmFsdWU/LnRvU3RyaW5nKCkgPz8gZmllbGREZWZhdWx0O1xyXG4gICAgY29uc3QgZmllbGRWYWx1ZSA9IHBhcmFtc1tmaWVsZE5hbWVdO1xyXG5cclxuICAgIGlmIChpc1JlcGVhdGluZ0ZpZWxkKGZpZWxkc1trZXlTdHJdPy5yZXBlYXRpbmcsIGZpZWxkVmFsdWUpKSB7XHJcbiAgICAgIGNvbnN0IHJlcGVhdGluZ0ZpZWxkc1NlcGFyYXRvciA9ICcoPzokfDopJztcclxuICAgICAgbGV0IHJlcGVhdGluZ0FycmF5OiBSZXBlYXRpbmdGaWVsZHNNYXA8VD4gfCB1bmRlZmluZWQgPSBmaWVsZFZhbHVlO1xyXG5cclxuICAgICAgY29uc3Qgc29ydEtleXMgPSBmaWVsZHNba2V5U3RyXT8uc29ydEtleXM7XHJcbiAgICAgIGNvbnN0IHByaW1hcnlLZXkgPSBmaWVsZHNba2V5U3RyXT8ucHJpbWFyeUtleTtcclxuICAgICAgY29uc3QgcG9zc2libGVLZXlzID0gZmllbGRzW2tleVN0cl0/LnBvc3NpYmxlS2V5cztcclxuXHJcbiAgICAgIC8vIHByaW1hcnlLZXkgaXMgcmVxdWlyZWQgaWYgdGhpcyBpcyBhIHJlcGVhdGluZyBmaWVsZCBwZXIgdHlwZWRlZiBpbiBuZXRsb2dfZGVmcy50c1xyXG4gICAgICAvLyBTYW1lIHdpdGggcG9zc2libGVLZXlzXHJcbiAgICAgIGlmIChwcmltYXJ5S2V5ID09PSB1bmRlZmluZWQgfHwgcG9zc2libGVLZXlzID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ29kZSgpO1xyXG5cclxuICAgICAgLy8gQWxsb3cgc29ydGluZyBpZiBuZWVkZWRcclxuICAgICAgaWYgKHNvcnRLZXlzKSB7XHJcbiAgICAgICAgLy8gQWxzbyBzb3J0IG91ciB2YWxpZCBrZXlzIGxpc3RcclxuICAgICAgICBwb3NzaWJsZUtleXMuc29ydCgobGVmdCwgcmlnaHQpID0+IGxlZnQudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKHJpZ2h0LnRvTG93ZXJDYXNlKCkpKTtcclxuICAgICAgICBpZiAocmVwZWF0aW5nQXJyYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmVwZWF0aW5nQXJyYXkgPSBbLi4ucmVwZWF0aW5nQXJyYXldLnNvcnQoXHJcbiAgICAgICAgICAgIChsZWZ0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgcmlnaHQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgICAvLyBXZSBjaGVjayB0aGUgdmFsaWRpdHkgb2YgbGVmdC9yaWdodCBiZWNhdXNlIHRoZXkncmUgdXNlci1zdXBwbGllZFxyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbGVmdCAhPT0gJ29iamVjdCcgfHwgbGVmdFtwcmltYXJ5S2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIHRyaWdnZXI6JywgbGVmdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3QgbGVmdFZhbHVlID0gbGVmdFtwcmltYXJ5S2V5XTtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGxlZnRWYWx1ZSAhPT0gJ3N0cmluZycgfHwgIXBvc3NpYmxlS2V5cz8uaW5jbHVkZXMobGVmdFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byB0cmlnZ2VyOicsIGxlZnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmlnaHQgIT09ICdvYmplY3QnIHx8IHJpZ2h0W3ByaW1hcnlLZXldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gdHJpZ2dlcjonLCByaWdodCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3QgcmlnaHRWYWx1ZSA9IHJpZ2h0W3ByaW1hcnlLZXldO1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmlnaHRWYWx1ZSAhPT0gJ3N0cmluZycgfHwgIXBvc3NpYmxlS2V5cz8uaW5jbHVkZXMocmlnaHRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gdHJpZ2dlcjonLCByaWdodCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGxlZnRWYWx1ZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUocmlnaHRWYWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhbm9uUmVwczogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfVtdIHwgdW5kZWZpbmVkID0gcmVwZWF0aW5nQXJyYXk7XHJcbiAgICAgIC8vIExvb3Agb3ZlciBvdXIgcG9zc2libGUga2V5c1xyXG4gICAgICAvLyBCdWlsZCBhIHJlZ2V4IHRoYXQgY2FuIG1hdGNoIGFueSBwb3NzaWJsZSBrZXkgd2l0aCByZXF1aXJlZCB2YWx1ZXMgc3Vic3RpdHV0ZWQgaW5cclxuICAgICAgcG9zc2libGVLZXlzLmZvckVhY2goKHBvc3NpYmxlS2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVwID0gYW5vblJlcHM/LmZpbmQoKHJlcCkgPT4gcHJpbWFyeUtleSBpbiByZXAgJiYgcmVwW3ByaW1hcnlLZXldID09PSBwb3NzaWJsZUtleSk7XHJcblxyXG4gICAgICAgIGxldCBmaWVsZFJlZ2V4ID0gJyc7XHJcbiAgICAgICAgLy8gUmF0aGVyIHRoYW4gbG9vcGluZyBvdmVyIHRoZSBrZXlzIGRlZmluZWQgb24gdGhlIG9iamVjdCxcclxuICAgICAgICAvLyBsb29wIG92ZXIgdGhlIGJhc2UgdHlwZSBkZWYncyBrZXlzLiBUaGlzIGVuZm9yY2VzIHRoZSBjb3JyZWN0IG9yZGVyLlxyXG4gICAgICAgIGZpZWxkc1trZXlTdHJdPy5yZXBlYXRpbmdLZXlzPy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgIGxldCB2YWwgPSByZXA/LltrZXldO1xyXG4gICAgICAgICAgaWYgKHJlcCA9PT0gdW5kZWZpbmVkIHx8ICEoa2V5IGluIHJlcCkpIHtcclxuICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHZhbHVlIGZvciB0aGlzIGtleVxyXG4gICAgICAgICAgICAvLyBpbnNlcnQgYSBwbGFjZWhvbGRlciwgdW5sZXNzIGl0J3MgdGhlIHByaW1hcnkga2V5XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHByaW1hcnlLZXkpXHJcbiAgICAgICAgICAgICAgdmFsID0gcG9zc2libGVLZXk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICB2YWwgPSBtYXRjaERlZmF1bHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgICAgICAgdmFsID0gbWF0Y2hEZWZhdWx0O1xyXG4gICAgICAgICAgICBlbHNlIGlmICh2YWwubGVuZ3RoIDwgMSlcclxuICAgICAgICAgICAgICB2YWwgPSBtYXRjaERlZmF1bHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbC5zb21lKCh2KSA9PiB0eXBlb2YgdiAhPT0gJ3N0cmluZycpKVxyXG4gICAgICAgICAgICAgIHZhbCA9IG1hdGNoRGVmYXVsdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZpZWxkUmVnZXggKz0gUmVnZXhlcy5tYXliZUNhcHR1cmUoXHJcbiAgICAgICAgICAgIGtleSA9PT0gcHJpbWFyeUtleSA/IGZhbHNlIDogY2FwdHVyZSxcclxuICAgICAgICAgICAgLy8gQWxsIGNhcHR1cmluZyBncm91cHMgYXJlIGBmaWVsZE5hbWVgICsgYHBvc3NpYmxlS2V5YCwgZS5nLiBgcGFpcklzQ2FzdGluZzFgXHJcbiAgICAgICAgICAgIGZpZWxkTmFtZSArIHBvc3NpYmxlS2V5LFxyXG4gICAgICAgICAgICB2YWwsXHJcbiAgICAgICAgICAgIGRlZmF1bHRGaWVsZFZhbHVlLFxyXG4gICAgICAgICAgKSArXHJcbiAgICAgICAgICAgIHJlcGVhdGluZ0ZpZWxkc1NlcGFyYXRvcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGZpZWxkUmVnZXgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgc3RyICs9IGAoPzoke2ZpZWxkUmVnZXh9KSR7cmVwICE9PSB1bmRlZmluZWQgPyAnJyA6ICc/J31gO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGZpZWxkc1trZXlTdHJdPy5yZXBlYXRpbmcpIHtcclxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHJlcGVhdGluZyBmaWVsZCBidXQgdGhlIGFjdHVhbCB2YWx1ZSBpcyBlbXB0eSBvciBvdGhlcndpc2UgaW52YWxpZCxcclxuICAgICAgLy8gZG9uJ3QgcHJvY2VzcyBmdXJ0aGVyLiBXZSBjYW4ndCB1c2UgYGNvbnRpbnVlYCBpbiB0aGUgYWJvdmUgYmxvY2sgYmVjYXVzZSB0aGF0XHJcbiAgICAgIC8vIHdvdWxkIHNraXAgdGhlIGVhcmx5LW91dCBicmVhayBhdCB0aGUgZW5kIG9mIHRoZSBsb29wLlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGZpZWxkTmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3RyICs9IFJlZ2V4ZXMubWF5YmVDYXB0dXJlKFxyXG4gICAgICAgICAgLy8gbW9yZSBhY2N1cmF0ZSB0eXBlIGluc3RlYWQgb2YgYGFzYCBjYXN0XHJcbiAgICAgICAgICAvLyBtYXliZSB0aGlzIGZ1bmN0aW9uIG5lZWRzIGEgcmVmYWN0b3JpbmdcclxuICAgICAgICAgIGNhcHR1cmUsXHJcbiAgICAgICAgICBmaWVsZE5hbWUsXHJcbiAgICAgICAgICBmaWVsZFZhbHVlLFxyXG4gICAgICAgICAgZGVmYXVsdEZpZWxkVmFsdWUsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBGSVhNRTogaGFuZGxlIGxpbnQgZXJyb3IgaGVyZVxyXG4gICAgICAgIC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9wdWxsLzI3NCNkaXNjdXNzaW9uX3IxNjkyNDM5NzIwXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXN0cmljdC1wbHVzLW9wZXJhbmRzXHJcbiAgICAgICAgc3RyICs9IGZpZWxkVmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTdG9wIGlmIHdlJ3JlIG5vdCBjYXB0dXJpbmcgYW5kIGRvbid0IGNhcmUgYWJvdXQgZnV0dXJlIGZpZWxkcy5cclxuICAgIGlmIChrZXkgPj0gbWF4S2V5KVxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHN0ciArPSAnKD86JHw6KSc7XHJcblxyXG4gIHJldHVybiBSZWdleGVzLnBhcnNlKHN0cikgYXMgQ2FjdGJvdEJhc2VSZWdFeHA8VD47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGRSZWdleCA9IDxUIGV4dGVuZHMga2V5b2YgTmV0UGFyYW1zPihcclxuICB0eXBlOiBULFxyXG4gIHBhcmFtcz86IFBhcnNlSGVscGVyVHlwZTxUPixcclxuKTogQ2FjdGJvdEJhc2VSZWdFeHA8VD4gPT4ge1xyXG4gIHJldHVybiBwYXJzZUhlbHBlcihwYXJhbXMsIHR5cGUsIGRlZmF1bHRQYXJhbXModHlwZSwgUmVnZXhlcy5sb2dWZXJzaW9uKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdleGVzIHtcclxuICBzdGF0aWMgbG9nVmVyc2lvbjogTG9nRGVmaW5pdGlvblZlcnNpb25zID0gJ2xhdGVzdCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMC0weDE0LW5ldHdvcmtzdGFydHNjYXN0aW5nXHJcbiAgICovXHJcbiAgc3RhdGljIHN0YXJ0c1VzaW5nKHBhcmFtcz86IE5ldFBhcmFtc1snU3RhcnRzVXNpbmcnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdTdGFydHNVc2luZyc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTdGFydHNVc2luZycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjEtMHgxNS1uZXR3b3JrYWJpbGl0eVxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMi0weDE2LW5ldHdvcmthb2VhYmlsaXR5XHJcbiAgICovXHJcbiAgc3RhdGljIGFiaWxpdHkocGFyYW1zPzogTmV0UGFyYW1zWydBYmlsaXR5J10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWJpbGl0eSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBYmlsaXR5JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMS0weDE1LW5ldHdvcmthYmlsaXR5XHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTIyLTB4MTYtbmV0d29ya2FvZWFiaWxpdHlcclxuICAgKlxyXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgYWJpbGl0eWAgaW5zdGVhZFxyXG4gICAqL1xyXG4gIHN0YXRpYyBhYmlsaXR5RnVsbChwYXJhbXM/OiBOZXRQYXJhbXNbJ0FiaWxpdHknXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdBYmlsaXR5Jz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYWJpbGl0eShwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3LTB4MWItbmV0d29ya3RhcmdldGljb24taGVhZC1tYXJrZXJcclxuICAgKi9cclxuICBzdGF0aWMgaGVhZE1hcmtlcihwYXJhbXM/OiBOZXRQYXJhbXNbJ0hlYWRNYXJrZXInXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdIZWFkTWFya2VyJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0hlYWRNYXJrZXInLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAzLTB4MDMtYWRkY29tYmF0YW50XHJcbiAgICovXHJcbiAgc3RhdGljIGFkZGVkQ29tYmF0YW50KHBhcmFtcz86IE5ldFBhcmFtc1snQWRkZWRDb21iYXRhbnQnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdBZGRlZENvbWJhdGFudCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBZGRlZENvbWJhdGFudCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDMtMHgwMy1hZGRjb21iYXRhbnRcclxuICAgKi9cclxuICBzdGF0aWMgYWRkZWRDb21iYXRhbnRGdWxsKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydBZGRlZENvbWJhdGFudCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdBZGRlZENvbWJhdGFudCc+IHtcclxuICAgIHJldHVybiB0aGlzLmFkZGVkQ29tYmF0YW50KHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDQtMHgwNC1yZW1vdmVjb21iYXRhbnRcclxuICAgKi9cclxuICBzdGF0aWMgcmVtb3ZpbmdDb21iYXRhbnQoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1JlbW92ZWRDb21iYXRhbnQnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnUmVtb3ZlZENvbWJhdGFudCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdSZW1vdmVkQ29tYmF0YW50JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNi0weDFhLW5ldHdvcmtidWZmXHJcbiAgICovXHJcbiAgc3RhdGljIGdhaW5zRWZmZWN0KHBhcmFtcz86IE5ldFBhcmFtc1snR2FpbnNFZmZlY3QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYWluc0VmZmVjdCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdHYWluc0VmZmVjdCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVmZXIgZ2FpbnNFZmZlY3Qgb3ZlciB0aGlzIGZ1bmN0aW9uIHVubGVzcyB5b3UgcmVhbGx5IG5lZWQgZXh0cmEgZGF0YS5cclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMzgtMHgyNi1uZXR3b3Jrc3RhdHVzZWZmZWN0c1xyXG4gICAqL1xyXG4gIHN0YXRpYyBzdGF0dXNFZmZlY3RFeHBsaWNpdChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snU3RhdHVzRWZmZWN0J10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1N0YXR1c0VmZmVjdCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTdGF0dXNFZmZlY3QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTMwLTB4MWUtbmV0d29ya2J1ZmZyZW1vdmVcclxuICAgKi9cclxuICBzdGF0aWMgbG9zZXNFZmZlY3QocGFyYW1zPzogTmV0UGFyYW1zWydMb3Nlc0VmZmVjdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0xvc2VzRWZmZWN0Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0xvc2VzRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0zNS0weDIzLW5ldHdvcmt0ZXRoZXJcclxuICAgKi9cclxuICBzdGF0aWMgdGV0aGVyKHBhcmFtcz86IE5ldFBhcmFtc1snVGV0aGVyJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnVGV0aGVyJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1RldGhlcicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAndGFyZ2V0JyB3YXMgZGVmZWF0ZWQgYnkgJ3NvdXJjZSdcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjUtMHgxOS1uZXR3b3JrZGVhdGhcclxuICAgKi9cclxuICBzdGF0aWMgd2FzRGVmZWF0ZWQocGFyYW1zPzogTmV0UGFyYW1zWydXYXNEZWZlYXRlZCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1dhc0RlZmVhdGVkJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ1dhc0RlZmVhdGVkJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNC0weDE4LW5ldHdvcmtkb3RcclxuICAgKi9cclxuICBzdGF0aWMgbmV0d29ya0RvVChwYXJhbXM/OiBOZXRQYXJhbXNbJ05ldHdvcmtEb1QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdOZXR3b3JrRG9UJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ05ldHdvcmtEb1QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBlY2hvKHBhcmFtcz86IE5ldFBhcmFtc1snR2FtZUxvZyddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhbWVMb2cnPiB7XHJcbiAgICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHBhcmFtcyA9IHt9O1xyXG4gICAgUmVnZXhlcy52YWxpZGF0ZVBhcmFtcyhcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICAnZWNobycsXHJcbiAgICAgIFsndHlwZScsICd0aW1lc3RhbXAnLCAnY29kZScsICduYW1lJywgJ2xpbmUnLCAnY2FwdHVyZSddLFxyXG4gICAgKTtcclxuICAgIHBhcmFtcy5jb2RlID0gJzAwMzgnO1xyXG4gICAgcmV0dXJuIFJlZ2V4ZXMuZ2FtZUxvZyhwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBkaWFsb2cocGFyYW1zPzogTmV0UGFyYW1zWydHYW1lTG9nJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FtZUxvZyc+IHtcclxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJylcclxuICAgICAgcGFyYW1zID0ge307XHJcbiAgICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgICdkaWFsb2cnLFxyXG4gICAgICBbJ3R5cGUnLCAndGltZXN0YW1wJywgJ2NvZGUnLCAnbmFtZScsICdsaW5lJywgJ2NhcHR1cmUnXSxcclxuICAgICk7XHJcbiAgICBwYXJhbXMuY29kZSA9ICcwMDQ0JztcclxuICAgIHJldHVybiBSZWdleGVzLmdhbWVMb2cocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMC0weDAwLWxvZ2xpbmVcclxuICAgKi9cclxuICBzdGF0aWMgbWVzc2FnZShwYXJhbXM/OiBOZXRQYXJhbXNbJ0dhbWVMb2cnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICBwYXJhbXMgPSB7fTtcclxuICAgIFJlZ2V4ZXMudmFsaWRhdGVQYXJhbXMoXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgJ21lc3NhZ2UnLFxyXG4gICAgICBbJ3R5cGUnLCAndGltZXN0YW1wJywgJ2NvZGUnLCAnbmFtZScsICdsaW5lJywgJ2NhcHR1cmUnXSxcclxuICAgICk7XHJcbiAgICBwYXJhbXMuY29kZSA9ICcwODM5JztcclxuICAgIHJldHVybiBSZWdleGVzLmdhbWVMb2cocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZpZWxkczogY29kZSwgbmFtZSwgbGluZSwgY2FwdHVyZVxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMC0weDAwLWxvZ2xpbmVcclxuICAgKi9cclxuICBzdGF0aWMgZ2FtZUxvZyhwYXJhbXM/OiBOZXRQYXJhbXNbJ0dhbWVMb2cnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0dhbWVMb2cnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnYW1lTmFtZUxvZyhwYXJhbXM/OiBOZXRQYXJhbXNbJ0dhbWVMb2cnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdGFiaWxpdHkuXHJcbiAgICByZXR1cm4gUmVnZXhlcy5nYW1lTG9nKHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMTItMHgwYy1wbGF5ZXJzdGF0c1xyXG4gICAqL1xyXG4gIHN0YXRpYyBzdGF0Q2hhbmdlKHBhcmFtcz86IE5ldFBhcmFtc1snUGxheWVyU3RhdHMnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdQbGF5ZXJTdGF0cyc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdQbGF5ZXJTdGF0cycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDEtMHgwMS1jaGFuZ2V6b25lXHJcbiAgICovXHJcbiAgc3RhdGljIGNoYW5nZVpvbmUocGFyYW1zPzogTmV0UGFyYW1zWydDaGFuZ2Vab25lJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ2hhbmdlWm9uZSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdDaGFuZ2Vab25lJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0zMy0weDIxLW5ldHdvcms2ZC1hY3Rvci1jb250cm9sXHJcbiAgICovXHJcbiAgc3RhdGljIG5ldHdvcms2ZChwYXJhbXM/OiBOZXRQYXJhbXNbJ0FjdG9yQ29udHJvbCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FjdG9yQ29udHJvbCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBY3RvckNvbnRyb2wnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTM0LTB4MjItbmV0d29ya25hbWV0b2dnbGVcclxuICAgKi9cclxuICBzdGF0aWMgbmFtZVRvZ2dsZShwYXJhbXM/OiBOZXRQYXJhbXNbJ05hbWVUb2dnbGUnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdOYW1lVG9nZ2xlJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ05hbWVUb2dnbGUnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTQwLTB4MjgtbWFwXHJcbiAgICovXHJcbiAgc3RhdGljIG1hcChwYXJhbXM/OiBOZXRQYXJhbXNbJ01hcCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J01hcCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdNYXAnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTQxLTB4Mjktc3lzdGVtbG9nbWVzc2FnZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBzeXN0ZW1Mb2dNZXNzYWdlKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydTeXN0ZW1Mb2dNZXNzYWdlJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1N5c3RlbUxvZ01lc3NhZ2UnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnU3lzdGVtTG9nTWVzc2FnZScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjU3LTB4MTAxLW1hcGVmZmVjdFxyXG4gICAqL1xyXG4gIHN0YXRpYyBtYXBFZmZlY3QocGFyYW1zPzogTmV0UGFyYW1zWydNYXBFZmZlY3QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdNYXBFZmZlY3QnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTWFwRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNTgtMHgxMDItZmF0ZWRpcmVjdG9yXHJcbiAgICovXHJcbiAgc3RhdGljIGZhdGVEaXJlY3RvcihwYXJhbXM/OiBOZXRQYXJhbXNbJ0ZhdGVEaXJlY3RvciddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0ZhdGVEaXJlY3Rvcic+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdGYXRlRGlyZWN0b3InLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI1OS0weDEwMy1jZWRpcmVjdG9yXHJcbiAgICovXHJcbiAgc3RhdGljIGNlRGlyZWN0b3IocGFyYW1zPzogTmV0UGFyYW1zWydDRURpcmVjdG9yJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ0VEaXJlY3Rvcic+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdDRURpcmVjdG9yJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjAtMHgxMDQtaW5jb21iYXRcclxuICAgKi9cclxuICBzdGF0aWMgaW5Db21iYXQocGFyYW1zPzogTmV0UGFyYW1zWydJbkNvbWJhdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0luQ29tYmF0Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0luQ29tYmF0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjEtMHgxMDUtY29tYmF0YW50bWVtb3J5XHJcbiAgICovXHJcbiAgc3RhdGljIGNvbWJhdGFudE1lbW9yeShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQ29tYmF0YW50TWVtb3J5J10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0NvbWJhdGFudE1lbW9yeSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdDb21iYXRhbnRNZW1vcnknLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2My0weDEwNy1zdGFydHN1c2luZ2V4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIHN0YXJ0c1VzaW5nRXh0cmEoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1N0YXJ0c1VzaW5nRXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnU3RhcnRzVXNpbmdFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTdGFydHNVc2luZ0V4dHJhJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjQtMHgxMDgtYWJpbGl0eWV4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIGFiaWxpdHlFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWJpbGl0eUV4dHJhJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FiaWxpdHlFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBYmlsaXR5RXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2NS0weDEwOS1jb250ZW50ZmluZGVyc2V0dGluZ3NcclxuICAgKi9cclxuICBzdGF0aWMgY29udGVudEZpbmRlclNldHRpbmdzKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydDb250ZW50RmluZGVyU2V0dGluZ3MnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ29udGVudEZpbmRlclNldHRpbmdzJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NvbnRlbnRGaW5kZXJTZXR0aW5ncycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY2LTB4MTBhLW5wY3llbGxcclxuICAgKi9cclxuICBzdGF0aWMgbnBjWWVsbChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snTnBjWWVsbCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdOcGNZZWxsJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ05wY1llbGwnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2Ny0weDEwYi1iYXR0bGV0YWxrMlxyXG4gICAqL1xyXG4gIHN0YXRpYyBiYXR0bGVUYWxrMihcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQmF0dGxlVGFsazInXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQmF0dGxlVGFsazInPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQmF0dGxlVGFsazInLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2OC0weDEwYy1jb3VudGRvd25cclxuICAgKi9cclxuICBzdGF0aWMgY291bnRkb3duKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydDb3VudGRvd24nXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ291bnRkb3duJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NvdW50ZG93bicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY5LTB4MTBkLWNvdW50ZG93bmNhbmNlbFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjb3VudGRvd25DYW5jZWwoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ0NvdW50ZG93bkNhbmNlbCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdDb3VudGRvd25DYW5jZWwnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQ291bnRkb3duQ2FuY2VsJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNzAtMHgxMGUtYWN0b3Jtb3ZlXHJcbiAgICovXHJcbiAgc3RhdGljIGFjdG9yTW92ZShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JNb3ZlJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FjdG9yTW92ZSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBY3Rvck1vdmUnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3MS0weDEwZi1hY3RvcnNldHBvc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBhY3RvclNldFBvcyhcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JTZXRQb3MnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JTZXRQb3MnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQWN0b3JTZXRQb3MnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3Mi0weDExMC1zcGF3bm5wY2V4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIHNwYXduTnBjRXh0cmEoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1NwYXduTnBjRXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnU3Bhd25OcGNFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTcGF3bk5wY0V4dHJhJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNzMtMHgxMTEtYWN0b3Jjb250cm9sZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgYWN0b3JDb250cm9sRXh0cmEoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ0FjdG9yQ29udHJvbEV4dHJhJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FjdG9yQ29udHJvbEV4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FjdG9yQ29udHJvbEV4dHJhJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNzQtMHgxMTItYWN0b3Jjb250cm9sc2VsZmV4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIGFjdG9yQ29udHJvbFNlbGZFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JDb250cm9sU2VsZkV4dHJhJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FjdG9yQ29udHJvbFNlbGZFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBY3RvckNvbnRyb2xTZWxmRXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBidWlsZGluZyBuYW1lZCBjYXB0dXJlIGdyb3VwXHJcbiAgICovXHJcbiAgc3RhdGljIG1heWJlQ2FwdHVyZShcclxuICAgIGNhcHR1cmU6IGJvb2xlYW4sXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB2YWx1ZTogc3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW10gfCB1bmRlZmluZWQsXHJcbiAgICBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICB2YWx1ZSA9IGRlZmF1bHRWYWx1ZSA/PyBtYXRjaERlZmF1bHQ7XHJcbiAgICB2YWx1ZSA9IFJlZ2V4ZXMuYW55T2YodmFsdWUpO1xyXG4gICAgcmV0dXJuIGNhcHR1cmUgPyBSZWdleGVzLm5hbWVkQ2FwdHVyZShuYW1lLCB2YWx1ZSkgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBvcHRpb25hbChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCg/OiR7c3RyfSk/YDtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZXMgYSBuYW1lZCByZWdleCBjYXB0dXJlIGdyb3VwIG5hbWVkIHxuYW1lfCBmb3IgdGhlIG1hdGNoIHx2YWx1ZXwuXHJcbiAgc3RhdGljIG5hbWVkQ2FwdHVyZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKG5hbWUuaW5jbHVkZXMoJz4nKSlcclxuICAgICAgY29uc29sZS5lcnJvcihgXCIke25hbWV9XCIgY29udGFpbnMgXCI+XCIuYCk7XHJcbiAgICBpZiAobmFtZS5pbmNsdWRlcygnPCcpKVxyXG4gICAgICBjb25zb2xlLmVycm9yKGBcIiR7bmFtZX1cIiBjb250YWlucyBcIj5cIi5gKTtcclxuXHJcbiAgICByZXR1cm4gYCg/PCR7bmFtZX0+JHt2YWx1ZX0pYDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGZvciB0dXJuaW5nIG11bHRpcGxlIGFyZ3MgaW50byBhIHVuaW9uZWQgcmVndWxhciBleHByZXNzaW9uLlxyXG4gICAqIGFueU9mKHgsIHksIHopIG9yIGFueU9mKFt4LCB5LCB6XSkgZG8gdGhlIHNhbWUgdGhpbmcsIGFuZCByZXR1cm4gKD86eHx5fHopLlxyXG4gICAqIGFueU9mKHgpIG9yIGFueU9mKHgpIG9uIGl0cyBvd24gc2ltcGxpZmllcyB0byBqdXN0IHguXHJcbiAgICogYXJncyBtYXkgYmUgc3RyaW5ncyBvciBSZWdFeHAsIGFsdGhvdWdoIGFueSBhZGRpdGlvbmFsIG1hcmtlcnMgdG8gUmVnRXhwXHJcbiAgICogbGlrZSAvaW5zZW5zaXRpdmUvaSBhcmUgZHJvcHBlZC5cclxuICAgKi9cclxuICBzdGF0aWMgYW55T2YoLi4uYXJnczogKHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgUmVnRXhwKVtdKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGFueU9mQXJyYXkgPSAoYXJyYXk6IHJlYWRvbmx5IChzdHJpbmcgfCBSZWdFeHApW10pOiBzdHJpbmcgPT4ge1xyXG4gICAgICBjb25zdCBbZWxlbV0gPSBhcnJheTtcclxuICAgICAgaWYgKGVsZW0gIT09IHVuZGVmaW5lZCAmJiBhcnJheS5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgcmV0dXJuIGAke2VsZW0gaW5zdGFuY2VvZiBSZWdFeHAgPyBlbGVtLnNvdXJjZSA6IGVsZW19YDtcclxuICAgICAgcmV0dXJuIGAoPzoke2FycmF5Lm1hcCgoZWxlbSkgPT4gZWxlbSBpbnN0YW5jZW9mIFJlZ0V4cCA/IGVsZW0uc291cmNlIDogZWxlbSkuam9pbignfCcpfSlgO1xyXG4gICAgfTtcclxuICAgIGxldCBhcnJheTogcmVhZG9ubHkgKHN0cmluZyB8IFJlZ0V4cClbXSA9IFtdO1xyXG4gICAgY29uc3QgW2ZpcnN0QXJnXSA9IGFyZ3M7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZyA9PT0gJ3N0cmluZycgfHwgZmlyc3RBcmcgaW5zdGFuY2VvZiBSZWdFeHApXHJcbiAgICAgICAgYXJyYXkgPSBbZmlyc3RBcmddO1xyXG4gICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpcnN0QXJnKSlcclxuICAgICAgICBhcnJheSA9IGZpcnN0QXJnO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgYXJyYXkgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRPRE86IG1vcmUgYWNjdXJhdGUgdHlwZSBpbnN0ZWFkIG9mIGBhc2AgY2FzdFxyXG4gICAgICBhcnJheSA9IGFyZ3MgYXMgcmVhZG9ubHkgc3RyaW5nW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYW55T2ZBcnJheShhcnJheSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFyc2UocmVnZXhwU3RyaW5nOiBSZWdFeHAgfCBzdHJpbmcgfCBDYWN0Ym90QmFzZVJlZ0V4cDwnTm9uZSc+KTogUmVnRXhwIHtcclxuICAgIGNvbnN0IGtDYWN0Ym90Q2F0ZWdvcmllcyA9IHtcclxuICAgICAgVGltZXN0YW1wOiAnXi57MTR9JyxcclxuICAgICAgTmV0VGltZXN0YW1wOiAnLnszM30nLFxyXG4gICAgICBOZXRGaWVsZDogJyg/OltefF0qXFxcXHwpJyxcclxuICAgICAgTG9nVHlwZTogJ1swLTlBLUZhLWZdezJ9JyxcclxuICAgICAgQWJpbGl0eUNvZGU6ICdbMC05QS1GYS1mXXsxLDh9JyxcclxuICAgICAgT2JqZWN0SWQ6ICdbMC05QS1GXXs4fScsXHJcbiAgICAgIC8vIE1hdGNoZXMgYW55IGNoYXJhY3RlciBuYW1lIChpbmNsdWRpbmcgZW1wdHkgc3RyaW5ncyB3aGljaCB0aGUgRkZYSVZcclxuICAgICAgLy8gQUNUIHBsdWdpbiBjYW4gZ2VuZXJhdGUgd2hlbiB1bmtub3duKS5cclxuICAgICAgTmFtZTogJyg/OlteXFxcXHM6fF0rKD86IFteXFxcXHM6fF0rKT98KScsXHJcbiAgICAgIC8vIEZsb2F0cyBjYW4gaGF2ZSBjb21tYSBhcyBzZXBhcmF0b3IgaW4gRkZYSVYgcGx1Z2luIG91dHB1dDogaHR0cHM6Ly9naXRodWIuY29tL3JhdmFobi9GRlhJVl9BQ1RfUGx1Z2luL2lzc3Vlcy8xMzdcclxuICAgICAgRmxvYXQ6ICctP1swLTldKyg/OlsuLF1bMC05XSspPyg/OkUtP1swLTldKyk/JyxcclxuICAgIH07XHJcblxyXG4gICAgLy8gQWxsIHJlZ2V4ZXMgaW4gY2FjdGJvdCBhcmUgY2FzZSBpbnNlbnNpdGl2ZS5cclxuICAgIC8vIFRoaXMgYXZvaWRzIGhlYWRhY2hlcyBhcyB0aGluZ3MgbGlrZSBgVmljZSBhbmQgVmFuaXR5YCB0dXJucyBpbnRvXHJcbiAgICAvLyBgVmljZSBBbmQgVmFuaXR5YCwgZXNwZWNpYWxseSBmb3IgRnJlbmNoIGFuZCBHZXJtYW4uICBJdCBhcHBlYXJzIHRvXHJcbiAgICAvLyBoYXZlIGEgfjIwJSByZWdleCBwYXJzaW5nIG92ZXJoZWFkLCBidXQgYXQgbGVhc3QgdGhleSB3b3JrLlxyXG4gICAgbGV0IG1vZGlmaWVycyA9ICdpJztcclxuICAgIGlmIChyZWdleHBTdHJpbmcgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgbW9kaWZpZXJzICs9IChyZWdleHBTdHJpbmcuZ2xvYmFsID8gJ2cnIDogJycpICtcclxuICAgICAgICAocmVnZXhwU3RyaW5nLm11bHRpbGluZSA/ICdtJyA6ICcnKTtcclxuICAgICAgcmVnZXhwU3RyaW5nID0gcmVnZXhwU3RyaW5nLnNvdXJjZTtcclxuICAgIH1cclxuICAgIHJlZ2V4cFN0cmluZyA9IHJlZ2V4cFN0cmluZy5yZXBsYWNlKC9cXFxceVxceyguKj8pXFx9L2csIChtYXRjaCwgZ3JvdXApID0+IHtcclxuICAgICAgcmV0dXJuIGtDYWN0Ym90Q2F0ZWdvcmllc1tncm91cCBhcyBrZXlvZiB0eXBlb2Yga0NhY3Rib3RDYXRlZ29yaWVzXSB8fCBtYXRjaDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXhwU3RyaW5nLCBtb2RpZmllcnMpO1xyXG4gIH1cclxuXHJcbiAgLy8gTGlrZSBSZWdleC5SZWdleGVzLnBhcnNlLCBidXQgZm9yY2UgZ2xvYmFsIGZsYWcuXHJcbiAgc3RhdGljIHBhcnNlR2xvYmFsKHJlZ2V4cFN0cmluZzogUmVnRXhwIHwgc3RyaW5nKTogUmVnRXhwIHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gUmVnZXhlcy5wYXJzZShyZWdleHBTdHJpbmcpO1xyXG4gICAgbGV0IG1vZGlmaWVycyA9ICdnaSc7XHJcbiAgICBpZiAocmVnZXhwU3RyaW5nIGluc3RhbmNlb2YgUmVnRXhwKVxyXG4gICAgICBtb2RpZmllcnMgKz0gcmVnZXhwU3RyaW5nLm11bHRpbGluZSA/ICdtJyA6ICcnO1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXguc291cmNlLCBtb2RpZmllcnMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRydWVJZlVuZGVmaW5lZCh2YWx1ZT86IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiAhIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHZhbGlkYXRlUGFyYW1zKFxyXG4gICAgZjogUmVhZG9ubHk8eyBbczogc3RyaW5nXTogdW5rbm93biB9PixcclxuICAgIGZ1bmNOYW1lOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IFJlYWRvbmx5PHN0cmluZ1tdPixcclxuICApOiB2b2lkIHtcclxuICAgIGlmIChmID09PSBudWxsKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBpZiAodHlwZW9mIGYgIT09ICdvYmplY3QnKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZik7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgJHtmdW5jTmFtZX06IGludmFsaWQgcGFyYW1ldGVyICcke2tleX0nLiAgYCArXHJcbiAgICAgICAgICAgIGBWYWxpZCBwYXJhbXM6ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zKX1gLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmV0RmllbGRzLCBOZXRGaWVsZHNSZXZlcnNlIH0gZnJvbSAnLi4vdHlwZXMvbmV0X2ZpZWxkcyc7XHJcbmltcG9ydCB7IE5ldFBhcmFtcyB9IGZyb20gJy4uL3R5cGVzL25ldF9wcm9wcyc7XHJcbmltcG9ydCB7IENhY3Rib3RCYXNlUmVnRXhwIH0gZnJvbSAnLi4vdHlwZXMvbmV0X3RyaWdnZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBMb2dEZWZpbml0aW9uTmFtZSxcclxuICBsb2dEZWZpbml0aW9uc1ZlcnNpb25zLFxyXG4gIExvZ0RlZmluaXRpb25WZXJzaW9ucyxcclxuICBQYXJzZUhlbHBlckZpZWxkcyxcclxuICBSZXBlYXRpbmdGaWVsZHNEZWZpbml0aW9ucyxcclxuICBSZXBlYXRpbmdGaWVsZHNUeXBlcyxcclxufSBmcm9tICcuL25ldGxvZ19kZWZzJztcclxuaW1wb3J0IHsgVW5yZWFjaGFibGVDb2RlIH0gZnJvbSAnLi9ub3RfcmVhY2hlZCc7XHJcbmltcG9ydCBSZWdleGVzIGZyb20gJy4vcmVnZXhlcyc7XHJcblxyXG5jb25zdCBzZXBhcmF0b3IgPSAnXFxcXHwnO1xyXG5jb25zdCBtYXRjaERlZmF1bHQgPSAnW158XSonO1xyXG5cclxuLy8gSWYgTmV0UmVnZXhlcy5zZXRGbGFnVHJhbnNsYXRpb25zTmVlZGVkIGlzIHNldCB0byB0cnVlLCB0aGVuIGFueVxyXG4vLyByZWdleCBjcmVhdGVkIHRoYXQgcmVxdWlyZXMgYSB0cmFuc2xhdGlvbiB3aWxsIGJlZ2luIHdpdGggdGhpcyBzdHJpbmdcclxuLy8gYW5kIG1hdGNoIHRoZSBtYWdpY1N0cmluZ1JlZ2V4LiAgVGhpcyBpcyBtYXliZSBhIGJpdCBnb29meSwgYnV0IGlzXHJcbi8vIGEgcHJldHR5IHN0cmFpZ2h0Zm9yd2FyZCB3YXkgdG8gbWFyayByZWdleGVzIGZvciB0cmFuc2xhdGlvbnMuXHJcbi8vIElmIGlzc3VlICMxMzA2IGlzIGV2ZXIgcmVzb2x2ZWQsIHdlIGNhbiByZW1vdmUgdGhpcy5cclxuY29uc3QgbWFnaWNUcmFuc2xhdGlvblN0cmluZyA9IGBeXmA7XHJcbmNvbnN0IG1hZ2ljU3RyaW5nUmVnZXggPSAvXlxcXlxcXi87XHJcblxyXG4vLyBjYW4ndCBzaW1wbHkgZXhwb3J0IHRoaXMsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L3B1bGwvNDk1NyNkaXNjdXNzaW9uX3IxMDAyNTkwNTg5XHJcbmNvbnN0IGtleXNUaGF0UmVxdWlyZVRyYW5zbGF0aW9uQXNDb25zdCA9IFtcclxuICAnYWJpbGl0eScsXHJcbiAgJ25hbWUnLFxyXG4gICdzb3VyY2UnLFxyXG4gICd0YXJnZXQnLFxyXG4gICdsaW5lJyxcclxuXSBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IGtleXNUaGF0UmVxdWlyZVRyYW5zbGF0aW9uOiByZWFkb25seSBzdHJpbmdbXSA9IGtleXNUaGF0UmVxdWlyZVRyYW5zbGF0aW9uQXNDb25zdDtcclxuZXhwb3J0IHR5cGUgS2V5c1RoYXRSZXF1aXJlVHJhbnNsYXRpb24gPSB0eXBlb2Yga2V5c1RoYXRSZXF1aXJlVHJhbnNsYXRpb25Bc0NvbnN0W251bWJlcl07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZUxvZ0NvZGVzID0ge1xyXG4gIGVjaG86ICcwMDM4JyxcclxuICBkaWFsb2c6ICcwMDQ0JyxcclxuICBtZXNzYWdlOiAnMDgzOScsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vLyBTZWUgZG9jcy9Mb2dHdWlkZS5tZCBmb3IgbW9yZSBpbmZvIGFib3V0IHRoZXNlIGNhdGVnb3JpZXNcclxuZXhwb3J0IGNvbnN0IGFjdG9yQ29udHJvbFR5cGUgPSB7XHJcbiAgc2V0QW5pbVN0YXRlOiAnMDAzRScsXHJcbiAgcHVibGljQ29udGVudFRleHQ6ICcwODM0JyxcclxuICBsb2dNc2c6ICcwMjBGJyxcclxuICBsb2dNc2dQYXJhbXM6ICcwMjEwJyxcclxufSBhcyBjb25zdDtcclxuXHJcbmNvbnN0IGRlZmF1bHRQYXJhbXMgPSA8XHJcbiAgVCBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lLFxyXG4gIFYgZXh0ZW5kcyBMb2dEZWZpbml0aW9uVmVyc2lvbnMsXHJcbj4odHlwZTogVCwgdmVyc2lvbjogViwgaW5jbHVkZT86IHN0cmluZ1tdKTogUGFydGlhbDxQYXJzZUhlbHBlckZpZWxkczxUPj4gPT4ge1xyXG4gIGNvbnN0IGxvZ1R5cGUgPSBsb2dEZWZpbml0aW9uc1ZlcnNpb25zW3ZlcnNpb25dW3R5cGVdO1xyXG4gIGlmIChpbmNsdWRlID09PSB1bmRlZmluZWQpIHtcclxuICAgIGluY2x1ZGUgPSBPYmplY3Qua2V5cyhsb2dUeXBlLmZpZWxkcyk7XHJcbiAgICBpZiAoJ3JlcGVhdGluZ0ZpZWxkcycgaW4gbG9nVHlwZSkge1xyXG4gICAgICBpbmNsdWRlLnB1c2gobG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMubGFiZWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyYW1zOiB7XHJcbiAgICBbaW5kZXg6IG51bWJlcl06IHtcclxuICAgICAgZmllbGQ6IHN0cmluZztcclxuICAgICAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgICAgIG9wdGlvbmFsOiBib29sZWFuO1xyXG4gICAgICByZXBlYXRpbmc/OiBib29sZWFuO1xyXG4gICAgICByZXBlYXRpbmdLZXlzPzogc3RyaW5nW107XHJcbiAgICAgIHNvcnRLZXlzPzogYm9vbGVhbjtcclxuICAgICAgcHJpbWFyeUtleT86IHN0cmluZztcclxuICAgICAgcG9zc2libGVLZXlzPzogc3RyaW5nW107XHJcbiAgICB9O1xyXG4gIH0gPSB7fTtcclxuICBjb25zdCBmaXJzdE9wdGlvbmFsRmllbGQgPSBsb2dUeXBlLmZpcnN0T3B0aW9uYWxGaWVsZDtcclxuXHJcbiAgZm9yIChjb25zdCBbcHJvcCwgaW5kZXhdIG9mIE9iamVjdC5lbnRyaWVzKGxvZ1R5cGUuZmllbGRzKSkge1xyXG4gICAgaWYgKCFpbmNsdWRlLmluY2x1ZGVzKHByb3ApKVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIGNvbnN0IHBhcmFtOiB7IGZpZWxkOiBzdHJpbmc7IHZhbHVlPzogc3RyaW5nOyBvcHRpb25hbDogYm9vbGVhbjsgcmVwZWF0aW5nPzogYm9vbGVhbiB9ID0ge1xyXG4gICAgICBmaWVsZDogcHJvcCxcclxuICAgICAgb3B0aW9uYWw6IGZpcnN0T3B0aW9uYWxGaWVsZCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ID49IGZpcnN0T3B0aW9uYWxGaWVsZCxcclxuICAgIH07XHJcbiAgICBpZiAocHJvcCA9PT0gJ3R5cGUnKVxyXG4gICAgICBwYXJhbS52YWx1ZSA9IGxvZ1R5cGUudHlwZTtcclxuXHJcbiAgICBwYXJhbXNbaW5kZXhdID0gcGFyYW07XHJcbiAgfVxyXG5cclxuICBpZiAoJ3JlcGVhdGluZ0ZpZWxkcycgaW4gbG9nVHlwZSAmJiBpbmNsdWRlLmluY2x1ZGVzKGxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLmxhYmVsKSkge1xyXG4gICAgcGFyYW1zW2xvZ1R5cGUucmVwZWF0aW5nRmllbGRzLnN0YXJ0aW5nSW5kZXhdID0ge1xyXG4gICAgICBmaWVsZDogbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMubGFiZWwsXHJcbiAgICAgIG9wdGlvbmFsOiBmaXJzdE9wdGlvbmFsRmllbGQgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIGxvZ1R5cGUucmVwZWF0aW5nRmllbGRzLnN0YXJ0aW5nSW5kZXggPj0gZmlyc3RPcHRpb25hbEZpZWxkLFxyXG4gICAgICByZXBlYXRpbmc6IHRydWUsXHJcbiAgICAgIHJlcGVhdGluZ0tleXM6IFsuLi5sb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5uYW1lc10sXHJcbiAgICAgIHNvcnRLZXlzOiBsb2dUeXBlLnJlcGVhdGluZ0ZpZWxkcy5zb3J0S2V5cyxcclxuICAgICAgcHJpbWFyeUtleTogbG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMucHJpbWFyeUtleSxcclxuICAgICAgcG9zc2libGVLZXlzOiBbLi4ubG9nVHlwZS5yZXBlYXRpbmdGaWVsZHMucG9zc2libGVLZXlzXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFyYW1zIGFzIFBhcnRpYWw8UGFyc2VIZWxwZXJGaWVsZHM8VD4+O1xyXG59O1xyXG5cclxudHlwZSBSZXBlYXRpbmdGaWVsZHNNYXA8XHJcbiAgVEJhc2UgZXh0ZW5kcyBMb2dEZWZpbml0aW9uTmFtZSxcclxuICBUS2V5IGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPSBUQmFzZSBleHRlbmRzIFJlcGVhdGluZ0ZpZWxkc1R5cGVzID8gVEJhc2UgOiBuZXZlcixcclxuPiA9IHtcclxuICBbbmFtZSBpbiBSZXBlYXRpbmdGaWVsZHNEZWZpbml0aW9uc1tUS2V5XVsncmVwZWF0aW5nRmllbGRzJ11bJ25hbWVzJ11bbnVtYmVyXV06XHJcbiAgICB8IHN0cmluZ1xyXG4gICAgfCBzdHJpbmdbXTtcclxufVtdO1xyXG5cclxudHlwZSBSZXBlYXRpbmdGaWVsZHNNYXBUeXBlQ2hlY2s8XHJcbiAgVEJhc2UgZXh0ZW5kcyBMb2dEZWZpbml0aW9uTmFtZSxcclxuICBGIGV4dGVuZHMga2V5b2YgTmV0RmllbGRzW1RCYXNlXSxcclxuICBUS2V5IGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPSBUQmFzZSBleHRlbmRzIFJlcGVhdGluZ0ZpZWxkc1R5cGVzID8gVEJhc2UgOiBuZXZlcixcclxuPiA9IEYgZXh0ZW5kcyBSZXBlYXRpbmdGaWVsZHNEZWZpbml0aW9uc1tUS2V5XVsncmVwZWF0aW5nRmllbGRzJ11bJ2xhYmVsJ11cclxuICA/IFJlcGVhdGluZ0ZpZWxkc01hcDxUS2V5PiA6XHJcbiAgbmV2ZXI7XHJcblxyXG50eXBlIFJlcGVhdGluZ0ZpZWxkc01hcFR5cGU8XHJcbiAgVCBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lLFxyXG4gIEYgZXh0ZW5kcyBrZXlvZiBOZXRGaWVsZHNbVF0sXHJcbj4gPSBUIGV4dGVuZHMgUmVwZWF0aW5nRmllbGRzVHlwZXMgPyBSZXBlYXRpbmdGaWVsZHNNYXBUeXBlQ2hlY2s8VCwgRj5cclxuICA6IG5ldmVyO1xyXG5cclxudHlwZSBQYXJzZUhlbHBlclR5cGU8VCBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lPiA9XHJcbiAgJiB7XHJcbiAgICBbZmllbGQgaW4ga2V5b2YgTmV0RmllbGRzW1RdXT86IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgUmVwZWF0aW5nRmllbGRzTWFwVHlwZTxULCBmaWVsZD47XHJcbiAgfVxyXG4gICYgeyBjYXB0dXJlPzogYm9vbGVhbiB9O1xyXG5cclxuY29uc3QgaXNSZXBlYXRpbmdGaWVsZCA9IDxcclxuICBUIGV4dGVuZHMgTG9nRGVmaW5pdGlvbk5hbWUsXHJcbj4oXHJcbiAgcmVwZWF0aW5nOiBib29sZWFuIHwgdW5kZWZpbmVkLFxyXG4gIHZhbHVlOiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSB8IFJlcGVhdGluZ0ZpZWxkc01hcDxUPiB8IHVuZGVmaW5lZCxcclxuKTogdmFsdWUgaXMgUmVwZWF0aW5nRmllbGRzTWFwPFQ+ID0+IHtcclxuICBpZiAocmVwZWF0aW5nICE9PSB0cnVlKVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIC8vIEFsbG93IGV4Y2x1ZGluZyB0aGUgZmllbGQgdG8gbWF0Y2ggZm9yIGV4dHJhY3Rpb25cclxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZClcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgZm9yIChjb25zdCBlIG9mIHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIGUgIT09ICdvYmplY3QnKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VIZWxwZXIgPSA8VCBleHRlbmRzIExvZ0RlZmluaXRpb25OYW1lPihcclxuICBwYXJhbXM6IFBhcnNlSGVscGVyVHlwZTxUPiB8IHVuZGVmaW5lZCxcclxuICBmdW5jTmFtZTogc3RyaW5nLFxyXG4gIGZpZWxkczogUGFydGlhbDxQYXJzZUhlbHBlckZpZWxkczxUPj4sXHJcbik6IENhY3Rib3RCYXNlUmVnRXhwPFQ+ID0+IHtcclxuICBwYXJhbXMgPSBwYXJhbXMgPz8ge307XHJcbiAgY29uc3QgdmFsaWRGaWVsZHM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGZvciAoY29uc3QgaW5kZXggaW4gZmllbGRzKSB7XHJcbiAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XHJcbiAgICBpZiAoZmllbGQpXHJcbiAgICAgIHZhbGlkRmllbGRzLnB1c2goZmllbGQuZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgUmVnZXhlcy52YWxpZGF0ZVBhcmFtcyhwYXJhbXMsIGZ1bmNOYW1lLCBbJ2NhcHR1cmUnLCAuLi52YWxpZEZpZWxkc10pO1xyXG5cclxuICAvLyBGaW5kIHRoZSBsYXN0IGtleSB3ZSBjYXJlIGFib3V0LCBzbyB3ZSBjYW4gc2hvcnRlbiB0aGUgcmVnZXggaWYgbmVlZGVkLlxyXG4gIGNvbnN0IGNhcHR1cmUgPSBSZWdleGVzLnRydWVJZlVuZGVmaW5lZChwYXJhbXMuY2FwdHVyZSk7XHJcbiAgY29uc3QgZmllbGRLZXlzID0gT2JqZWN0LmtleXMoZmllbGRzKS5zb3J0KChhLCBiKSA9PiBwYXJzZUludChhKSAtIHBhcnNlSW50KGIpKTtcclxuICBsZXQgbWF4S2V5U3RyOiBzdHJpbmc7XHJcbiAgaWYgKGNhcHR1cmUpIHtcclxuICAgIGNvbnN0IGtleXM6IEV4dHJhY3Q8a2V5b2YgTmV0RmllbGRzUmV2ZXJzZVtUXSwgc3RyaW5nPltdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZHMpXHJcbiAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgbGV0IHRtcEtleSA9IGtleXMucG9wKCk7XHJcbiAgICBpZiAodG1wS2V5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgbWF4S2V5U3RyID0gZmllbGRLZXlzW2ZpZWxkS2V5cy5sZW5ndGggLSAxXSA/PyAnMCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aGlsZSAoXHJcbiAgICAgICAgZmllbGRzW3RtcEtleV0/Lm9wdGlvbmFsICYmXHJcbiAgICAgICAgISgoZmllbGRzW3RtcEtleV0/LmZpZWxkID8/ICcnKSBpbiBwYXJhbXMpXHJcbiAgICAgIClcclxuICAgICAgICB0bXBLZXkgPSBrZXlzLnBvcCgpO1xyXG4gICAgICBtYXhLZXlTdHIgPSB0bXBLZXkgPz8gJzAnO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtYXhLZXlTdHIgPSAnMCc7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZHMpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBmaWVsZHNba2V5XSA/PyB7fTtcclxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkc1trZXldPy5maWVsZDtcclxuICAgICAgaWYgKGZpZWxkTmFtZSAhPT0gdW5kZWZpbmVkICYmIGZpZWxkTmFtZSBpbiBwYXJhbXMpXHJcbiAgICAgICAgbWF4S2V5U3RyID0ga2V5O1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBtYXhLZXkgPSBwYXJzZUludChtYXhLZXlTdHIpO1xyXG5cclxuICAvLyBGb3IgdGVzdGluZywgaXQncyB1c2VmdWwgdG8ga25vdyBpZiB0aGlzIGlzIGEgcmVnZXggdGhhdCByZXF1aXJlc1xyXG4gIC8vIHRyYW5zbGF0aW9uLiAgV2UgdGVzdCB0aGlzIGJ5IHNlZWluZyBpZiB0aGVyZSBhcmUgYW55IHNwZWNpZmllZFxyXG4gIC8vIGZpZWxkcywgYW5kIGlmIHNvLCBpbnNlcnRpbmcgYSBtYWdpYyBzdHJpbmcgdGhhdCB3ZSBjYW4gZGV0ZWN0LlxyXG4gIC8vIFRoaXMgbGV0cyB1cyBkaWZmZXJlbnRpYXRlIGJldHdlZW4gXCJyZWdleCB0aGF0IHNob3VsZCBiZSB0cmFuc2xhdGVkXCJcclxuICAvLyBlLmcuIGEgcmVnZXggd2l0aCBgdGFyZ2V0YCBzcGVjaWZpZWQsIGFuZCBcInJlZ2V4IHRoYXQgc2hvdWxkbid0XCJcclxuICAvLyBlLmcuIGEgZ2FpbnMgZWZmZWN0IHdpdGgganVzdCBlZmZlY3RJZCBzcGVjaWZpZWQuXHJcbiAgY29uc3QgdHJhbnNQYXJhbXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpLmZpbHRlcigoaykgPT4ga2V5c1RoYXRSZXF1aXJlVHJhbnNsYXRpb24uaW5jbHVkZXMoaykpO1xyXG4gIGNvbnN0IG5lZWRzVHJhbnNsYXRpb25zID0gTmV0UmVnZXhlcy5mbGFnVHJhbnNsYXRpb25zTmVlZGVkICYmIHRyYW5zUGFyYW1zLmxlbmd0aCA+IDA7XHJcblxyXG4gIC8vIEJ1aWxkIHRoZSByZWdleCBmcm9tIHRoZSBmaWVsZHMuXHJcbiAgbGV0IHN0ciA9IG5lZWRzVHJhbnNsYXRpb25zID8gbWFnaWNUcmFuc2xhdGlvblN0cmluZyA6ICdeJztcclxuICBsZXQgbGFzdEtleSA9IC0xO1xyXG4gIGZvciAoY29uc3Qga2V5U3RyIGluIGZpZWxkcykge1xyXG4gICAgY29uc3Qga2V5ID0gcGFyc2VJbnQoa2V5U3RyKTtcclxuICAgIC8vIEZpbGwgaW4gYmxhbmtzLlxyXG4gICAgY29uc3QgbWlzc2luZ0ZpZWxkcyA9IGtleSAtIGxhc3RLZXkgLSAxO1xyXG4gICAgaWYgKG1pc3NpbmdGaWVsZHMgPT09IDEpXHJcbiAgICAgIHN0ciArPSAnXFxcXHl7TmV0RmllbGR9JztcclxuICAgIGVsc2UgaWYgKG1pc3NpbmdGaWVsZHMgPiAxKVxyXG4gICAgICBzdHIgKz0gYFxcXFx5e05ldEZpZWxkfXske21pc3NpbmdGaWVsZHN9fWA7XHJcbiAgICBsYXN0S2V5ID0ga2V5O1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gZmllbGRzW2tleVN0cl07XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JylcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2Z1bmNOYW1lfTogaW52YWxpZCB2YWx1ZTogJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9YCk7XHJcblxyXG4gICAgY29uc3QgZmllbGROYW1lID0gdmFsdWUuZmllbGQ7XHJcbiAgICBjb25zdCBkZWZhdWx0RmllbGRWYWx1ZSA9IHZhbHVlLnZhbHVlPy50b1N0cmluZygpID8/IG1hdGNoRGVmYXVsdDtcclxuICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBwYXJhbXNbZmllbGROYW1lXTtcclxuXHJcbiAgICBpZiAoaXNSZXBlYXRpbmdGaWVsZChmaWVsZHNba2V5U3RyXT8ucmVwZWF0aW5nLCBmaWVsZFZhbHVlKSkge1xyXG4gICAgICBsZXQgcmVwZWF0aW5nQXJyYXk6IFJlcGVhdGluZ0ZpZWxkc01hcDxUPiB8IHVuZGVmaW5lZCA9IGZpZWxkVmFsdWU7XHJcblxyXG4gICAgICBjb25zdCBzb3J0S2V5cyA9IGZpZWxkc1trZXlTdHJdPy5zb3J0S2V5cztcclxuICAgICAgY29uc3QgcHJpbWFyeUtleSA9IGZpZWxkc1trZXlTdHJdPy5wcmltYXJ5S2V5O1xyXG4gICAgICBjb25zdCBwb3NzaWJsZUtleXMgPSBmaWVsZHNba2V5U3RyXT8ucG9zc2libGVLZXlzO1xyXG5cclxuICAgICAgLy8gcHJpbWFyeUtleSBpcyByZXF1aXJlZCBpZiB0aGlzIGlzIGEgcmVwZWF0aW5nIGZpZWxkIHBlciB0eXBlZGVmIGluIG5ldGxvZ19kZWZzLnRzXHJcbiAgICAgIC8vIFNhbWUgd2l0aCBwb3NzaWJsZUtleXNcclxuICAgICAgaWYgKHByaW1hcnlLZXkgPT09IHVuZGVmaW5lZCB8fCBwb3NzaWJsZUtleXMgPT09IHVuZGVmaW5lZClcclxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDb2RlKCk7XHJcblxyXG4gICAgICAvLyBBbGxvdyBzb3J0aW5nIGlmIG5lZWRlZFxyXG4gICAgICBpZiAoc29ydEtleXMpIHtcclxuICAgICAgICAvLyBBbHNvIHNvcnQgb3VyIHZhbGlkIGtleXMgbGlzdFxyXG4gICAgICAgIHBvc3NpYmxlS2V5cy5zb3J0KChsZWZ0LCByaWdodCkgPT4gbGVmdC50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUocmlnaHQudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgICAgIGlmIChyZXBlYXRpbmdBcnJheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXBlYXRpbmdBcnJheSA9IFsuLi5yZXBlYXRpbmdBcnJheV0uc29ydChcclxuICAgICAgICAgICAgKGxlZnQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LCByaWdodDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIFdlIGNoZWNrIHRoZSB2YWxpZGl0eSBvZiBsZWZ0L3JpZ2h0IGJlY2F1c2UgdGhleSdyZSB1c2VyLXN1cHBsaWVkXHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsZWZ0ICE9PSAnb2JqZWN0JyB8fCBsZWZ0W3ByaW1hcnlLZXldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBhcmd1bWVudCBwYXNzZWQgdG8gdHJpZ2dlcjonLCBsZWZ0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zdCBsZWZ0VmFsdWUgPSBsZWZ0W3ByaW1hcnlLZXldO1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbGVmdFZhbHVlICE9PSAnc3RyaW5nJyB8fCAhcG9zc2libGVLZXlzPy5pbmNsdWRlcyhsZWZ0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgYXJndW1lbnQgcGFzc2VkIHRvIHRyaWdnZXI6JywgbGVmdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiByaWdodCAhPT0gJ29iamVjdCcgfHwgcmlnaHRbcHJpbWFyeUtleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byB0cmlnZ2VyOicsIHJpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zdCByaWdodFZhbHVlID0gcmlnaHRbcHJpbWFyeUtleV07XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiByaWdodFZhbHVlICE9PSAnc3RyaW5nJyB8fCAhcG9zc2libGVLZXlzPy5pbmNsdWRlcyhyaWdodFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGFyZ3VtZW50IHBhc3NlZCB0byB0cmlnZ2VyOicsIHJpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gbGVmdFZhbHVlLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShyaWdodFZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGFub25SZXBzOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9W10gfCB1bmRlZmluZWQgPSByZXBlYXRpbmdBcnJheTtcclxuICAgICAgLy8gTG9vcCBvdmVyIG91ciBwb3NzaWJsZSBrZXlzXHJcbiAgICAgIC8vIEJ1aWxkIGEgcmVnZXggdGhhdCBjYW4gbWF0Y2ggYW55IHBvc3NpYmxlIGtleSB3aXRoIHJlcXVpcmVkIHZhbHVlcyBzdWJzdGl0dXRlZCBpblxyXG4gICAgICBwb3NzaWJsZUtleXMuZm9yRWFjaCgocG9zc2libGVLZXkpID0+IHtcclxuICAgICAgICBjb25zdCByZXAgPSBhbm9uUmVwcz8uZmluZCgocmVwKSA9PiBwcmltYXJ5S2V5IGluIHJlcCAmJiByZXBbcHJpbWFyeUtleV0gPT09IHBvc3NpYmxlS2V5KTtcclxuXHJcbiAgICAgICAgbGV0IGZpZWxkUmVnZXggPSAnJztcclxuICAgICAgICAvLyBSYXRoZXIgdGhhbiBsb29waW5nIG92ZXIgdGhlIGtleXMgZGVmaW5lZCBvbiB0aGUgb2JqZWN0LFxyXG4gICAgICAgIC8vIGxvb3Agb3ZlciB0aGUgYmFzZSB0eXBlIGRlZidzIGtleXMuIFRoaXMgZW5mb3JjZXMgdGhlIGNvcnJlY3Qgb3JkZXIuXHJcbiAgICAgICAgZmllbGRzW2tleVN0cl0/LnJlcGVhdGluZ0tleXM/LmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgbGV0IHZhbCA9IHJlcD8uW2tleV07XHJcbiAgICAgICAgICBpZiAocmVwID09PSB1bmRlZmluZWQgfHwgIShrZXkgaW4gcmVwKSkge1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgdmFsdWUgZm9yIHRoaXMga2V5XHJcbiAgICAgICAgICAgIC8vIGluc2VydCBhIHBsYWNlaG9sZGVyLCB1bmxlc3MgaXQncyB0aGUgcHJpbWFyeSBrZXlcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gcHJpbWFyeUtleSlcclxuICAgICAgICAgICAgICB2YWwgPSBwb3NzaWJsZUtleTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgIHZhbCA9IG1hdGNoRGVmYXVsdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICAgICAgICB2YWwgPSBtYXRjaERlZmF1bHQ7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbC5sZW5ndGggPCAxKVxyXG4gICAgICAgICAgICAgIHZhbCA9IG1hdGNoRGVmYXVsdDtcclxuICAgICAgICAgICAgZWxzZSBpZiAodmFsLnNvbWUoKHYpID0+IHR5cGVvZiB2ICE9PSAnc3RyaW5nJykpXHJcbiAgICAgICAgICAgICAgdmFsID0gbWF0Y2hEZWZhdWx0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZmllbGRSZWdleCArPSBSZWdleGVzLm1heWJlQ2FwdHVyZShcclxuICAgICAgICAgICAga2V5ID09PSBwcmltYXJ5S2V5ID8gZmFsc2UgOiBjYXB0dXJlLFxyXG4gICAgICAgICAgICAvLyBBbGwgY2FwdHVyaW5nIGdyb3VwcyBhcmUgYGZpZWxkTmFtZWAgKyBgcG9zc2libGVLZXlgLCBlLmcuIGBwYWlySXNDYXN0aW5nMWBcclxuICAgICAgICAgICAgZmllbGROYW1lICsgcG9zc2libGVLZXksXHJcbiAgICAgICAgICAgIHZhbCxcclxuICAgICAgICAgICAgZGVmYXVsdEZpZWxkVmFsdWUsXHJcbiAgICAgICAgICApICtcclxuICAgICAgICAgICAgc2VwYXJhdG9yO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoZmllbGRSZWdleC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBzdHIgKz0gYCg/OiR7ZmllbGRSZWdleH0pJHtyZXAgIT09IHVuZGVmaW5lZCA/ICcnIDogJz8nfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZmllbGRzW2tleVN0cl0/LnJlcGVhdGluZykge1xyXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcmVwZWF0aW5nIGZpZWxkIGJ1dCB0aGUgYWN0dWFsIHZhbHVlIGlzIGVtcHR5IG9yIG90aGVyd2lzZSBpbnZhbGlkLFxyXG4gICAgICAvLyBkb24ndCBwcm9jZXNzIGZ1cnRoZXIuIFdlIGNhbid0IHVzZSBgY29udGludWVgIGluIHRoZSBhYm92ZSBibG9jayBiZWNhdXNlIHRoYXRcclxuICAgICAgLy8gd291bGQgc2tpcCB0aGUgZWFybHktb3V0IGJyZWFrIGF0IHRoZSBlbmQgb2YgdGhlIGxvb3AuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoZmllbGROYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzdHIgKz0gUmVnZXhlcy5tYXliZUNhcHR1cmUoXHJcbiAgICAgICAgICAvLyBtb3JlIGFjY3VyYXRlIHR5cGUgaW5zdGVhZCBvZiBgYXNgIGNhc3RcclxuICAgICAgICAgIC8vIG1heWJlIHRoaXMgZnVuY3Rpb24gbmVlZHMgYSByZWZhY3RvcmluZ1xyXG4gICAgICAgICAgY2FwdHVyZSxcclxuICAgICAgICAgIGZpZWxkTmFtZSxcclxuICAgICAgICAgIGZpZWxkVmFsdWUsXHJcbiAgICAgICAgICBkZWZhdWx0RmllbGRWYWx1ZSxcclxuICAgICAgICApICtcclxuICAgICAgICAgIHNlcGFyYXRvcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdHIgKz0gZGVmYXVsdEZpZWxkVmFsdWUgKyBzZXBhcmF0b3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTdG9wIGlmIHdlJ3JlIG5vdCBjYXB0dXJpbmcgYW5kIGRvbid0IGNhcmUgYWJvdXQgZnV0dXJlIGZpZWxkcy5cclxuICAgIGlmIChrZXkgPj0gbWF4S2V5KVxyXG4gICAgICBicmVhaztcclxuICB9XHJcbiAgcmV0dXJuIFJlZ2V4ZXMucGFyc2Uoc3RyKSBhcyBDYWN0Ym90QmFzZVJlZ0V4cDxUPjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZFJlZ2V4ID0gPFQgZXh0ZW5kcyBrZXlvZiBOZXRQYXJhbXM+KFxyXG4gIHR5cGU6IFQsXHJcbiAgcGFyYW1zPzogUGFyc2VIZWxwZXJUeXBlPFQ+LFxyXG4pOiBDYWN0Ym90QmFzZVJlZ0V4cDxUPiA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSGVscGVyKHBhcmFtcywgdHlwZSwgZGVmYXVsdFBhcmFtcyh0eXBlLCBOZXRSZWdleGVzLmxvZ1ZlcnNpb24pKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldFJlZ2V4ZXMge1xyXG4gIHN0YXRpYyBsb2dWZXJzaW9uOiBMb2dEZWZpbml0aW9uVmVyc2lvbnMgPSAnbGF0ZXN0JztcclxuXHJcbiAgc3RhdGljIGZsYWdUcmFuc2xhdGlvbnNOZWVkZWQgPSBmYWxzZTtcclxuICBzdGF0aWMgc2V0RmxhZ1RyYW5zbGF0aW9uc05lZWRlZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgTmV0UmVnZXhlcy5mbGFnVHJhbnNsYXRpb25zTmVlZGVkID0gdmFsdWU7XHJcbiAgfVxyXG4gIHN0YXRpYyBkb2VzTmV0UmVnZXhOZWVkVHJhbnNsYXRpb24ocmVnZXg6IFJlZ0V4cCB8IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgLy8gTmVlZCB0byBgc2V0RmxhZ1RyYW5zbGF0aW9uc05lZWRlZGAgYmVmb3JlIGNhbGxpbmcgdGhpcyBmdW5jdGlvbi5cclxuICAgIGNvbnNvbGUuYXNzZXJ0KE5ldFJlZ2V4ZXMuZmxhZ1RyYW5zbGF0aW9uc05lZWRlZCk7XHJcbiAgICBjb25zdCBzdHIgPSB0eXBlb2YgcmVnZXggPT09ICdzdHJpbmcnID8gcmVnZXggOiByZWdleC5zb3VyY2U7XHJcbiAgICByZXR1cm4gISFtYWdpY1N0cmluZ1JlZ2V4LmV4ZWMoc3RyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMC0weDE0LW5ldHdvcmtzdGFydHNjYXN0aW5nXHJcbiAgICovXHJcbiAgc3RhdGljIHN0YXJ0c1VzaW5nKHBhcmFtcz86IE5ldFBhcmFtc1snU3RhcnRzVXNpbmcnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdTdGFydHNVc2luZyc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTdGFydHNVc2luZycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjEtMHgxNS1uZXR3b3JrYWJpbGl0eVxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yMi0weDE2LW5ldHdvcmthb2VhYmlsaXR5XHJcbiAgICovXHJcbiAgc3RhdGljIGFiaWxpdHkocGFyYW1zPzogTmV0UGFyYW1zWydBYmlsaXR5J10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWJpbGl0eSc+IHtcclxuICAgIHJldHVybiBwYXJzZUhlbHBlcihwYXJhbXMsICdBYmlsaXR5Jywge1xyXG4gICAgICAuLi5kZWZhdWx0UGFyYW1zKCdBYmlsaXR5JywgTmV0UmVnZXhlcy5sb2dWZXJzaW9uKSxcclxuICAgICAgLy8gT3ZlcnJpZGUgdHlwZVxyXG4gICAgICAwOiB7IGZpZWxkOiAndHlwZScsIHZhbHVlOiAnMlsxMl0nLCBvcHRpb25hbDogZmFsc2UgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTIxLTB4MTUtbmV0d29ya2FiaWxpdHlcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjItMHgxNi1uZXR3b3JrYW9lYWJpbGl0eVxyXG4gICAqXHJcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBhYmlsaXR5YCBpbnN0ZWFkXHJcbiAgICovXHJcbiAgc3RhdGljIGFiaWxpdHlGdWxsKHBhcmFtcz86IE5ldFBhcmFtc1snQWJpbGl0eSddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FiaWxpdHknPiB7XHJcbiAgICByZXR1cm4gdGhpcy5hYmlsaXR5KHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjctMHgxYi1uZXR3b3JrdGFyZ2V0aWNvbi1oZWFkLW1hcmtlclxyXG4gICAqL1xyXG4gIHN0YXRpYyBoZWFkTWFya2VyKHBhcmFtcz86IE5ldFBhcmFtc1snSGVhZE1hcmtlciddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0hlYWRNYXJrZXInPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnSGVhZE1hcmtlcicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDMtMHgwMy1hZGRjb21iYXRhbnRcclxuICAgKi9cclxuICBzdGF0aWMgYWRkZWRDb21iYXRhbnQocGFyYW1zPzogTmV0UGFyYW1zWydBZGRlZENvbWJhdGFudCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FkZGVkQ29tYmF0YW50Jz4ge1xyXG4gICAgcmV0dXJuIHBhcnNlSGVscGVyKFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgICdBZGRlZENvbWJhdGFudCcsXHJcbiAgICAgIGRlZmF1bHRQYXJhbXMoJ0FkZGVkQ29tYmF0YW50JywgTmV0UmVnZXhlcy5sb2dWZXJzaW9uKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDMtMHgwMy1hZGRjb21iYXRhbnRcclxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGFkZGVkQ29tYmF0YW50YCBpbnN0ZWFkXHJcbiAgICovXHJcbiAgc3RhdGljIGFkZGVkQ29tYmF0YW50RnVsbChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWRkZWRDb21iYXRhbnQnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWRkZWRDb21iYXRhbnQnPiB7XHJcbiAgICByZXR1cm4gTmV0UmVnZXhlcy5hZGRlZENvbWJhdGFudChwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTA0LTB4MDQtcmVtb3ZlY29tYmF0YW50XHJcbiAgICovXHJcbiAgc3RhdGljIHJlbW92aW5nQ29tYmF0YW50KFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydSZW1vdmVkQ29tYmF0YW50J10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1JlbW92ZWRDb21iYXRhbnQnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnUmVtb3ZlZENvbWJhdGFudCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjYtMHgxYS1uZXR3b3JrYnVmZlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnYWluc0VmZmVjdChwYXJhbXM/OiBOZXRQYXJhbXNbJ0dhaW5zRWZmZWN0J10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FpbnNFZmZlY3QnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnR2FpbnNFZmZlY3QnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJlZmVyIGdhaW5zRWZmZWN0IG92ZXIgdGhpcyBmdW5jdGlvbiB1bmxlc3MgeW91IHJlYWxseSBuZWVkIGV4dHJhIGRhdGEuXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTM4LTB4MjYtbmV0d29ya3N0YXR1c2VmZmVjdHNcclxuICAgKi9cclxuICBzdGF0aWMgc3RhdHVzRWZmZWN0RXhwbGljaXQoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1N0YXR1c0VmZmVjdCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdTdGF0dXNFZmZlY3QnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnU3RhdHVzRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0zMC0weDFlLW5ldHdvcmtidWZmcmVtb3ZlXHJcbiAgICovXHJcbiAgc3RhdGljIGxvc2VzRWZmZWN0KHBhcmFtcz86IE5ldFBhcmFtc1snTG9zZXNFZmZlY3QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdMb3Nlc0VmZmVjdCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdMb3Nlc0VmZmVjdCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMzUtMHgyMy1uZXR3b3JrdGV0aGVyXHJcbiAgICovXHJcbiAgc3RhdGljIHRldGhlcihwYXJhbXM/OiBOZXRQYXJhbXNbJ1RldGhlciddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1RldGhlcic+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdUZXRoZXInLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogJ3RhcmdldCcgd2FzIGRlZmVhdGVkIGJ5ICdzb3VyY2UnXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI1LTB4MTktbmV0d29ya2RlYXRoXHJcbiAgICovXHJcbiAgc3RhdGljIHdhc0RlZmVhdGVkKHBhcmFtcz86IE5ldFBhcmFtc1snV2FzRGVmZWF0ZWQnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdXYXNEZWZlYXRlZCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdXYXNEZWZlYXRlZCcsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjQtMHgxOC1uZXR3b3JrZG90XHJcbiAgICovXHJcbiAgc3RhdGljIG5ldHdvcmtEb1QocGFyYW1zPzogTmV0UGFyYW1zWydOZXR3b3JrRG9UJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnTmV0d29ya0RvVCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdOZXR3b3JrRG9UJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMC0weDAwLWxvZ2xpbmVcclxuICAgKi9cclxuICBzdGF0aWMgZWNobyhwYXJhbXM/OiBPbWl0PE5ldFBhcmFtc1snR2FtZUxvZyddLCAnY29kZSc+KTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhbWVMb2cnPiB7XHJcbiAgICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHBhcmFtcyA9IHt9O1xyXG4gICAgUmVnZXhlcy52YWxpZGF0ZVBhcmFtcyhcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICAnRWNobycsXHJcbiAgICAgIFsndHlwZScsICd0aW1lc3RhbXAnLCAnY29kZScsICduYW1lJywgJ2xpbmUnLCAnY2FwdHVyZSddLFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gTmV0UmVnZXhlcy5nYW1lTG9nKHsgLi4ucGFyYW1zLCBjb2RlOiBnYW1lTG9nQ29kZXMuZWNobyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMC0weDAwLWxvZ2xpbmVcclxuICAgKi9cclxuICBzdGF0aWMgZGlhbG9nKHBhcmFtcz86IE9taXQ8TmV0UGFyYW1zWydHYW1lTG9nJ10sICdjb2RlJz4pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnR2FtZUxvZyc+IHtcclxuICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAndW5kZWZpbmVkJylcclxuICAgICAgcGFyYW1zID0ge307XHJcbiAgICBSZWdleGVzLnZhbGlkYXRlUGFyYW1zKFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgICdEaWFsb2cnLFxyXG4gICAgICBbJ3R5cGUnLCAndGltZXN0YW1wJywgJ2NvZGUnLCAnbmFtZScsICdsaW5lJywgJ2NhcHR1cmUnXSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIE5ldFJlZ2V4ZXMuZ2FtZUxvZyh7IC4uLnBhcmFtcywgY29kZTogZ2FtZUxvZ0NvZGVzLmRpYWxvZyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMC0weDAwLWxvZ2xpbmVcclxuICAgKi9cclxuICBzdGF0aWMgbWVzc2FnZShwYXJhbXM/OiBPbWl0PE5ldFBhcmFtc1snR2FtZUxvZyddLCAnY29kZSc+KTogQ2FjdGJvdEJhc2VSZWdFeHA8J0dhbWVMb2cnPiB7XHJcbiAgICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHBhcmFtcyA9IHt9O1xyXG4gICAgUmVnZXhlcy52YWxpZGF0ZVBhcmFtcyhcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICAnTWVzc2FnZScsXHJcbiAgICAgIFsndHlwZScsICd0aW1lc3RhbXAnLCAnY29kZScsICduYW1lJywgJ2xpbmUnLCAnY2FwdHVyZSddLFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gTmV0UmVnZXhlcy5nYW1lTG9nKHsgLi4ucGFyYW1zLCBjb2RlOiBnYW1lTG9nQ29kZXMubWVzc2FnZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZpZWxkczogY29kZSwgbmFtZSwgbGluZSwgY2FwdHVyZVxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0wMC0weDAwLWxvZ2xpbmVcclxuICAgKi9cclxuICBzdGF0aWMgZ2FtZUxvZyhwYXJhbXM/OiBOZXRQYXJhbXNbJ0dhbWVMb2cnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0dhbWVMb2cnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTAwLTB4MDAtbG9nbGluZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnYW1lTmFtZUxvZyhwYXJhbXM/OiBOZXRQYXJhbXNbJ0dhbWVMb2cnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdHYW1lTG9nJz4ge1xyXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdGFiaWxpdHkuXHJcbiAgICByZXR1cm4gTmV0UmVnZXhlcy5nYW1lTG9nKHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMTItMHgwYy1wbGF5ZXJzdGF0c1xyXG4gICAqL1xyXG4gIHN0YXRpYyBzdGF0Q2hhbmdlKHBhcmFtcz86IE5ldFBhcmFtc1snUGxheWVyU3RhdHMnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdQbGF5ZXJTdGF0cyc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdQbGF5ZXJTdGF0cycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMDEtMHgwMS1jaGFuZ2V6b25lXHJcbiAgICovXHJcbiAgc3RhdGljIGNoYW5nZVpvbmUocGFyYW1zPzogTmV0UGFyYW1zWydDaGFuZ2Vab25lJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ2hhbmdlWm9uZSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdDaGFuZ2Vab25lJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0zMy0weDIxLW5ldHdvcms2ZC1hY3Rvci1jb250cm9sXHJcbiAgICovXHJcbiAgc3RhdGljIG5ldHdvcms2ZChwYXJhbXM/OiBOZXRQYXJhbXNbJ0FjdG9yQ29udHJvbCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FjdG9yQ29udHJvbCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBY3RvckNvbnRyb2wnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTM0LTB4MjItbmV0d29ya25hbWV0b2dnbGVcclxuICAgKi9cclxuICBzdGF0aWMgbmFtZVRvZ2dsZShwYXJhbXM/OiBOZXRQYXJhbXNbJ05hbWVUb2dnbGUnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdOYW1lVG9nZ2xlJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ05hbWVUb2dnbGUnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTQwLTB4MjgtbWFwXHJcbiAgICovXHJcbiAgc3RhdGljIG1hcChwYXJhbXM/OiBOZXRQYXJhbXNbJ01hcCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J01hcCc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdNYXAnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTQxLTB4Mjktc3lzdGVtbG9nbWVzc2FnZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBzeXN0ZW1Mb2dNZXNzYWdlKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydTeXN0ZW1Mb2dNZXNzYWdlJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J1N5c3RlbUxvZ01lc3NhZ2UnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnU3lzdGVtTG9nTWVzc2FnZScsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjU3LTB4MTAxLW1hcGVmZmVjdFxyXG4gICAqL1xyXG4gIHN0YXRpYyBtYXBFZmZlY3QocGFyYW1zPzogTmV0UGFyYW1zWydNYXBFZmZlY3QnXSk6IENhY3Rib3RCYXNlUmVnRXhwPCdNYXBFZmZlY3QnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnTWFwRWZmZWN0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNTgtMHgxMDItZmF0ZWRpcmVjdG9yXHJcbiAgICovXHJcbiAgc3RhdGljIGZhdGVEaXJlY3RvcihwYXJhbXM/OiBOZXRQYXJhbXNbJ0ZhdGVEaXJlY3RvciddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0ZhdGVEaXJlY3Rvcic+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdGYXRlRGlyZWN0b3InLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI1OS0weDEwMy1jZWRpcmVjdG9yXHJcbiAgICovXHJcbiAgc3RhdGljIGNlRGlyZWN0b3IocGFyYW1zPzogTmV0UGFyYW1zWydDRURpcmVjdG9yJ10pOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ0VEaXJlY3Rvcic+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdDRURpcmVjdG9yJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjAtMHgxMDQtaW5jb21iYXRcclxuICAgKi9cclxuICBzdGF0aWMgaW5Db21iYXQocGFyYW1zPzogTmV0UGFyYW1zWydJbkNvbWJhdCddKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0luQ29tYmF0Jz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0luQ29tYmF0JywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjEtMHgxMDUtY29tYmF0YW50bWVtb3J5XHJcbiAgICovXHJcbiAgc3RhdGljIGNvbWJhdGFudE1lbW9yeShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQ29tYmF0YW50TWVtb3J5J10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0NvbWJhdGFudE1lbW9yeSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdDb21iYXRhbnRNZW1vcnknLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2My0weDEwNy1zdGFydHN1c2luZ2V4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIHN0YXJ0c1VzaW5nRXh0cmEoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1N0YXJ0c1VzaW5nRXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnU3RhcnRzVXNpbmdFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTdGFydHNVc2luZ0V4dHJhJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNjQtMHgxMDgtYWJpbGl0eWV4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIGFiaWxpdHlFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWJpbGl0eUV4dHJhJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FiaWxpdHlFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBYmlsaXR5RXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2NS0weDEwOS1jb250ZW50ZmluZGVyc2V0dGluZ3NcclxuICAgKi9cclxuICBzdGF0aWMgY29udGVudEZpbmRlclNldHRpbmdzKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydDb250ZW50RmluZGVyU2V0dGluZ3MnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ29udGVudEZpbmRlclNldHRpbmdzJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NvbnRlbnRGaW5kZXJTZXR0aW5ncycsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY2LTB4MTBhLW5wY3llbGxcclxuICAgKi9cclxuICBzdGF0aWMgbnBjWWVsbChcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snTnBjWWVsbCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdOcGNZZWxsJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ05wY1llbGwnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2Ny0weDEwYi1iYXR0bGV0YWxrMlxyXG4gICAqL1xyXG4gIHN0YXRpYyBiYXR0bGVUYWxrMihcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQmF0dGxlVGFsazInXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQmF0dGxlVGFsazInPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQmF0dGxlVGFsazInLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI2OC0weDEwYy1jb3VudGRvd25cclxuICAgKi9cclxuICBzdGF0aWMgY291bnRkb3duKFxyXG4gICAgcGFyYW1zPzogTmV0UGFyYW1zWydDb3VudGRvd24nXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQ291bnRkb3duJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0NvdW50ZG93bicsIHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYXRjaGVzOiBodHRwczovL2dpdGh1Yi5jb20vT3ZlcmxheVBsdWdpbi9jYWN0Ym90L2Jsb2IvbWFpbi9kb2NzL0xvZ0d1aWRlLm1kI2xpbmUtMjY5LTB4MTBkLWNvdW50ZG93bmNhbmNlbFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjb3VudGRvd25DYW5jZWwoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ0NvdW50ZG93bkNhbmNlbCddLFxyXG4gICk6IENhY3Rib3RCYXNlUmVnRXhwPCdDb3VudGRvd25DYW5jZWwnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQ291bnRkb3duQ2FuY2VsJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNzAtMHgxMGUtYWN0b3Jtb3ZlXHJcbiAgICovXHJcbiAgc3RhdGljIGFjdG9yTW92ZShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JNb3ZlJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FjdG9yTW92ZSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBY3Rvck1vdmUnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3MS0weDEwZi1hY3RvcnNldHBvc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBhY3RvclNldFBvcyhcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JTZXRQb3MnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnQWN0b3JTZXRQb3MnPiB7XHJcbiAgICByZXR1cm4gYnVpbGRSZWdleCgnQWN0b3JTZXRQb3MnLCBwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWF0Y2hlczogaHR0cHM6Ly9naXRodWIuY29tL092ZXJsYXlQbHVnaW4vY2FjdGJvdC9ibG9iL21haW4vZG9jcy9Mb2dHdWlkZS5tZCNsaW5lLTI3Mi0weDExMC1zcGF3bm5wY2V4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIHNwYXduTnBjRXh0cmEoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ1NwYXduTnBjRXh0cmEnXSxcclxuICApOiBDYWN0Ym90QmFzZVJlZ0V4cDwnU3Bhd25OcGNFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdTcGF3bk5wY0V4dHJhJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNzMtMHgxMTEtYWN0b3Jjb250cm9sZXh0cmFcclxuICAgKi9cclxuICBzdGF0aWMgYWN0b3JDb250cm9sRXh0cmEoXHJcbiAgICBwYXJhbXM/OiBOZXRQYXJhbXNbJ0FjdG9yQ29udHJvbEV4dHJhJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FjdG9yQ29udHJvbEV4dHJhJz4ge1xyXG4gICAgcmV0dXJuIGJ1aWxkUmVnZXgoJ0FjdG9yQ29udHJvbEV4dHJhJywgcGFyYW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1hdGNoZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9PdmVybGF5UGx1Z2luL2NhY3Rib3QvYmxvYi9tYWluL2RvY3MvTG9nR3VpZGUubWQjbGluZS0yNzQtMHgxMTItYWN0b3Jjb250cm9sc2VsZmV4dHJhXHJcbiAgICovXHJcbiAgc3RhdGljIGFjdG9yQ29udHJvbFNlbGZFeHRyYShcclxuICAgIHBhcmFtcz86IE5ldFBhcmFtc1snQWN0b3JDb250cm9sU2VsZkV4dHJhJ10sXHJcbiAgKTogQ2FjdGJvdEJhc2VSZWdFeHA8J0FjdG9yQ29udHJvbFNlbGZFeHRyYSc+IHtcclxuICAgIHJldHVybiBidWlsZFJlZ2V4KCdBY3RvckNvbnRyb2xTZWxmRXh0cmEnLCBwYXJhbXMpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1vbk5ldFJlZ2V4ID0ge1xyXG4gIC8vIFRPRE8oNi4yKTogcmVtb3ZlIDQwMDAwMDEwIGFmdGVyIGV2ZXJ5Ym9keSBpcyBvbiA2LjIuXHJcbiAgLy8gVE9ETzogb3IgbWF5YmUga2VlcCBhcm91bmQgZm9yIHBsYXlpbmcgb2xkIGxvZyBmaWxlcz8/XHJcbiAgd2lwZTogTmV0UmVnZXhlcy5uZXR3b3JrNmQoeyBjb21tYW5kOiBbJzQwMDAwMDEwJywgJzQwMDAwMDBGJ10gfSksXHJcbiAgY2FjdGJvdFdpcGVFY2hvOiBOZXRSZWdleGVzLmVjaG8oeyBsaW5lOiAnY2FjdGJvdCB3aXBlLio/JyB9KSxcclxuICB1c2VyV2lwZUVjaG86IE5ldFJlZ2V4ZXMuZWNobyh7IGxpbmU6ICdlbmQnIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkTmV0UmVnZXhGb3JUcmlnZ2VyID0gPFQgZXh0ZW5kcyBrZXlvZiBOZXRQYXJhbXM+KFxyXG4gIHR5cGU6IFQsXHJcbiAgcGFyYW1zPzogTmV0UGFyYW1zW1RdLFxyXG4pOiBDYWN0Ym90QmFzZVJlZ0V4cDxUPiA9PiB7XHJcbiAgaWYgKHR5cGUgPT09ICdBYmlsaXR5JylcclxuICAgIC8vIHRzIGNhbid0IG5hcnJvdyBUIHRvIGBBYmlsaXR5YCBoZXJlLCBuZWVkIGNhc3RpbmcuXHJcbiAgICByZXR1cm4gTmV0UmVnZXhlcy5hYmlsaXR5KHBhcmFtcykgYXMgQ2FjdGJvdEJhc2VSZWdFeHA8VD47XHJcblxyXG4gIHJldHVybiBidWlsZFJlZ2V4PFQ+KHR5cGUsIHBhcmFtcyk7XHJcbn07XHJcbiIsIi8vIE92ZXJsYXlQbHVnaW4gQVBJIHNldHVwXHJcblxyXG5pbXBvcnQge1xyXG4gIEV2ZW50TWFwLFxyXG4gIEV2ZW50VHlwZSxcclxuICBJT3ZlcmxheUhhbmRsZXIsXHJcbiAgT3ZlcmxheUhhbmRsZXJGdW5jcyxcclxuICBPdmVybGF5SGFuZGxlclR5cGVzLFxyXG59IGZyb20gJy4uL3R5cGVzL2V2ZW50JztcclxuXHJcbnR5cGUgQmFzZVJlc3BvbnNlID0geyByc2VxPzogbnVtYmVyOyAnJGVycm9yJz86IGJvb2xlYW4gfTtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgIF9fT3ZlcmxheUNhbGxiYWNrOiBFdmVudE1hcFtFdmVudFR5cGVdO1xyXG4gICAgZGlzcGF0Y2hPdmVybGF5RXZlbnQ/OiB0eXBlb2YgcHJvY2Vzc0V2ZW50O1xyXG4gICAgT3ZlcmxheVBsdWdpbkFwaToge1xyXG4gICAgICByZWFkeTogYm9vbGVhbjtcclxuICAgICAgY2FsbEhhbmRsZXI6IChtc2c6IHN0cmluZywgY2I/OiAodmFsdWU6IHN0cmluZykgPT4gdW5rbm93bikgPT4gdm9pZDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkIFRoaXMgaXMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXHJcbiAgICAgKlxyXG4gICAgICogSXQgaXMgcmVjb21tZW5kZWQgdG8gaW1wb3J0IGZyb20gdGhpcyBmaWxlOlxyXG4gICAgICpcclxuICAgICAqIGBpbXBvcnQgeyBhZGRPdmVybGF5TGlzdGVuZXIgfSBmcm9tICcvcGF0aC90by9vdmVybGF5X3BsdWdpbl9hcGknO2BcclxuICAgICAqL1xyXG4gICAgYWRkT3ZlcmxheUxpc3RlbmVyOiBJQWRkT3ZlcmxheUxpc3RlbmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZCBUaGlzIGlzIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxyXG4gICAgICpcclxuICAgICAqIEl0IGlzIHJlY29tbWVuZGVkIHRvIGltcG9ydCBmcm9tIHRoaXMgZmlsZTpcclxuICAgICAqXHJcbiAgICAgKiBgaW1wb3J0IHsgcmVtb3ZlT3ZlcmxheUxpc3RlbmVyIH0gZnJvbSAnL3BhdGgvdG8vb3ZlcmxheV9wbHVnaW5fYXBpJztgXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZU92ZXJsYXlMaXN0ZW5lcjogSVJlbW92ZU92ZXJsYXlMaXN0ZW5lcjtcclxuICAgIC8qKlxyXG4gICAgICogQGRlcHJlY2F0ZWQgVGhpcyBpcyBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS5cclxuICAgICAqXHJcbiAgICAgKiBJdCBpcyByZWNvbW1lbmRlZCB0byBpbXBvcnQgZnJvbSB0aGlzIGZpbGU6XHJcbiAgICAgKlxyXG4gICAgICogYGltcG9ydCB7IGNhbGxPdmVybGF5SGFuZGxlciB9IGZyb20gJy9wYXRoL3RvL292ZXJsYXlfcGx1Z2luX2FwaSc7YFxyXG4gICAgICovXHJcbiAgICBjYWxsT3ZlcmxheUhhbmRsZXI6IElPdmVybGF5SGFuZGxlcjtcclxuICB9XHJcbn1cclxuXHJcbnR5cGUgSUFkZE92ZXJsYXlMaXN0ZW5lciA9IDxUIGV4dGVuZHMgRXZlbnRUeXBlPihldmVudDogVCwgY2I6IEV2ZW50TWFwW1RdKSA9PiB2b2lkO1xyXG50eXBlIElSZW1vdmVPdmVybGF5TGlzdGVuZXIgPSA8VCBleHRlbmRzIEV2ZW50VHlwZT4oZXZlbnQ6IFQsIGNiOiBFdmVudE1hcFtUXSkgPT4gdm9pZDtcclxuXHJcbnR5cGUgU3Vic2NyaWJlcjxUPiA9IHtcclxuICBba2V5IGluIEV2ZW50VHlwZV0/OiBUW107XHJcbn07XHJcbnR5cGUgRXZlbnRQYXJhbWV0ZXIgPSBQYXJhbWV0ZXJzPEV2ZW50TWFwW0V2ZW50VHlwZV0+WzBdO1xyXG50eXBlIFZvaWRGdW5jPFQ+ID0gKC4uLmFyZ3M6IFRbXSkgPT4gdm9pZDtcclxuXHJcbmxldCBpbml0ZWQgPSBmYWxzZTtcclxuXHJcbmxldCB3c1VybDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbmxldCB3czogV2ViU29ja2V0IHwgbnVsbCA9IG51bGw7XHJcbmxldCBxdWV1ZTogKFxyXG4gIHwgeyBbczogc3RyaW5nXTogdW5rbm93biB9XHJcbiAgfCBbeyBbczogc3RyaW5nXTogdW5rbm93biB9LCAoKHZhbHVlOiBzdHJpbmcgfCBudWxsKSA9PiB1bmtub3duKSB8IHVuZGVmaW5lZF1cclxuKVtdIHwgbnVsbCA9IFtdO1xyXG5sZXQgcnNlcUNvdW50ZXIgPSAwO1xyXG50eXBlIFByb21pc2VGdW5jcyA9IHtcclxuICByZXNvbHZlOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQ7XHJcbiAgcmVqZWN0OiAodmFsdWU6IHVua25vd24pID0+IHZvaWQ7XHJcbn07XHJcbmNvbnN0IHJlc3BvbnNlUHJvbWlzZXM6IHsgW3JzZXFJZHg6IG51bWJlcl06IFByb21pc2VGdW5jcyB9ID0ge307XHJcblxyXG5jb25zdCBzdWJzY3JpYmVyczogU3Vic2NyaWJlcjxWb2lkRnVuYzx1bmtub3duPj4gPSB7fTtcclxuXHJcbmNvbnN0IHNlbmRNZXNzYWdlID0gKFxyXG4gIG1zZzogeyBbczogc3RyaW5nXTogdW5rbm93biB9LFxyXG4gIGNiPzogKHZhbHVlOiBzdHJpbmcgfCBudWxsKSA9PiB1bmtub3duLFxyXG4pOiB2b2lkID0+IHtcclxuICBpZiAod3MpIHtcclxuICAgIGlmIChxdWV1ZSlcclxuICAgICAgcXVldWUucHVzaChtc2cpO1xyXG4gICAgZWxzZVxyXG4gICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KG1zZykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAocXVldWUpXHJcbiAgICAgIHF1ZXVlLnB1c2goW21zZywgY2JdKTtcclxuICAgIGVsc2VcclxuICAgICAgd2luZG93Lk92ZXJsYXlQbHVnaW5BcGkuY2FsbEhhbmRsZXIoSlNPTi5zdHJpbmdpZnkobXNnKSwgY2IpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHByb2Nlc3NFdmVudCA9IDxUIGV4dGVuZHMgRXZlbnRUeXBlPihtc2c6IFBhcmFtZXRlcnM8RXZlbnRNYXBbVF0+WzBdKTogdm9pZCA9PiB7XHJcbiAgaW5pdCgpO1xyXG5cclxuICBjb25zdCBzdWJzID0gc3Vic2NyaWJlcnNbbXNnLnR5cGVdO1xyXG4gIHN1YnM/LmZvckVhY2goKHN1YikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3ViKG1zZyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGF0Y2hPdmVybGF5RXZlbnQgPSBwcm9jZXNzRXZlbnQ7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkT3ZlcmxheUxpc3RlbmVyOiBJQWRkT3ZlcmxheUxpc3RlbmVyID0gKGV2ZW50LCBjYik6IHZvaWQgPT4ge1xyXG4gIGluaXQoKTtcclxuXHJcbiAgaWYgKCFzdWJzY3JpYmVyc1tldmVudF0pIHtcclxuICAgIHN1YnNjcmliZXJzW2V2ZW50XSA9IFtdO1xyXG5cclxuICAgIGlmICghcXVldWUpIHtcclxuICAgICAgc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgIGNhbGw6ICdzdWJzY3JpYmUnLFxyXG4gICAgICAgIGV2ZW50czogW2V2ZW50XSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVyc1tldmVudF0/LnB1c2goY2IgYXMgVm9pZEZ1bmM8dW5rbm93bj4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZU92ZXJsYXlMaXN0ZW5lcjogSVJlbW92ZU92ZXJsYXlMaXN0ZW5lciA9IChldmVudCwgY2IpOiB2b2lkID0+IHtcclxuICBpbml0KCk7XHJcblxyXG4gIGlmIChzdWJzY3JpYmVyc1tldmVudF0pIHtcclxuICAgIGNvbnN0IGxpc3QgPSBzdWJzY3JpYmVyc1tldmVudF07XHJcbiAgICBjb25zdCBwb3MgPSBsaXN0Py5pbmRleE9mKGNiIGFzIFZvaWRGdW5jPHVua25vd24+KTtcclxuXHJcbiAgICBpZiAocG9zICE9PSB1bmRlZmluZWQgJiYgcG9zID4gLTEpXHJcbiAgICAgIGxpc3Q/LnNwbGljZShwb3MsIDEpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNhbGxPdmVybGF5SGFuZGxlckludGVybmFsOiBJT3ZlcmxheUhhbmRsZXIgPSAoXHJcbiAgX21zZzogeyBbczogc3RyaW5nXTogdW5rbm93biB9LFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbik6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgaW5pdCgpO1xyXG5cclxuICBjb25zdCBtc2cgPSB7XHJcbiAgICAuLi5fbXNnLFxyXG4gICAgcnNlcTogMCxcclxuICB9O1xyXG4gIGxldCBwOiBQcm9taXNlPHVua25vd24+O1xyXG5cclxuICBpZiAod3MpIHtcclxuICAgIG1zZy5yc2VxID0gcnNlcUNvdW50ZXIrKztcclxuICAgIHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlc3BvbnNlUHJvbWlzZXNbbXNnLnJzZXFdID0geyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2VuZE1lc3NhZ2UobXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2VuZE1lc3NhZ2UobXNnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGRhdGEpIGFzIEJhc2VSZXNwb25zZTtcclxuICAgICAgICBpZiAocGFyc2VkWyckZXJyb3InXSlcclxuICAgICAgICAgIHJlamVjdChwYXJzZWQpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHJlc29sdmUocGFyc2VkKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwO1xyXG59O1xyXG5cclxudHlwZSBPdmVycmlkZU1hcCA9IHsgW2NhbGwgaW4gT3ZlcmxheUhhbmRsZXJUeXBlc10/OiBPdmVybGF5SGFuZGxlckZ1bmNzW2NhbGxdIH07XHJcbmNvbnN0IGNhbGxPdmVybGF5SGFuZGxlck92ZXJyaWRlTWFwOiBPdmVycmlkZU1hcCA9IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGxPdmVybGF5SGFuZGxlcjogSU92ZXJsYXlIYW5kbGVyID0gKFxyXG4gIF9tc2c6IHsgW3M6IHN0cmluZ106IHVua25vd24gfSxcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4pOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gIGluaXQoKTtcclxuXHJcbiAgLy8gSWYgdGhpcyBgYXNgIGlzIGluY29ycmVjdCwgdGhlbiBpdCB3aWxsIG5vdCBmaW5kIGFuIG92ZXJyaWRlLlxyXG4gIC8vIFRPRE86IHdlIGNvdWxkIGFsc28gcmVwbGFjZSB0aGlzIHdpdGggYSB0eXBlIGd1YXJkLlxyXG4gIGNvbnN0IHR5cGUgPSBfbXNnLmNhbGwgYXMga2V5b2YgT3ZlcnJpZGVNYXA7XHJcbiAgY29uc3QgY2FsbEZ1bmMgPSBjYWxsT3ZlcmxheUhhbmRsZXJPdmVycmlkZU1hcFt0eXBlXSA/PyBjYWxsT3ZlcmxheUhhbmRsZXJJbnRlcm5hbDtcclxuXHJcbiAgLy8gVGhlIGBJT3ZlcmxheUhhbmRsZXJgIHR5cGUgZ3VhcmFudGVlcyB0aGF0IHBhcmFtZXRlcnMvcmV0dXJuIHR5cGUgbWF0Y2hcclxuICAvLyBvbmUgb2YgdGhlIG92ZXJsYXkgaGFuZGxlcnMuICBUaGUgT3ZlcnJpZGVNYXAgYWxzbyBvbmx5IHN0b3JlcyBmdW5jdGlvbnNcclxuICAvLyB0aGF0IG1hdGNoIGJ5IHRoZSBkaXNjcmltaW5hdGluZyBgY2FsbGAgZmllbGQsIGFuZCBzbyBhbnkgb3ZlcnJpZGVzXHJcbiAgLy8gc2hvdWxkIGJlIGNvcnJlY3QgaGVyZS5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55LEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnRcclxuICByZXR1cm4gY2FsbEZ1bmMoX21zZyBhcyBhbnkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldE92ZXJsYXlIYW5kbGVyT3ZlcnJpZGUgPSA8VCBleHRlbmRzIGtleW9mIE92ZXJsYXlIYW5kbGVyRnVuY3M+KFxyXG4gIHR5cGU6IFQsXHJcbiAgb3ZlcnJpZGU/OiBPdmVybGF5SGFuZGxlckZ1bmNzW1RdLFxyXG4pOiB2b2lkID0+IHtcclxuICBpZiAoIW92ZXJyaWRlKSB7XHJcbiAgICBkZWxldGUgY2FsbE92ZXJsYXlIYW5kbGVyT3ZlcnJpZGVNYXBbdHlwZV07XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGNhbGxPdmVybGF5SGFuZGxlck92ZXJyaWRlTWFwW3R5cGVdID0gb3ZlcnJpZGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdCA9ICgpOiB2b2lkID0+IHtcclxuICBpZiAoaW5pdGVkKVxyXG4gICAgcmV0dXJuO1xyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHdzVXJsID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoJ09WRVJMQVlfV1MnKTtcclxuICAgIGlmICh3c1VybCAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBjb25uZWN0V3MgPSBmdW5jdGlvbih3c1VybDogc3RyaW5nKSB7XHJcbiAgICAgICAgd3MgPSBuZXcgV2ViU29ja2V0KHdzVXJsKTtcclxuXHJcbiAgICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQhJyk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcSA9IHF1ZXVlID8/IFtdO1xyXG4gICAgICAgICAgcXVldWUgPSBudWxsO1xyXG5cclxuICAgICAgICAgIHNlbmRNZXNzYWdlKHtcclxuICAgICAgICAgICAgY2FsbDogJ3N1YnNjcmliZScsXHJcbiAgICAgICAgICAgIGV2ZW50czogT2JqZWN0LmtleXMoc3Vic2NyaWJlcnMpLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgZm9yIChjb25zdCBtc2cgb2YgcSkge1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobXNnKSlcclxuICAgICAgICAgICAgICBzZW5kTWVzc2FnZShtc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKF9tc2cpID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX21zZy5kYXRhICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgbWVzc2FnZSBkYXRhIHJlY2VpdmVkOiAnLCBfbXNnKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbXNnID0gSlNPTi5wYXJzZShfbXNnLmRhdGEpIGFzIEV2ZW50UGFyYW1ldGVyICYgQmFzZVJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZUZ1bmNzID0gbXNnPy5yc2VxICE9PSB1bmRlZmluZWQgPyByZXNwb25zZVByb21pc2VzW21zZy5yc2VxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKG1zZy5yc2VxICE9PSB1bmRlZmluZWQgJiYgcHJvbWlzZUZ1bmNzKSB7XHJcbiAgICAgICAgICAgICAgaWYgKG1zZ1snJGVycm9yJ10pXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlRnVuY3MucmVqZWN0KG1zZyk7XHJcbiAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZUZ1bmNzLnJlc29sdmUobXNnKTtcclxuICAgICAgICAgICAgICBkZWxldGUgcmVzcG9uc2VQcm9taXNlc1ttc2cucnNlcV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcHJvY2Vzc0V2ZW50KG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBtZXNzYWdlIHJlY2VpdmVkOiAnLCBfbXNnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHtcclxuICAgICAgICAgIHF1ZXVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVHJ5aW5nIHRvIHJlY29ubmVjdC4uLicpO1xyXG4gICAgICAgICAgLy8gRG9uJ3Qgc3BhbSB0aGUgc2VydmVyIHdpdGggcmV0cmllcy5cclxuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29ubmVjdFdzKHdzVXJsKTtcclxuICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25uZWN0V3Mod3NVcmwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgd2FpdEZvckFwaSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghd2luZG93Lk92ZXJsYXlQbHVnaW5BcGk/LnJlYWR5KSB7XHJcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh3YWl0Rm9yQXBpLCAzMDApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcSA9IHF1ZXVlID8/IFtdO1xyXG4gICAgICAgIHF1ZXVlID0gbnVsbDtcclxuXHJcbiAgICAgICAgd2luZG93Ll9fT3ZlcmxheUNhbGxiYWNrID0gcHJvY2Vzc0V2ZW50O1xyXG5cclxuICAgICAgICBzZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgICBjYWxsOiAnc3Vic2NyaWJlJyxcclxuICAgICAgICAgIGV2ZW50czogT2JqZWN0LmtleXMoc3Vic2NyaWJlcnMpLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcSkge1xyXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpXHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKGl0ZW1bMF0sIGl0ZW1bMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHdhaXRGb3JBcGkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIZXJlIHRoZSBPdmVybGF5UGx1Z2luIEFQSSBpcyByZWdpc3RlcmVkIHRvIHRoZSB3aW5kb3cgb2JqZWN0LFxyXG4gICAgLy8gYnV0IHRoaXMgaXMgbWFpbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gRm9yIGNhY3Rib3QncyBidWlsdC1pbiBmaWxlcyxcclxuICAgIC8vIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgdmFyaW91cyBmdW5jdGlvbnMgZXhwb3J0ZWQgaW4gcmVzb3VyY2VzL292ZXJsYXlfcGx1Z2luX2FwaS50cy5cclxuXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBkZXByZWNhdGlvbi9kZXByZWNhdGlvbiAqL1xyXG4gICAgd2luZG93LmFkZE92ZXJsYXlMaXN0ZW5lciA9IGFkZE92ZXJsYXlMaXN0ZW5lcjtcclxuICAgIHdpbmRvdy5yZW1vdmVPdmVybGF5TGlzdGVuZXIgPSByZW1vdmVPdmVybGF5TGlzdGVuZXI7XHJcbiAgICB3aW5kb3cuY2FsbE92ZXJsYXlIYW5kbGVyID0gY2FsbE92ZXJsYXlIYW5kbGVyO1xyXG4gICAgd2luZG93LmRpc3BhdGNoT3ZlcmxheUV2ZW50ID0gZGlzcGF0Y2hPdmVybGF5RXZlbnQ7XHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlIGRlcHJlY2F0aW9uL2RlcHJlY2F0aW9uICovXHJcbiAgfVxyXG5cclxuICBpbml0ZWQgPSB0cnVlO1xyXG59O1xyXG4iLCJpbXBvcnQgTmV0UmVnZXhlcyBmcm9tICcuLi8uLi9yZXNvdXJjZXMvbmV0cmVnZXhlcyc7XHJcbmltcG9ydCB7IGFkZE92ZXJsYXlMaXN0ZW5lciwgY2FsbE92ZXJsYXlIYW5kbGVyIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL292ZXJsYXlfcGx1Z2luX2FwaSc7XHJcblxyXG5pbXBvcnQgJy4uLy4uL3Jlc291cmNlcy9kZWZhdWx0cy5jc3MnO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdDaGFuZ2Vab25lJywgKGUpID0+IHtcclxuICBjb25zdCBjdXJyZW50Wm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50Wm9uZScpO1xyXG4gIGlmIChjdXJyZW50Wm9uZSlcclxuICAgIGN1cnJlbnRab25lLmlubmVyVGV4dCA9IGBjdXJyZW50Wm9uZTogJHtlLnpvbmVOYW1lfSAoJHtlLnpvbmVJRH0pYDtcclxufSk7XHJcblxyXG5hZGRPdmVybGF5TGlzdGVuZXIoJ29uSW5Db21iYXRDaGFuZ2VkRXZlbnQnLCAoZSkgPT4ge1xyXG4gIGNvbnN0IGluQ29tYmF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luQ29tYmF0Jyk7XHJcbiAgaWYgKGluQ29tYmF0KSB7XHJcbiAgICBpbkNvbWJhdC5pbm5lclRleHQgPSBgaW5Db21iYXQ6IGFjdDogJHtlLmRldGFpbC5pbkFDVENvbWJhdCA/ICd5ZXMnIDogJ25vJ30gZ2FtZTogJHtcclxuICAgICAgZS5kZXRhaWwuaW5HYW1lQ29tYmF0ID8gJ3llcycgOiAnbm8nXHJcbiAgICB9YDtcclxuICB9XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdvblBsYXllckNoYW5nZWRFdmVudCcsIChlKSA9PiB7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcbiAgaWYgKG5hbWUpXHJcbiAgICBuYW1lLmlubmVyVGV4dCA9IGUuZGV0YWlsLm5hbWU7XHJcbiAgY29uc3QgcGxheWVySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVySWQnKTtcclxuICBpZiAocGxheWVySWQpXHJcbiAgICBwbGF5ZXJJZC5pbm5lclRleHQgPSBlLmRldGFpbC5pZC50b1N0cmluZygxNik7XHJcbiAgY29uc3QgaHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHAnKTtcclxuICBpZiAoaHApXHJcbiAgICBocC5pbm5lclRleHQgPSBgJHtlLmRldGFpbC5jdXJyZW50SFB9LyR7ZS5kZXRhaWwubWF4SFB9ICgke2UuZGV0YWlsLmN1cnJlbnRTaGllbGR9KWA7XHJcbiAgY29uc3QgbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXAnKTtcclxuICBpZiAobXApXHJcbiAgICBtcC5pbm5lclRleHQgPSBgJHtlLmRldGFpbC5jdXJyZW50TVB9LyR7ZS5kZXRhaWwubWF4TVB9YDtcclxuICBjb25zdCBjcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcCcpO1xyXG4gIGlmIChjcClcclxuICAgIGNwLmlubmVyVGV4dCA9IGAke2UuZGV0YWlsLmN1cnJlbnRDUH0vJHtlLmRldGFpbC5tYXhDUH1gO1xyXG4gIGNvbnN0IGdwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dwJyk7XHJcbiAgaWYgKGdwKVxyXG4gICAgZ3AuaW5uZXJUZXh0ID0gYCR7ZS5kZXRhaWwuY3VycmVudEdQfS8ke2UuZGV0YWlsLm1heEdQfWA7XHJcbiAgY29uc3Qgam9iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pvYicpO1xyXG4gIGlmIChqb2IpXHJcbiAgICBqb2IuaW5uZXJUZXh0ID0gYCR7ZS5kZXRhaWwubGV2ZWx9ICR7ZS5kZXRhaWwuam9ifWA7XHJcbiAgY29uc3QgZGVidWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWcnKTtcclxuICBpZiAoZGVidWcpXHJcbiAgICBkZWJ1Zy5pbm5lclRleHQgPSBlLmRldGFpbC5kZWJ1Z0pvYjtcclxuXHJcbiAgY29uc3Qgam9iSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb2JpbmZvJyk7XHJcbiAgaWYgKGpvYkluZm8pIHtcclxuICAgIGNvbnN0IGRldGFpbCA9IGUuZGV0YWlsO1xyXG4gICAgaWYgKGRldGFpbC5qb2IgPT09ICdSRE0nICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwud2hpdGVNYW5hfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5ibGFja01hbmF9IHwgJHtkZXRhaWwuam9iRGV0YWlsLm1hbmFTdGFja3N9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1dBUicgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9IGRldGFpbC5qb2JEZXRhaWwuYmVhc3QudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ0RSSycgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5ibG9vZH0gfCAke2RldGFpbC5qb2JEZXRhaWwuZGFya3NpZGVNaWxsaXNlY29uZHN9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmRhcmtBcnRzLnRvU3RyaW5nKCl9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmxpdmluZ1NoYWRvd01pbGxpc2Vjb25kc31gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnR05CJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID0gYCR7ZGV0YWlsLmpvYkRldGFpbC5jYXJ0cmlkZ2VzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5jb250aW51YXRpb25TdGF0ZX1gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnUExEJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID0gZGV0YWlsLmpvYkRldGFpbC5vYXRoLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdCUkQnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwuc29uZ05hbWV9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmxhc3RQbGF5ZWR9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnNvbmdQcm9jc30gfCAke2RldGFpbC5qb2JEZXRhaWwuc291bEdhdWdlfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5zb25nTWlsbGlzZWNvbmRzfSB8IFske1xyXG4gICAgICAgICAgZGV0YWlsLmpvYkRldGFpbC5jb2RhLmpvaW4oJywgJylcclxuICAgICAgICB9XWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdETkMnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPSBgJHtkZXRhaWwuam9iRGV0YWlsLmZlYXRoZXJzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5lc3ByaXR9IHwgWyR7XHJcbiAgICAgICAgZGV0YWlsLmpvYkRldGFpbC5zdGVwcy5qb2luKCcsICcpXHJcbiAgICAgIH1dIHwgJHtkZXRhaWwuam9iRGV0YWlsLmN1cnJlbnRTdGVwfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdOSU4nICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPSBgJHtkZXRhaWwuam9iRGV0YWlsLm5pbmtpQW1vdW50fSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5rYXplbWF0b2l9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ0RSRycgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5ibG9vZE1pbGxpc2Vjb25kc30gfCAke2RldGFpbC5qb2JEZXRhaWwubGlmZU1pbGxpc2Vjb25kc30gfCAke2RldGFpbC5qb2JEZXRhaWwuZXllc0Ftb3VudH0gfCAke2RldGFpbC5qb2JEZXRhaWwuZmlyc3RtaW5kc0ZvY3VzfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdCTE0nICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwudW1icmFsU3RhY2tzfSAoJHtkZXRhaWwuam9iRGV0YWlsLnVtYnJhbE1pbGxpc2Vjb25kc30pIHwgJHtkZXRhaWwuam9iRGV0YWlsLnVtYnJhbEhlYXJ0c30gfCAke2RldGFpbC5qb2JEZXRhaWwucG9seWdsb3R9ICR7ZGV0YWlsLmpvYkRldGFpbC5lbm9jaGlhbi50b1N0cmluZygpfSAoJHtkZXRhaWwuam9iRGV0YWlsLm5leHRQb2x5Z2xvdE1pbGxpc2Vjb25kc30pIHwgJHtkZXRhaWwuam9iRGV0YWlsLnBhcmFkb3gudG9TdHJpbmcoKX0gfCAke2RldGFpbC5qb2JEZXRhaWwuYXN0cmFsU291bFN0YWNrc31gO1xyXG4gICAgfSBlbHNlIGlmIChkZXRhaWwuam9iID09PSAnVEhNJyAmJiBkZXRhaWwuam9iRGV0YWlsKSB7XHJcbiAgICAgIGpvYkluZm8uaW5uZXJUZXh0ID1cclxuICAgICAgICBgJHtkZXRhaWwuam9iRGV0YWlsLnVtYnJhbFN0YWNrc30gKCR7ZGV0YWlsLmpvYkRldGFpbC51bWJyYWxNaWxsaXNlY29uZHN9KWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdXSE0nICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwubGlseVN0YWNrc30gKCR7ZGV0YWlsLmpvYkRldGFpbC5saWx5TWlsbGlzZWNvbmRzfSkgfCAke2RldGFpbC5qb2JEZXRhaWwuYmxvb2RsaWx5U3RhY2tzfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdTTU4nICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwuYWV0aGVyZmxvd1N0YWNrc30gfCAke2RldGFpbC5qb2JEZXRhaWwudHJhbmNlTWlsbGlzZWNvbmRzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5hdHR1bmVtZW50fSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5hdHR1bmVtZW50TWlsbGlzZWNvbmRzfSB8ICR7XHJcbiAgICAgICAgICBkZXRhaWxcclxuICAgICAgICAgICAgLmpvYkRldGFpbC5hY3RpdmVQcmltYWwgPz8gJy0nXHJcbiAgICAgICAgfSB8IFske1xyXG4gICAgICAgICAgZGV0YWlsLmpvYkRldGFpbC51c2FibGVBcmNhbnVtLmpvaW4oJywgJylcclxuICAgICAgICB9XSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5uZXh0U3VtbW9uZWR9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnN1bW1vblN0YXR1cy50b1N0cmluZygpfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdTQ0gnICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwuYWV0aGVyZmxvd1N0YWNrc30gfCAke2RldGFpbC5qb2JEZXRhaWwuZmFpcnlHYXVnZX0gfCAke2RldGFpbC5qb2JEZXRhaWwuZmFpcnlTdGF0dXN9ICgke2RldGFpbC5qb2JEZXRhaWwuZmFpcnlNaWxsaXNlY29uZHN9KWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdBQ04nICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPSBkZXRhaWwuam9iRGV0YWlsLmFldGhlcmZsb3dTdGFja3MudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ0FTVCcgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5jYXJkMX0gfCAke2RldGFpbC5qb2JEZXRhaWwuY2FyZDJ9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmNhcmQzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5jYXJkNH0gfCAke2RldGFpbC5qb2JEZXRhaWwubmV4dGRyYXd9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ01OSycgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5jaGFrcmFTdGFja3N9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmx1bmFyTmFkaS50b1N0cmluZygpfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5zb2xhck5hZGkudG9TdHJpbmcoKX0gfCBbJHtcclxuICAgICAgICAgIGRldGFpbC5qb2JEZXRhaWwuYmVhc3RDaGFrcmEuam9pbignLCAnKVxyXG4gICAgICAgIH1dIHwgJHtkZXRhaWwuam9iRGV0YWlsLm9wb29wb0Z1cnl9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnJhcHRvckZ1cnl9IHwgJHtkZXRhaWwuam9iRGV0YWlsLmNvZXVybEZ1cnl9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ01DSCcgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5oZWF0fSAoJHtkZXRhaWwuam9iRGV0YWlsLm92ZXJoZWF0TWlsbGlzZWNvbmRzfSkgfCAke2RldGFpbC5qb2JEZXRhaWwuYmF0dGVyeX0gKCR7ZGV0YWlsLmpvYkRldGFpbC5iYXR0ZXJ5TWlsbGlzZWNvbmRzfSkgfCBsYXN0OiAke2RldGFpbC5qb2JEZXRhaWwubGFzdEJhdHRlcnlBbW91bnR9IHwgJHtkZXRhaWwuam9iRGV0YWlsLm92ZXJoZWF0QWN0aXZlLnRvU3RyaW5nKCl9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnJvYm90QWN0aXZlLnRvU3RyaW5nKCl9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1NBTScgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5rZW5raX0gfCAke2RldGFpbC5qb2JEZXRhaWwubWVkaXRhdGlvblN0YWNrc30oJHtkZXRhaWwuam9iRGV0YWlsLnNldHN1LnRvU3RyaW5nKCl9LCR7ZGV0YWlsLmpvYkRldGFpbC5nZXRzdS50b1N0cmluZygpfSwke2RldGFpbC5qb2JEZXRhaWwua2EudG9TdHJpbmcoKX0pYDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1NHRScgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5hZGRlcnNnYWxsfSAoJHtkZXRhaWwuam9iRGV0YWlsLmFkZGVyc2dhbGxNaWxsaXNlY29uZHN9KSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5hZGRlcnN0aW5nfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5ldWtyYXNpYS50b1N0cmluZygpfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdSUFInICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwuc291bH0gfCAke2RldGFpbC5qb2JEZXRhaWwuc2hyb3VkfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5lbnNocm91ZE1pbGxpc2Vjb25kc30gfCAke2RldGFpbC5qb2JEZXRhaWwubGVtdXJlU2hyb3VkfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC52b2lkU2hyb3VkfWA7XHJcbiAgICB9IGVsc2UgaWYgKGRldGFpbC5qb2IgPT09ICdWUFInICYmIGRldGFpbC5qb2JEZXRhaWwpIHtcclxuICAgICAgam9iSW5mby5pbm5lclRleHQgPVxyXG4gICAgICAgIGAke2RldGFpbC5qb2JEZXRhaWwucmF0dGxpbmdDb2lsU3RhY2tzfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5hbmd1aW5lVHJpYnV0ZX0gfCAke2RldGFpbC5qb2JEZXRhaWwuc2VycGVudE9mZmVyaW5nfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5hZHZhbmNlZENvbWJvfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5yZWF3YWtlbmVkVGltZXJ9YDtcclxuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmpvYiA9PT0gJ1BDVCcgJiYgZGV0YWlsLmpvYkRldGFpbCkge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9XHJcbiAgICAgICAgYCR7ZGV0YWlsLmpvYkRldGFpbC5wYWxldHRlR2F1Z2V9IHwgJHtkZXRhaWwuam9iRGV0YWlsLnBhaW50fSB8ICgke2RldGFpbC5qb2JEZXRhaWwuY3JlYXR1cmVNb3RpZn0gfCAke1xyXG4gICAgICAgICAgZGV0YWlsLmpvYkRldGFpbC53ZWFwb25Nb3RpZiA/ICdXZWFwb24nIDogJ05vbmUnXHJcbiAgICAgICAgfSB8ICR7ZGV0YWlsLmpvYkRldGFpbC5sYW5kc2NhcGVNb3RpZiA/ICdMYW5kc2NhcGUnIDogJ05vbmUnfSkgfCAoJHtcclxuICAgICAgICAgIGRldGFpbC5qb2JEZXRhaWwuZGVwaWN0aW9ucy5qb2luKCcrJykgfHwgJ05vbmUnXHJcbiAgICAgICAgfSkgfCAke1xyXG4gICAgICAgICAgZGV0YWlsLmpvYkRldGFpbC5tb29nbGVQb3J0cmFpdFxyXG4gICAgICAgICAgICA/ICdNb29nbGUnXHJcbiAgICAgICAgICAgIDogZGV0YWlsLmpvYkRldGFpbC5tYWRlZW5Qb3J0cmFpdFxyXG4gICAgICAgICAgICA/ICdNYWRlZW4nXHJcbiAgICAgICAgICAgIDogJ05vbmUnXHJcbiAgICAgICAgfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBqb2JJbmZvLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcycpO1xyXG4gIGlmIChwb3MpIHtcclxuICAgIHBvcy5pbm5lclRleHQgPSBgJHtlLmRldGFpbC5wb3MueC50b0ZpeGVkKDIpfSwke2UuZGV0YWlsLnBvcy55LnRvRml4ZWQoMil9LCR7XHJcbiAgICAgIGUuZGV0YWlsLnBvcy56LnRvRml4ZWQoMilcclxuICAgIH1gO1xyXG4gIH1cclxuICBjb25zdCByb3RhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbicpO1xyXG4gIGlmIChyb3RhdGlvbilcclxuICAgIHJvdGF0aW9uLmlubmVyVGV4dCA9IGUuZGV0YWlsLnJvdGF0aW9uLnRvU3RyaW5nKCk7XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdFbm1pdHlUYXJnZXREYXRhJywgKGUpID0+IHtcclxuICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0Jyk7XHJcbiAgaWYgKHRhcmdldClcclxuICAgIHRhcmdldC5pbm5lclRleHQgPSBlLlRhcmdldCA/IGUuVGFyZ2V0Lk5hbWUgOiAnLS0nO1xyXG4gIGNvbnN0IHRpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aWQnKTtcclxuICBpZiAodGlkKVxyXG4gICAgdGlkLmlubmVyVGV4dCA9IGUuVGFyZ2V0ID8gZS5UYXJnZXQuSUQudG9TdHJpbmcoMTYpIDogJyc7XHJcbiAgY29uc3QgdGRpc3RhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkaXN0YW5jZScpO1xyXG4gIGlmICh0ZGlzdGFuY2UpXHJcbiAgICB0ZGlzdGFuY2UuaW5uZXJUZXh0ID0gZS5UYXJnZXQgPyBlLlRhcmdldC5EaXN0YW5jZS50b1N0cmluZygpIDogJyc7XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdvbkdhbWVFeGlzdHNFdmVudCcsIChfZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiR2FtZSBleGlzdHM6IFwiICsgZS5kZXRhaWwuZXhpc3RzKTtcclxufSk7XHJcblxyXG5hZGRPdmVybGF5TGlzdGVuZXIoJ29uR2FtZUFjdGl2ZUNoYW5nZWRFdmVudCcsIChfZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiR2FtZSBhY3RpdmU6IFwiICsgZS5kZXRhaWwuYWN0aXZlKTtcclxufSk7XHJcblxyXG5jb25zdCB0dHNFY2hvUmVnZXggPSBOZXRSZWdleGVzLmVjaG8oeyBsaW5lOiAndHRzOi4qPycgfSk7XHJcbmFkZE92ZXJsYXlMaXN0ZW5lcignTG9nTGluZScsIChlKSA9PiB7XHJcbiAgLy8gTWF0Y2ggXCIvZWNobyB0dHM6PHN0dWZmPlwiXHJcbiAgY29uc3QgbGluZSA9IHR0c0VjaG9SZWdleC5leGVjKGUucmF3TGluZSk/Lmdyb3Vwcz8ubGluZTtcclxuICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgcmV0dXJuO1xyXG4gIGNvbnN0IGNvbG9uID0gbGluZS5pbmRleE9mKCc6Jyk7XHJcbiAgaWYgKGNvbG9uID09PSAtMSlcclxuICAgIHJldHVybjtcclxuICBjb25zdCB0ZXh0ID0gbGluZS5zbGljZShjb2xvbik7XHJcbiAgaWYgKHRleHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgdm9pZCBjYWxsT3ZlcmxheUhhbmRsZXIoe1xyXG4gICAgICBjYWxsOiAnY2FjdGJvdFNheScsXHJcbiAgICAgIHRleHQ6IHRleHQsXHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuYWRkT3ZlcmxheUxpc3RlbmVyKCdvblVzZXJGaWxlQ2hhbmdlZCcsIChlKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYFVzZXIgZmlsZSAke2UuZmlsZX0gY2hhbmdlZCFgKTtcclxufSk7XHJcblxyXG52b2lkIGNhbGxPdmVybGF5SGFuZGxlcih7IGNhbGw6ICdjYWN0Ym90UmVxdWVzdFN0YXRlJyB9KTtcclxuIl0sIm5hbWVzIjpbImNvbWJhdGFudE1lbW9yeUtleXMiLCJsYXRlc3RMb2dEZWZpbml0aW9ucyIsIkdhbWVMb2ciLCJ0eXBlIiwibmFtZSIsInNvdXJjZSIsIm1lc3NhZ2VUeXBlIiwiZmllbGRzIiwidGltZXN0YW1wIiwiY29kZSIsImxpbmUiLCJzdWJGaWVsZHMiLCJjYW5Bbm9ueW1pemUiLCJmaXJzdE9wdGlvbmFsRmllbGQiLCJ1bmRlZmluZWQiLCJhbmFseXNpc09wdGlvbnMiLCJpbmNsdWRlIiwiZmlsdGVycyIsIkNoYW5nZVpvbmUiLCJpZCIsImxhc3RJbmNsdWRlIiwiQ2hhbmdlZFBsYXllciIsInBsYXllcklkcyIsIkFkZGVkQ29tYmF0YW50Iiwiam9iIiwibGV2ZWwiLCJvd25lcklkIiwid29ybGRJZCIsIndvcmxkIiwibnBjTmFtZUlkIiwibnBjQmFzZUlkIiwiY3VycmVudEhwIiwiaHAiLCJjdXJyZW50TXAiLCJtcCIsIngiLCJ5IiwieiIsImhlYWRpbmciLCJjb21iYXRhbnRJZEZpZWxkcyIsIlJlbW92ZWRDb21iYXRhbnQiLCJvd25lciIsIlBhcnR5TGlzdCIsInBhcnR5Q291bnQiLCJpZDAiLCJpZDEiLCJpZDIiLCJpZDMiLCJpZDQiLCJpZDUiLCJpZDYiLCJpZDciLCJpZDgiLCJpZDkiLCJpZDEwIiwiaWQxMSIsImlkMTIiLCJpZDEzIiwiaWQxNCIsImlkMTUiLCJpZDE2IiwiaWQxNyIsImlkMTgiLCJpZDE5IiwiaWQyMCIsImlkMjEiLCJpZDIyIiwiaWQyMyIsIlBsYXllclN0YXRzIiwic3RyZW5ndGgiLCJkZXh0ZXJpdHkiLCJ2aXRhbGl0eSIsImludGVsbGlnZW5jZSIsIm1pbmQiLCJwaWV0eSIsImF0dGFja1Bvd2VyIiwiZGlyZWN0SGl0IiwiY3JpdGljYWxIaXQiLCJhdHRhY2tNYWdpY1BvdGVuY3kiLCJoZWFsTWFnaWNQb3RlbmN5IiwiZGV0ZXJtaW5hdGlvbiIsInNraWxsU3BlZWQiLCJzcGVsbFNwZWVkIiwidGVuYWNpdHkiLCJsb2NhbENvbnRlbnRJZCIsIlN0YXJ0c1VzaW5nIiwic291cmNlSWQiLCJhYmlsaXR5IiwidGFyZ2V0SWQiLCJ0YXJnZXQiLCJjYXN0VGltZSIsInBvc3NpYmxlUnN2RmllbGRzIiwiYmxhbmtGaWVsZHMiLCJBYmlsaXR5IiwiZmxhZ3MiLCJkYW1hZ2UiLCJ0YXJnZXRDdXJyZW50SHAiLCJ0YXJnZXRNYXhIcCIsInRhcmdldEN1cnJlbnRNcCIsInRhcmdldE1heE1wIiwidGFyZ2V0WCIsInRhcmdldFkiLCJ0YXJnZXRaIiwidGFyZ2V0SGVhZGluZyIsIm1heEhwIiwibWF4TXAiLCJzZXF1ZW5jZSIsInRhcmdldEluZGV4IiwidGFyZ2V0Q291bnQiLCJvd25lck5hbWUiLCJlZmZlY3REaXNwbGF5VHlwZSIsImFjdGlvbklkIiwiYWN0aW9uQW5pbWF0aW9uSWQiLCJhbmltYXRpb25Mb2NrVGltZSIsInJvdGF0aW9uSGV4IiwiTmV0d29ya0FPRUFiaWxpdHkiLCJOZXR3b3JrQ2FuY2VsQWJpbGl0eSIsInJlYXNvbiIsIk5ldHdvcmtEb1QiLCJ3aGljaCIsImVmZmVjdElkIiwiZGFtYWdlVHlwZSIsInNvdXJjZUN1cnJlbnRIcCIsInNvdXJjZU1heEhwIiwic291cmNlQ3VycmVudE1wIiwic291cmNlTWF4TXAiLCJzb3VyY2VYIiwic291cmNlWSIsInNvdXJjZVoiLCJzb3VyY2VIZWFkaW5nIiwiV2FzRGVmZWF0ZWQiLCJHYWluc0VmZmVjdCIsImVmZmVjdCIsImR1cmF0aW9uIiwiY291bnQiLCJIZWFkTWFya2VyIiwiZGF0YTAiLCJwb3NzaWJsZVBsYXllcklkcyIsIk5ldHdvcmtSYWlkTWFya2VyIiwib3BlcmF0aW9uIiwid2F5bWFyayIsIk5ldHdvcmtUYXJnZXRNYXJrZXIiLCJ0YXJnZXROYW1lIiwiTG9zZXNFZmZlY3QiLCJOZXR3b3JrR2F1Z2UiLCJkYXRhMSIsImRhdGEyIiwiZGF0YTMiLCJmaXJzdFVua25vd25GaWVsZCIsIk5ldHdvcmtXb3JsZCIsImlzVW5rbm93biIsIkFjdG9yQ29udHJvbCIsImluc3RhbmNlIiwiY29tbWFuZCIsIk5hbWVUb2dnbGUiLCJ0b2dnbGUiLCJUZXRoZXIiLCJMaW1pdEJyZWFrIiwidmFsdWVIZXgiLCJiYXJzIiwiTmV0d29ya0VmZmVjdFJlc3VsdCIsInNlcXVlbmNlSWQiLCJjdXJyZW50U2hpZWxkIiwiU3RhdHVzRWZmZWN0Iiwiam9iTGV2ZWxEYXRhIiwiZGF0YTQiLCJkYXRhNSIsIk5ldHdvcmtVcGRhdGVIUCIsIk1hcCIsInJlZ2lvbk5hbWUiLCJwbGFjZU5hbWUiLCJwbGFjZU5hbWVTdWIiLCJTeXN0ZW1Mb2dNZXNzYWdlIiwicGFyYW0wIiwicGFyYW0xIiwicGFyYW0yIiwiU3RhdHVzTGlzdDMiLCJQYXJzZXJJbmZvIiwiZ2xvYmFsSW5jbHVkZSIsIlByb2Nlc3NJbmZvIiwiRGVidWciLCJQYWNrZXREdW1wIiwiVmVyc2lvbiIsIkVycm9yIiwiTm9uZSIsIkxpbmVSZWdpc3RyYXRpb24iLCJ2ZXJzaW9uIiwiTWFwRWZmZWN0IiwibG9jYXRpb24iLCJGYXRlRGlyZWN0b3IiLCJjYXRlZ29yeSIsImZhdGVJZCIsInByb2dyZXNzIiwiQ0VEaXJlY3RvciIsInBvcFRpbWUiLCJ0aW1lUmVtYWluaW5nIiwiY2VLZXkiLCJudW1QbGF5ZXJzIiwic3RhdHVzIiwiSW5Db21iYXQiLCJpbkFDVENvbWJhdCIsImluR2FtZUNvbWJhdCIsImlzQUNUQ2hhbmdlZCIsImlzR2FtZUNoYW5nZWQiLCJDb21iYXRhbnRNZW1vcnkiLCJjaGFuZ2UiLCJyZXBlYXRpbmdGaWVsZHMiLCJzdGFydGluZ0luZGV4IiwibGFiZWwiLCJuYW1lcyIsInNvcnRLZXlzIiwicHJpbWFyeUtleSIsInBvc3NpYmxlS2V5cyIsImtleXNUb0Fub255bWl6ZSIsInBhaXIiLCJrZXkiLCJ2YWx1ZSIsIlJTVkRhdGEiLCJsb2NhbGUiLCJTdGFydHNVc2luZ0V4dHJhIiwiQWJpbGl0eUV4dHJhIiwiZ2xvYmFsRWZmZWN0Q291bnRlciIsImRhdGFGbGFnIiwiQ29udGVudEZpbmRlclNldHRpbmdzIiwiem9uZUlkIiwiem9uZU5hbWUiLCJpbkNvbnRlbnRGaW5kZXJDb250ZW50IiwidW5yZXN0cmljdGVkUGFydHkiLCJtaW5pbWFsSXRlbUxldmVsIiwic2lsZW5jZUVjaG8iLCJleHBsb3Jlck1vZGUiLCJsZXZlbFN5bmMiLCJOcGNZZWxsIiwibnBjSWQiLCJucGNZZWxsSWQiLCJCYXR0bGVUYWxrMiIsImluc3RhbmNlQ29udGVudFRleHRJZCIsImRpc3BsYXlNcyIsIkNvdW50ZG93biIsImNvdW50ZG93blRpbWUiLCJyZXN1bHQiLCJDb3VudGRvd25DYW5jZWwiLCJBY3Rvck1vdmUiLCJBY3RvclNldFBvcyIsIlNwYXduTnBjRXh0cmEiLCJwYXJlbnRJZCIsInRldGhlcklkIiwiYW5pbWF0aW9uU3RhdGUiLCJBY3RvckNvbnRyb2xFeHRyYSIsInBhcmFtMyIsInBhcmFtNCIsIkFjdG9yQ29udHJvbFNlbGZFeHRyYSIsInBhcmFtNSIsInBhcmFtNiIsImxvZ0RlZmluaXRpb25zVmVyc2lvbnMiLCJhc3NlcnRMb2dEZWZpbml0aW9ucyIsImNvbnNvbGUiLCJhc3NlcnQiLCJVbnJlYWNoYWJsZUNvZGUiLCJjb25zdHJ1Y3RvciIsImxvZ0RlZmluaXRpb25zIiwic2VwYXJhdG9yIiwibWF0Y2hEZWZhdWx0IiwibWF0Y2hXaXRoQ29sb25zRGVmYXVsdCIsImZpZWxkc1dpdGhQb3RlbnRpYWxDb2xvbnMiLCJkZWZhdWx0UGFyYW1zIiwibG9nVHlwZSIsIk9iamVjdCIsImtleXMiLCJwdXNoIiwicGFyYW1zIiwicHJvcCIsImluZGV4IiwiZW50cmllcyIsImluY2x1ZGVzIiwicGFyYW0iLCJmaWVsZCIsIm9wdGlvbmFsIiwicmVwZWF0aW5nIiwicmVwZWF0aW5nS2V5cyIsImlzUmVwZWF0aW5nRmllbGQiLCJBcnJheSIsImlzQXJyYXkiLCJlIiwicGFyc2VIZWxwZXIiLCJkZWZLZXkiLCJ2YWxpZEZpZWxkcyIsIlJlZ2V4ZXMiLCJ2YWxpZGF0ZVBhcmFtcyIsImNhcHR1cmUiLCJ0cnVlSWZVbmRlZmluZWQiLCJmaWVsZEtleXMiLCJzb3J0IiwiYSIsImIiLCJwYXJzZUludCIsIm1heEtleVN0ciIsInRtcEtleSIsInBvcCIsImxlbmd0aCIsImZpZWxkTmFtZSIsIm1heEtleSIsImFiaWxpdHlNZXNzYWdlVHlwZSIsImFiaWxpdHlIZXhDb2RlIiwicHJlZml4IiwidHlwZUFzSGV4IiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsImRlZmF1bHRIZXhDb2RlIiwic2xpY2UiLCJoZXhDb2RlIiwic3RyIiwibGFzdEtleSIsImtleVN0ciIsInBhcnNlRmllbGQiLCJtaXNzaW5nRmllbGRzIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpZWxkRGVmYXVsdCIsImRlZmF1bHRGaWVsZFZhbHVlIiwiZmllbGRWYWx1ZSIsInJlcGVhdGluZ0ZpZWxkc1NlcGFyYXRvciIsInJlcGVhdGluZ0FycmF5IiwibGVmdCIsInJpZ2h0IiwidG9Mb3dlckNhc2UiLCJsb2NhbGVDb21wYXJlIiwid2FybiIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJhbm9uUmVwcyIsImZvckVhY2giLCJwb3NzaWJsZUtleSIsInJlcCIsImZpbmQiLCJmaWVsZFJlZ2V4IiwidmFsIiwic29tZSIsInYiLCJtYXliZUNhcHR1cmUiLCJwYXJzZSIsImJ1aWxkUmVnZXgiLCJsb2dWZXJzaW9uIiwic3RhcnRzVXNpbmciLCJhYmlsaXR5RnVsbCIsImhlYWRNYXJrZXIiLCJhZGRlZENvbWJhdGFudCIsImFkZGVkQ29tYmF0YW50RnVsbCIsInJlbW92aW5nQ29tYmF0YW50IiwiZ2FpbnNFZmZlY3QiLCJzdGF0dXNFZmZlY3RFeHBsaWNpdCIsImxvc2VzRWZmZWN0IiwidGV0aGVyIiwid2FzRGVmZWF0ZWQiLCJuZXR3b3JrRG9UIiwiZWNobyIsImdhbWVMb2ciLCJkaWFsb2ciLCJtZXNzYWdlIiwiZ2FtZU5hbWVMb2ciLCJzdGF0Q2hhbmdlIiwiY2hhbmdlWm9uZSIsIm5ldHdvcms2ZCIsIm5hbWVUb2dnbGUiLCJtYXAiLCJzeXN0ZW1Mb2dNZXNzYWdlIiwibWFwRWZmZWN0IiwiZmF0ZURpcmVjdG9yIiwiY2VEaXJlY3RvciIsImluQ29tYmF0IiwiY29tYmF0YW50TWVtb3J5Iiwic3RhcnRzVXNpbmdFeHRyYSIsImFiaWxpdHlFeHRyYSIsImNvbnRlbnRGaW5kZXJTZXR0aW5ncyIsIm5wY1llbGwiLCJiYXR0bGVUYWxrMiIsImNvdW50ZG93biIsImNvdW50ZG93bkNhbmNlbCIsImFjdG9yTW92ZSIsImFjdG9yU2V0UG9zIiwic3Bhd25OcGNFeHRyYSIsImFjdG9yQ29udHJvbEV4dHJhIiwiYWN0b3JDb250cm9sU2VsZkV4dHJhIiwiZGVmYXVsdFZhbHVlIiwiYW55T2YiLCJuYW1lZENhcHR1cmUiLCJlcnJvciIsImFyZ3MiLCJhbnlPZkFycmF5IiwiYXJyYXkiLCJlbGVtIiwiUmVnRXhwIiwiam9pbiIsImZpcnN0QXJnIiwicmVnZXhwU3RyaW5nIiwia0NhY3Rib3RDYXRlZ29yaWVzIiwiVGltZXN0YW1wIiwiTmV0VGltZXN0YW1wIiwiTmV0RmllbGQiLCJMb2dUeXBlIiwiQWJpbGl0eUNvZGUiLCJPYmplY3RJZCIsIk5hbWUiLCJGbG9hdCIsIm1vZGlmaWVycyIsImdsb2JhbCIsIm11bHRpbGluZSIsInJlcGxhY2UiLCJtYXRjaCIsImdyb3VwIiwicGFyc2VHbG9iYWwiLCJyZWdleCIsImYiLCJmdW5jTmFtZSIsIm1hZ2ljVHJhbnNsYXRpb25TdHJpbmciLCJtYWdpY1N0cmluZ1JlZ2V4Iiwia2V5c1RoYXRSZXF1aXJlVHJhbnNsYXRpb25Bc0NvbnN0Iiwia2V5c1RoYXRSZXF1aXJlVHJhbnNsYXRpb24iLCJnYW1lTG9nQ29kZXMiLCJhY3RvckNvbnRyb2xUeXBlIiwic2V0QW5pbVN0YXRlIiwicHVibGljQ29udGVudFRleHQiLCJsb2dNc2ciLCJsb2dNc2dQYXJhbXMiLCJ0cmFuc1BhcmFtcyIsImZpbHRlciIsImsiLCJuZWVkc1RyYW5zbGF0aW9ucyIsIk5ldFJlZ2V4ZXMiLCJmbGFnVHJhbnNsYXRpb25zTmVlZGVkIiwic2V0RmxhZ1RyYW5zbGF0aW9uc05lZWRlZCIsImRvZXNOZXRSZWdleE5lZWRUcmFuc2xhdGlvbiIsImV4ZWMiLCJjb21tb25OZXRSZWdleCIsIndpcGUiLCJjYWN0Ym90V2lwZUVjaG8iLCJ1c2VyV2lwZUVjaG8iLCJidWlsZE5ldFJlZ2V4Rm9yVHJpZ2dlciIsImluaXRlZCIsIndzVXJsIiwid3MiLCJxdWV1ZSIsInJzZXFDb3VudGVyIiwicmVzcG9uc2VQcm9taXNlcyIsInN1YnNjcmliZXJzIiwic2VuZE1lc3NhZ2UiLCJtc2ciLCJjYiIsInNlbmQiLCJ3aW5kb3ciLCJPdmVybGF5UGx1Z2luQXBpIiwiY2FsbEhhbmRsZXIiLCJwcm9jZXNzRXZlbnQiLCJpbml0Iiwic3VicyIsInN1YiIsImRpc3BhdGNoT3ZlcmxheUV2ZW50IiwiYWRkT3ZlcmxheUxpc3RlbmVyIiwiZXZlbnQiLCJjYWxsIiwiZXZlbnRzIiwicmVtb3ZlT3ZlcmxheUxpc3RlbmVyIiwibGlzdCIsInBvcyIsImluZGV4T2YiLCJzcGxpY2UiLCJjYWxsT3ZlcmxheUhhbmRsZXJJbnRlcm5hbCIsIl9tc2ciLCJyc2VxIiwicCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGF0YSIsInBhcnNlZCIsImNhbGxPdmVybGF5SGFuZGxlck92ZXJyaWRlTWFwIiwiY2FsbE92ZXJsYXlIYW5kbGVyIiwiY2FsbEZ1bmMiLCJzZXRPdmVybGF5SGFuZGxlck92ZXJyaWRlIiwib3ZlcnJpZGUiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJnZXQiLCJjb25uZWN0V3MiLCJXZWJTb2NrZXQiLCJhZGRFdmVudExpc3RlbmVyIiwibG9nIiwicSIsInByb21pc2VGdW5jcyIsInNldFRpbWVvdXQiLCJ3YWl0Rm9yQXBpIiwicmVhZHkiLCJfX092ZXJsYXlDYWxsYmFjayIsIml0ZW0iLCJjdXJyZW50Wm9uZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJ6b25lSUQiLCJkZXRhaWwiLCJwbGF5ZXJJZCIsImN1cnJlbnRIUCIsIm1heEhQIiwiY3VycmVudE1QIiwibWF4TVAiLCJjcCIsImN1cnJlbnRDUCIsIm1heENQIiwiZ3AiLCJjdXJyZW50R1AiLCJtYXhHUCIsImRlYnVnIiwiZGVidWdKb2IiLCJqb2JJbmZvIiwiam9iRGV0YWlsIiwid2hpdGVNYW5hIiwiYmxhY2tNYW5hIiwibWFuYVN0YWNrcyIsImJlYXN0IiwiYmxvb2QiLCJkYXJrc2lkZU1pbGxpc2Vjb25kcyIsImRhcmtBcnRzIiwibGl2aW5nU2hhZG93TWlsbGlzZWNvbmRzIiwiY2FydHJpZGdlcyIsImNvbnRpbnVhdGlvblN0YXRlIiwib2F0aCIsInNvbmdOYW1lIiwibGFzdFBsYXllZCIsInNvbmdQcm9jcyIsInNvdWxHYXVnZSIsInNvbmdNaWxsaXNlY29uZHMiLCJjb2RhIiwiZmVhdGhlcnMiLCJlc3ByaXQiLCJzdGVwcyIsImN1cnJlbnRTdGVwIiwibmlua2lBbW91bnQiLCJrYXplbWF0b2kiLCJibG9vZE1pbGxpc2Vjb25kcyIsImxpZmVNaWxsaXNlY29uZHMiLCJleWVzQW1vdW50IiwiZmlyc3RtaW5kc0ZvY3VzIiwidW1icmFsU3RhY2tzIiwidW1icmFsTWlsbGlzZWNvbmRzIiwidW1icmFsSGVhcnRzIiwicG9seWdsb3QiLCJlbm9jaGlhbiIsIm5leHRQb2x5Z2xvdE1pbGxpc2Vjb25kcyIsInBhcmFkb3giLCJhc3RyYWxTb3VsU3RhY2tzIiwibGlseVN0YWNrcyIsImxpbHlNaWxsaXNlY29uZHMiLCJibG9vZGxpbHlTdGFja3MiLCJhZXRoZXJmbG93U3RhY2tzIiwidHJhbmNlTWlsbGlzZWNvbmRzIiwiYXR0dW5lbWVudCIsImF0dHVuZW1lbnRNaWxsaXNlY29uZHMiLCJhY3RpdmVQcmltYWwiLCJ1c2FibGVBcmNhbnVtIiwibmV4dFN1bW1vbmVkIiwic3VtbW9uU3RhdHVzIiwiZmFpcnlHYXVnZSIsImZhaXJ5U3RhdHVzIiwiZmFpcnlNaWxsaXNlY29uZHMiLCJjYXJkMSIsImNhcmQyIiwiY2FyZDMiLCJjYXJkNCIsIm5leHRkcmF3IiwiY2hha3JhU3RhY2tzIiwibHVuYXJOYWRpIiwic29sYXJOYWRpIiwiYmVhc3RDaGFrcmEiLCJvcG9vcG9GdXJ5IiwicmFwdG9yRnVyeSIsImNvZXVybEZ1cnkiLCJoZWF0Iiwib3ZlcmhlYXRNaWxsaXNlY29uZHMiLCJiYXR0ZXJ5IiwiYmF0dGVyeU1pbGxpc2Vjb25kcyIsImxhc3RCYXR0ZXJ5QW1vdW50Iiwib3ZlcmhlYXRBY3RpdmUiLCJyb2JvdEFjdGl2ZSIsImtlbmtpIiwibWVkaXRhdGlvblN0YWNrcyIsInNldHN1IiwiZ2V0c3UiLCJrYSIsImFkZGVyc2dhbGwiLCJhZGRlcnNnYWxsTWlsbGlzZWNvbmRzIiwiYWRkZXJzdGluZyIsImV1a3Jhc2lhIiwic291bCIsInNocm91ZCIsImVuc2hyb3VkTWlsbGlzZWNvbmRzIiwibGVtdXJlU2hyb3VkIiwidm9pZFNocm91ZCIsInJhdHRsaW5nQ29pbFN0YWNrcyIsImFuZ3VpbmVUcmlidXRlIiwic2VycGVudE9mZmVyaW5nIiwiYWR2YW5jZWRDb21ibyIsInJlYXdha2VuZWRUaW1lciIsInBhbGV0dGVHYXVnZSIsInBhaW50IiwiY3JlYXR1cmVNb3RpZiIsIndlYXBvbk1vdGlmIiwibGFuZHNjYXBlTW90aWYiLCJkZXBpY3Rpb25zIiwibW9vZ2xlUG9ydHJhaXQiLCJtYWRlZW5Qb3J0cmFpdCIsInRvRml4ZWQiLCJyb3RhdGlvbiIsIlRhcmdldCIsInRpZCIsIklEIiwidGRpc3RhbmNlIiwiRGlzdGFuY2UiLCJfZSIsInR0c0VjaG9SZWdleCIsInJhd0xpbmUiLCJncm91cHMiLCJjb2xvbiIsInRleHQiLCJmaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==