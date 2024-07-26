import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const useFilter = ({ textSearch, data, quantity }) => {
  const [filterSearch, setFilterSearch] = useState(data);

  useEffect(() => {
    if (textSearch == "") {
      setFilterSearch(data);
    } else {
      const kq = data.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(textSearch.toLowerCase())
        )
      );
      if (quantity === "all") {
        setFilterSearch(kq);
      }
      if (quantity === -"first") {
        setFilterSearch(kq.length > 0 ? [kq[0]] : []);
      }
      if (quantity === "final") {
        setFilterSearch(kq.length > 0 ? [kq[kq.length - 1]] : []);
      }
    }
  }, [textSearch, data]);

  return { filterSearch };
};

export default useFilter;
