import styled from "styled-components/native";
import { ThemeType } from "../../styles/theme";
import React from "react";

interface ButtonTextProps {
  color?: string;
  theme: ThemeType;
  disabled?: boolean;
}

interface ButtonContainerProps {
  backgroundColor?: string;
  theme: ThemeType;
}

interface CircleProps {
  iconBackgroundColor?: string;
  theme: ThemeType;
}

const PrimaryButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightDark};
  border-radius: ${(props) => props.theme.borderRadius.large};
  height: 65px;
  padding: ${(props) => props.theme.spacing.medium};
  padding-left: 15px;
`;

const PrimaryButtonText = styled.Text<ButtonTextProps>`
  font-family: ${(props) => props.theme.fonts.families.openBold};
  font-size: ${(props) => props.theme.fonts.sizes.large};
  color: ${({ theme }) => theme.colors.white};
`;

const PrimaryTextContainer = styled.View<{ theme: ThemeType }>`
  flex-direction: column;
`;

const Circle = styled.View<CircleProps>`
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-right: 5px;
`;

interface ButtonProps {
  onPress: () => void;
  btnText: string;
  disabled?: boolean;
  color?: string;
  backgroundColor?: string;
  icon: React.ReactNode;
  iconBackgroundColor?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  onPress,
  btnText,
  backgroundColor,
  disabled = false,
  icon,
  iconBackgroundColor,
}) => {
  return (
    <PrimaryButtonContainer
      disabled={disabled}
      backgroundColor={backgroundColor}
      onPress={disabled ? null : onPress}
    >
      <Circle iconBackgroundColor={iconBackgroundColor}>{icon}</Circle>
      <PrimaryTextContainer>
        <PrimaryButtonText>{btnText}</PrimaryButtonText>
      </PrimaryTextContainer>
    </PrimaryButtonContainer>
  );
};

export default PrimaryButton;
