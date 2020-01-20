import { useState } from "react";

const useAPI = (api, initialState) => {
  const [state, setState] = useState(initialState);
  window.log(`*******************setting state: ${JSON.stringify(state)}`);
  return api({ state, setState });
};

export default useAPI;
