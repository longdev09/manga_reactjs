import {
  faMagnifyingGlass,
  faBars,
  faChevronRight,
  faEye,
  faShareFromSquare,
  faHeart,
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

export const FaEye = ({ ...props }) => (
  <FontAwesomeIcon icon={faEye} {...props} />
);
export const FaShareFromSquare = ({ ...props }) => (
  <FontAwesomeIcon icon={faShareFromSquare} {...props} />
);

export const FaHeart = ({ ...props }) => (
  <FontAwesomeIcon icon={faHeart} {...props} />
);
