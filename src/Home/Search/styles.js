import styles from 'styled-components';

export const SearchContainer = styles.div`
    margin: 0 auto;
    width: 100%;
    padding: 0 2rem;

    @media (min-width: 768px) {
      width: 50vw;
    }

    @media (min-width: 1024px) {
      width: 40vw;
    }
`;

export const Input = styles.input`
    height: 2.2rem;
    border-radius: 1rem;
    border: solid 1px rgba(0, 0, 0, 0.3);
    outline: none;
    padding: 0 15px;
    width: 100%;
`;

export const Label = styles.span`
    font-weight: 600;
    margin-right: 1rem;
`;

export const PrimaryButton = styles.button`
    background: var(--primary-color);
    border: none;
    padding: 0 1rem;
    height: 2.2rem;
    color: white;
    font-weight: bold;
    border-radius: 1rem;
    cursor: pointer;
    outline: none;
    transition: 0.4s;
    margin-top: 2rem;

    &:hover {
        background: var(--primary-color-dark);
        box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08),
        0 1px 3px 1px rgba(66, 66, 66, 0.16);
    }

    &+button {
        margin-left: 1rem;
    }

    &.active{
        background: var(--primary-color-dark);
        box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08),
        0 1px 3px 1px rgba(66, 66, 66, 0.16);
    }
`;

export const Sort = styles.div`
    text-align: center;
`;
