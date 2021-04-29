import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type BrandProps = {
  theme?: string;
};

export const Brand = styled.a<BrandProps>`
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) =>
      theme === 'light' ? 'unset' : 'difference'};
  }
`;
