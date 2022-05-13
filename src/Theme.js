export const lightTheme = {
  body: {
    backgroundColor: "var(--Light200)",
  },
  text: {
    colorH1: "var(--Dark100)",
    colorH2: "var(--Dark100)",
    colorH3: "var(--Dark100)",
    colorH4: "var(--Primary)",
    colorParagraph: "var(--Neutral200)",
  },
  card: {
    backgroundColor: "var(--Light100)",
  },
  button: {
    variants: {
      primary: {
        backgroundColor: "var(--Primary)",
        color: "var(--Light100)",
        hover: {
          backgroundColor: "var(--Secondary)",
        },
      },
      secondary: {
        backgroundColor: "#EEEFFC",
        color: "var(--Primary)",
        hover: {
          backgroundColor: "#C5C9F4",
        },
      }
    }
  },
  input: {
    backgroundColor: "var(--Light100)",
    color: "var(--Dark100)",
    placeholder: {
      color: "var(--Neutral200)",
    },
  },
  checkbox: {
    color: "var(--Dark100)",
  },
}

export const darkTheme = {
  body: {
    backgroundColor: "var(--Dark200)",
  },
  text: {
    colorH1: "var(--Light100)",
    colorH2: "var(--Light100)",
    colorH3: "var(--Light100)",
    colorH4: "var(--Primary)",
    colorParagraph: "var(--Neutral100)",
  },
  card: {
    backgroundColor: "#1A202D",
  },
  button: {
    variants: {
      primary: {
        backgroundColor: "var(--Primary)",
        color: "var(--Light100)",
        hover: {
          backgroundColor: "var(--Secondary)",
        },
      },
      secondary: {
        backgroundColor: "#303642",
        color: "var(--Light100)",
        hover: {
          backgroundColor: "#6B6E77",
        },
      }
    }
  },
  input: {
    backgroundColor: "#1A202D",
    color: "var(--Light100)",
    placeholder: {
      color: "var(--Neutral100)",
    },
  },
  checkbox: {
    color: "var(--Light100)",
  },
}