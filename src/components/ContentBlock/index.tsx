import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import RightNContentBlock from "./RightNContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "rightN") return <RightNContentBlock {...props} />;
  return null;
};

export default ContentBlock;
