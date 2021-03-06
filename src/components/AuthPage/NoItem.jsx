import { FlexColumnCenterBox } from "design/commonStyles";
function NoItem({ page }) {
  let emoji = "";
  let comment = "";
  switch (page) {
    case "wishlist":
      emoji = "π";
      comment = "λ§μλ³΄κ³  μΆμ μ μ΄ μμ§ μμ΄μ";
      break;
    case "donelist":
      emoji = "β";
      comment = "λ§μ  μ μ μ²΄ν¬νλ©΄ μ¬κΈ°μ νμΈν  μ μμ΄μ!";
      break;
    case "review":
      emoji = "βοΈ";
      comment = `μμ±νμ  λ¦¬λ·°κ° μμ΄μ`;
      break;
    case "recipe":
      emoji = "π¨βπ³";
      comment = "μμ±νμ  μΉ΅νμΌ λ μνΌκ° μμ΄μ";
      break;
    default:
      emoji = "π΅";
      comment = "κ²°κ³Όκ° μμ΅λλ€";
  }
  return (
    <FlexColumnCenterBox style={{ height: "50vh" }}>
      <p style={{ fontSize: "100px", margin: 0 }}>{emoji}</p>
      <p style={{ fontWeight: "700", fontSize: "1.2rem" }}>{comment}</p>
    </FlexColumnCenterBox>
  );
}
export default NoItem;
