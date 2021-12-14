import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
font-family: Verdana, Geneva, Tahoma, sans-serif;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: grid;
  place-items: center;
  min-height: 100vh;
  overflow: hidden;

}

body{
    font-family: 'Exo', sans-serif;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

   .circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index:-1;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
    animation: animate 25s linear infinite;
    bottom: -150px;
    z-index:1;
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    right: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}

.razorpay-payment-button.svelte-ohbfj8, .razorpay-payment-button.svelte-ohbfj8 *, .razorpay-payment-button.svelte-ohbfj8 *::before, .razorpay-payment-button.svelte-ohbfj8 *::after {
    margin-left: auto;
    margin-right: auto;
    
}
.razorpay-payment-button a {
    height:50px!important;
    background: rgba(0, 128, 0, 0.6) !important;
backdrop-filter: blur(6px) saturate(200%) !important;
  -webkit-backdrop-filter: blur(6px) saturate(200%) !important;
  border: 5px solid rgba(0, 128, 0, 0.125) !important;
}
`;
