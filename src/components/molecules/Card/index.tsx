import { MovieWithMediaType, TVWithMediaType } from 'tmdb-ts';
import { Tags } from '~utils';
import * as Styles from './styles';
import { CardProps, CardType } from './types';

export * from './types';

export const isTV = (arg: CardType): arg is TVWithMediaType => 'name' in arg;

export const isMovie = (arg: CardType): arg is MovieWithMediaType =>
  'title' in arg;

const TMDB_HOST = process.env.REACT_APP_TMDB_HOST;

export const Card: React.FC<CardProps> = ({ children, data, tag = Tags.a }) => {
  const name = isTV(data) ? data?.name : data.title;
  const href = `${TMDB_HOST}/${data.media_type}/${data.id}`;

  return (
    <Styles.StyledCard as={tag} href={href} target="_blank" aria-label={name}>
      <Styles.CardContent>
        <Styles.CardImage
          src={`https://www.themoviedb.org/t/p/w500${data.poster_path}`}
          alt={name}
          height="100%"
        />
        <Styles.CardText>{name}</Styles.CardText>
      </Styles.CardContent>
      {children}
    </Styles.StyledCard>
  );
};

export default Card;
