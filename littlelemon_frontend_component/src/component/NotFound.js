import styled from 'styled-components';

const Background = styled.div`
	background-color: #495E57;
	color: white;
	// color: #F4CE14;
	border-radius: 2%;
	// height: auto;
	// min-height: 10vh; /* Default minimum height */
	padding-top: 1%;
	padding-bottom: 2%;
	display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

	// @media (max-width: 1000px) {
	// 	padding-bottom:0;
	// 	// padding-left: 10%;
	// 	// padding-right: 10%;
	// }
	// @media (max-width: 887px) {
	// 	// padding-bottom:4%;
	// }
	// @media (max-width: 825px) {
	// 	// padding-bottom:8%;
	// }
	// @media (max-width: 740px) {
	// 	padding-top: 4%;
	// 	padding-bottom: 0;
	// }
	// @media (max-width: 655px) {
	// 	// padding-bottom: 3%;
	// }
	// @media (max-width: 480px) {
	// 	padding-top: 4%;
	// 	padding-bottom: 4%;
	// 	// padding-left: 10%;
	// 	// padding-right: 10%;
	// }
`
const SpanText = styled.span`
	color: red;
`
const NotFound = () => {
	return (
        <div className='App'>
            <Background>
                <h1><SpanText>Oopsy! 404</SpanText></h1>
                <h3>Page Not Found</h3>
            </Background>
        </div>
    );
};

export default NotFound;
