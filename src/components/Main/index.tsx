import * as S from './styles'

const Main = ({
  title = 'BoilerplateNext',
  description = 'Boilerplate using NextJS, Typescript, Jest, Husky, Lint-Staged, Storybook'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/icon-512.png" alt="Boilerplate Logo React" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer hard coding"
    />
  </S.Wrapper>
)

export default Main
