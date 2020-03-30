const requiredResponses = [
  'r-first-name',
  'r-last-name',
  'r-birth-name',
  'r-other-names',
  'r-doctor',
  'r-sex',
  'r-birth-date',
  'r-birth-place',
  'r-religion',
  'r-nationality',
];

const aggregatePersonInfo = person => {
  console.assert(
    requiredResponses.every(item => Object.keys(person).includes(item)),
    'Received responses do not correspond with required responses'
  );

  return {
    name: {
      first: person['r-first-name'].value,
      last:
        person['r-doctor'].value === 1
          ? `Dr. ${person['r-last-name'].value}`
          : person['r-last-name'].value,
      birth:
        person['r-birth-name'].value === 0
          ? `${person['r-first-name'].value} ${person['r-last-name'].value}`
          : person['r-birth-name-manual'].value,
      other:
        person['r-other-names'].value === 0
          ? '-'
          : person['r-other-names-manual'].value,
    },
    sex: person['r-sex'].value,
    birth: `${person['r-birth-date'].value}, ${person['r-birth-place'].value}`,
    religion:
      person['r-religion'].value === 0
        ? 'keine'
        : person['r-religion-manual'].value,
    nationality: person['r-nationality'].value,
  };
};

export default aggregatePersonInfo;
