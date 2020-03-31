const aggregatePerson = (data, personID) => {
  return {
    name: {
      first: data[`r-${personID}-first-name`].value,
      last:
        data[`r-${personID}-doctor`].value === 1
          ? `Dr. ${data[`r-${personID}-last-name`].value}`
          : data[`r-${personID}-last-name`].value,
      birth:
        data[`r-${personID}-birth-name`].value === 0
          ? `${data[`r-${personID}-first-name`].value} ${
              data[`r-${personID}-last-name`].value
            }`
          : data[`r-${personID}-birth-name-manual`].value,
      other:
        data[`r-${personID}-other-names-manual`].value === 0
          ? '-'
          : data[`r-${personID}-other-names-manual`].value,
    },
    sex: data[`r-${personID}-sex`].value,
    birth: `${data[`r-${personID}-birth-date`].value}, ${
      data[`r-${personID}-birth-place`].value
    }`,
    religion:
      data[`r-${personID}-religion`].value === 0
        ? 'keine'
        : data[`r-${personID}-religion-manual`].value,
    nationality: data[`r-${personID}-nationality`].value,
  };
};

const aggregateResponses = responses => {
  return {
    flats: {
      new: {},
      previous: {},
      others: {},
    },
    persons: {
      first: {
        info: aggregatePerson(responses, 'p1'),
        docs: {},
      },
      second: {
        info: {},
        docs: {},
      },
      maritalStatus: {},
    },
  };
};

export default aggregateResponses;
