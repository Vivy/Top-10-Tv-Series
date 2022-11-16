import * as S from './pyramid.style';

const Pyramid = ({ list }) => {
  const [
    first,
    second,
    third,
    forth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninght,
    tenth,
  ] = list;
  return (
    <S.Pyramid>
      <S.Cell start='4' end='5' as='h1'>
        {first}
      </S.Cell>
      <S.Cell start='3' end='4' as='h2'>
        {second}
      </S.Cell>
      <S.Cell start='5' end='6' as='h3'>
        {third}
      </S.Cell>
      <S.Cell start='2' end='3' as='h4'>
        {forth}
      </S.Cell>
      <S.Cell start='4' end='5' as='h5'>
        {fifth}
      </S.Cell>
      <S.Cell start='6' end='7' as='h6'>
        {sixth}
      </S.Cell>
      <S.Cell start='1' end='2' as='p'>
        {seventh}
      </S.Cell>
      <S.Cell start='3' end='4' as='p'>
        {eighth}
      </S.Cell>
      <S.Cell start='5' end='6' as='p'>
        {ninght}
      </S.Cell>
      <S.Cell start='7' end='8' as='p'>
        {tenth}
      </S.Cell>
    </S.Pyramid>
  );
};

export default Pyramid;
