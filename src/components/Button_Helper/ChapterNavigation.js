import { useNavigate, useParams } from "react-router-dom";
import routes from "../../config/routes";
import Button from "../Button";

export default function ChapterNavigation({ children, direction, ...props }) {
  const navigate = useNavigate();
  const url = useParams();

  const changeChapter = (step) => {
    const id = parseInt(url.chapter_id) + step;
    navigate(
      routes.read.replace(":comic_id", url.comic_id).replace(":chapter_id", id)
    );
  };
  return (
    <Button onclick={() => changeChapter(direction)} {...props}>
      {children}
    </Button>
  );
}
