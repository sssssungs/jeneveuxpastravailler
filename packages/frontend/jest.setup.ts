import "@testing-library/jest-dom";


// 테스트 대상 컴포넌트가 window 객체를 참조할때 아래 없으면 error 발생함 
delete window.location; // delete 해주지 않으면 location 사용하는 test상에서 navigation console error가 발생함
window.location = {
  href: null,
  hostname: null,
  pathname: null,
  protocol: null,
  assign: null,
};

window.scrollTo = (x, y) => {
  document.documentElement.scrollTop = y;
};

window.scroll = option => {
  document.documentElement.scroll = option;
};
