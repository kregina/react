import styles from 'styled-components';

export const ContentList = styles.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    padding: 3rem 2rem;
`;
