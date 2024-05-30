import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.COLORS.BACKGROUND_900} inset;
            -webkit-text-fill-color: ${({ theme }) => theme.COLORS.WHITE};
            transition: background-color 5000s ease-in-out 0s;
        }

       
    }
    > svg {
            margin-left: 16px;
        }
`;