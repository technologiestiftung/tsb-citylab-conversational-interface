export default function createPersonFields(responses, personID) {
  const firstName = responses[`r-${personID}-first-name`].value;

  const isDoctor = responses[`r-${personID}-is-doctor`].value === 1;

  const lastName = responses[`r-${personID}-last-name`].value;

  const hasOtherBirthName =
    responses[`r-${personID}-has-another-birth-name`].value === 1;

  const birthName = hasOtherBirthName
    ? responses[`r-${personID}-birth-name`].value
    : `${firstName} ${lastName}`;

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

  const fields = {
    p1: {
      p1firstName: {
        text: firstName,
        x: 150,
        y: 545,
      },
      p1lastName: {
        text: isDoctor ? `Dr. ${lastName}` : lastName,
        x: 150,
        y: 575,
      },
      p1birthName: {
        text: birthName,
        x: 150,
        y: 527,
      },
      p1otherNames: {
        text: otherNames,
        x: 150,
        y: 456,
      },
      p1sex: {
        text: sex,
        x: 150,
        y: 512,
      },
      p1birthData: {
        text: birthData,
        x: 150,
        y: 498,
      },
      p1religion: {
        text: religion,
        x: 150,
        y: 484,
      },
      p1nationality: {
        text: nationality,
        x: 150,
        y: 470,
      },
    },
    p2: {
      p2firstName: {
        text: firstName,
        x: 150,
        y: 388,
      },
      p2lastName: {
        text: isDoctor ? `Dr. ${lastName}` : lastName,
        x: 150,
        y: 417,
      },
      p2birthName: {
        text: birthName,
        x: 150,
        y: 370,
      },
      p2otherNames: {
        text: otherNames,
        x: 150,
        y: 299,
      },
      p2sex: {
        text: sex,
        x: 150,
        y: 356,
      },
      p2birthData: {
        text: birthData,
        x: 150,
        y: 341,
      },
      p2religion: {
        text: religion,
        x: 150,
        y: 327,
      },
      p2nationality: {
        text: nationality,
        x: 150,
        y: 313,
      },
    },
  };

  return fields[personID];
}
