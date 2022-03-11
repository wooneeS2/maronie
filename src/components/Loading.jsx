import { FlexColumnCenterBox } from "design/commonStyles";
import icon from "../assets/loading-icon.gif";
function Loading() {
  return (
    <FlexColumnCenterBox style={{ height: "85vh" }}>
      <img src={icon} alt="loading icon" />
    </FlexColumnCenterBox>
  );
}
export default Loading;
