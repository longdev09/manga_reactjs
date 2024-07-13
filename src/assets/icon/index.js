import {
  faMagnifyingGlass,
  faBars,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FaMagnifyingGlass = ({ ...props }) => (
  <FontAwesomeIcon icon={faMagnifyingGlass} {...props} />
);
export const FaBars = ({ ...props }) => (
  <FontAwesomeIcon icon={faBars} {...props} />
);

export const FaChevronRight = ({ ...props }) => (
  <FontAwesomeIcon icon={faChevronRight} {...props} />
);
