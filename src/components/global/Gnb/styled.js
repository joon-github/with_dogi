import styled from "styled-components";

export const GnbContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100vh;
  width: 25vh;
  border-right: 1px solid lightgray;
  padding: 8px 12px 20px 12px;
  .logo {
    width: 70%;
    height: max-content;
    padding: 25px 12px 16px 12px;
  }
  .menuArea {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 25%;
    .menu {
      height: 25px;
      padding: 12px;
      a {
        display: flex;
        align-items: center;
      }
      .text {
        color: gray;
        margin-left: 10px;
      }
      .currentPage {
        color: black;
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
`;
