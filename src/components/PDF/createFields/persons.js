export default function createPersonFields(responses, personID) {
  const firstName = responses[`r-${personID}-first-name`].value;

  const isDoctor = responses[`r-${personID}-is-doctor`].value === 1;

  const lastName = isDoctor
    ? `Dr. ${responses[`r-${personID}-last-name`].value}`
    : responses[`r-${personID}-last-name`].value;

  const hasOtherBirthName =
    responses[`r-${personID}-has-another-birth-name`].value === 1;

  const birthName = hasOtherBirthName
    ? responses[`r-${personID}-birth-name`].value
    : firstName + lastName;

  const hasOtherNames = responses[`r-${personID}-has-other-names`].value === 1;

  const otherNames = hasOtherNames
    ? responses[`r-${personID}-other-names`].value
    : '-';

  const sex = responses[`r-${personID}-sex`].value;

  const birthData = `${responses[`r-${personID}-birth-date`].value}, ${
    responses[`r-${personID}-birth-place`].value
  }`;

  const hasReligion = responses[`r-${personID}-has-religion`].value === 1;

  const religion = hasReligion
    ? responses[`r-${personID}-religion`].value
    : '-';

  const nationality = responses[`r-${personID}-nationality`].value;

  return {
    firstName: {
      text: firstName,
      x: 150,
      y: 545,
    },
    lastName: {
      text: lastName,
      x: 150,
      y: 575,
    },
    birthName: {
      text: birthName,
      x: 150,
      y: 527,
    },
    otherNames: {
      text: otherNames,
      x: 150,
      y: 456,
    },
    sex: {
      text: sex,
      x: 150,
      y: 512,
    },
    birthData: {
      text: birthData,
      x: 150,
      y: 498,
    },
    religion: {
      text: religion,
      x: 150,
      y: 484,
    },
    nationality: {
      text: nationality,
      x: 150,
      y: 470,
    },
  };
}
