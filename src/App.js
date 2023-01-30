import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Button = styled.button`
  color: white;
  background-color: red;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: green;
`;

function App() {
  return (
    <Father>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />

      <Button as="a" href="#">
        Log in
      </Button>
    </Father>
  );
}

export default App;
