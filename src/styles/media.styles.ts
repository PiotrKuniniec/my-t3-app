import { css, type CSSObject } from "styled-components";

type Breakpoints = {
  sm: { value: number };
  md: { value: number };
  lg: { value: number };
  xl: { value: number };
  xxl: { value: number };
};

type MediaFunction = (
  args: TemplateStringsArray,
  ...interpolations: CSSObject[]
) => ReturnType<typeof css>;

type Layout = {
  breakpoints: Breakpoints;
  media: {
    [key in keyof Breakpoints]: MediaFunction;
  };
};

export const mediaResponsiveFn = (breakpoint: keyof Breakpoints) => {
  const layout: Layout = {
    breakpoints: {
      sm: { value: 640 },
      md: { value: 768 },
      lg: { value: 1024 },
      xl: { value: 1280 },
      xxl: { value: 1536 },
    },
    media: {
      sm: () => css``, // Initializing with empty CSS function
      md: () => css``, // Initializing with empty CSS function
      lg: () => css``, // Initializing with empty CSS function
      xl: () => css``, // Initializing with empty CSS function
      xxl: () => css``, // Initializing with empty CSS function
    },
  };

  for (const breakpointItem in layout.breakpoints) {
    if (
      Object.prototype.hasOwnProperty.call(layout.breakpoints, breakpointItem)
    ) {
      const key = breakpointItem as keyof Breakpoints;
      const breakpointValue = layout.breakpoints[key].value;
      layout.media[key] = (
        args: TemplateStringsArray,
        ...interpolations: CSSObject[]
      ) =>
        css`
          @media only screen and (min-width: ${breakpointValue / 16}em) {
            ${css(args, ...interpolations)}
          `;
    }
  }

  return layout.media[breakpoint];
};
