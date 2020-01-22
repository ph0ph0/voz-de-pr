import { useState } from "react";

const useAPI = (api, initialState) => {
  const [state, setState] = useState(initialState);
  return api({ state, setState });
};

export default useAPI;
