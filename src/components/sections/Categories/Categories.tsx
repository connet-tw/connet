import * as React from "react";
import { Link } from "../../../i18n";
import Img from "gatsby-image";

interface CategoryLink {
  label: React.ReactNode;
  text?: React.ReactNode;
  buttonText: React.ReactNode;
  image: any;
  to: string;
}

type Props = {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  categoryLinks: CategoryLink[];
  image?: any;
  gradient?: string;
};

const Categories: React.SFC<Props> = ({ image, gradient, heading, subheading, categoryLinks }) => (
  <section>
    <div>
      <p>
        {heading}
      </p>
      <p>
        {subheading}
      </p>
    </div>
    <div>
      {categoryLinks.map((x) =>
        <div key={x.to}>
          <Link to={x.to}>
            <div>
              <Img fluid={x.image.childImageSharp.fluid}/>
              <div>
                <p>
                  {x.label}
                </p>
                {x.text &&
                  <p>
                    {x.text}
                  </p>
                }
              </div>
              <div>
                <button>
                  {x.buttonText}
                </button>
              </div>
            </div>
          </Link>
        </div>,
      )}
    </div>
  </section>
);

export {
  Categories
};
