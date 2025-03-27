Options.Triggers.push({
  id: 'TheSunkenTempleOfQarn',
  zoneId: ZoneId.TheSunkenTempleOfQarn,
  comments: {
    en: 'pre-7.2 rework',
    fr: 'Avant le remaniement 7.2',
  },
  triggers: [
    {
      id: 'Sunken Quarn Doom',
      type: 'GainsEffect',
      netRegex: { effectId: 'D2' },
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Step on Glowing Plate',
          de: 'Auf der leuchtende Platte stehen',
          fr: 'Marchez sur la plaque qui brille',
          ja: '光る床に乗る',
          cn: '踩发光地板',
          ko: '빛나는 발판 밟기',
        },
      },
    },
  ],
});
