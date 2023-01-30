import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  height: 100px;
  width: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;
const Text = styled.div``;

function App() {
  return (
    <Father>
      <Box bgColor="red">
        <Text>Hello</Text>
      </Box>
      <Circle bgColor="whitesmoke" />
    </Father>
  );
}

export default App;
