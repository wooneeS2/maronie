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
      comment = "의 리뷰가 다른 사람에게 도움이 될거예요";
      break;
    case "myrecipe":
      emoji = "👨‍🍳";
      comment = "님만의 칵테일 레시피를 등록해보세요!";
      break;
    default:
      emoji = "😵";
      comment = "결과가 없습니다";
  }
  return (
    <FlexColumnCenterBox>
      <p>{emoji}</p>
      <p>{comment}</p>
    </FlexColumnCenterBox>
  );
}
export default NoItem;
