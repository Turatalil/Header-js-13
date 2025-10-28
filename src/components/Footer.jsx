import styled from "styled-components"

const Footer = () => {
    return (
        <FooterStyle>
            <FooterDivOne>
                <h2>Наши услуги</h2>
                <b>Автоперевозки</b>
                <b>Авиаперевозки</b>
                <b>Таможенное оформление</b>
                <b>Складское хранение</b>
            </FooterDivOne>

            <FooterDivTwo>
                <h2>О компании</h2>
                <b>О нас</b>
                <b>FAQ</b>
                <b>Новости</b>
                <b>Контакты</b>
            </FooterDivTwo>
        </FooterStyle>
    )
}
export default Footer

const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    color: white;

`


const FooterDivOne = styled.div`
    display: flex;
    flex-direction: column;
    b{
        margin-top: 10px;
    }
`
const FooterDivTwo = styled.div`
    display: flex;
    flex-direction: column;
    b{
        margin-top: 10px;
    }
`