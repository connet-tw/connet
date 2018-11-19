import * as React from "react";

interface BannerProps {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  image: any;
}

const Banner: React.SFC<BannerProps> = (props) => {
  return (
    <div>
      <p>
        {props.heading}
      </p>
      {props.subheading &&
        <p>
          {props.subheading}
        </p>
      }
    </div>
  );
};

export {
  Banner,
  BannerProps
};
