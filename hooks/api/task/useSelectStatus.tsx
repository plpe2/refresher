import { useCallback, useEffect, useState } from "react";
import type { ChangeEvent } from "react";

export default function useSelectStatus() {
  const [selectStatus, setStatus] = useState<boolean>(false);

  useEffect(() => {
    // setStatus(true);
  }, []);

  const selectTransform = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    e.currentTarget.value == "Status" ? setStatus(true) : setStatus(false);
  }, []);

  return { selectStatus, setStatus, selectTransform };
}
