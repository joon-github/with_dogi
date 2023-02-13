import styled from "styled-components"

const Test = styled.div`
  background-color: green;
  width: 50%;
  height: 20%;
  color:red;
`

export default function Home() {
  return (
    <>
      <Test>root</Test>
    </>
  )
}
