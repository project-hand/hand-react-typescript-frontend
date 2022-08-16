import { itemAtom } from "@/store/item";
import { ItemStateProps } from "@/types/item";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const TodoPage = () => {
  const [itemState, setItemState] = useRecoilState<ItemStateProps>(itemAtom);

  useEffect(() => {
    setItemState(() => ({
      usingItem: [{
        index: 1,
        item: 'TODO',
        x: 0,
        y: 0
      }],
      sidebarItem: [
        {
          index: 1,
          item: 'CAL',
        },
        {
          index: 2,
          item: 'MEMO',
        },
        {
          index: 3,
          item: 'WEATHER',
        }
      ]
    }));
  }, []);
  return (
    <StyledItemContainer>
      {itemState.usingItem.map(({ item }) => {
        return <StyledUsingItem>{item}</StyledUsingItem>;
      })}
    </StyledItemContainer>
  );
};

const StyledItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StyledUsingItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  border-radius: 15px;
  resize: both;
  overflow: auto;
`;
export default TodoPage;