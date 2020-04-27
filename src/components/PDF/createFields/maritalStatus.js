export default function createMaritalStatus(responses) {
  const partnerIsPresent = responses['r-is-partner-present'].value === 1;
  const maritalStatus = partnerIsPresent
    ? responses['r-marital-status-together'].value
    : responses['r-marital-status-alone'].value;
  const maritalStatusDetails = partnerIsPresent
    ? responses['r-marital-status-together-info'].value
    : '';

  const fields = {
    maritalStatus: {
      text: maritalStatus,
      x: 42,
      y: 269,
    },
    maritalStatusDetails: {
      text: maritalStatusDetails,
      x: 150,
      y: 269,
    },
  };

  return fields;
}
