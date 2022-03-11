export const DonelistComment = (count, currentTab) => {
  const liquorSum = 12;
  const cocktailSum = 4;
  if (count === 0) return "";
  if (count % 9 === 0) return `한 종류만 더 마셔보면 ${count + 1}개 달성😆`;
  else if (currentTab === "liquor") {
    if (count === liquorSum)
      return "마로니에가 소개한 술을 전부 마셨어요! 대단해요🥳";
    else if (count >= liquorSum / 2) return `벌써 이만큼이나 마셔봤어요🥃`;
    else return `마셔본 술을 체크하고 나만의 기록을 만들어보세요😉`;
  } else if (currentTab === "cocktail") {
    if (count === cocktailSum)
      return "마로니에의 칵테일을 전부 만들어봤어요! 도장깨기 성공❤️";
    else if (count >= cocktailSum / 2) return `벌써 이만큼이나 마셔봤어요🍸`;
    else return `나만의 취향을 발견해가는 중이에요!👀`;
  }
};
