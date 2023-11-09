import React from "react";
import styled from "styled-components";
import { Product } from "interface/product";

interface ClassItemProps {
  item: Product;
}
function ClassItem({ item }: ClassItemProps) {
  return (
    <div>
      <FlexContainer>
        <img src={item.image_link} alt="product_img"></img>
        <Information>
          <h2>{item.name}</h2>
          <p className="type">{item.product_type}</p>
          <p className="price">${item.price}</p>
        </Information>
      </FlexContainer>
    </div>
  );
}

const FlexContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
  }
  margin: 30px;
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h2 {
    font-size: 13px;
    height: 40px;
    overflow: hidden; //...으로 나타나게...
    margin: 5px;
  }
  .type {
    //이렇게 해도 되나
    color: gray;
  }
  .price {
    color: rgb(98, 199, 210);
    font-weight: bold;
  }
  p {
    margin: 0 0 5px 0;
  }
`;
export default ClassItem;
