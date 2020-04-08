import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import CustomChatbot from '~/components/CustomChatbot';

const App = () => {
  const firstName = useStoreState(state => state.firstPerson.firstName);

  const setFirstName = useStoreActions(
    actions => actions.firstPerson.setFirstName
  );

  return <CustomChatbot accessStore={{ setFirstName, firstName }} />;
};

export default App;
