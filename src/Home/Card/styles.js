import styles from "styled-components";

export const Item = styles.div`
  display: flex;
  background: white;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08),
    0 1px 3px 1px rgba(66, 66, 66, 0.16);
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Header = styles.header`
  border-radius: 0.5rem 0.5rem 0 0;
  height: 4rem;
  padding: 1rem;
  position: relative;
`;

export const Span = styles.span`
  color: white;
  font-weight: bold;
`;

export const AvatarContainer = styles.div`
  background: white;
  border-radius: 0.3rem;
  bottom: -1.2rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  position: absolute;
  width: 50%;
`;

export const AvatarIcon = styles.span`
  margin-right: 1rem;
`;

export const AvatarContent = styles.span``;

export const Content = styles.div`
  margin: 2rem 1rem 1rem 1rem;
  small {
    display: block;
    margin-top: 1rem;
    font-size: 0.8rem;
    opacity: 0.6;
  }
`;

export const Text = styles.pre`
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:first-letter {
    text-transform: uppercase;
  }
`;
