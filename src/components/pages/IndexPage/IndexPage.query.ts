import { graphql } from "gatsby";

interface Data {
  headerImg: any;
  microgridImg: any;
  scadaImg: any;
  floodControlImg: any;
  emsImg: any;
}

const query = graphql`
  query IndexPageQuery {
    headerImg: file(relativePath: {eq: "359340-gradient-wallpaper-blue.png"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    microgridImg: file(relativePath: {eq: "fushan__overview.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    scadaImg: file(relativePath: {eq: "header/scada.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emsImg: file(relativePath: {eq: "header/energy-management.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    floodControlImg: file(relativePath: {eq: "header/flood-control.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export {
  Data,
  query
}
