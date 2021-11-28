import styled from "styled-components/macro";
import { mobile } from "../../responsive";

export const Container = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`
