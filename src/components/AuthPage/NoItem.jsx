import { FlexColumnCenterBox } from "design/commonStyles";
function NoItem({ page }) {
  let emoji = "";
  let comment = "";
  switch (page) {
    case "wishlist":
      emoji = "👀";
      comment = "마셔보고 싶은 술이 아직 없어요";
      break;
    case "donelist":
      emoji = "✊";
      comment = "마신 술을 체크하면 여기서 확인할 수 있어요!";
      break;
    case "myreview":
      emoji = "✏️";
      comment = `작성하신 리뷰가 없어요`;
      break;
    case "myrecipe":
      emoji = "👨‍🍳";
      comment = "작성하신 칵테일 레시피가 없어요";
      break;
    default:
      emoji = "😵";
      comment = "결과가 없습니다";
  }
  return (
    <FlexColumnCenterBox style={{ height: "50vh" }}>
      <p style={{ fontSize: "100px", margin: 0 }}>{emoji}</p>
      <p style={{ fontWeight: "700", fontSize: "1.2rem" }}>{comment}</p>
    </FlexColumnCenterBox>
  );
}
export default NoItem;
