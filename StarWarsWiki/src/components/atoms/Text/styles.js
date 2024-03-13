import styled from 'styled-components/native'

export const CustomText = styled.Text`
    color: ${( {color}) => color || 'white' };
    margin-top: 10px;
    font-size: 24px;
    font-weight: 800;
`;