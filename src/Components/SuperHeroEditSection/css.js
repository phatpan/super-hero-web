import styled from "styled-components";

const Styles = styled.div`
 padding: 10px;

 h1 {
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   text-align: center;
 }

 form {
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
 }

 input {
   box-sizing: border-box;
   width: 100%;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 16px;
   font-weight: 500;
   margin-bottom: 5px;
 }

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
`;

export default Styles;