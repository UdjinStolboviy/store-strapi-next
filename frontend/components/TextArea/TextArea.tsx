import {
  FC,
  ChangeEventHandler,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ReactChild,
  forwardRef,
  ForwardedRef,
} from "react";

import styled from "@emotion/styled";

import { Icon, AvailableIcons } from "@/components/Icon";
import { boxShadow } from "@/components/styles";

type WrapperProps = {
  /** Input height */
  height?: number | string;
  /** Input width */
  width?: number | string;
  /** Label visibilty */
  isLabelVisible?: boolean;
  /** Feedback visibilty */
  isFeedbackVisible?: boolean;
};

const Wrapper = styled.label<WrapperProps>`
  grid-template-rows: ${({ isLabelVisible, isFeedbackVisible }) => {
    if (isLabelVisible && isFeedbackVisible) {
      return "1fr 3fr 1fr";
    } else if (isLabelVisible) {
      return "1fr 4fr 0fr";
    } else if (isFeedbackVisible) {
      return "0fr 4fr 1fr";
    } else {
      return "0fr 1fr 0fr";
    }
  }};
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  color: ${({ theme }) => theme.font.regular};
  font-size: 1rem;
`;

const TextAreaWrapper = styled.div`
  grid-area: input;
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledTextArea = styled.textarea`
  border: none;
  overflow: auto;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  font-size: 1.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
  &::placeholder {
    color: ${({ theme }) => theme.font.regular};
  }
  &:focus {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2)}
    ~ svg {
      color: ${({ theme }) => theme.font.regular};
      opacity: 1;
    }
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 0.3rem;
  color: ${({ theme }) => theme.font.placeholder};
  opacity: 0.7;
`;

const Label = styled.span`
  grid-area: label;
  padding-left: 1.4rem;
`;

const Feedback = styled(Label)`
  grid-area: feedback;
`;

export type Props = {
  /** Placeholder  */
  placeholder: string;
  /** onChange handler */
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  /** Input label */
  label?: string;
  /** Icon */
  icon?: AvailableIcons;
  /** Feedback for input */
  feedback?: ReactChild;
} & WrapperProps;

export const TextArea: FC<Props & TextareaHTMLAttributes<HTMLTextAreaElement>> =
  forwardRef(
    (
      { label, height = 7, width = 20, icon, feedback, className, ...rest },
      ref
    ) => (
      <Wrapper
        isLabelVisible={Boolean(label)}
        isFeedbackVisible={Boolean(feedback)}
        height={height}
        width={width}
        className={className}
      >
        <Label>{label}</Label>
        <TextAreaWrapper>
          <StyledTextArea
            ref={ref as ForwardedRef<HTMLTextAreaElement>}
            {...rest}
          />
          {icon && <StyledIcon name={icon} />}
        </TextAreaWrapper>
        <Feedback role="alert">{feedback}</Feedback>
      </Wrapper>
    )
  );

TextArea.displayName = "TextArea";
