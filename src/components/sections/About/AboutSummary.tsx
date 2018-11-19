import * as React from "react";

interface Highlight {
  heading: React.ReactNode;
  subheading: React.ReactNode;
}

interface AboutSummaryProps {
  heading: React.ReactNode; 
  subheading?: React.ReactNode; 
  body?: React.ReactNode[];
  highlights: Highlight[];
}

const AboutSummary: React.SFC<AboutSummaryProps> = ({
  heading, subheading, body, highlights
}) => {
  return (
    <section>
      <div>
        <p>
          {heading}
        </p>
        {!!subheading &&
          <p>
            {subheading}
          </p>
        }
        {!!body && body.map((x, i) =>
          <p key={i}>
            {x}
          </p>
        )}
      </div>
      {!!highlights &&
        <div>
          <div>
            {highlights.map((h, i) =>
              <div key={i}>
                <p>
                  {h.heading}
                </p>
                <p>
                  {h.subheading}
                </p>
              </div>
            )}
          </div>
        </div>
      }
    </section>
  );
}

export {
  AboutSummary,
  AboutSummaryProps,
  Highlight,
};
