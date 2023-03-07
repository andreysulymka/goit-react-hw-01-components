import styled from "styled-components";

export const List = styled.ul`
 padding: 8px 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 70%;`

export const Item = styled.li`
 display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.3);
    :hover{
    background-color: rgba(234, 223, 139, 0.8);
    cursor: pointer;}`

export const OnlineDot = styled.span`
 background-color: ${({isOnline}) => (isOnline ? "green" : "red")};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 12px;
    
`
