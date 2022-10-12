import styled from "styled-components";
import background from "../../assets/img/magical-journeys-1.jpg";

export const HeroContainer = styled.div`
  display: flex;
`;

export const ArtistDescription = styled.div`
  width: 40%;
  font-size: 2rem;
  padding: 2rem;
  line-height: 2;
`;

export const HeroImage = styled.div`
  background-image: linear-gradient(
      to right,
      rgb(255, 255, 255),
      #ffffffd5,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    url(${background});
  box-shadow: 0 0 0.5rem 0.5rem white inset;
  height: 80rem;
  background-size: cover;
  padding: 20px;
`;
