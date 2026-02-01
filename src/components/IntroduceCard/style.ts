import styled from "styled-components";

export const StyledWrapper = styled.div`

.threed-box {
   transform-style: preserve-3d;
   perspective: 500px;


  .card {
    /* position: absolute; */
    margin-left: 5px;
    margin-top: 5px;
    width: 17em;
    height: 22.5em;
    transform-style: preserve-3d;
    background: var(--ifm-color-background--deep);
    clip-path: polygon(
      30px 0%,
      100% 0,
      100% calc(100% - 30px),
      calc(100% - 30px) 100%,
      0 100%,
      0% 30px
    );
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* transform: rotateX(15deg) rotateY(30deg); */
  }

  .card span {
    font-weight: bold;
    color: white;
    text-align: center;
    display: block;
    font-size: 1em;
  }

  .card .info {
    font-weight: 400;
    color: white;
    display: block;
    text-align: center;
    font-size: 0.8em;
    margin: 1em;
  }

  .card .img {
    width: 4.8em;
    height: 4.8em;
    background: white;
    border-radius: 15px;
    margin: auto;
  }

  .card .img img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }

  .card .share {
    margin-top: 1em;
    display: flex;
    justify-content: center;
    gap: 1em;
  }

  .card a {
    color: white;
    transition: 0.4s ease-in-out;
  }

  .card a:hover {
    color: var(--ifm-color-background);
  }

  .card button {
    padding: 0.8em 1.7em;
    display: block;
    margin: auto;
    border-radius: 25px;
    border: none;
    font-weight: bold;
    background: #ffffff;
    color: rgb(0, 0, 0);
    transition: 0.4s ease-in-out;
  }

  .card button:hover {
    background:  var(--ifm-color-primary);
    color: white;
    cursor: pointer;
  }
}

  `;

