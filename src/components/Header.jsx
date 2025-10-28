import styled from "styled-components"

const Header = () => {
    return (
        <HeaderStyle>
            <h1>LOGO</h1>
            <UlStyle>
                <li>Home</li>
                <li>Contact</li>
                <li>About Us</li>
                <li>Address</li>
            </UlStyle>
            <InputStlye type="text" />
        </HeaderStyle>
    )
}

export default Header

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: aqua;
    border: none;
`

const UlStyle = styled.ul`
    display: flex;
    gap: 2em;
    align-items: center;
    list-style: none;
`

const InputStlye = styled.input`
    padding: 5px 30px;
    border: none;
`