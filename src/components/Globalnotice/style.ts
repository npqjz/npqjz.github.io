import styled from "styled-components";

export const GlobalnoticeWrapper = styled.div`
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: Inter,-apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,noto sans,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
    outline: none;
    position: relative;
    width: 100%;
    height: 32px;
    line-height: 32px;
    background-color: rgb(var(--blue-6));
    color: var(--color-white);
    display: flex;
    justify-content: center;
    display: flex;

   .ac-navbar-global-notice-container {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: Inter,-apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,noto sans,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 32px;
    outline: none;
    background-color: transparent;
    width: calc(100% - 120px);
    text-align: center;
    color: var(--color-white)!important;
    text-decoration: none;
   }

   .ac-navbar-global-notice-desc {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: Inter,-apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,noto sans,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
    line-height: 32px;
    text-align: center;
    color: var(--color-white)!important;
    outline: none;
    font-size: 13px;
    margin-left: 36px;
    margin-right: 48px;
   }

   .ac-navbar-global-notice-close-icon {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: Inter,-apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,noto sans,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
    color: var(--color-white);
    outline: none;
    position: absolute;
    right: 20px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-top: 6px;
    text-align: center;
    border-radius: 4px;
   }

   .arco-icon,.arco-icon-close {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: Inter,-apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,noto sans,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
    cursor: pointer;
    line-height: 20px;
    text-align: center;
    stroke-width: 4;
    outline: none;
    display: inline-block;
    color: inherit;
    font-style: normal;
    width: 1em;
    height: 1em;
    vertical-align: -2px;
    stroke: currentColor;
    fill: none;
   }

`