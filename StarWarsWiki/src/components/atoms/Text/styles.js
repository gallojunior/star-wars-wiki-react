import styled from 'styled-components/native'

export const CustomText = styled.Text`
  color: ${({ color, theme }) => color || theme.colors.white};
  margin-top: ${({ theme }) => theme.metrics.px(10)}px;
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`