import styled from "styled-components";

export const WaveWrapper = styled.div`
   position: relative;

   .wave-container {
  // font-weight: var(--bs-body-font-weight);
  // text-align: var(--bs-body-text-align);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  font-size: 1.5rem;
  line-height: 2rem;
  text-shadow: 0 0.1875rem 0.3125rem #1c1f21;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 0;
  bottom: -5px;
}

.header {
  position: relative;
  text-align: center;
  background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
  /* 	background: #FFAFBD;  
  background: -webkit-linear-gradient(to right, #ffc3a0, #FFAFBD);  
  background: linear-gradient(to right, #ffc3a0, #FFAFBD); 
*/
  color: white;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

.waves {
  position: relative;
  width: 100%;
  height: 5vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 70px;
  max-height: 90px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

.content a {
  margin: 0 5px;
  font-size: 12px;
  color: #333;
}

.content a:hover {
  color: #000;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}

`