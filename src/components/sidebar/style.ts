import styled from "styled-components";

export const SidebarWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }

  position: fixed;
  top: 30%;
  right: -5%;

  .btn {
    width: 300px;
    height: 200px;
  }

  .tool-list {
    background-color: var( --ifm-color-background-color-list);
    width: 200px;
 
    .arco-list-header {
      color: var(--font-color);
      font-family: feizhai;
      font-size: var(--font-size-base);
    }

    .tool-item {
      
      .arco-list-item-content {
        display: flex;
        justify-content: space-between;
      }
      
      .sp-title {
        color: var(--font-color);
        font-family: feizhai;
        font-size: var(--font-size-base);
      }

      .sp-switch {
        
      }



    }
  }
`