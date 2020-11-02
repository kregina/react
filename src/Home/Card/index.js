import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { AvatarContainer, AvatarContent, AvatarIcon, Content, Header, Item, Span, Text } from './styles';

const iconUser = <FontAwesomeIcon icon={faUser} />;

const Card = (props) => {
  const { card } = props;

  return (
    <Item>
      <Header className={card.complexity}>
        <Span>
          {card.project} - {card.complexity}
        </Span>
        <AvatarContainer>
          <AvatarIcon>{iconUser}</AvatarIcon>
          <AvatarContent>{card.responsible}</AvatarContent>
        </AvatarContainer>
      </Header>
      <Content>
        <small>Description</small>
        <Text>{card.description}</Text>

        <small>Start Date</small>
        {moment(card['start date']).format('DD.MM.YYYY')}

        <small>Savings Amount</small>
        <span>
          {card['savings amount'].toFixed(2)} {!card.currency || card.currency !== 'NULL' ? card.currency : ''}
        </span>

        <small>Category</small>
        {card.category}
      </Content>
    </Item>
  );
};
export default Card;
