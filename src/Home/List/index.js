import Card from '../Card';
import { ContentList } from './styles';

const List = (props) => {
  let { projects } = props;

  return (
    <ContentList>
      {projects.map((project, index) => {
        return <Card key={index} card={project} />;
      })}
    </ContentList>
  );
};

export default List;
