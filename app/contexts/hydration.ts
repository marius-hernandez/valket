"use client";

import * as React from "react";
import { useUserStore } from "../start/store";

const Hydration = () => {
  React.useEffect(() => {
    useUserStore.persist.rehydrate();
  }, []); // (b)

  return null;
};

export default Hydration;