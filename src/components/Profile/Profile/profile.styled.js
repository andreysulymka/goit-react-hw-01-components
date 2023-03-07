import styled from "styled-components";

export const Container = styled.div`
 width: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid rgb(220, 227, 236);
    border-radius: 8px;`;

export const Card = styled.div`
 padding-top: 24px;
    width: 82%;
    text-align: center;`

export const Photo = styled.img`
 width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid rgb(0, 0, 0);`

export const List = styled.ul`
 display: flex;
    justify-content: space-around;
    align-items: center;
    height: max-content;
    padding: 0;
    list-style: none;
    margin: 0;
    background-color: rgb(243, 246, 249);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 100%;
    
    :hover{
    background-color: rgba(234, 223, 139, 0.8);
    cursor: pointer;}`

export const Items = styled.li`
  padding: 0;
    margin: 0;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 1px solid rgb(231, 236, 242);`

export const Username = styled.p`
 font-size: 100;`