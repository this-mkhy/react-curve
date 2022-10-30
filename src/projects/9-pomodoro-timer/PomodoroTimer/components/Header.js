import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

export default function Header() {
    return (
        <>
            <Wrapper>
                <Title>
                    Pomodoro Timer
                </Title>
            </Wrapper>
        </>
    )
}