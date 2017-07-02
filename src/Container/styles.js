import styled from 'styled-components';

const styles = {};

styles.Container = styled.div`
	display:flex
	flex-direction:row
`;

styles.sideContainer = styled.div`
	display: -webkit-flex;
    display: flex;
    height: 100%;
`;

styles.Sidenav = styled.div`
	 background-color: lightgray;
    -webkit-flex: 1;
    flex: 1;
`;

styles.Content = styled.div`
    display: flex;
	background-color: lightblue;
    justify-content: center;
    padding: 10px;
    -webkit-flex: 5;
    flex: 5;
    height: 100%;
`;

styles.FormContainer = styled.div`
    display:flex;
    flex-direction:column;
    flex: 1 1 auto;
    display: block;
`;

export default styles;
